import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeaderPresentacion from "../components/presentation/HeaderPresentacion";
import OpcionesPresentacion from "../components/presentation/OpcionesPresentacion";
import RolContext from "components/utilidades/contexts/Rol/RolContext";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

export default function Home() {

  let rolData;

  useEffect(() => {
    rolData = {
      rol: localStorage.getItem('rol')
    }
  }, []);

  return (
    <>
      <div>
        <RolContext.Provider value={rolData}>
          <HeaderPresentacion />
          <div className="degradado-azul-blanco"></div>
          <OpcionesPresentacion />
        </RolContext.Provider>
      </div>
    </>
  );
}
