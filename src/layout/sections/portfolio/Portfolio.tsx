import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {PortfolioCard} from "./portfolioCard/PortfolioCard.tsx";
import fashionImg from "../../../assets/images/fashion.png"
import reebokImg from "../../../assets/images/reebok.png"
import braunImg from "../../../assets/images/braun.svg"
import {Container} from "../../../components/Container.ts";
import {S} from "./Portfolio_Styles.tsx"



export const Portfolio: React.FC = () => {
    return (
        <S.StyledPortfolio id="portfolio">
            <Container>

                <SectionTitle>Portfolio</SectionTitle>

                <S.PortfolioSubtitle>
                    Some projects I've built while learning frontend development
                </S.PortfolioSubtitle>

                <FlexWrapper
                    justify="center"
                    wrap="wrap"
                    gap="40px"
                >
                    <PortfolioCard
                        title="Fashion Store"
                        description="E-commerce landing page built with React and TypeScript."
                        image={fashionImg}

                    />

                    <PortfolioCard
                        title="Reebok Store"
                        description="Responsive online store concept with modern UI."
                        image={reebokImg}

                    />

                    <PortfolioCard
                        title="Braun Landing Page"
                        description="Clean product landing page with adaptive layout."
                        image={braunImg}

                    />
                </FlexWrapper>

            </Container>
        </S.StyledPortfolio>
    );
};

