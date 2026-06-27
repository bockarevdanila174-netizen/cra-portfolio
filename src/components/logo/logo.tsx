// import React from 'react';

import styled from "styled-components";
// import {Icon} from "../icon/Icon.tsx";

export const Logo = () => {
    return (
        <a href="">
            {/*<Icon iconId ={'code'}/>*/}
            <LogoImage src="/favicon.svg" width={40} height={40} alt="logo"/>
        </a>
    );
};
const LogoImage = styled.img`
    border-radius: 50%;
    padding-top: 5px;
`

