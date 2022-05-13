import React from "react";
import RegistroAcudiente from "./registroAcudiente/RegistroAcudiente";
import RegistroAuxiliar from "./registroAuxiliar/RegistroAuxiliar";
import RegistroMedico from "./registroMedico/RegistroMedico";

import { decision } from "../presentation/CardOpcion";


const RegistrosRender = () => {


  if (decision.o === "acudiente") {
    return (
      <>
        <RegistroAcudiente />
      </>
    );
  } else if (decision.o === "auxiliar") {
    return (
      <>
        <RegistroAuxiliar />
      </>
    );
  } else if (decision.o === "medico") {
    return (
      <>
        <RegistroMedico />
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

export default RegistrosRender;
