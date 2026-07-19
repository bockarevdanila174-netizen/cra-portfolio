import styled from "styled-components";

const StyledPortfolioCard = styled.div`
    width: 100%;
    max-width: 900px;

    background-color: #fff;
    border-radius: 16px;
    overflow: hidden;

    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

    transition: .3s;

    &:hover {
        transform: translateY(-5px);
    }

    &:hover img {
        transform: scale(1.03);
    }
`;

const ImageWrapper = styled.div`
    
`;

const Image = styled.img`
    width: 100%;
    display: block;

    transition: .4s;
`;

const CardContent = styled.div`
    padding: 30px;
`;

const CardTitle = styled.h3`
    font-size: 28px;
    font-weight: 600;

    margin-bottom: 15px;
`;

const CardDescription = styled.p`
    font-size: 16px;
    line-height: 1.6;

    color: ${props => props.theme.colors.accentText};

    margin-bottom: 25px;
`;
const StyledPortfolio = styled.section`
    background-color: ${props => props.theme.colors.secondaryBg};
    padding: 100px 0;
    @media (max-width: 768px){
        padding: 50px 0;
    }
`;

const PortfolioSubtitle = styled.p`
    text-align: center;
    margin: 80px 0 60px;

    font-size: 18px;
    line-height: 1.6;

    color: ${props => props.theme.colors.accentText};
`;

export const S = { StyledPortfolioCard,
    ImageWrapper,
    Image,
    CardContent,
    CardTitle,
    CardDescription,
    StyledPortfolio,
    PortfolioSubtitle };

