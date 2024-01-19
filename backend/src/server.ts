import { config } from "dotenv";
config();
import express, { ErrorRequestHandler, Request, Response } from "express";
import authRouter from "./routes/auth.route";
import { json } from "body-parser";
import { ErrReq } from "./utils/types";
import { client, run } from "./configs/mongodb";
import mqtt from "mqtt";
import cors from "cors";
import userRoute from "./routes/user.route";

const app = express();

const port = 3000;

app.use(cors({ origin: "*" }));

const mqttBroker = "broker.hivemq.com";
const mqttPort = 1883;

console.log(`mqtt://${mqttBroker}:${mqttPort}`);

const mqttClient = mqtt.connect(`mqtt://${mqttBroker}:${mqttPort}`);

app.use(json());

run();

app.use((req, res, next) => {
  mqttClient.on("message", (topic, message) => {
    console.log(topic);
    console.log(message.toJSON());
  });
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/auth", authRouter);
app.use("/user", userRoute);

// //Error Handling
// app.use((err: ErrReq, req: Request, res: Response) => {
//   return res.status(err.code ?? 500).json({message: err.message});
// });

mqttClient.on("connect", () => {
  console.log("connected");
});

mqttClient.on("error", (error) => {
  console.error("Error:", error);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

//Install morgan and bordyParser
export { mqttClient };
