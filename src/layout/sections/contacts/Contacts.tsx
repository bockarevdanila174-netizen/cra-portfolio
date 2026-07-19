

import { useState } from "react";
import { SectionTitle } from "../../../components/SectionTitle.tsx";
import { Icon } from "../../../components/icon/Icon.tsx";
import { Container } from "../../../components/Container.ts";
import { FlexWrapper } from "../../../components/FlexWrapper.tsx";
import {S} from "./Contacts_Styles.tsx";

export const Contacts = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <S.StyledContacts id="contact">
            <Container>
                <FlexWrapper
                    direction="column"
                    align="center"
                    justify="center"
                >
                    <SectionTitle>Contacts</SectionTitle>

                    <S.ContactsText>
                        Want to know more or just chat? <br />
                        You are welcome!
                    </S.ContactsText>

                    {!showForm ? (
                        <S.ContactsButton
                            onClick={() => setShowForm(true)}
                        >
                            Send message
                        </S.ContactsButton>
                    ) : (
                        <S.ContactForm>
                            <S.Input
                                type="text"
                                placeholder="Your name"
                            />

                            <S.Input
                                type="email"
                                placeholder="Your email"
                            />

                            <S.Message
                                placeholder="Your message"
                            />

                            <S.SubmitButton type="submit">
                                Send
                            </S.SubmitButton>
                        </S.ContactForm>
                    )}

                    <S.SocialIconsList>
                        <S.SocialIconItem>
                            <S.SocialIconLink
                                aria-label="linkedin"
                                href="https://linkedin.com"
                                target="_blank"
                            >
                                <Icon iconId="linkedIn" />
                            </S.SocialIconLink>
                        </S.SocialIconItem>

                        <S.SocialIconItem>
                            <S.SocialIconLink
                                aria-label="instagram"
                                href="https://instagram.com"
                                target="_blank"
                            >
                                <Icon iconId="instagram" />
                            </S.SocialIconLink>
                        </S.SocialIconItem>

                        <S.SocialIconItem>
                            <S.SocialIconLink
                                aria-label="behance"
                                href="https://behance.net"
                                target="_blank"
                            >
                                <Icon iconId="behance" />
                            </S.SocialIconLink>
                        </S.SocialIconItem>

                        <S.SocialIconItem>
                            <S.SocialIconLink
                                aria-label="dribbble"
                                href="https://dribbble.com"
                                target="_blank"
                            >
                                <Icon iconId="dribble" />
                            </S.SocialIconLink>
                        </S.SocialIconItem>
                    </S.SocialIconsList>


                </FlexWrapper>
            </Container>
        </S.StyledContacts>
    );
};
