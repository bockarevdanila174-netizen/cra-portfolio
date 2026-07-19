// import React from 'react';

import styled from "styled-components";
type FlexContainerPropsType = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?:string;
    gap?:string;
    mobileWrap?: string;
    mobileAlign?: string;
    mobileJustify?: string;
}

export const FlexWrapper = styled.div< FlexContainerPropsType>`
display: flex;
    flex-direction:${props => props.direction || "row"} ;
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "0"};
    @media (max-width:768px){
        align-items: ${props => props.mobileAlign || "center"};
        flex-wrap: ${props => props.mobileWrap || props.wrap || "nowrap"};
    }
    @media (max-width:375px){
        justify-content: ${props => props.mobileJustify};

    }
//width: 100%;
//    height: 100%;
`

