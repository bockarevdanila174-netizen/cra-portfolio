// import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
          <Logo/>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
background-color: aqua;  
    height: 50px;
    padding: 5px;
`;
