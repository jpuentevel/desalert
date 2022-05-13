import Link from "next/link";
import React from "react";

const FormRegistroMedico = () => {
  return (
    <>
      <form className="">
        <div className="mb-3">
          <label
            htmlFor="inputRegistroMedicoNombre"
            className="form-label text fs-4"
          >
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="inputRegistroMedicoNombre"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputMedicoRegistroID" className="form-label text fs-4">
            Cédula de Ciudadanía
          </label>
          <input type="number" className="form-control" id="inputMedicoRegistroID" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputRegistroMedicoEmail" className="form-label text fs-4">
            Cédula de Ciudadanía o Email
          </label>
          <input type="email" className="form-control" id="inputRegistroMedicoEmail" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputRegistroMedicoPassword" className="form-label text fs-4">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="inputRegistroMedicoPassword"
          />
        </div>

        <button type="submit" className="btn boton-login text fs-5">
          Registrarse
        </button>
      </form>
    </>
  );
};

export default FormRegistroMedico;
