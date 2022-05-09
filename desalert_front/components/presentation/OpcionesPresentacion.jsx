import React from 'react'
import CardOpcion from './CardOpcion'

const OpcionesPresentacion = () => {
    return (
        <>
            <div className="row opciones" style={{ backgroundColor: "#DBF2FF" }}>
                <div className="col col-sm-12 col-lg-6">
                    <CardOpcion opcion="Soy un Médico" imagen="/opcion-medico.svg" />
                </div>
                <div className="col col-sm-12 col-lg-6">
                    <CardOpcion opcion="Soy un Acudiente" imagen="/opcion-acudiente.svg" />
                </div>
            </div>
        </>
    )
}

export default OpcionesPresentacion