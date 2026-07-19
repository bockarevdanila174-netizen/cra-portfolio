import React from 'react';
import { useState } from "react";
import {Logo} from "../../components/logo/logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {BurgerButton} from "../../components/burger/BurgerButton.tsx";
import {S} from "./Header_Styles.ts";
export const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <S.Header>
            <Container>
                <FlexWrapper align="center"  justify="space-between">
          <Logo/>
            <Menu isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}/>
                    <BurgerButton onClick={() => setMenuOpen(!menuOpen)}
                                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                                  aria-expanded={menuOpen}
                                  aria-controls="main-menu"

                    >
                        <span></span>
                        <span></span>
                        <span></span>

                    </BurgerButton>
                </FlexWrapper>
            </Container>
        </S.Header>


    );
};


