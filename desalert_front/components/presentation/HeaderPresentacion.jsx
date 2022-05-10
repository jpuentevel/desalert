import Image from 'next/image'
import React from 'react'

const HeaderPresentacion = () => {
  return (
    <>
        <div className="container fondo-header-opciones" style={{ height: "30rem" }}>
            <div className="logo-container">
                <Image src="/desalert-logo.svg" width={500} height={200}></Image>
            </div>

            <div className="m-4 texto-header-containe" style={{ max_width: "50rem" }}>
              <p className='texto-header text'>
                El sistema de <span className='fw-bold'>alertas y seguimiento</span> para la población <span className='fw-bold'>infantil</span> con <span className='fw-bold'>desnutrición</span> en Colombia.
              </p>
            </div>
        </div>

    </>
  )
}

export default HeaderPresentacion;