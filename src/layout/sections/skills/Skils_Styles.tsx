import styled from "styled-components";

const StyledSkills = styled.section`
    background-color: ${props => props.theme.colors.secondaryBg};
    padding: 100px 0 50px;
   
`
const SkillsSpan = styled.span`
display: block;
    font-size: 48px;
font-weight: 500;
    text-align: center;
    margin: 80px 0 60px;
    @media screen and (max-width: 768px) {
        font-size: 32px;
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
`
const StyledSkill = styled.div`
    max-width: 130px;
    width: 100%;
    height: 130px;
    color: ${props => props.theme.colors.accentText};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 16px;

    border-radius: 16px;
    background: #fff;

    box-shadow: 0 4px 20px rgba(0,0,0,0.05);

    transition: .3s;

    &:hover {
        transform: translateY(-5px);
    }

    svg {
        width: 48px;
        height: 48px;
    }
`
const SkillTitle = styled.span`
    margin: 0;

    font-size: 14px;
    font-weight: 500;

    color: ${props => props.theme.colors.baseTextDark};
`
export const S = { StyledSkills,
    SkillsSpan,
    StyledSkill,
    SkillTitle };