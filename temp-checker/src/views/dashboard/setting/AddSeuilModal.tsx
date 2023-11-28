import React, { useState } from "react";
import CustomModal from "../../../components/CustomModal";
import { APP_CONTENTS } from "../../../utils/constant";
import { AddSeuilModalType, TypeSelectType } from "../../../utils/types";
import CustomInput from "../../../components/CustomInput";
import CustomBtn from "../../../components/CustomBtn";

const typesToSelectFr: TypeSelectType[] = [
  { value: "temperature", label: "la température" },
  { value: "humidity", label: "l'humidité" },
];
const comparaisonsTypeFr: TypeSelectType[] = [
  { value: "greater", label: "supérieur" },
  { value: "inferior", label: "inférieur" },
  { value: "between", label: "compris" },
];

const AddSeuilModal: React.FC<AddSeuilModalType> = ({
  isOpen,
  onRequestClose,
}) => {
  const [typeOfComparaison, setTypeOfComparaison] = useState(
    comparaisonsTypeFr[0].value
  );
  const setLimitValue = (
    <div>
      <p className="font-semibold my-2">{APP_CONTENTS.aLabel}</p>
      <CustomInput type="number" />
    </div>
  );
  const setBetweenValue = (
    <div>
      <p className="font-semibold my-2">{APP_CONTENTS.betweenWord}</p>
      <div className="flex items-center gap-4">
        <CustomInput type="number" placeholder={APP_CONTENTS.beginLabel} />
        <h3>{APP_CONTENTS.andLabel}</h3>
        <CustomInput type="number" placeholder={APP_CONTENTS.endLabel} />
      </div>
    </div>
  );

  return (
    <CustomModal
      isOpen={isOpen}
      contentLabel={APP_CONTENTS.addAnAlerte}
      onRequestClose={onRequestClose}
    >
      <>
        <div className="mb-7">
          <p className="font-semibold mb-2">
            {APP_CONTENTS.beNotifyWhenTheTemp}
          </p>
          <select
            name="types"
            id="type-select"
            className="bg-[#F3F2F7] h-[30px] bg-opacity-70 outline-none rounded-md"
          >
            {typesToSelectFr.map((type, index) => (
              <option value={type.value} key={index}>
                {type.label}
              </option>
            ))}
          </select>
          <p className="font-semibold my-2">{APP_CONTENTS.whenLabel}</p>
          <select
            name="comparaisons"
            id="comparaison-select"
            className="bg-[#F3F2F7] h-[30px] bg-opacity-70 outline-none rounded-md mb-1"
            onChange={(value) => {
              setTypeOfComparaison(() => value.target.value);
            }}
          >
            {comparaisonsTypeFr.map((type, index) => (
              <option value={type.value} key={index}>
                {type.label}
              </option>
            ))}
          </select>
          {typeOfComparaison === "greater" || typeOfComparaison === "inferior"
            ? setLimitValue
            : null}
          {typeOfComparaison === "between" ? setBetweenValue : null}
        </div>
        <CustomBtn
          content={APP_CONTENTS.addLabel}
          action={() => {}}
          isLoading={false}
        />
      </>
    </CustomModal>
  );
};

export default AddSeuilModal;
