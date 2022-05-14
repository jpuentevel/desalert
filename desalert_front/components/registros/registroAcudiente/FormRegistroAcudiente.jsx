import Link from "next/link";
import React from "react";

const FormRegistroAcudiente = () => {
  return (
    <>
      <form className="row">
        <div className="col col-lg-6 col-sm-12">
          <div className="mb-3">
            <label
              htmlFor="inputRegistroAcudienteNombre"
              className="form-label text fs-4"
            >
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="inputRegistroAcudienteNombre"
              name="inputRegistroAcudienteNombre"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputAcudienteRegistroID"
              className="form-label text fs-4"
            >
              Cédula de Ciudadanía
            </label>
            <input
              type="number"
              className="form-control"
              id="inputAcudienteRegistroID"
              name="inputAcudienteRegistroID"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputRegistroAcudienteEmail"
              className="form-label text fs-4"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputRegistroAcudienteEmail"
              name="inputRegistroAcudienteEmail"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputRegistroAcudienteTelefono"
              className="form-label text fs-4"
            >
              Número de teléfono
            </label>
            <input
              type="number"
              className="form-control"
              id="inputRegistroAcudienteTelefono"
              name="inputRegistroAcudienteTelefono"
            />
          </div>
        </div>

        <div className="col col-lg-6 col-sm-12">
          <div className="mb-3">
            <label
              htmlFor="inputRegistroAcudienteDireccion"
              className="form-label text fs-4"
            >
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="inputRegistroAcudienteDireccion"
              name="inputRegistroAcudienteDireccion"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputRegistroAcudientePassword"
              className="form-label text fs-4"
            >
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="inputRegistroAcudientePassword"
              name="inputRegistroAcudientePassword"
            />
          </div>
          <div className="input-group mb-3 padding-genero">
            <label
              className="input-group-text text fs-4"
              htmlFor="inputRegistroAcudienteGenero"
            >
              Género
            </label>
            <select className="form-select" id="inputRegistroAcudienteGenero">
              <option className="text fs-4" value="otro">
                Otro
              </option>
              <option className="text fs-4" value="masculino">
                Masculino
              </option>
              <option className="text fs-4" value="femenino">
                Femenino
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputRegistroAcudienteFechaNacimiento"
              className="form-label text fs-4"
            >
              Fecha de nacimiento
            </label>
            <input
              type="date"
              className="form-control fs-4"
              id="inputRegistroAcudienteFechaNacimiento"
              name="inputRegistroAcudienteFechaNacimiento"
            />
          </div>
        </div>

        <Link href="/home" passHref>
          <button type="submit" className="btn boton-login mt-3 text fs-5">
            Registrarse
          </button>
        </Link>
      </form>
    </>
  );
};

export default FormRegistroAcudiente;
