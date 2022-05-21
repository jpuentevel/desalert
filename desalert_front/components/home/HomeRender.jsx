import React from "react";
import HomeAcudiente from "./homeAcudiente/HomeAcudiente";
import HomeAuxiliar from "./homeAuxiliar/HomeAuxiliar";
import HomeMedico from "./homeMedico/HomeMedico";

const HomeRender = () => {

    let rol = "auxiliar";

  if (rol=="acudiente") {
    return (
      <>
        <HomeAcudiente />
      </>
    );
  } else if (rol=="auxiliar") {
    return (
      <>
        <HomeAuxiliar />
      </>
    );
  } else if (rol=="medico") {
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
