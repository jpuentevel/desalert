import React, { useContext, useEffect } from "react";
import RegistroAcudiente from "./registroAcudiente/RegistroAcudiente";
import RegistroAuxiliar from "./registroAuxiliar/RegistroAuxiliar";
import RegistroMedico from "./registroMedico/RegistroMedico";
import useRol from "components/utilidades/hooks/useRol";

const RegistrosRender = () => {

  const { rol } = useRol();

  if (rol.localeCompare("acudiente")) {
    return (
      <>
        <RegistroAcudiente />
      </>
    );
  } else if (rol.localeCompare("auxiliar")) {
    return (
      <>
        <RegistroAuxiliar />
      </>
    );
  } else if (rol.localeCompare("medico")) {
    return (
      <>
        <RegistroMedico />
      </>
    );
  } else {
    return (
      <>
        <div>
          <p className="text fs-1">Error {rol}</p>
        </div>
      </>
    );
  }
};

export default RegistrosRender;
