import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderHome from "../HeaderHome";
import BodyHomeMedico from "./BodyHomeMedico";

const HomeMedico = () => {
  return (
    <>
        <HeaderHome/>
        <div className="degradado-azul-blanco"></div>
        <BodyHomeMedico/>
    </>
  );
};

export default HomeMedico;
