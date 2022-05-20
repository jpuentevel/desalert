import Link from "next/link";
import React from "react";

const FormRegistroInfante = () => {



  return (
    <>
      <form className="row">
        <div className="col col-lg-6 col-sm-12">
          <div className="mb-3">
            <label
              htmlFor="inputRegistroInfanteImagen"
              className="form-label text fs-4">
              Imagen
            </label>
            <input
              type="image"
              className="form-control"
              id="inputRegistroInfanteImagen"
              name="inputRegistroInfanteImagen"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputRegistroInfanteNombre"
              className="form-label text fs-4"
            >
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="inputRegistroInfanteNombre"
              name="inputRegistroInfanteNombre"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputInfanteRegistroID"
              className="form-label text fs-4"
            >
              Documento del infante
            </label>
            <input
              type="number"
              className="form-control"
              id="inputInfanteRegistroID"
              name="inputInfanteRegistroID"
            />
          </div>
        </div>

        <div className="col col-lg-6 col-sm-12">
          <div className="mb-3">
            <label
              htmlFor="inputRegistroInfanteDireccion"
              className="form-label text fs-4"
            >
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="inputRegistroInfanteDireccion"
              name="inputRegistroInfanteDireccion"
            />
          </div>
          <div className="input-group mb-3 padding-genero">
            <label
              className="input-group-text text fs-4"
              htmlFor="inputRegistroInfanteGenero"
            >
              Género
            </label>
            <select className="form-select" id="inputRegistroInfanteGenero">
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
              htmlFor="inputRegistroInfanteFechaNacimiento"
              className="form-label text fs-4"
            >
              Fecha de nacimiento
            </label>
            <input
              type="date"
              className="form-control fs-4"
              id="inputRegistroInfanteFechaNacimiento"
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

export default FormRegistroInfante;
