import styled from "styled-components";

export const BurgerButton = styled.button`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 5px;

        position: fixed;
        top: 25px;
        right: 20px;
        z-index: 1001;

        background: transparent;
        border: none;
        cursor: pointer;
    }

    span {
        width: 30px;
        height: 3px;
        background-color: ${props => props.theme.colors.secondaryBg};

        box-shadow:
                0 2px 4px rgba(0, 0, 0, 0.15),
                0 6px 12px rgba(0, 0, 0, 0.1);
        border-bottom: 2px solid rgba(0, 0, 0, 0.6);`;