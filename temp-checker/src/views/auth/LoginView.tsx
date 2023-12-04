import { motion } from "framer-motion";
import CustomBtn from "../../components/CustomBtn";
import CustomInput from "../../components/CustomInput";
import {
  APP_CONTENTS,
  containerAnimation,
  itemAnimation,
} from "../../utils/constant";
import React from "react";
import LogoCmp from "../../components/LogoCmp";
import InfoUserAuth from "../../components/InfoUserAuth";
import { useFormik } from "formik";
import * as Yup from "yup";
import ShowErrors from "../../components/ShowErrors";
import { useDispatch, useSelector } from "react-redux";
import { loginAuth } from "../../features/auth.slice";
import { LoginDataBodyType, RootState } from "../../utils/types";
import { AppDispatch } from "../../store";

const LoginView: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isLoading: boolean = useSelector(
    (state: RootState) => state.auth.isLoading
  );
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values: LoginDataBodyType) => {
      dispatch(loginAuth(values));
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    }),
  });

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formik.handleSubmit(event);
  };

  return (
    <motion.div
      variants={containerAnimation}
      initial="hidden"
      animate="show"
      className=""
    >
      <LogoCmp />
      <div className="font-poppins w-[100vw] p-4 md:p-0">
        <motion.div
          variants={itemAnimation}
          className="flex justify-center items-center"
        >
          <form onSubmit={onSubmitHandler} className="md:w-[25%] mt-9">
            <h2 className="font-bold text-[24px] mb-4">
              {APP_CONTENTS.welcomeBack}
            </h2>

            <ShowErrors errors={formik.errors.email} />
            <ShowErrors errors={formik.errors.password} />
            <div className="mb-4"></div>
            <label className="font-semibold" htmlFor="email">
              {APP_CONTENTS.emailLabel}
            </label>
            <CustomInput
              placeholder="johndoe@gmail.com"
              type="text"
              id="email"
              haveAnError={formik.touched && formik.errors.email ? true : false}
              {...formik.getFieldProps("email")}
            />
            <label htmlFor="password" className="font-semibold">
              {APP_CONTENTS.passwordLabel}
            </label>
            <CustomInput
              placeholder="password"
              type="password"
              id="password"
              haveAnError={
                formik.touched && formik.errors.password ? true : false
              }
              {...formik.getFieldProps("password")}
            />
            <CustomBtn
              content={APP_CONTENTS.login}
              type="submit"
              disable={isLoading}
              isLoading={isLoading}
            />
            <InfoUserAuth
              firstLabel={APP_CONTENTS.newUserRegister}
              secondLabel={APP_CONTENTS.registerYou}
              path="/register"
            />
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoginView;
