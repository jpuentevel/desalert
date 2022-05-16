import React, { useEffect, useState } from "react";
import CardInfante from "../cardInfante/CardInfante";

const ContenedorInfantesNoAtendidos = () => {
  const [noAtendidos, setNoAtendidos] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=42")
      .then((response) => response.json())
      .then((item) => {
        setNoAtendidos(item.results);
      });
  }, []);

  return (
    <>
      <div className="contenedor-infantes">
        <p className="text fs-2 fw-bold">Infantes no atendidos</p>
        <div className="grid-infantes row">
          {noAtendidos.map((item) => (
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

export default ContenedorInfantesNoAtendidos;
