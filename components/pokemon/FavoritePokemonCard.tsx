import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router';
import { FC } from 'react';

interface Props {
    pokemonId: number;
}


export const FavoritePokemonCard: FC<Props> = ({pokemonId}) => {

  const router = useRouter();
  
  const onFavoriteClick = (): void => {
    router.push(`/pokemon/${pokemonId}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} lg={1}>
    <Card isHoverable isPressable css={{ padding: 10 }} onClick={onFavoriteClick}>
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
        width={"100%"}
        height={140}
      />
    </Card>
  </Grid>
  )
}