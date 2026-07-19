import React from 'react';
import {S} from "../Portfolio_Styles.tsx"

type PortfolioCardPropsType = {
    title: string;
    description: string;
    image: string;

};

export const PortfolioCard:React.FC<PortfolioCardPropsType> = ( props: PortfolioCardPropsType) => {
    return (
        <S.StyledPortfolioCard>

            <S.ImageWrapper>
                <S.Image src={props.image} alt={props.title} />
            </S.ImageWrapper>

            <S.CardContent>
                <S.CardTitle>{props.title}</S.CardTitle>

                <S.CardDescription>
                    {props.description}
                </S.CardDescription>


            </S.CardContent>

        </S.StyledPortfolioCard>
    );
};

