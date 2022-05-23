import HeaderPresentacion from "../components/presentation/HeaderPresentacion";
import OpcionesPresentacion from "../components/presentation/OpcionesPresentacion";

export default function Home() {

  return (
    <>
      <div>
        <HeaderPresentacion />
        <div className="degradado-azul-blanco"></div>
        <OpcionesPresentacion />
      </div>
    </>
  );
}
