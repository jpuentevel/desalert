import React, { useContext, useEffect } from "react";
import RegistroAcudiente from "./registroAcudiente/RegistroAcudiente";
import RegistroAuxiliar from "./registroAuxiliar/RegistroAuxiliar";
import RegistroMedico from "./registroMedico/RegistroMedico";
import { rolContext, rolContextProvider } from "../utilidades/contexts/Rol/rolContext"

const RegistrosRender = () => {

    const decision = useContext(rolContext)

  if (decision === "acudiente") {
    return (
      <>
        <RegistroAcudiente />
      </>
    );
  } else if (decision === "auxiliar") {
    return (
      <>
        <RegistroAuxiliar />
      </>
    );
  } else if (decision === "medico") {
    return (
      <>
        <RegistroMedico />
      </>
    );
  } else {
    return (
      <>
        <div>
          <p className="text fs-1">{decision}</p>
        </div>
      </>
    );
  }
};

export default RegistrosRender;
