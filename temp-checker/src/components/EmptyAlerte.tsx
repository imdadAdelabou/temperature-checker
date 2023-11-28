import React, { useState } from "react";
import { emptyAlerteImage } from "../assets";
import { APP_CONTENTS } from "../utils/constant";
import CustomBtn from "./CustomBtn";
import AddSeuilModal from "../views/dashboard/setting/AddSeuilModal";

const EmptyAlerte: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="md:w-[40%]">
      <img
        className="w-[400px]"
        src={emptyAlerteImage}
        alt={APP_CONTENTS.tagEmptyAlerteIcon}
      />
      <h3 className="mb-4 text-[grey] text-[20px] font-semibold text-center">
        {APP_CONTENTS.noAlerteDefined}
      </h3>
      <CustomBtn
        content={APP_CONTENTS.addAnAlerte}
        action={() => {
          setIsModalOpen(() => true);
        }}
        isLoading={false}
      />

      <AddSeuilModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(() => false)}
      />
    </div>
  );
};

export default EmptyAlerte;
