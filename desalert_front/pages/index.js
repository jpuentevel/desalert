import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className="w-100 h-100">

        
        <nav className="navbar" style={{ backgroundColor: "#47ffc8", height: "5rem" }}>
          <div className="container-fluid">
            <Image className="mx-auto" src="/desalert-logo.svg" width={300} height={70}></Image>
          </div>
        </nav>
        

      </div>
    </>
  )
}
