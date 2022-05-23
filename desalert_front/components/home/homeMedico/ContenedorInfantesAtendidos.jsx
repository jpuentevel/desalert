import React, { useEffect, useState } from "react";
import CardInfante from "../cardInfante/CardInfante";

const ContenedorInfantesAtendidos = () => {
  const [atendidos, setAtendidos] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=41")
      .then((response) => response.json())
      .then((item) => {
        setAtendidos(item.results);
        setFiltrados(item.results);
      });
  }, []);

  const handleFiltroChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    let resultadoBusqueda = filtrados.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.id
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      } else { return null }
    });
    setAtendidos(resultadoBusqueda);
  };

  return (
    <>
      <div className="contenedor-infantes">
        <p className="text fs-2 fw-bold">Infantes atendidos</p>
        <div className="input-group mb-3 barra-busqueda">
          <span className="input-group-text fs-4">Buscar</span>
          <input
            className="form-control form-control-lg"
            type="text"
            value={busqueda}
            placeholder="Filtra por nombre o documento"
            onChange={handleFiltroChange}
          />
        </div>
        <div className="row">
          {atendidos.map((item) => (
            <div className="col" key={item.id}>
              <CardInfante
                imagen={item.image}
                nombre={item.name}
                id={item.id}
                edad={item.id}
                estado={item.status}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContenedorInfantesAtendidos;
