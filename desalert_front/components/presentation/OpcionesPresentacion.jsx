import Link from 'next/link'
import React from 'react'
import CardOpcion from './CardOpcion'

const OpcionesPresentacion = () => {
    return (
        <>
            <div className="row opciones" style={{ backgroundColor: "#DBF2FF" }}>
                <div className='texto-opciones'>
                    <p className='fs-1 fw-bold text' >¿Quién eres?</p>
                </div>
                <div className="col col-sm-12 col-lg-6 opcion">
                    <CardOpcion opcion="Soy un Médico" imagen="/opcion-medico.svg" />
                </div>
                <div className="col col-sm-12 col-lg-6 opcion">
                    <CardOpcion opcion="Soy un Acudiente" imagen="/opcion-acudiente.svg" />
                </div>
                <div className='ir-login texto-opciones'>
                    <p className='fs-3 text'>¿Ya tienes una cuenta? Haz clic <Link href="/login"><a className='text-decoration-underline'>aquí</a></Link></p>
                </div>
            </div>
        </>
    )
}

export default OpcionesPresentacion