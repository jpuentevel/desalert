import Link from "next/link"
import React, { useState } from "react"

const FormRegistroAuxiliar = () => {
  const [AuxiliarNombre, setAuxiliarNombre] = useState("")
  const [AuxiliarID, setAuxiliarID] = useState("")
  const [AuxiliarEmail, setAuxiliarEmail] = useState("")
  const [AuxiliarTelefono, setAuxiliarTelefono] = useState("")
  const [AuxiliarDireccion, setAuxiliarDireccion] = useState("")
  const [AuxiliarPassword, setAuxiliarPassword] = useState("")
  const [AuxiliarGenero, setAuxiliarGenero] = useState("")
  const [AuxiliarFechaNacimiento, setAuxiliarFechaNacimiento] = useState("")

  const handleSubmitAuxiliar = async (e) => {
    e.preventDefault();
    const urlAuxiliar="";
    const dataAuxiliar = {}

    await fetch(urlAuxiliar, {
        method: "POST",
        body: JSON.stringify(dataAuxiliar),
        headers: {
          "Accept": "application.json",
          "Content-Type": "application/json"
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
              value={AuxiliarNombre}
              onChange={(e) => {setAuxiliarNombre(e.target.value)}}
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
              value={AuxiliarID}
              onChange={(e) => {setAuxiliarID(e.target.value)}}
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
              value={AuxiliarEmail}
              onChange={(e) => {setAuxiliarEmail(e.target.value)}}
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
              value={AuxiliarTelefono}
              onChange={(e) => {setAuxiliarTelefono(e.target.value)}}
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
              value={AuxiliarDireccion}
              onChange={(e) => {setAuxiliarDireccion(e.target.value)}}
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
              value={AuxiliarPassword}
              onChange={(e) => {setAuxiliarPassword(e.target.value)}}
            />
          </div>
          <div className="input-group mb-3 padding-genero">
            <label
              className="input-group-text text fs-4"
              htmlFor="inputRegistroAuxiliarGenero"
            >
              Género
            </label>
            <select className="form-select" id="inputRegistroAuxiliarGenero" value={AuxiliarGenero} onChange={(e) => {setAuxiliarGenero(e.target.value)}}>
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
              value={AuxiliarFechaNacimiento}
              onChange={(e) => {setAuxiliarFechaNacimiento(e.target.value)}}
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
  )
}

export default FormRegistroAuxiliar
