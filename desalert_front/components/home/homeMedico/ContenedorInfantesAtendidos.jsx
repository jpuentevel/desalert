import React, { useEffect, useState } from "react";
import CardInfante from "../cardInfante/CardInfante";

const ContenedorInfantesAtendidos = () => {
  const [atendidos, setAtendidos] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=41")
      .then((response) => response.json())
      .then((item) => {
        setAtendidos(item.results);
      });
  }, []);

  return (
    <>
      <div className="contenedor-infantes">
        <p className="text fs-2 fw-bold">Infantes atendidos</p>
        <div className="grid-infantes row">
          {atendidos.map((item) => (
            <div className="col">
              <CardInfante
                key={item.id}
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
