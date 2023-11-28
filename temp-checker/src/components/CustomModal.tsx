import React from "react";
import Modal from "react-modal";
import { CustomModalType } from "../utils/types";
import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "../utils/constant";

const customStyle = {
  content: {
    width: "30%",
    height: "50%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

const CustomModal: React.FC<CustomModalType> = ({
  isOpen,
  onRequestClose,
  contentLabel,
  children,
}) => {
  return (
    <motion.div variants={containerAnimation} initial="hidden" animate="show">
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel={contentLabel}
        style={customStyle}
        shouldCloseOnOverlayClick={true}
      >
        <motion.div variants={itemAnimation}>{children}</motion.div>
      </Modal>
    </motion.div>
  );
};

export default CustomModal;
