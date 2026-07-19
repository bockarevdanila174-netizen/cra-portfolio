import React from 'react';


import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {S} from "./About_Styles.ts";
export const About: React.FC = () => {
    return (
        <S.StyledAbout id="about">
            <Container>
                <FlexWrapper
                    justify="space-between"
                    align="flex-start"
                    wrap="wrap"
                    mobileWrap="wrap"
                >

                    <S.AboutContent>
                        <SectionTitle align={"left"}>ABOUT ME</SectionTitle>

                        <S.Title>Hi, I'm Danila</S.Title>



                        <S.AboutText>
                            Frontend Developer from Rostov-on-Don.
                        </S.AboutText>

                        <S.AboutText>
                            I'm interested in coding and everything connected with it.
                        </S.AboutText>

                        <S.AboutText>
                            I'm studying at courses "Frontend" in IT-Incubator.
                        </S.AboutText>

                        <S.AboutText>
                            Ready to implement excellent projects with wonderful people.
                        </S.AboutText>
                    </S.AboutContent>

                    <S.Stats>

                        <S.StatCard>
                            <S.IconWrapper>
                                <Icon iconId="calendar" />
                            </S.IconWrapper>

                            <S.StatInfo>
                                <S.StatNumber>2+</S.StatNumber>
                                <S.StatText>Years Experience</S.StatText>
                            </S.StatInfo>
                        </S.StatCard>

                        <S.StatCard>
                            <S.IconWrapper>
                                <Icon iconId="briefcase" />
                            </S.IconWrapper>

                            <S.StatInfo>
                                <S.StatNumber>15+</S.StatNumber>
                                <S.StatText>Completed Projects</S.StatText>
                            </S.StatInfo>
                        </S.StatCard>

                        <S.StatCard>
                            <S.IconWrapper>
                                <Icon iconId="star" />
                            </S.IconWrapper>

                            <S.StatInfo>
                                <S.StatNumber>100%</S.StatNumber>
                                <S.StatText>Passion for Development</S.StatText>
                            </S.StatInfo>
                        </S.StatCard>

                    </S.Stats>

                </FlexWrapper>
            </Container>
        </S.StyledAbout>
    );
};
