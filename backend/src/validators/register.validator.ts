import Joi from "joi";
import { RegisterBody } from "../utils/types";

const loginBodySchema = Joi.object<RegisterBody>({
  id: Joi.string().required().trim(),
  lastName: Joi.string().trim().required(),
  firstName: Joi.string().trim().required(),
  email: Joi.string().email().trim().required(),
  role: Joi.string().trim().required(),
});

async function validate<T>(
  body: T,
  schema: Joi.ObjectSchema<T>
): Promise<boolean | unknown> {
  try {
    await schema.validateAsync(body);

    return true;
  } catch (error) {
    console.log(typeof error);
    return error;
  }
}

export { loginBodySchema, validate };
