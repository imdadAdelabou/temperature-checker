import { Request, Response } from "express";
import { HTTP_ERRORS } from "../utils/constant";
import { client } from "../configs/mongodb";
import { mqttClient } from "../server";
const users = client.db(process.env.DB_NAME).collection("users");

const updateUserController = async (req: Request, res: Response) => {
  try {
    await client.connect();

    await users.updateOne({ email: req.params.email }, { $set: req.body });
    return res.status(200).json({ message: "Update" });
  } catch (e) {
    await client.close();
    return res.status(500).json({ message: HTTP_ERRORS.internalServerError });
  }
};

const updateEngineId = async (req: Request, res: Response) => {
  try {
    await client.connect();

    await users.updateOne(
      { email: req.params.email },
      { $set: { engineId: req.body["engineId"] } }
    );
    mqttClient.subscribe("tempAndHumdNotif/" + req.body["engineId"]);
    return res.status(200).json({ message: "Update" });
  } catch (e) {
    await client.close();
    return res.status(500).json({ message: HTTP_ERRORS.internalServerError });
  }
};

export { updateUserController, updateEngineId };
