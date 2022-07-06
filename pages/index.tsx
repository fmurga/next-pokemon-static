import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import type { NextPage, GetStaticProps } from "next";
import { pokeApi } from "../api";

import { Layout } from "../components/layouts";
import { PokemonList } from "../components/pokemon";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Listado de Pokemons">
        <PokemonList pokemons={pokemons} />
      </Layout>
    </>
  );
};

export default HomePage;

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    "/pokemon?limit=151"
  );
  const pokemons: SmallPokemon[] = data.results.map((poke, idx) => ({
    ...poke,
    id: idx + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      idx + 1
    }.png`,
  }));

  console.log("pokemons :>> ", pokemons);

  // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/id.png"

  return {
    props: {
      pokemons: pokemons,
    },
  };
};
