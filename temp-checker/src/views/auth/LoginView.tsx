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

const LoginView: React.FC = () => {
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
          <form
            onSubmit={(e) => e.preventDefault()}
            className="md:w-[25%] mt-9"
          >
            <h2 className="font-bold text-[24px] mb-4">
              {APP_CONTENTS.welcomeBack}
            </h2>
            <label className="font-semibold" htmlFor="email">
              {APP_CONTENTS.emailLabel}
            </label>
            <CustomInput
              placeholder="johndoe@gmail.com"
              type="text"
              name="email"
              id="email"
            />
            <label htmlFor="password" className="font-semibold">
              {APP_CONTENTS.passwordLabel}
            </label>
            <CustomInput
              placeholder="password"
              type="password"
              name="password"
              id="password"
            />
            <CustomBtn content={APP_CONTENTS.login} action={() => {}} />
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
