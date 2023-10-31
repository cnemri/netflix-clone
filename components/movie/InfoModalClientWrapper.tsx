"use client";
import useInfoModal from "@/hooks/useInfoModal";
import React from "react";
import InfoModal from "./InfoModal";

type Props = {};

const InfoModalClientWrapper = (props: Props) => {
  const { isOpen, closeModal } = useInfoModal();
  return <InfoModal visible={isOpen} onClose={closeModal} />;
};

export default InfoModalClientWrapper;
