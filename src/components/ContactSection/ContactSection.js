import React, { useRef } from "react";
import { IconContext } from "react-icons/lib";

import {
  ContactForm,
  SectionContact,
  ContactContainer,
  ContactInfo,
  ContactTopLine,
  ContactData,
  ContactTitle,
  FormForm,
  FormInput,
  FormTextArea,
  SocialContainer,
  SocialMedias,
  IconGithub,
  IconLinkedin,
  SocialName,
  FormSubmit,
  LinkSocialOne,
  LinkSocialTwo,
} from "./ContactSection.elements";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ght1kuc",
        "template_hn7o3ct",
        form.current,
        "mF0AEJ7hUrT8p8NZf"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email enviado com sucesso,aguarde!")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#57bdd1", size: 70 }}>
        <SectionContact>
          <ContactTitle>Entre em Contato</ContactTitle>
          <ContactContainer>
            <ContactForm>
              <FormForm ref={form} onSubmit={sendEmail}>
                <FormInput
                  type="text"
                  name="user_name"
                  placeholder="Julio Lopes"
                />
                <FormInput
                  type="email"
                  name="user_email"
                  placeholder="suporteneuapps@gmail.com"
                />
                <FormTextArea name="message" placeholder="Message" />
                <FormSubmit type="submit" value="Enviar Mensagem" />
              </FormForm>
            </ContactForm>

            <ContactInfo>
              <ContactTopLine>
                Tenho interesse em projetos freelancers, caso queira entrar em contato para tirar dúvida ou solicitar ajuda, não tenha vergonha me mande um e-mail.
              </ContactTopLine>
              <ContactData>Phone: 71 987417165</ContactData>
              <ContactData>
                {" "}
                Email: vanessashirleneestrela@gmail.com
              </ContactData>
              <SocialContainer>
                <LinkSocialOne
                  target={"_blank"}
                  href="https://github.com/NeuVanessa"
                  rel="noreferrer"
                >
                  <SocialMedias>
                    <IconGithub></IconGithub>
                    <SocialName>Github</SocialName>
                  </SocialMedias>
                </LinkSocialOne>

                <LinkSocialTwo
                  target={"_blank"}
                  href="https://www.linkedin.com/in/vanessa-lopes-798077128/"
                  rel="noreferrer"
                >
                  <SocialMedias>
                    <IconLinkedin></IconLinkedin>
                    <SocialName>Linkedin</SocialName>
                  </SocialMedias>
                </LinkSocialTwo>
              </SocialContainer>
            </ContactInfo>
          </ContactContainer>
        </SectionContact>
      </IconContext.Provider>
    </>
  );
};

export default ContactSection;
