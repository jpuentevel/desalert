import React, { useState } from "react"
import {
  calcularIMC,
  calcularRango,
  definirColor,
} from "components/utilidades/IMC/CalcularIMC"
import { swalIMC } from "components/utilidades/SweetAlert2/swal"

const FormHistoriaClinica = () => {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [imc, setImc] = useState(0)
  const [rango, setRango] = useState("")
  const [edad, setEdad] = useState(15)
  const [color, setColor] = useState()
  const [pechoMaterno, setPechoMaterno] = useState(false)

  const handleClickCalcularIMC = (e) => {
    e.preventDefault()

    Promise.all([
      setImc(calcularIMC(altura, peso)),
      setRango(calcularRango(imc, edad)),
      setColor(definirColor(rango)),
    ]).then(swalIMC(imc, color))
  }

  const handleSubmitHistoriaClinica = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmitHistoriaClinica}>
        <div className="contenedor-grafica-infante p-3 mb-4">
          <div className="mb-3">
            <p className="text fs-3 fw-bold">Datos básicos</p>
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputHistoriaClinicaAltura"
              className="form-label text fs-4"
            >
              Altura (m)
            </label>
            <input
              type="number"
              name="inputHistoriaClinicaAltura"
              className="form-control"
              id="inputHistoriaClinicaAltura"
              value={altura}
              onChange={(e) => {
                setAltura(e.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputHistoriaClinicaPeso"
              className="form-label text fs-4"
            >
              Peso (kg)
            </label>
            <input
              type="number"
              name="inputHistoriaClinicaPeso"
              className="form-control"
              id="inputHistoriaClinicaPeso"
              value={peso}
              onChange={(e) => {
                setPeso(e.target.value)
              }}
            />
          </div>
          <div className="input-group mb-4 input-group-lg">
            <span className="input-group-text">IMC</span>
            <input
              className="form-control"
              type="number"
              name="inputHistoriaClinicaIMC"
              id="inputHistoriaClinicaIMC"
              readOnly
              value={imc}
            />
          </div>
          <div className="mb-3">
            <button
              className="btn fs-5 boton-login text"
              onClick={(e) => {
                handleClickCalcularIMC(e)
              }}
            >
              Calcular IMC
            </button>
          </div>
        </div>

        <div className="contenedor-grafica-infante p-3 mb-4">
          <div className="mb-3">
            <p className="text fs-3 fw-bold">Padecimiento actual</p>
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputHistoriaClinicaPadecimientos"
              className="form-label text fs-4"
            >
              Padecimientos
            </label>
            <textarea
              class="form-control"
              name="inputHistoriaClinicaPadecimientos"
              id="inputHistoriaClinicaPadecimientos"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputHistoriaClinicaDiagnosticoPrevio"
              className="form-label text fs-4"
            >
              Diagnóstico previo
            </label>
            <textarea
              class="form-control"
              name="inputHistoriaClinicaDiagnosticoPrevio"
              id="inputHistoriaClinicaDiagnosticoPrevio"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputHistoriaClinicaEstudioPrevio"
              className="form-label text fs-4"
            >
              Estudio previo
            </label>
            <textarea
              class="form-control"
              name="inputHistoriaClinicaEstudioPrevio"
              id="inputHistoriaClinicaEstudioPrevio"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputHistoriaClinicaTerapeutaPrevio"
              className="form-label text fs-4"
            >
              Terapeuta previo
            </label>
            <textarea
              class="form-control"
              name="inputHistoriaClinicaTerapeutaPrevio"
              id="inputHistoriaClinicaTerapeutaPrevio"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>

        <div className="contenedor-grafica-infante p-3 mb-4">
          <div className="mb-3">
            <p className="text fs-3 fw-bold">Alimentación</p>
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              name="inputHistoriaClinicaPechoMaterno"
              id="inputHistoriaClinicaPechoMaterno"
              className="form-check-input ms-1 me-1 text fs-4"
              vale={pechoMaterno}
              onChange={() => {
                setPechoMaterno(!pechoMaterno)
              }}
            />
            <label
              htmlFor="inputHistoriaClinicaPechoMaterno"
              className="form-check-label text fs-4"
            >
              Pecho materno
            </label>
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputHistoriaClinicaPechoMaternoDuracion"
              className="form-label text fs-4"
            >
              Duración (meses)
            </label>
            <input
              type="number"
              name="inputHistoriaClinicaPechoMaternoDuracion"
              id="inputHistoriaClinicaPechoMaternoDuracion"
              className="form-control"
              disabled={!pechoMaterno}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputHistoriaClinicaPechoMaternoAblactacion"
              className="form-label text fs-4"
            >
              Ablactacion (meses)
            </label>
            <input
              type="number"
              name="inputHistoriaClinicaPechoMaternoAblactacion"
              id="inputHistoriaClinicaPechoMaternoAblactacion"
              className="form-control"
              disabled={!pechoMaterno}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputHistoriaClinicaPechoMaternoDestete"
              className="form-label text fs-4"
            >
              Destete (meses)
            </label>
            <input
              type="number"
              name="inputHistoriaClinicaPechoMaternoDestete"
              id="inputHistoriaClinicaPechoMaternoDestete"
              className="form-control"
              disabled={!pechoMaterno}
            />
          </div>
        </div>

        <div className="contenedor-grafica-infante p-3 mb-4">
          <div className="mb-3">
            <p className="text fs-3 fw-bold">Alimentación real</p>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              name="inputHistoriaClinicaCarne"
              id="inputHistoriaClinicaCarne"
              className="form-check-input ms-1 me-1 text fs-4 "
            />
            <label
              htmlFor="inputHistoriaClinicaCarne"
              className="form-check-label text fs-4"
            >
              Carne
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              name="inputHistoriaClinicaLeche"
              id="inputHistoriaClinicaLeche"
              className="form-check-input ms-1 me-1 text fs-4 "
            />
            <label
              htmlFor="inputHistoriaClinicaLeche"
              className="form-check-label text fs-4"
            >
              Leche
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              name="inputHistoriaClinicaFrutas"
              id="inputHistoriaClinicaFrutas"
              className="form-check-input ms-1 me-1 text fs-4 "
            />
            <label
              htmlFor="inputHistoriaClinicaFrutas"
              className="form-check-label text fs-4"
            >
              Frutas
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              name="inputHistoriaClinicaCereales"
              id="inputHistoriaClinicaCereales"
              className="form-check-input ms-1 me-1 text fs-4 "
            />
            <label
              htmlFor="inputHistoriaClinicaCereales"
              className="form-check-label text fs-4"
            >
              Cereales
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              name="inputHistoriaClinicaLegumbres"
              id="inputHistoriaClinicaLegumbres"
              className="form-check-input ms-1 me-1 text fs-4 "
            />
            <label
              htmlFor="inputHistoriaClinicaLegumbres"
              className="form-check-label text fs-4"
            >
              Legumbres
            </label>
          </div>
        </div>

        <div className="contenedor-grafica-infante p-3 mb-4">
          <div className="mb-3">
            <p className="text fs-3 fw-bold">Inmunizaciones</p>
          </div>
          <div className="row">
            <div className="col col-sm-3 col-lg-3 col-xl-6">
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaPoliomelitis"
                  id="inputHistoriaClinicaPoliomelitis"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaPoliomelitis"
                  className="form-check-label text fs-4"
                >
                  Poliomelitis
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaRotavirus"
                  id="inputHistoriaClinicaRotavirus"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaRotavirus"
                  className="form-check-label text fs-4"
                >
                  Rotavirus
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaDpto"
                  id="inputHistoriaClinicaDpto"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaDpto"
                  className="form-check-label text fs-4"
                >
                  Dpto
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaInfluenza"
                  id="inputHistoriaClinicaInfluenza"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaInfluenza"
                  className="form-check-label text fs-4"
                >
                  Influenza
                </label>
              </div>
            </div>
            <div className="col col-sm-3 col-lg-3 col-xl-6">
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaSarampion"
                  id="inputHistoriaClinicaSarampion"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaSarampion"
                  className="form-check-label text fs-4"
                >
                  Sarampion
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaEpatitisB"
                  id="inputHistoriaClinicaEpatitisB"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaEpatitisB"
                  className="form-check-label text fs-4"
                >
                  HepatitisB
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaRubeola"
                  id="inputHistoriaClinicaRubeola"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaRubeola"
                  className="form-check-label text fs-4"
                >
                  Rubeola
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaNeumococo"
                  id="inputHistoriaClinicaNeumococo"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaNeumococo"
                  className="form-check-label text fs-4"
                >
                  Neumococo
                </label>
              </div>
            </div>
            <div className="col col-sm-3 col-lg-3 col-xl-6">
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaParotiditis"
                  id="inputHistoriaClinicaParotiditis"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaParotiditis"
                  className="form-check-label text fs-4"
                >
                  Parotiditis
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaBcg"
                  id="inputHistoriaClinicaBcg"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaBcg"
                  className="form-check-label text fs-4"
                >
                  Bcg
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaVaricela"
                  id="inputHistoriaClinicaVaricela"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaVaricela"
                  className="form-check-label text fs-4"
                >
                  Varicela
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaTixoide"
                  id="inputHistoriaClinicaTixoide"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaTixoide"
                  className="form-check-label text fs-4"
                >
                  Tixoide
                </label>
              </div>
            </div>
            <div className="col col-sm-3 col-lg-3 col-xl-6">
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaHepatitis"
                  id="inputHistoriaClinicaHepatitis"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaHepatitis"
                  className="form-check-label text fs-4"
                >
                  Hepatitis
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaA1"
                  id="inputHistoriaClinicaA1"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaA1"
                  className="form-check-label text fs-4"
                >
                  A1
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaPapiloma"
                  id="inputHistoriaClinicaPapiloma"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaPapiloma"
                  className="form-check-label text fs-4"
                >
                  Papiloma
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3 mt-2">
            <label
              htmlFor="inputHistoriaClinicaSueros"
              className="form-label text fs-4"
            >
              Sueros
            </label>
            <input
              type="text"
              name="inputHistoriaClinicaSueros"
              id="inputHistoriaClinicaSueros"
              className="form-control"
            />
          </div>
        </div>

        <div className="contenedor-grafica-infante p-3 mb-4">
          <div className="mb-3">
            <p className="text fs-3 fw-bold">Desarrollo psicomotor</p>
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputHistoriaClinicaDatosAnormales"
              className="form-label text fs-4"
            >
              Datos anormales
            </label>
            <input
              type="text"
              name="inputHistoriaClinicaDatosAnormales"
              id="inputHistoriaClinicaDatosAnormales"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputHistoriaClinicaAlteracionesLenguaje"
              className="form-label text fs-4"
            >
              Alteraciones del lenguaje
            </label>
            <input
              type="text"
              name="inputHistoriaClinicaAlteracionesLenguaje"
              id="inputHistoriaClinicaAlteracionesLenguaje"
              className="form-control"
            />
          </div>
        </div>

        <div className="contenedor-grafica-infante p-3 mb-4">
          <div className="mb-3">
            <p className="text fs-3 fw-bold">Patológicos</p>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaInfecciones"
                  id="inputHistoriaClinicaInfecciones"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaInfecciones"
                  className="form-check-label text fs-4"
                >
                  Infecciones
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaAlergicos"
                  id="inputHistoriaClinicaAlergicos"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaAlergicos"
                  className="form-check-label text fs-4"
                >
                  Alérgicos
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaTraumatismoicos"
                  id="inputHistoriaClinicaTraumatismoicos"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaTraumatismoicos"
                  className="form-check-label text fs-4"
                >
                  Traumatismoicos
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaTransfuciones"
                  id="inputHistoriaClinicaTransfuciones"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaTransfuciones"
                  className="form-check-label text fs-4"
                >
                  Transfuciones
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaQuirurgicos"
                  id="inputHistoriaClinicaQuirurgicos"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaQuirurgicos"
                  className="form-check-label text fs-4"
                >
                  Quirurgicos
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaHospitalizacion"
                  id="inputHistoriaClinicaHospitalizacion"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaHospitalizacion"
                  className="form-check-label text fs-4"
                >
                  Hospitalización
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="contenedor-grafica-infante p-3 mb-4">
          <div className="mb-3">
            <p className="text fs-3 fw-bold">Exploración física</p>
            <div className="mb-3">
              <label
                htmlFor="inputHistoriaClinicaPerimetroCefalico"
                className="form-label text fs-4"
              >
                Perimetro cefálico
              </label>
              <input
                type="number"
                name="inputHistoriaClinicaPerimetroCefalico"
                id="inputHistoriaClinicaPerimetroCefalico"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="inputHistoriaClinicaPerimetroEmbarazo"
                className="form-label text fs-4"
              >
                Perimetro embarazo
              </label>
              <input
                type="number"
                name="inputHistoriaClinicaPerimetroEmbarazo"
                id="inputHistoriaClinicaPerimetroEmbarazo"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="inputHistoriaClinicaPerimetroPierna"
                className="form-label text fs-4"
              >
                Perimetro pierna
              </label>
              <input
                type="number"
                name="inputHistoriaClinicaPerimetroPierna"
                id="inputHistoriaClinicaPerimetroPierna"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="inputHistoriaClinicaSegmentoSuperior"
                className="form-label text fs-4"
              >
                Segmento superior
              </label>
              <input
                type="number"
                name="inputHistoriaClinicaSegmentoSuperior"
                id="inputHistoriaClinicaSegmentoSuperior"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="inputHistoriaClinicaSegmentoInferior"
                className="form-label text fs-4"
              >
                Segmento inferior
              </label>
              <input
                type="number"
                name="inputHistoriaClinicaSegmentoInferior"
                id="inputHistoriaClinicaSegmentoInferior"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="inputHistoriaClinicaTensionArterial"
                className="form-label text fs-4"
              >
                Tensión arterial
              </label>
              <input
                type="number"
                name="inputHistoriaClinicaTensionArterial"
                id="inputHistoriaClinicaTensionArterial"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="inputHistoriaClinicaFrecuenciaCardiaca"
                className="form-label text fs-4"
              >
                Frecuencia cardiaca
              </label>
              <input
                type="number"
                name="inputHistoriaClinicaFrecuenciaCardiaca"
                id="inputHistoriaClinicaFrecuenciaCardiaca"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="inputHistoriaClinicaFrecuenciaRespiratoria"
                className="form-label text fs-4"
              >
                Frecuencia respiratoria
              </label>
              <input
                type="number"
                name="inputHistoriaClinicaFrecuenciaRespiratoria"
                id="inputHistoriaClinicaFrecuenciaRespiratoria"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="inputHistoriaClinicaTemperatura"
                className="form-label text fs-4"
              >
                Temperatura
              </label>
              <input
                type="number"
                name="inputHistoriaClinicaTemperatura"
                id="inputHistoriaClinicaTemperatura"
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="contenedor-grafica-infante p-3 mb-4">
          <div className="mb-3">
            <p className="text fs-3 fw-bold">Anormalidades</p>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaAnormalidadesPiel"
                  id="inputHistoriaClinicaAnormalidadesPiel"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaAnormalidadesPiel"
                  className="form-check-label text fs-4"
                >
                  Piel
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaAnormalidadesCabeza"
                  id="inputHistoriaClinicaAnormalidadesCabeza"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaAnormalidadesCabeza"
                  className="form-check-label text fs-4"
                >
                  Cabeza
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaAnormalidadesOjos"
                  id="inputHistoriaClinicaAnormalidadesOjos"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaAnormalidadesOjos"
                  className="form-check-label text fs-4"
                >
                  Ojos
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaAnormalidadesOidos"
                  id="inputHistoriaClinicaAnormalidadesOidos"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaAnormalidadesOidos"
                  className="form-check-label text fs-4"
                >
                  Oidos
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaAnormalidadesNariz"
                  id="inputHistoriaClinicaAnormalidadesNariz"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaAnormalidadesNariz"
                  className="form-check-label text fs-4"
                >
                  Naríz
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaAnormalidadesBoca"
                  id="inputHistoriaClinicaAnormalidadesBoca"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaAnormalidadesBoca"
                  className="form-check-label text fs-4"
                >
                  Boca
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaAnormalidadesCuello"
                  id="inputHistoriaClinicaAnormalidadesCuello"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaAnormalidadesCuello"
                  className="form-check-label text fs-4"
                >
                  Cuello
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaAnormalidadesTorax"
                  id="inputHistoriaClinicaAnormalidadesTorax"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaAnormalidadesTorax"
                  className="form-check-label text fs-4"
                >
                  Toráx
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaAnormalidadesAreaCardiaca"
                  id="inputHistoriaClinicaAnormalidadesAreaCardiaca"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaAnormalidadesAreaCardiaca"
                  className="form-check-label text fs-4"
                >
                  Área Cardiaca
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="inputHistoriaClinicaAnormalidadesPulmonar"
                  id="inputHistoriaClinicaAnormalidadesPulmonar"
                  className="form-check-input text fs-4 "
                />
                <label
                  htmlFor="inputHistoriaClinicaAnormalidadesPulmonar"
                  className="form-check-label text fs-4"
                >
                  Pulmonar
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="inputHistoriaNombreMedico"
            className="form-label text fs-4"
          >
            Nombre del médico
          </label>
          <input
            type="text"
            name="inputHistoriaNombreMedico"
            id="inputHistoriaNombreMedico"
            className="form-control"
          />
        </div>

        <div>
          <button type="submit" className="btn boton-login text fs-5">
            Guardar historia clínica
          </button>
        </div>
      </form>
    </>
  )
}

export default FormHistoriaClinica
