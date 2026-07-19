import React from 'react';

import { Container } from "../../components/Container.ts";
import { FlexWrapper } from "../../components/FlexWrapper.tsx";
import {S} from "./Footer_Styles.tsx"

export const Footer:React.FC = () => {
    return (
        <S.StyledFooter>
            <Container>
                <FlexWrapper
                    justify="space-around"
                    mobileWrap="wrap"
                    gap="80px"
                    mobileAlign="flex-start"
                    mobileJustify="space-between"
                >
                    <S.FooterColumn>
                        <S.FooterTitle>EXPLORE</S.FooterTitle>

                        <S.FooterList>
                            <S.FooterItem>
                                <S.FooterLink href="#home">Home</S.FooterLink>
                            </S.FooterItem>
                            <S.FooterItem>
                                <S.FooterLink href="#about">About</S.FooterLink>
                            </S.FooterItem>

                            <S.FooterItem>
                                <S.FooterLink href="#skills">Skills</S.FooterLink>
                            </S.FooterItem>

                            <S.FooterItem>
                                <S.FooterLink href="#portfolio">Portfolio</S.FooterLink>
                            </S.FooterItem>

                            <S.FooterItem>
                                <S.FooterLink href="#contacts">Contacts</S.FooterLink>
                            </S.FooterItem>
                        </S.FooterList>
                    </S.FooterColumn>

                    <S.FooterColumn>
                        <S.FooterTitle>ABOUT</S.FooterTitle>

                        <S.FooterList>
                            <S.FooterItem>
                                <S.FooterText>Frontend Developer</S.FooterText>
                            </S.FooterItem>

                            <S.FooterItem>
                                <S.FooterText>React • TypeScript</S.FooterText>
                            </S.FooterItem>

                            <S.FooterItem>
                                <S.FooterText>Vite • Styled Components</S.FooterText>
                            </S.FooterItem>

                            <S.FooterItem>
                                <S.FooterText>Responsive Web Design</S.FooterText>
                            </S.FooterItem>
S.
                            <S.FooterItem>
                                <S.FooterText>Open to Work</S.FooterText>
                            </S.FooterItem>
                        </S.FooterList>
                    </S.FooterColumn>
                </FlexWrapper>

                <S.Copyright>
                    © 2026 Danila. All rights reserved.
                </S.Copyright>
            </Container>
        </S.StyledFooter>
    );
};



