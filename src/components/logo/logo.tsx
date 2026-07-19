// import React from 'react';

// import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
// import styled from "styled-components";

export const Logo = () => {
    return (
        <LogoLink href="/" aria-label="Home page">
            <Icon iconId={'logo'} />
        </LogoLink>
    );
};
const LogoLink = styled.a`
display: flex;
    align-items: center;
    height: 100%;
    //border: 2px solid green;
`
