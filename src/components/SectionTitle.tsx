// import React from 'react';

import styled from "styled-components";

export const SectionTitle = styled.h2 <{align?: string}>`
text-align: ${props => props.align || "center"};
   
    margin: 0;
    color: ${props => props.theme.colors.accentText};
    font-size: 22px;
    text-transform: uppercase;
    
    
    
`