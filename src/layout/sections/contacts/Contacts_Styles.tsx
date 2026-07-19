import styled from "styled-components";

const StyledContacts = styled.section`
//display: flex;
//    flex-direction: column;
//    align-items: center;
//    gap: 30px;
    padding: 100px 0 50px;
    @media (max-width: 768px) {
        padding-top: 70px;
    }
`
const ContactsText = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    //letter-spacing: 0%;
    text-align: center;
    padding: 30px 0;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 300px;
    width: 100%;
  margin-bottom: 40px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Message = styled.textarea`
  padding: 10px;
  min-height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
    resize: none;
`;


const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: black;
  color: white;
  cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #333;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(1px);
    }
    
`;
const ContactsButton = styled.button`
max-width: 180px;
    width: 100%;
    height: 42px;
    border-radius: 20px;
    color: white;
    background-color: black;
    border: none;
    margin-bottom: 85px;
    transition: all 0.3s ease;

    &:hover {
        background-color: #333;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(1px);
    }
`
const SocialIconsList = styled.ul`
display: flex;
    gap: 60px;
    margin-bottom: 45px;
    @media (max-width: 768px){
        gap: 30px;
    }
    @media (max-width: 356px){
    flex-wrap: wrap;
        justify-content: center;
}
   
`
const SocialIconItem = styled.li`
    //list-style: none;
`

const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
    color: #767676;
    transition: all 0.3s ease;

    &:hover {
        color: #000;
        transform: translateY(-3px);
    }
`
export const S = { StyledContacts,
    ContactsText,
    ContactForm,
    Input,
    Message,
    SubmitButton,
    ContactsButton,
    SocialIconsList,
    SocialIconItem,
    SocialIconLink };