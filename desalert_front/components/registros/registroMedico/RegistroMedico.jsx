import Image from "next/image";
import Link from "next/link";
import React from "react";
import FormRegistroMedico from "./FormRegistroMedico";

const RegistroMedico = () => {
  return (
    <>
      <div className="fondo-login row">
        <div className="logo-container">
          <Image src="/desalert-logo.svg" width={500} height={200}></Image>
        </div>
        <div className="area-registro-medico">
          <div className="container-titulo-login">
            <p className="titulo-login fw-bold text">Registro del médico</p>
          </div>
          <div className="login-form">
            <FormRegistroMedico />
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

export default RegistroMedico;
