import React, { useEffect } from "react";
import RegistroAcudiente from "./registroAcudiente/RegistroAcudiente";
import RegistroAuxiliar from "./registroAuxiliar/RegistroAuxiliar";
import RegistroMedico from "./registroMedico/RegistroMedico";
import { decisionContext } from "components/presentation/CardOpcion";

const RegistrosRender = () => {

  const { decision } = useContext(decisionContext);

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
          <p className="text fs-1">ERROR</p>
        </div>
      </>
    );
  }
};

export default RegistrosRender;
