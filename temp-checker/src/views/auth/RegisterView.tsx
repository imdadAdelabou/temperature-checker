import { motion } from "framer-motion";
import CustomBtn from "../../components/CustomBtn";
import CustomInput from "../../components/CustomInput";
import {
  APP_CONTENTS,
  containerAnimation,
  itemAnimation,
} from "../../utils/constant";
import LogoCmp from "../../components/LogoCmp";
// import { useNavigate } from "react-router-dom";
import InfoUserAuth from "../../components/InfoUserAuth";
import { useFormik } from "formik";
import * as Yup from "yup";
import ShowErrors from "../../components/ShowErrors";
import { useState } from "react";
import { SignUpBodyReqType } from "../../utils/types";

const RegisterView: React.FC = () => {
  // const navigate = useNavigate();
  const [loadingRequest, setLoadingRequest] = useState(true);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      signUp(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().min(2).required(),
      lastName: Yup.string().min(2).required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    }),
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formik.handleSubmit(event);
  };

  async function signUp(data: SignUpBodyReqType) {

  }

  return (
    <motion.div variants={containerAnimation} initial="hidden" animate="show">
      <LogoCmp />
      <div className="font-poppins w-[100vw] h-[60vh] flex justify-center items-center">
        <motion.div variants={itemAnimation} className="">
          <h1 className="font-bold text-[24px]">
            {APP_CONTENTS.registerLabel}
          </h1>
          <form onSubmit={onSubmit}>
            <div className="mt-6"></div>
            {Object.keys(formik.errors).map((error) =>
              formik.touched && formik.errors[error] ? (
                <ShowErrors errors={formik.errors[error]} />
              ) : null
            )}
            <div className="mb-4"></div>
            <div className="flex gap-4">
              <CustomInput
                placeholder={APP_CONTENTS.firstNameLabel}
                type="text"
                id="firstName"
                {...formik.getFieldProps("firstName")}
                haveError={
                  formik.touched && formik.errors.firstName ? true : false
                }
              />

              <CustomInput
                placeholder={APP_CONTENTS.lastNameLabel}
                type="text"
                id="lastName"
                {...formik.getFieldProps("lastName")}
                haveError={
                  formik.touched && formik.errors.lastName ? true : false
                }
              />
            </div>
            <CustomInput
              placeholder="Email"
              type="email"
              id="email"
              {...formik.getFieldProps("email")}
              haveError={formik.touched && formik.errors.email ? true : false}
            />
            <CustomInput
              placeholder="Mot de passe"
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
              haveError={
                formik.touched && formik.errors.password ? true : false
              }
            />
            <CustomBtn
              content={APP_CONTENTS.onRegister}
              type="submit"
              isLoading={loadingRequest}
              disable={loadingRequest}
              customBgColor={loadingRequest ? "bg-[#DCDCDC]" : ""}
            />
            <InfoUserAuth
              firstLabel={APP_CONTENTS.alreadyHaveAnAccount}
              secondLabel={APP_CONTENTS.logYou}
              path="/login"
            />
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RegisterView;
