import React from "react";
import { decision } from "../presentation/CardOpcion";
import HomeAcudiente from "./homeAcudiente/HomeAcudiente";
import HomeAuxiliar from "./homeAuxiliar/HomeAuxiliar";
import HomeMedico from "./homeMedico/HomeMedico";

const HomeRender = () => {
  if (decision.o === "acudiente") {
    return (
      <>
        <HomeAcudiente />
      </>
    );
  } else if (decision.o === "auxiliar") {
    return (
      <>
        <HomeAuxiliar />
      </>
    );
  } else if (decision.o === "medico") {
    return (
      <>
        <HomeMedico />
      </>
    );
  } else {
    return (
      <>
        <div>
          <p className="text fs-1">ERROR</p>
        </div>
      </>
    );
  }
};

export default HomeRender;
