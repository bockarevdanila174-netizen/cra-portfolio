import styled from "styled-components";
const StyledAbout = styled.section`
    background-color: ${props => props.theme.colors.baseBg};
    padding: 80px 0;
    @media screen and (max-width: 930px){
        padding: 50px 0;
    }
`
const AboutText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.8;
    max-width: 380px;
    color: ${props => props.theme.colors.accentText};
@media screen and (max-width: 768px){
    font-size: 14px;
}
   
`
const AboutContent = styled.div`
    max-width: 450px;
    flex: 0 0 45%;
    @media (max-width: 768px){
        flex: 1 1 100%;
        
        
    }
    
`

const Title = styled.h3`
    display: block;
    font-size: 48px;
    font-weight: 500;
    margin: 20px 0;
    &::after{
        content: "";
        display: block;
        width: 40px;
        height: 2px;
        background-color: ${props => props.theme.colors.baseTextDark};

        margin-top:  35px ;
    }
    @media screen and (max-width: 930px){
        font-size: 32px;
    }
    
    
`



const Stats = styled.ul`
    width: 420px;
    flex: 0 0 40%;
    align-self: flex-start;
    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        //justify-content: center;
        gap: 70px;
        flex:1 1 100%;
    }
   
`

const StatCard = styled.li`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 24px;

    padding: 40px 0;

    &:not(:last-child) {
        border-bottom: 1px solid #e5e5e5;
    }


    @media (max-width: 768px) {
        flex: 1 1 10%;
        border-bottom: none;
        flex-wrap: wrap;
        //gap: 500px;
        justify-content: center;
        
        
            border-bottom: 1px solid #e5e5e5;
        
    }
    @media (max-width: 356px){
        justify-content: center;
    }
`

const IconWrapper = styled.div`
    width: 72px;
    height: 72px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 16px;
    background-color: ${props => props.theme.colors.secondaryBg};

    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
`

const StatInfo = styled.div``

const StatNumber = styled.span`
    display: block;
    font-size: 32px;
    font-weight: 600;
    color: ${props => props.theme.colors.baseTextDark};
    @media (max-width: 756px){
        display: flex;
        justify-content: center;
    }
`

const StatText = styled.span`
    font-size: 18px;
    color: ${props => props.theme.colors.accentText};
    @media (max-width: 756px){
        text-align: center;
        //padding-left: 10px;
    }
`
export const S = {
     StyledAbout,
    AboutText,
    AboutContent,
    Title,
    Stats,
    StatCard,
    IconWrapper,
    StatInfo,
    StatNumber,
    StatText,
};