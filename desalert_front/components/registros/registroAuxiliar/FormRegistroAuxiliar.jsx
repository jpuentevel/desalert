import Link from "next/link";
import React from "react";

const FormRegistroAuxiliar = () => {
  return (
    <>
      <form className="row">
        <div className="col col-lg-6 col-sm-12">
          <div className="mb-3">
            <label
              htmlFor="inputRegistroAuxiliarNombre"
              className="form-label text fs-4"
            >
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="inputRegistroAuxiliarNombre"
              name="inputRegistroAuxiliarNombre"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputAuxiliarRegistroID"
              className="form-label text fs-4"
            >
              Cédula de Ciudadanía
            </label>
            <input
              type="number"
              className="form-control"
              id="inputAuxiliarRegistroID"
              name="inputAuxiliarRegistroID"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputRegistroAuxiliarEmail"
              className="form-label text fs-4"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputRegistroAuxiliarEmail"
              name="inputRegistroAuxiliarEmail"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputRegistroAuxiliarTelefono"
              className="form-label text fs-4"
            >
              Número de teléfono
            </label>
            <input
              type="number"
              className="form-control"
              id="inputRegistroAuxiliarTelefono"
              name="inputRegistroAuxiliarTelefono"
            />
          </div>
        </div>

        <div className="col col-lg-6 col-sm-12">
          <div className="mb-3">
            <label
              htmlFor="inputRegistroAuxiliarDireccion"
              className="form-label text fs-4"
            >
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="inputRegistroAuxiliarDireccion"
              name="inputRegistroAuxiliarDireccion"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputRegistroAuxiliarPassword"
              className="form-label text fs-4"
            >
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="inputRegistroAuxiliarPassword"
              name="inputRegistroAuxiliarPassword"
            />
          </div>
          <div className="input-group mb-3 padding-genero">
            <label
              className="input-group-text text fs-4"
              htmlFor="inputRegistroAuxiliarGenero"
            >
              Género
            </label>
            <select className="form-select" id="inputRegistroAuxiliarGenero">
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
              htmlFor="inputRegistroAuxiliarFechaNacimiento"
              className="form-label text fs-4"
            >
              Fecha de nacimiento
            </label>
            <input
              type="date"
              className="form-control fs-4"
              id="inputRegistroAuxiliarFechaNacimiento"
              name="inputRegistroAuxiliarFechaNacimiento"
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

export default FormRegistroAuxiliar;
