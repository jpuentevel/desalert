import React, { useState } from "react"
import FormRegistroUsuario from "../FormRegistroUsuario"

const FormRegistroAcudiente = () => {
  const [AcudienteNombre, setAcudienteNombre] = useState("")
  const [AcudienteID, setAcudienteID] = useState("")
  const [AcudienteTelefono, setAcudienteTelefono] = useState("")
  const [AcudienteDireccion, setAcudienteDireccion] = useState("")
  const [AcudienteGenero, setAcudienteGenero] = useState("")
  const [AcudienteFechaNacimiento, setAcudienteFechaNacimiento] = useState("")
  const [AcudienteParentesco, setAcudienteParentesco] = useState("")

  const [visibleAcudiente, setVisibleAcudiente] = useState(true)
  const [visibleUsuario, setVisibleUsuario] = useState(false)
  const NORMAL = "row"
  const HIDDEN = NORMAL + " d-none"

  const handleSubmitAcudiente = async (e) => {
    e.preventDefault()
    const urlAcudiente = ``
    const dataAcudiente = {
      id: AcudienteID,
      nombre: AcudienteNombre,
      direccion: AcudienteDireccion,
      fechaNacimiento: AcudienteFechaNacimiento,
      sexo: AcudienteGenero,
      telefono: AcudienteTelefono,
      parentesco: AcudienteParentesco,
    }

    await fetch(urlAcudiente, {
      method: "POST",
      body: JSON.stringify(dataAcudiente),
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error: ", error))
      .then((response) => console.log("Succes: ", response))
  }

  return (
    <>
      <form className={visibleAcudiente ? NORMAL : HIDDEN}>
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
              value={AcudienteNombre}
              onChange={(e) => {
                setAcudienteNombre(e.target.value)
              }}
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
              value={AcudienteID}
              onChange={(e) => {
                setAcudienteID(e.target.value)
              }}
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
              value={AcudienteTelefono}
              onChange={(e) => {
                setAcudienteTelefono(e.target.value)
              }}
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
              value={AcudienteDireccion}
              onChange={(e) => {
                setAcudienteDireccion(e.target.value)
              }}
            />
          </div>
          <div className="input-group mb-3 padding-genero">
            <label
              className="input-group-text text fs-4"
              htmlFor="inputRegistroAcudienteGenero"
            >
              Género
            </label>
            <select
              className="form-select"
              id="inputRegistroAcudienteGenero"
              value={AcudienteGenero}
              onChange={(e) => {
                setAcudienteGenero(e.target.value)
              }}
            >
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
              value={AcudienteFechaNacimiento}
              onChange={(e) => {
                setAcudienteFechaNacimiento(e.target.value)
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="inputRegistroAcudienteParentesco"
            className="form-label text fs-4"
          >
            Parentesco con el infante
          </label>
          <input
            type="text"
            className="form-control fs-4"
            id="inputRegistroAcudienteParentesco"
            name="inputRegistroAcudienteParentesco"
            value={AcudienteParentesco}
            onChange={(e) => {
              setAcudienteParentesco(e.target.value)
            }}
          />
        </div>

        <button
          onClick={(e) => {
            e.preventDefault()
            setVisibleAcudiente(false)
            setVisibleUsuario(true)
            console.log(visibleAcudiente)
          }}
          type="submit"
          className="btn boton-login mt-3 text fs-5"
        >
          Siguiente
        </button>
      </form>

      <FormRegistroUsuario
        rol="acudiente"
        id={AcudienteID}
        visible={visibleUsuario}
      />
    </>
  )
}

export default FormRegistroAcudiente
