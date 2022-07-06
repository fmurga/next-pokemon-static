import { Grid } from "@nextui-org/react";
import React, { FC } from "react";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

interface Props {
  favoritePokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ favoritePokemons }) => {
  return (
    <Grid>
      <Grid.Container gap={2} direction={"row"} justify={"flex-start"}>
        {favoritePokemons.map((id) => (
          <FavoritePokemonCard key={id} pokemonId={id} />
        ))}
      </Grid.Container>
    </Grid>
  );
};
