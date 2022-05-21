import Link from "next/link";
import React from "react";

const FormRegistroMedico = () => {

  const [MedicoNombre, setMedicoNombre] = useState("");
  const [MedicoID, setMedicoID] = useState("");
  const [MedicoEmail, setMedicoEmail] = useState("");
  const [MedicoTelefono, setMedicoTelefono] = useState("");
  const [MedicoDireccion, setMedicoDireccion] = useState("");
  const [MedicoPassword, setMedicoPassword] = useState("");
  const [MedicoGenero, setMedicoGenero] = useState("");
  const [MedicoFechaNacimiento, setMedicoFechaNacimiento] = useState("");
  const [MedicoEspecialidad, setMedicoEspecialidad] = useState("");

  const handleSubmitMedico = e => {
    e.preventDefault();
    const urlMedico="";
    const dataMedico = {}

    await fetch(urlMedico, {
        method: "POST",
        body: JSON.stringify(dataMedico),
        headers: {
          "Accept": "application.json",
          "Contente-Type": "application/json"
        }
      }).then(res => res.json())
      .catch(error => console.error("Error: ", error))
      .then(response => console.log("Succes: ", response));
  
      const urlUsuario = ""
      const dataUsuario = {}
  }

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
              value={MedicoNombre}
              onChange={(e) => {setMedicoNombre(e.target.value)}}
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
              value={MedicoID}
              onChange={(e) => {setMedicoID(e.target.value)}}
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
              value={MedicoEmail}
              onChange={(e) => {setMedicoEmail(e.target.value)}}
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
              value={MedicoTelefono}
              onChange={(e) => {setMedicoTelefono(e.target.value)}}
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
              value={MedicoDireccion}
              onChange={(e) => {setMedicoDireccion(e.target.value)}}
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
              value={MedicoEspecialidad}
              onChange={(e) => {setMedicoEspecialidad(e.target.value)}}
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
              value={MedicoPassword}
              onChange={(e) => {setMedicoPassword(e.target.value)}}
            />
          </div>
          <div className="input-group mb-3 padding-genero">
            <label
              className="input-group-text text fs-4"
              htmlFor="inputRegistroMedicoGenero"
            >
              Género
            </label>
            <select className="form-select" id="inputRegistroMedicoGenero" value={MedicoGenero} onChange={(e) => {setMedicoGenero(e.target.value)}}>
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
              min="1900-01-01"
              max={fechaHoy}
              value={MedicoFechaNacimiento}
              onChange={(e) => {setMedicoFechaNacimiento(e.target.value)}}
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
