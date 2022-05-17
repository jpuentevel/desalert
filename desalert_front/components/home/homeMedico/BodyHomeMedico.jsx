import React from "react";
import ContenedorInfantesAtendidos from "./ContenedorInfantesAtendidos";
import ContenedorInfantesNoAtendidos from "./ContenedorInfantesNoAtendidos";

const BodyHomeMedico = () => {
  return (
    <>
      <div className="body-home">
        <p className="text fs-1 fw-bold">Infantes registrados</p>
        <ContenedorInfantesAtendidos />
        <ContenedorInfantesNoAtendidos />
      </div>
    </>
  );
};

export default BodyHomeMedico;
