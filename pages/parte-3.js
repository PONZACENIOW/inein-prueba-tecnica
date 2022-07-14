import Layout from "../layouts";
import React, { useEffect, useState, memo } from "react";
import Image from "next/image";
import { usePokeAPI } from "../src/hooks/pokeAPI";

const PokeAPI = memo(() => {
  const header = {
    objective: "Objetivo",
    goal_text:
      "La URL https://pokeapi.co/api/v2/pokemon/ se tiene que consumir el servicio y mostrar la información de la API, la cual contiene imágenes, paginador, link que llevan a otra información. Solo se tiene que consumir y mostrar la información que desees si quieren hacer extensa el consumo es un plus, pero pueden solo mostrar en una tabla la información que desees.",
    solution: "Solución",
    comments: "Comentarios",
    comment_text: [
      "1. Las peticiones tienen una espera, por lo cual sería bueno pensar en algún loader antes de cargar el contenido que permita al usuario tener una experiencia más agradable.",
    ],
  };
  const [pokemon, setPokemon] = useState([]);
  const { getPokemons } = usePokeAPI();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    flag &&
      getPokemons({
        setPokemon,
      });
    setFlag(true);
  }, [flag]);

  return (
    <Layout header={header}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-x-8 gap-y-16">
        {pokemon?.map((e, i) => (
          <div
            key={i}
            className="bg-gradient-to-r from-amber-600 to-amber-200 rounded-full"
          >
            <div className="poke-logo">
              <Image
                className="image"
                src={e.sprites.other["official-artwork"].front_default}
                alt={e.name}
                layout="fill"
              />
            </div>
            <span className="font-bold text-3xl uppercase">{e.name}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
});

export default PokeAPI;
