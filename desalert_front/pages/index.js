import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { rolContext, rolContextProvider } from "../components/utilidades/contexts/Rol/rolContext"
import HeaderPresentacion from "../components/presentation/HeaderPresentacion";
import OpcionesPresentacion from "../components/presentation/OpcionesPresentacion";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div>
        <rolContext.Provider>
            <HeaderPresentacion />
            <div className="degradado-azul-blanco"></div>
            <OpcionesPresentacion />
        </rolContext.Provider>
      </div>
    </>
  );
}
