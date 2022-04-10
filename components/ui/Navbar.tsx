import NextLink from 'next/link';
import { Spacer, Text, useTheme, Link } from '@nextui-org/react';
import Image from 'next/image';

export const Navbar = () => {
    const { theme } = useTheme();

    return (
        <div
            style={{
                alignItems: 'center',
                backgroundColor: theme?.colors.gray900.value,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                padding: '0 20px',
                width: '100%',
            }}
        >
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                width={70}
                height={70}
                alt="Icono de la App"
            />
            <NextLink href="/" passHref>
                <Link>
                    <Text color="white" h2>
                        P
                    </Text>
                    <Text color="white" h3>
                        okemon
                    </Text>
                </Link>
            </NextLink>
            <Spacer css={{ flex: 1 }} />

            <NextLink href="/favorites" passHref>
                <Link>
                    <Text color="white">Favoritos</Text>
                </Link>
            </NextLink>
        </div>
    );
};
