import React, { useEffect } from "react";
import { APP_CONTENTS } from "../../../utils/constant";
import KitStatus from "../../../components/KitStatus";
import { RootState, StatusKit } from "../../../utils/types";
import EmptyAlerte from "../../../components/EmptyAlerte";
import { editIcon } from "../../../assets";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "../../../components/CustomModal";
import CustomInput from "../../../components/CustomInput";
import CustomBtn from "../../../components/CustomBtn";
import {
  getOtherUserData,
  updateEngineId,
} from "../../../features/otherUserData.slice";
import { openToast } from "../../../utils";
import { AppDispatch } from "../../../store";

const Setting: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const engineId = useSelector(
    (state: RootState) => state.otherUserData.otherUserData?.engineId
  );
  const email = useSelector((state: RootState) => state.user.user?.email);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [engineValue, setEngineValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    dispatch(getOtherUserData(email!));
  }, [dispatch, email]);

  async function handleClick() {
    setIsLoading(() => true);

    const result = await updateEngineId(email!, engineValue);
    setIsLoading(() => false);
    setModalIsOpen(() => false);
    //Show alert success
    if (result) openToast(APP_CONTENTS.success, "success");
    dispatch(getOtherUserData(email!));
  }

  return (
    <div className="font-poppins p-[57px]">
      <div className="flex gap-[20px]">
        <h3 className="font-bold text-[20px]">{APP_CONTENTS.engineId}</h3>
        <img
          src={editIcon}
          alt="edit-icon"
          onClick={() => setModalIsOpen(() => true)}
          className="w-[30px] h-[30px] cursor-pointer"
        />
      </div>
      <p className="text-[#D0D0D0]">
        {!engineId ? APP_CONTENTS.notDefined : engineId}
      </p>
      <h3 className="font-bold text-[20px] mt-[20px]">
        {APP_CONTENTS.statusKit}
      </h3>
      <div className="mt-1"></div>
      <KitStatus status={StatusKit.OFF} label={APP_CONTENTS.onLabel} />
      <hr className="my-5" />
      <div className="flex justify-center items-center h-[60vh]">
        <EmptyAlerte />
      </div>

      <CustomModal
        isOpen={modalIsOpen}
        contentLabel={APP_CONTENTS.addEngineId}
        onRequestClose={() => setModalIsOpen((prevValue) => !prevValue)}
      >
        <div>
          <h1 className="font-bold text-[18px] mb-[20px]">
            {APP_CONTENTS.addEngineId}
          </h1>

          <CustomInput
            placeholder="xxxxx"
            id="engineId"
            type="text"
            name="engineId"
            value={engineValue}
            onChange={(event) => setEngineValue(() => event.target.value)}
          />
          <CustomBtn
            isLoading={isLoading}
            content={APP_CONTENTS.addLabel}
            disable={engineValue.length == 0 || isLoading}
            action={handleClick}
            customBgColor={
              engineValue.length == 0 || isLoading ? "bg-[grey]" : undefined
            }
          />
        </div>
      </CustomModal>
    </div>
  );
};

export default Setting;
