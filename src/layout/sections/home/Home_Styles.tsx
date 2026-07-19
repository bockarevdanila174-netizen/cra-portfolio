import styled from "styled-components";

const StyledHome = styled.section`
    background-color: ${props => props.theme.colors.primaryBg};
    display: flex;
    align-items: center;
    min-height: 500px;
    @media (max-width: 930px) {
        padding-bottom: 50px ;
    }
`

const SectionTextHome = styled.div`
    max-width: 500px;
`

const DescriptionHome = styled.p`
    text-align: left;
    display: block;
    font-size: 22px;
    color: ${props => props.theme.colors.accentText};
    @media screen and (max-width: 930px) {

    }
    @media (max-width: 768px) {
        font-size: 14px;
    }
`

const Avatar = styled.img`
    object-fit: cover;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    border: 1px solid rgba(130, 130, 130, 1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    
    @media screen and (max-width: 930px) {
        height: 300px;
        border-radius: 0;
        object-fit: cover;
        width: 100%;
        border: none;
        object-position: center 20%;
        margin-bottom: 30px;
    }
`;

const HomeTitle = styled.h1`
    color: ${props => props.theme.colors.accentText};
    font-size: 22px;
    text-align: left;
    padding-bottom: 10px;
    @media screen and (max-width: 768px) {
        font-size: 18px;

    }
`

const Name = styled.span`
    color: white;
    display: block;
    font-size: 72px;
    font-weight: 400;
    text-align: left;
    padding-bottom: 10px;
    @media screen and (max-width: 930px) {
        font-size: 52px;
    }
    @media screen and (max-width: 768px) {
        font-size: 32px;
    }
`
export const S = { StyledHome,
    SectionTextHome,
    DescriptionHome,
    Avatar,
    HomeTitle,
    Name };


