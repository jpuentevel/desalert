import Image from "next/image";
import Link from "next/link";
import React from "react";
import FormRegistroAuxiliar from "./FormRegistroAuxiliar";

const RegistroAuxiliar = () => {
  return (
    <>
      <div className="fondo-login row">
        <div className="logo-container">
          <Link href="/" passHref>
            <Image src="/desalert-logo.svg" width={500} height={200}></Image>
          </Link>
        </div>
        <div className="area-registro-medico">
          <div className="container-titulo-login">
            <p className="titulo-login fw-bold text">Registro del auxiliar</p>
          </div>
          <div className="login-form">
            <FormRegistroAuxiliar />
          </div>
          <div className="label-registro-medico-back">
            <label className="text fs-5">
              ¿Ya tiene una cuenta?{" "}
              <Link href="/login">
                <a>Inicie sesión</a>
              </Link>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistroAuxiliar;
