import Image from "next/image";
import Link from "next/link";
import React from "react";
import FormLogin from "./FormLogin";

const Login = () => {
  return (
    <>
      <div className="fondo-login row">
        <div className="logo-container">
          <Link href="/" passHref>
            <Image src="/desalert-logo.svg" width={500} height={200}></Image>
          </Link>
        </div>
        <div className="row area-login">
          <div className="container-titulo-login">
            <p className="titulo-login fw-bold text">Inicio de Sesión</p>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 imagen-login">
            <Image src="/login-imagen.svg" width={500} height={500}></Image>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 login-form">
            <FormLogin />
          </div>
          <div className="label-login-back">
              <label className="text fs-5">¿No tiene cuenta aún? <Link href="/"><a>Regístrese</a></Link></label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
