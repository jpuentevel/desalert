import Image from "next/image";
import Link from "next/link";
import React from "react";


const CardOpcion = (props) => {

  return (
    <>
      <div className="card-opcion card">
        <div className="card-body">
          <div className="imagen-opcion opcion">
            <Image src={props.imagen} width={400} height={400}></Image>
          </div>
          <div className="opcion">
            <Link href="/registro/[rol]" as={`/registro/${props.opcion}`} passHref>
              <button
                type="button"
                className="btn mt-4 text fw-bold boton-opcion"
              >
                {props.texto}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardOpcion;
