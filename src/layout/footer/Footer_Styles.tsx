import styled from "styled-components";

 const StyledFooter = styled.footer`
    padding: 80px 0 30px;
    background-color: ${props => props.theme.colors.secondaryBg};
`

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    @media screen and (max-width: 768px) {
        text-align: left;
        align-items: flex-start;
    }
        
    
`

 const FooterTitle = styled.h3`
    margin: 0 0 12px;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${props => props.theme.colors.baseTextDark};
`
const FooterList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 18px;
`

const FooterItem = styled.li`
list-style: none`;

const FooterLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.baseTextDark};

    transition: .3s;

    &:hover {
        opacity: .7;
    }
`

const FooterText = styled.p`
    margin: 0;
    color: ${props => props.theme.colors.baseTextDark};
`

 const Copyright = styled.small`
    display: block;
    margin-top: 60px;
    padding-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.colors.borderColor};

    text-align: center;
    color: ${({ theme }) => theme.colors.secondaryText};
    font-size: 14px;
`

export const S = { StyledFooter,
    FooterItem,
    FooterLink,
    FooterColumn,
    FooterList,
    FooterTitle,
    FooterText,
    Copyright}