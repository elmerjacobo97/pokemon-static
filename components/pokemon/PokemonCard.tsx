import { FC } from 'react';
import { useRouter } from 'next/router';
import { SmallPokemon } from '../../interfaces';
import { Grid, Card, Row, Text } from '@nextui-org/react';

interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
    const router = useRouter();

    const pokemonOnClick = () => {
        router.push(`/name/${pokemon.name}`);
    };

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
            <Card hoverable clickable onClick={pokemonOnClick}>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image src={pokemon.img} width="100%" height={140} />
                </Card.Body>
                <Card.Footer>
                    <Row justify="space-between">
                        <Text transform="capitalize">{pokemon.name}</Text>
                        <Text>#{pokemon.id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    );
};
