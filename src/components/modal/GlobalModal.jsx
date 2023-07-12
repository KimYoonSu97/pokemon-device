import React from "react";
import DetailModal from "./DetailModal";
import CatchModal from "./CatchModal";
import { useSelector } from "react-redux";
import { selectModal } from "../../redux/modules/modalSlice";
import { STModalBackColor } from "./Modal.styled";

const MODAL_TYPES = {
  DetailModal: "DetailModal",
  CatchModal: "CatchModal",
};

const MODAL_COMPONENTS = [
  {
    type: MODAL_TYPES.CatchModal,
    component: <CatchModal />,
  },
  {
    type: MODAL_TYPES.DetailModal,
    component: <DetailModal />,
  },
];

const GlobalModal = () => {
  const { modalType, isOpen } = useSelector(selectModal);

  if (!isOpen) return;

  const findModal = MODAL_COMPONENTS.find((modal) => {
    return modal.type === modalType;
  });

  const renderModal = () => {
    return findModal.component;
  };

  return <>{renderModal()}</>;
};

export default GlobalModal;
