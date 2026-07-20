import React from 'react';

import { Container } from "../../components/Container.ts";
import { FlexWrapper } from "../../components/FlexWrapper.tsx";
import {S} from "./Footer_Styles.tsx"

const footerItemData = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "Contacts", href: "#contacts" },
];

const footerListData = [
    { title:"Frontend Developer"},
    { title:"React • TypeScript"},
    { title:"Vite • Styled Components"},
    { title:"Responsive Web Design"},
    { title:"Open to Work"},

]

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

                        {footerItemData.map((i, index) => (
                            <S.FooterItem key={index}>
                                <S.FooterLink href={i.href}>{i.title}</S.FooterLink>
                            </S.FooterItem>
                        ))}

                    </S.FooterColumn>

                    <S.FooterColumn>
                        <S.FooterTitle>ABOUT</S.FooterTitle>

                        {footerListData.map((l,index) => (


                            <S.FooterItem key={index}>
                            <S.FooterText>{l.title}</S.FooterText>
                            </S.FooterItem>
                        ))}
                    </S.FooterColumn>
                </FlexWrapper>

                <S.Copyright>
                    © 2026 Danila. All rights reserved.
                </S.Copyright>
            </Container>
        </S.StyledFooter>
    );
};



