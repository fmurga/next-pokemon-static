import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";

interface Props {
pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({pokemon}) => {

    const router = useRouter();

    const handleClick = () =>{
        router.push(`/name/${pokemon.name}`)
    }

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={handleClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} width="100%" height={150} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text h3 transform="capitalize">
              {pokemon.name}
            </Text>
            <Text h3>
              {pokemon.id}
              {"#"}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
