import { Spacer, StyledLink, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        backgroundColor: theme?.colors.gray100.value,
      }}>
      <Spacer />

      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
        alt="Icono de la App"
        width={70}
        height={70}
      />

      <Link href="/" passHref>
        <StyledLink>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </StyledLink>
      </Link>

      <Spacer css={{ flex: 1 }} />

      <Link href="/favorites" passHref>
        <StyledLink>
          <Text color="white">Favoritos</Text>
        </StyledLink>
      </Link>
      <Spacer />
    </div>
  );
};
