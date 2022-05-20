import React from "react";
import HomeAcudiente from "./homeAcudiente/HomeAcudiente";
import HomeAuxiliar from "./homeAuxiliar/HomeAuxiliar";
import HomeMedico from "./homeMedico/HomeMedico";

const HomeRender = () => {

  const { rol } = useRol();

  if (rol.localeCompare("acudiente")) {
    return (
      <>
        <HomeAcudiente />
      </>
    );
  } else if (rol.localeCompare("auxiliar")) {
    return (
      <>
        <HomeAuxiliar />
      </>
    );
  } else if (rol.localeCompare("medico")) {
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
