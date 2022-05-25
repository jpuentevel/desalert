import React, { useState } from "react"
import {
  calcularIMC,
  calcularRango,
  definirColor,
} from "components/utilidades/IMC/CalcularIMC"
import { swalIMC, swalSuccess } from "components/utilidades/SweetAlert2/swal"

const FormHistoriaClinica = () => {
  // generales
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [imc, setImc] = useState(0)
  const [rango, setRango] = useState("")
  const [edad, setEdad] = useState(15)
  const [color, setColor] = useState()
  const [calcularIsClicked, setCalcularIsClicked] = useState(false)

  // padecimiento actual
  const [padecimientos, setPadecimientos] = useState("")
  const [diagnosticoPrevio, setDiagnosticoPrevio] = useState("")
  const [estudioPrevio, setEstudioPrevio] = useState("")
  const [terapeutaPrevia, setTerapeutaPrevia] = useState("")

  // alimentacion
  const [pechoMaterno, setPechoMaterno] = useState(false)
  const [duracion, setDuracion] = useState(0)
  const [ablactacion, setAblactacion] = useState(0)
  const [destete, setDestete] = useState(0)

  // alimentacion real
  const [carne, setCarne] = useState(false)
  const [leche, setLeche] = useState(false)
  const [frutas, setFrutas] = useState(false)
  const [cereales, setCereales] = useState(false)
  const [legumbres, setLegumbres] = useState(false)

  // inmunizaciones
  const [poliomelitis, setPoliomelitis] = useState(false)
  const [rotavirus, setRotavirus] = useState(false)
  const [dpto, setDpto] = useState(false)
  const [influenza, setInfluenza] = useState(false)
  const [sarampion, setSarampion] = useState(false)
  const [epatitisB, setEpatitisB] = useState(false)
  const [rubeola, setRubeola] = useState(false)
  const [neumococo, setNeumococo] = useState(false)
  const [parotiditis, setParotiditis] = useState(false)
  const [bgc, setBgc] = useState(false)
  const [varicela, setVaricela] = useState(false)
  const [tixoide, setTixoide] = useState(false)
  const [hepatitis, setHepatitis] = useState(false)
  const [A1, setA1] = useState(false)
  const [papiloma, setPapiloma] = useState(false)
  const [sueros, setSueros] = useState("")

  // desarrollo psicomotor
  const [datosAnormales, setDatosAnormales] = useState("")
  const [alteracionesLenguaje, setAlteracionesLenguaje] = useState("")

  // patologicos
  const [infecciones, setInfecciones] = useState(false)
  const [alergicos, setAlergicos] = useState(false)
  const [traumatismoicos, setTraumatismoicos] = useState(false)
  const [transfuciones, setTransfuciones] = useState(false)
  const [quirurgicos, setQuirurgicos] = useState(false)
  const [hospitalizacion, setHospitalizacion] = useState(false)

  // exploracion fisica
  const [perimetroCefalico, setPerimetroCefalico] = useState("")
  const [perimetroEmbarazo, setPerimetroEmbarazo] = useState("")
  const [perimetroPierna, setPerimetroPierna] = useState("")
  const [segmentoSuperior, setSegmentoSuperior] = useState("")
  const [segmentoInferior, setSegmentoInferior] = useState("")
  const [tensionArterial, setTensionArterial] = useState("")
  const [frecuenciaCardiaca, setFrecuenciaCardiaca] = useState("")
  const [frecuenciaRespiratoria, setFrecuenciaRespiratoria] = useState("")
  const [temperatura, setTemperatura] = useState("")

  // anormalidades
  const [piel, setPiel] = useState(false)
  const [cabeza, setCabeza] = useState(false)
  const [ojos, setOjos] = useState(false)
  const [oidos, setOidos] = useState(false)
  const [nariz, setNariz] = useState(false)
  const [boca, setBoca] = useState(false)
  const [cuello, setCuello] = useState(false)
  const [torax, setTorax] = useState(false)
  const [areaCardiaca, setAreaCardiaca] = useState(false)
  const [pulmonar, setPulmonar] = useState(false)

  // nombre medico
  const [nombreMedico, setNombreMedico] = useState("")

  const handleClickCalcularIMC = () => {
    // e.preventDefault()

    Promise.all([
      setImc(calcularIMC(altura, peso)),
      setRango(calcularRango(imc, edad)),
      setColor(definirColor(rango)),
    ]).then(swalIMC(imc, color))
  }

  if (calcularIsClicked) {
    Promise.all([
      setImc(calcularIMC(altura, peso)),
      setRango(calcularRango(imc, edad)),
      setColor(definirColor(rango)),
    ]).then(swalIMC(imc, color))
    setCalcularIsClicked(false)
  }

  const handleSubmitHistoriaClinica = (e) => {
    e.preventDefault()
    swalSuccess("Historia agregada correctamente")
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
                e.preventDefault()
                setCalcularIsClicked(true)
                setImc(calcularIMC(altura, peso))
                setRango(calcularRango(imc, edad))
                setColor(definirColor(rango))
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
              className="form-control"
              name="inputHistoriaClinicaPadecimientos"
              id="inputHistoriaClinicaPadecimientos"
              value={padecimientos}
              onChange={(e) => {
                setPadecimientos(e.target.value)
              }}
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
              className="form-control"
              name="inputHistoriaClinicaDiagnosticoPrevio"
              id="inputHistoriaClinicaDiagnosticoPrevio"
              value={diagnosticoPrevio}
              onChange={(e) => {
                setDiagnosticoPrevio(e.target.value)
              }}
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
              className="form-control"
              name="inputHistoriaClinicaEstudioPrevio"
              id="inputHistoriaClinicaEstudioPrevio"
              cols="30"
              rows="10"
              value={estudioPrevio}
              onChange={(e) => {
                setEstudioPrevio(e.target.value)
              }}
            ></textarea>
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputHistoriaClinicaTerapeutaPrevio"
              className="form-label text fs-4"
            >
              Terapeuta previa
            </label>
            <textarea
              className="form-control"
              name="inputHistoriaClinicaTerapeutaPrevio"
              id="inputHistoriaClinicaTerapeutaPrevio"
              cols="30"
              rows="10"
              value={terapeutaPrevia}
              onChange={(e) => {
                setTerapeutaPrevia(e.target.value)
              }}
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
              value={duracion}
              onChange={(e) => {
                setDuracion(e.target.value)
              }}
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
              value={ablactacion}
              onChange={(e) => {
                setAblactacion(e.target.value)
              }}
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
              value={destete}
              onChange={(e) => {
                setDestete(e.target.value)
              }}
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
              value={carne}
              onChange={(e) => {
                setCarne(e.target.value)
              }}
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
              value={leche}
              onChange={(e) => {
                setLeche(e.target.value)
              }}
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
              value={frutas}
              onChange={(e) => {
                setFrutas(e.target.value)
              }}
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
              value={cereales}
              onChange={(e) => {
                setCereales(e.target.value)
              }}
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
              value={legumbres}
              onChange={(e) => {
                setLegumbres(e.target.value)
              }}
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
                  value={poliomelitis}
                  onChange={(e) => {
                    setPoliomelitis(e.target.value)
                  }}
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
                  value={rotavirus}
                  onChange={(e) => {
                    setRotavirus(e.target.value)
                  }}
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
                  value={dpto}
                  onChange={(e) => {
                    setDpto(e.target.value)
                  }}
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
                  value={influenza}
                  onChange={(e) => {
                    setInfluenza(e.target.value)
                  }}
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
                  value={sarampion}
                  onChange={(e) => {
                    setSarampion(e.target.value)
                  }}
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
                  value={epatitisB}
                  onChange={(e) => {
                    setEpatitisB(e.target.value)
                  }}
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
                  value={rubeola}
                  onChange={(e) => {
                    setRubeola(e.target.value)
                  }}
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
                  value={neumococo}
                  onChange={(e) => {
                    setNeumococo(e.target.value)
                  }}
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
                  value={parotiditis}
                  onChange={(e) => {
                    setParotiditis(e.target.value)
                  }}
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
                  value={bgc}
                  onChange={(e) => {
                    setBgc(e.target.value)
                  }}
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
                  value={varicela}
                  onChange={(e) => {
                    setVaricela(e.target.value)
                  }}
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
                  value={tixoide}
                  onChange={(e) => {
                    setTixoide(e.target.value)
                  }}
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
                  value={hepatitis}
                  onChange={(e) => {
                    setHepatitis(e.target.value)
                  }}
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
                  value={A1}
                  onChange={(e) => {
                    setA1(e.target.value)
                  }}
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
                  value={papiloma}
                  onChange={(e) => {
                    setPapiloma(e.target.value)
                  }}
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
              value={sueros}
              onChange={(e) => {
                setSueros(e.target.value)
              }}
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
            <textarea
              type="text"
              name="inputHistoriaClinicaDatosAnormales"
              id="inputHistoriaClinicaDatosAnormales"
              className="form-control"
              value={datosAnormales}
              onChange={(e) => {
                setDatosAnormales(e.target.value)
              }}
            ></textarea>
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputHistoriaClinicaAlteracionesLenguaje"
              className="form-label text fs-4"
            >
              Alteraciones del lenguaje
            </label>
            <textarea
              type="text"
              name="inputHistoriaClinicaAlteracionesLenguaje"
              id="inputHistoriaClinicaAlteracionesLenguaje"
              className="form-control"
              value={alteracionesLenguaje}
              onChange={(e) => {
                setAlteracionesLenguaje(e.target.value)
              }}
            ></textarea>
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
                  value={infecciones}
                  onChange={(e) => {
                    setInfecciones(e.target.value)
                  }}
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
                  value={alergicos}
                  onChange={(e) => {
                    setAlergicos(e.target.value)
                  }}
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
                  value={traumatismoicos}
                  onChange={(e) => {
                    setTraumatismoicos(e.target.value)
                  }}
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
                  value={transfuciones}
                  onChange={(e) => {
                    setTransfuciones(e.target.value)
                  }}
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
                  value={quirurgicos}
                  onChange={(e) => {
                    setQuirurgicos(e.target.value)
                  }}
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
                  value={hospitalizacion}
                  onChange={(e) => {
                    setHospitalizacion(e.target.value)
                  }}
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
                value={perimetroCefalico}
                onChange={(e) => {
                  setPerimetroCefalico(e.target.value)
                }}
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
                value={perimetroEmbarazo}
                onChange={(e) => {
                  setPerimetroEmbarazo(e.target.value)
                }}
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
                value={perimetroPierna}
                onChange={(e) => {
                  setPerimetroPierna(e.target.value)
                }}
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
                value={segmentoSuperior}
                onChange={(e) => {
                  setSegmentoSuperior(e.target.value)
                }}
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
                value={segmentoInferior}
                onChange={(e) => {
                  setSegmentoInferior(e.target.value)
                }}
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
                value={tensionArterial}
                onChange={(e) => {
                  setTensionArterial(e.target.value)
                }}
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
                value={frecuenciaCardiaca}
                onChange={(e) => {
                  setFrecuenciaCardiaca(e.target.value)
                }}
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
                value={frecuenciaRespiratoria}
                onChange={(e) => {
                  setFrecuenciaRespiratoria(e.target.value)
                }}
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
                value={temperatura}
                onChange={(e) => {
                  setTemperatura(e.target.value)
                }}
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
                  value={piel}
                  onChange={(e) => {
                    setPiel(e.target.value)
                  }}
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
                  value={cabeza}
                  onChange={(e) => {
                    setCabeza(e.target.value)
                  }}
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
                  value={ojos}
                  onChange={(e) => {
                    setOjos(e.target.value)
                  }}
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
                  value={oidos}
                  onChange={(e) => {
                    setOidos(e.target.value)
                  }}
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
                  value={nariz}
                  onChange={(e) => {
                    setNariz(e.target.value)
                  }}
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
                  value={boca}
                  onChange={(e) => {
                    setBoca(e.target.value)
                  }}
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
                  value={cuello}
                  onChange={(e) => {
                    setCuello(e.target.value)
                  }}
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
                  value={torax}
                  onChange={(e) => {
                    setTorax(e.target.value)
                  }}
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
                  value={areaCardiaca}
                  onChange={(e) => {
                    setAreaCardiaca(e.target.value)
                  }}
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
                  value={pulmonar}
                  onChange={(e) => {
                    setPulmonar(e.target.value)
                  }}
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
            value={nombreMedico}
            onChange={(e) => {
              setNombreMedico(e.target.value)
            }}
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
