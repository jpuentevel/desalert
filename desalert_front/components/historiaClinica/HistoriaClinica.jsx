import React from 'react'
import FormHistoriaClinica from './FormHistoriaClinica'

const HistoriaClinica = (props) => {
    return (
        <>
            <div className="body-home">
                <div className="mb-4">
                    <p className="text fs-1 fw-bold">Nueva historia clínica para {props.infante}</p>
                </div>
                <FormHistoriaClinica/>
            </div>
        </>
    )
}

export default HistoriaClinica
