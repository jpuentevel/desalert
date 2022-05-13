import Image from "next/image";
import Link from "next/link";
import React from 'react'
import FormRegistroMedico from "./FormRegistroMedico";

const RegistroMedico = () => {
  return (
    <>
        <div className="fondo-login row">
        <div className="logo-container">
          <Image src="/desalert-logo.svg" width={500} height={200}></Image>
        </div>
        <div className="row area-login">
          <div className="container-titulo-login">
            <p className="titulo-login fw-bold text">Registro del médico</p>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 imagen-login">
            <Image src="/registro-imagen.svg" width={500} height={500}></Image>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 login-form">
            <FormRegistroMedico />
          </div>
          <div className="label-login-back">
              <label className="text fs-5">¿Ya tiene una cuenta? <Link href="/login"><a>Inicie sesión</a></Link></label>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegistroMedico