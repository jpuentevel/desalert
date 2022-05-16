import Image from "next/image";
import React from "react";

const HeaderHome = () => {
  return (
    <>
      <div
        className="container fondo-header-opciones"
        style={{ height: "20rem" }}
      >
        <div className="logo-container">
          <Image src="/desalert-logo.svg" width={400} height={160}></Image>
        </div>

        <div
          className="m-3 texto-header-containe"
          style={{ max_width: "50rem" }}
        >
          <p className="texto-header text fw-bold">Bienvenido, Juan Pérez</p>
        </div>
      </div>
    </>
  );
};

export default HeaderHome;
