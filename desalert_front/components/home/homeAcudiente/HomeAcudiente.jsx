import React from "react";
import HeaderHome from "../HeaderHome";
import BodyHomeAcudiente from "./BodyHomeAcudiente";

const HomeAcudiente = () => {
  return (
    <>
      <div>
        <HeaderHome />
        <div className="degradado-azul-blanco"></div>
        <BodyHomeAcudiente />
      </div>
    </>
  );
};

export default HomeAcudiente;
