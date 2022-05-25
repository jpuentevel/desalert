import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

const CardInfante = (props) => {
  const router = useRouter()
  return (
    <>
      <div className="card card-infante" style={{ width: "18rem" }}>
        <img src={props.imagen} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text fs-3">{props.nombre}</h5>
          <ul>
            <li className="card-text text fs-5">ID: {props.id}</li>
            <li className="card-text text fs-5">Edad: {props.edad}</li>
            <li className="card-text text fs-5">Estado: {props.estado}</li>
          </ul>
          <Link
            href={`/detalles/${router.query.rolHome}/[id]`}
            as={`/detalles/${router.query.rolHome}/${props.id}`}
          >
            <button className="btn boton-login">Ver detalles</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CardInfante
