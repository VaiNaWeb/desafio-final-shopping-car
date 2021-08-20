import React from "react";
import styled from "styled-components";

const BoxTtl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const Ttl = styled.h1`
  text-align: center;
`;

const ContainerStoreTtl = styled.div``

const Header = () => {
  return (
    <ContainerStoreTtl>
      <BoxTtl>
        <Ttl>Loja de Carros!</Ttl>
      </BoxTtl>
    </ContainerStoreTtl>
  );
};
export default Header;
