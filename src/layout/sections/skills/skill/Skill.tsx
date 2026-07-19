import React from 'react';
import {S} from "../Skils_Styles.tsx"

import {Icon} from "../../../../components/icon/Icon.tsx";
type SkillPropsType = {
    iconId: string,
    title: string,



}

export const Skill:React.FC <SkillPropsType>= (props: SkillPropsType) => {
    return (

            <S.StyledSkill>
            <Icon iconId={props.iconId}/>

            <S.SkillTitle>{props.title}</S.SkillTitle>
        </S.StyledSkill>

    );
};

