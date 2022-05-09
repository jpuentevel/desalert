import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HeaderPresentacion from '../components/presentation/HeaderPresentacion'
import OpcionesPresentacion from '../components/presentation/OpcionesPresentacion'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <HeaderPresentacion/>
      <div className='degradado-azul-blanco'></div>
      <OpcionesPresentacion/>
    </>
  )
}
