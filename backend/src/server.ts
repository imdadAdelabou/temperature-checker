import express, { ErrorRequestHandler } from 'express';
import authRouter from './routes/auth.route';

const app = express();


const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use("/auth", authRouter);

//Error Handling
app.use((err, req, res, next) => {
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

//Install morgan and bordyParser