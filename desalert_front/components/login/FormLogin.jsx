import Link from "next/link";
import React from "react";

const FormLogin = () => {
  return (
    <>
      <form className="">
        <div className="mb-3">
          <label htmlFor="inputloginID" className="form-label text fs-4">
            Cédula de Ciudadanía o Email
          </label>
          <input
            type="number"
            className="form-control"
            id="inputloginID"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputLoginPassword" className="form-label text fs-4">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="inputLoginPassword"
          />
        </div>
        <div className="mb-3">
            <label className="text fs-5">¿Olvidó su contraseña? Clic <Link href="#"><a>aquí</a></Link></label>
        </div>
        <button type="submit" className="btn boton-login text fs-5">
          Iniciar Sesión
        </button>
      </form>
    </>
  );
};

export default FormLogin;
