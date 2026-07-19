import React from 'react';
import styled from "styled-components";
type MenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const Menu: React.FC <MenuProps>= ({ isOpen, onClose}: MenuProps) => {
    return (
        <nav>
            <StyledMenu $isOpen={isOpen}>
                <li><MenuLink href="#home" onClick={onClose}>Home</MenuLink></li>
                <li><MenuLink href="#about" onClick={onClose}>About me</MenuLink></li>
                <li><MenuLink href="#skills" onClick={onClose}>Skills</MenuLink></li>
                <li><MenuLink href="#portfolio" onClick={onClose} >Portfolio</MenuLink></li>
                <li><MenuLink href="#contact" onClick={onClose}>Contact</MenuLink></li>
            </StyledMenu>
        </nav>
    );
};

const StyledMenu = styled.ul<{ $isOpen: boolean }>`
    display: flex;
    gap: 50px;
    list-style: none;

    @media (max-width: 768px) {
        display: ${props => (props.$isOpen ? "flex" : "none")};
        flex-direction: column;

        position: fixed;
        top: 0;
        right: 0;
        z-index: 1000;
        height: 100vh;
        gap: 60px;
        justify-content: center;
        text-align: left;
     

        padding: 50px;
        //border-radius: 5px;
        background: ${props => props.theme.colors.burger};
    }
`;
const MenuLink = styled.a`
    position: relative;
    text-decoration: none;

    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    text-align: center;

    color: ${props => props.theme.colors.baseText};
    transition: color 0.3s ease;

    &:hover {
        color: ${props => props.theme.colors.accentText};
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;

        width: 0;
        height: 2px;

        background-color: ${props => props.theme.colors.accentText};
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
    @media (max-width: 768px) {
        &:hover {
            color: ${props => props.theme.colors.baseText};
        }

        &::after {
            display: none;
        }

        &:hover::after {
            width: 0;
        }
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.34);
        color: ${props => props.theme.colors.baseText};

    }
`


