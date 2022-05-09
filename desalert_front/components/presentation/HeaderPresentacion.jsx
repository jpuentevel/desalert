import Image from 'next/image'
import React from 'react'

const HeaderPresentacion = () => {
  return (
    <>
        <div className="container-fluid p-4" style={{ backgroundColor: "#84b6f4", height: "30rem", max_width: "100%"}}>
            <div className="logo-container">
                <Image src="/desalert-logo.svg" width={500} height={200}></Image>
            </div>

            <div className="" style={{ max_width: "50rem" }}>
              <p className='fs-1 text'>
                El sistema de <span className='fw-bold'>alertas y seguimiento</span> para la población <span className='fw-bold'>infantil</span> con <span className='fw-bold'>desnutrición</span> en Colombia.
              </p>
            </div>
        </div>

    </>
  )
}

export default HeaderPresentacion;