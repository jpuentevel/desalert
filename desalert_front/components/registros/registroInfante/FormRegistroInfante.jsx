import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const FormRegistroInfante = () => {
  const [InfanteImagen, setInfanteImagen] = useState("/upload-an-image.svg")
  const [InfanteStringImagen, setInfanteStringImagen] = useState("/upload-an-image.svg")
  const [InfanteNombre, setInfanteNombre] = useState("")
  const [InfanteID, setInfanteID] = useState("")
  const [InfanteAcudienteID, setInfanteAcudienteID] = useState("")
  const [InfanteDireccion, setInfanteDireccion] = useState("")
  const [InfanteGenero, setInfanteGenero] = useState("")
  const [InfanteFechaNacimiento, setInfanteFechaNacimiento] = useState("")

  const handleSubmitInfante = async (e) => {
    e.preventDefault()
    const urlInfante = ""
    const dataInfante = {}

    await fetch(urlInfante, {
      method: "POST",
      body: JSON.stringify(dataInfante),
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error: ", error))
      .then((response) => console.log("Succes: ", response))

    const urlUsuario = ""
    const dataUsuario = {}
  }

  const imageMimeType = /image\/(png|jpg|jpeg)/i;

  let file;

  const changeImage = (e) => {
      file = e.target.files[0];
      if (!file.type.match(imageMimeType)) {
          alert("Error de tipo");
          return;
      }
      setInfanteImagen(file);
  }

  useEffect(() => {
      let fileReader, isCancel = false;
      if (file) {
          fileReader = new FileReader();
          fileReader.onload = (e) => {
              const { result } = e.target;
              if (result && !isCancel) {
                  setInfanteStringImagen(result)
              }
          }
          fileReader.readAsDataURL(file)
      }
      return () => {
          isCancel = true;
          if (fileReader && fileReader.readyState === 1) {
              fileReader.abort();
          }
      }
  }, [file])

  return (
    <>
      <form className="row">
        <div className="col col-lg-6 col-sm-12">
          <div className="mb-3">
            <div className="contendor-imagen-infante">
              <Image src={InfanteStringImagen} alt="Imagen del infante" height={400} width={400}></Image>
            </div>
            <label
              htmlFor="inputRegistroInfanteImagen"
              className="form-label text fs-4"
            >
              Imagen
            </label>
            <input
              type="file"
              className="form-control"
              id="inputRegistroInfanteImagen"
              name="inputRegistroInfanteImagen"
              value={InfanteImagen}
              accept=".png, .jpg, .jpeg"
              onChange={(e) => {changeImage}}
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
              value={InfanteNombre}
              onChange={(e) => {
                setInfanteNombre(e.target.value)
              }}
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
              value={InfanteID}
              onChange={(e) => {
                setInfanteID(e.target.value)
              }}
            />
          </div>
        </div>

        <div className="col col-lg-6 col-sm-12">
          <div className="mb-3">
            <label
              htmlFor="inputInfanteRegistroAcudienteID"
              className="form-label text fs-4"
            >
              Cédula del Acudiente
            </label>
            <input
              type="text"
              className="form-control"
              id="inputInfanteRegistroAcudienteID"
              name="inputInfanteRegistroAcudienteID"
              value={InfanteAcudienteID}
              onChange={(e) => {
                setInfanteAcudienteID(e.target.value)
              }}
            />
          </div>
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
              value={InfanteDireccion}
              onChange={(e) => {
                setInfanteDireccion(e.target.value)
              }}
            />
          </div>
          <div className="input-group mb-3 padding-genero">
            <label
              className="input-group-text text fs-4"
              htmlFor="inputRegistroInfanteGenero"
            >
              Género
            </label>
            <select
              className="form-select"
              id="inputRegistroInfanteGenero"
              value={InfanteGenero}
              onChange={(e) => {
                setInfanteGenero(e.target.value)
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
              value={InfanteFechaNacimiento}
              onChange={(e) => {
                setInfanteFechaNacimiento(e.target.value)
              }}
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

export default FormRegistroInfante
