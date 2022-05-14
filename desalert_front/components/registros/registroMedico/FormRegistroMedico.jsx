import Link from "next/link";
import React from "react";

const FormRegistroMedico = () => {
  let hoy = new Date();
  let fechaHoy =
    hoy.getFullYear() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getDate();

  return (
    <>
      <form className="row">
        <div className="col col-lg-6 col-sm-12">
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
              name="inputRegistroMedicoNombre"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputMedicoRegistroID"
              className="form-label text fs-4"
            >
              Cédula de Ciudadanía
            </label>
            <input
              type="number"
              className="form-control"
              id="inputMedicoRegistroID"
              name="inputMedicoRegistroID"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputRegistroMedicoEmail"
              className="form-label text fs-4"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputRegistroMedicoEmail"
              name="inputRegistroMedicoEmail"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputRegistroMedicoTelefono"
              className="form-label text fs-4"
            >
              Número de teléfono
            </label>
            <input
              type="number"
              className="form-control"
              id="inputRegistroMedicoTelefono"
              name="inputRegistroMedicoTelefono"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputRegistroMedicoDireccion"
              className="form-label text fs-4"
            >
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="inputRegistroMedicoDireccion"
              name="inputRegistroMedicoDireccion"
            />
          </div>
        </div>

        <div className="col col-lg-6 col-sm-12">
          <div className="mb-3">
            <label
              htmlFor="inputRegistroMedicoEspecialidad"
              className="form-label text fs-4"
            >
              Especialidad
            </label>
            <input
              type="text"
              className="form-control"
              id="inputRegistroMedicoEspecialidad"
              name="inputRegistroMedicoEspecialidad"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputRegistroMedicoPassword"
              className="form-label text fs-4"
            >
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="inputRegistroMedicoPassword"
              name="inputRegistroMedicoPassword"
            />
          </div>
          <div className="input-group mb-3 padding-genero">
            <label
              className="input-group-text text fs-4"
              htmlFor="inputRegistroMedicoGenero"
            >
              Género
            </label>
            <select className="form-select" id="inputRegistroMedicoGenero">
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
              htmlFor="inputRegistroMedicoFechaNacimiento"
              className="form-label text fs-4"
            >
              Fecha de nacimiento
            </label>
            <input
              type="date"
              className="form-control fs-4"
              id="inputRegistroMedicoFechaNacimiento"
              name="inputRegistroMedicoFechaNacimiento"
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

export default FormRegistroMedico;
