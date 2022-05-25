import Link from "next/link"
import React, { useState } from "react"

const FormRegistroUsuario = (props) => {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const NORMAL = "row"
  const HIDDEN = NORMAL + " d-none"

  const handleSubmitUsuario = async (e) => {
    e.preventDefault()
    const urlUsuario = ``
    const dataUsuario = {
      email: Email,
      password: Password,
    }

    await fetch(urlUsuario, {
      method: "POST",
      body: JSON.stringify(dataUsuario),
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
      <form className={props.visible ? NORMAL : HIDDEN}>
        <div className="mb-3">
          <label htmlFor="inputRegistroEmail" className="form-label text fs-4">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputRegistroEmail"
            name="inputRegistroEmail"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="inputRegistroPassword"
            className="form-label text fs-4"
          >
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="inputRegistroPassword"
            name="inputRegistroPassword"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>

        <Link href="/home/[rolHome]" as={`/home/${props.rol}`} passHref>
          <button type="submit" className="btn boton-login mt-3 text fs-5">
            Registrarse
          </button>
        </Link>
      </form>
    </>
  )
}

export default FormRegistroUsuario
