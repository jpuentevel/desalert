import Link from "next/link";
import Image from "next/image";
import React from "react";

const CardInfante = (props) => {
  return (
    <>
      <div className="card card-infante" style={{ width: "18rem" }}>
        
      <img src={props.imagen} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title text fs-3">{props.nombre}</h5>
          <ul>
              <li className="card-text text fs-5">ID: {props.id}</li>
              <li className="card-text text fs-5">Edad: {props.edad}</li>
              <li className="card-text text fs-5">Estado: {props.estado}</li>
          </ul>
          <Link href="#">
            <button className="btn boton-login">Ver detalles</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardInfante;
