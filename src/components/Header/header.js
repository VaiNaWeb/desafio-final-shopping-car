import React from "react";
import styled from "styled-components";

const BoxTItulo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const Ttl = styled.h1`
  text-align: center;
`;

const Header = () => {
  return (
    <header>
      <BoxTItulo>
        <Ttl>Loja de Carros!</Ttl>
      </BoxTItulo>
    </header>
  );
};
export default Header;
