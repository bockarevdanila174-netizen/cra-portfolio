// import React from 'react';
import styled from "styled-components";
export const Menu = () => {
    return (
        <nav>
            <StyledMenu>


                <li><MenuLink href="">Home</MenuLink></li>
                <li><MenuLink href="">About me</MenuLink></li>
                <li><MenuLink href="">Skills</MenuLink></li>
                <li><MenuLink href="">Portfolio</MenuLink></li>
                <li><MenuLink href="">Contact</MenuLink></li>

            </StyledMenu>
        </nav>
    );
};

const StyledMenu = styled.ul`
display: flex;
flex-wrap: wrap;
align-items: center;
    list-style: none;
    gap: 50px;
`;
const MenuLink = styled.a`
text-decoration: none;
color: black`


