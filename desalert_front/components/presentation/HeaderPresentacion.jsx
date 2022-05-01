import Image from 'next/image'
import React from 'react'

const HeaderPresentacion = () => {
  return (
    <>
        <div className="container-fluid" style={{ backgroundColor: "#47ffc8" }}>
            <div className="logo-container">
                <Image src="/desalert-logo.svg" width={500} height={500}></Image>
            </div>
        </div>

    </>
  )
}

export default HeaderPresentacion;