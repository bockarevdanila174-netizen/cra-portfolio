import React from 'react';

import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from "./Skils_Styles.tsx"

const skillData = [
    { iconId:"html" , title: "HTML" },
    { iconId:"css" , title: "CSS" },
    { iconId: "js", title: "JavaScrip"},
    { iconId: "react", title: "React", },
    { iconId: "git", title: "Git"},
    { iconId: "git-hub", title: "GitHub" },
    { iconId: "vs-code", title: "VS Code" },
];

export const Skills:React.FC = () => {
    return (
        <S.StyledSkills id="skills">
            <Container>

            <SectionTitle>My Skills</SectionTitle>
                <S.SkillsSpan> Technologies I work with </S.SkillsSpan>

                <FlexWrapper
                    justify={"center"}
                    wrap={"wrap"}
                    gap={"30px"}

                >
                    {skillData.map((s, index)=>{
                        return <Skill  iconId={s.iconId} key={index} title={s.title} />


                    })}

            </FlexWrapper>
            </Container>

        </S.StyledSkills>
    );
};

