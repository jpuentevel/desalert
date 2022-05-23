import { MyChart } from "components/utilidades/chartJS/MyChart"
import React from "react"
import Link from "next/link"

const HomeInfante = () => {
  const infanteID = 802

  return (
    <>
      <div className="fondo-opciones p-5">
        <div className="mb-5">
          <p className="text fs-1 fw-bold">Datos generales del infante</p>
          <Link
            href="/historia-clinica/[infante]"
            as={`/historia-clinica/${infanteID}`}
          >
            <button className="boton-login btn fs-5">
              Generar nueva historia clínica
            </button>
          </Link>
        </div>
        <div className="row">
          <div className="col col-lg-8 col-sm-12 col-xs-12 pe-4">
            <div className="row">
              <div className="col col-lg-4 col-sm-12 col-xs-12 mb-4">
                <div className="contendor-imagen-infante mb-3">
                  <img
                    className="imagen-infante"
                    alt="Imagen del infante"
                    src=""
                  ></img>
                </div>
              </div>
              <div className="col col-lg-8 col-sm-12 col-xs-12">
                <div className="contenedor-datos-infante">
                  <div className="row">
                    <div className="col">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item item-datos-infante mb-3 pb-3">
                          Datos: Pruebaa
                        </li>
                        <li className="list-group-item item-datos-infante mb-3 pb-3">
                          Datos: Pruebaa
                        </li>
                        <li className="list-group-item item-datos-infante mb-3 ">
                          Datos: Pruebaa
                        </li>
                      </ul>
                    </div>
                    <div className="col">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item item-datos-infante mb-3 pb-3">
                          Datos: Pruebaa
                        </li>
                        <li className="list-group-item item-datos-infante mb-3 pb-3">
                          Datos: Pruebaa
                        </li>
                        <li className="list-group-item item-datos-infante mb-3">
                          Datos: Pruebaa
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contenedor-grafica-infante mt-4 mb-4">
              <MyChart />
            </div>
          </div>
          <div className="col col-lg-4">
            <div>
              <table className="mt-3 table table-hover table-primary table-bordered border-primary">
                <caption>Lista de historias clínicas del infante</caption>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Descarga</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>2022-05-24</td>
                    <td>
                      <a href="#">some place no here</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>2022-03-12</td>
                    <td>
                      <a href="#">some place no here</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>2022-01-15</td>
                    <td>
                      <a href="#">some place no here</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeInfante
