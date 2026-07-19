import styled from "styled-components";


const Header = styled.header`
display: flex;
justify-content: space-between;
    background-color: ${props => props.theme.colors.primaryBg};
  
border-bottom: 1px solid ${props => props.theme.colors.accentText};
    padding: 10px 0;
`;

export const S = { Header };