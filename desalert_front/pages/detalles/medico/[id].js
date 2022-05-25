import HomeInfante from "components/home/homeInfante/HomeInfante"
import { useRouter } from "next/router"

export default function home() {
  const router = useRouter()

  let tipoUsuario = ""

  if (router.pathname === "/detalles/medico/[id]") {
    tipoUsuario = "medico"
  } else if (router.pathname === "/detalles/acudiente/[id]") {
    tipoUsuario = "acudiente"
  }

  return <HomeInfante tipo={tipoUsuario} />
}
