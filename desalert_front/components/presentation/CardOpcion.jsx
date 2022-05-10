import Image from 'next/image'
import React from 'react'

const CardOpcion = (props) => {
    return (
        <>
            <div className='card-opcion card'>
                <div className="card-body">
                    <div className="imagen-opcion opcion">
                        <Image src={props.imagen} width={400} height={400}></Image>
                    </div>
                    <div className="opcion">
                        <button type='button' className='btn mt-4 text fw-bold boton-opcion' >{props.opcion}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardOpcion