import { Request, Response } from "express";
import { loginBodySchema, validate } from "../validators/register.validator";
import { RegisterBody, User } from "../utils/types";
import { HTTP_ERRORS } from "../utils/constant";
import { client } from "../configs/mongodb";

const users = client.db(process.env.DB_NAME).collection("users");

const login = async (req: Request, res: Response) => {
  try {
    const email = req.params["email"];
    await client.connect();
    const user = await users.findOne({ email });
    if (!user) return res.status(404).json({ message: HTTP_ERRORS.notFound });
    console.log(user);

    return res.status(200).json({ data: { user } });
  } catch (error) {
    await client.close();
    
    return res
      .status(500)
      .json({ message: HTTP_ERRORS.internalServerError, error: error });
  }
};

const register = async (req: Request, res: Response, next: () => void) => {
  try {
    const isValidBody = await validate<RegisterBody>(req.body, loginBodySchema);
    console.log(isValidBody);
    if (typeof isValidBody != "boolean")
      return res
        .status(401)
        .json({ message: "Bad request", error: isValidBody });

    const data: User = {
      ...req.body,
      receiveEmail: false,
      fcmToken: null,
      notifs: [],
      limits: [],
      valuesEngine: null,
      engineId: null,
    };

    await client.connect();
    await users.insertOne(data);
    return res.status(201).json({ message: "User created" });
  } catch (error) {
    console.log(error);
    await client.close();
    return res
      .status(500)
      .json({ message: HTTP_ERRORS.internalServerError, error: error });
  }
};

export { login, register };
