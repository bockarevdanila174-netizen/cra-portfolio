import React from 'react';
import avatar from "../../../assets/images/avatar.png";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from "./Home_Styles.tsx";

export const Home: React.FC = () => {
    return (

        <S.StyledHome id="home">
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap-reverse"}>
                    <S.SectionTextHome>
                        <S.HomeTitle>
                            REACT FRONTEND DEVELOPER
                        </S.HomeTitle>
                        <S.Name>
                            Danila Bochkarev
                        </S.Name>
                        <S.DescriptionHome>
                            I build modern and responsive web applications with clean code and great user experience.
                        </S.DescriptionHome>
                    </S.SectionTextHome>
                    <S.Avatar src={avatar} alt="avatar"/>
                </FlexWrapper>
            </Container>
        </S.StyledHome>

    );
};
