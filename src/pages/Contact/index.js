import React from 'react';
import { SiGmail, SiWhatsapp } from 'react-icons/si';
import styled from 'styled-components';
import AppLayout from 'layouts/AppLayout';

const Contenedor = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 12px 5px rgba(201, 201, 201, 0.25);
  display: flex;
  margin: 1rem 2.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    margin: 1rem 2.5rem;
  }
`;

const DivImagen = styled.div`
  display: flex;
  flex-basis: 40%;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
    width: 75%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const DivContenido = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
  justify-content: center;
  margin: 0 auto;
  margin: 2rem 1rem;

  @media (max-width: 768px) {
    margin: 1rem;
    padding: 0rem 2rem;
  }
`;

const H1 = styled.h1`
  font-size: xx-large;
`;

const P = styled.p`
  font-size: large;
  font-weight: 100;
  line-height: 2rem;
  padding: 0rem 2rem;
  padding-top: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    line-height: 1.5rem;
    padding: 0;
    padding-top: 2rem;
  }
`;

const Span = styled.span`
  font-size: medium;
  font-weight: bold;
`;

const Title = styled.h1`
  background-color: #0353a4;
  color: #ffffff;
  font-size: xx-large;
  padding: 2rem 3rem;

  @media (max-width: 768px) {
    font-size: x-large;
    text-align: center;
  }
`;

const Presentation = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PresentationCard = styled.div`
  align-items: center;
  align-self: center;
  border-radius: 10px;
  box-shadow: 2px 2px 12px 5px rgba(201, 201, 201, 0.25);
  flex-basis: 32%;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    width: 55%;
  }
`;

const ImgCard = styled.img`
  border-radius: 150px;
  display: flex;
  margin: 0 auto;
  padding: 3rem;
`;

const CardInfo = styled.div`
  padding: 1rem 0rem;
`;

const Contact = () => {
  return (
    <AppLayout>
      <Contenedor>
        <DivContenido>
          <H1>Contáctanos</H1>
          <P>
            <Span>AlgoThinker</Span> está aquí para brindarle más información,
            responder cualquier pregunta que pueda tener y crear una solución
            efectiva para sus necesidades educativas.
          </P>
        </DivContenido>
        <DivImagen className='imagen'>
          <Img src='./assets/img/js.jpg' alt='hero' />
        </DivImagen>
      </Contenedor>
      <Title>Información de los programadores</Title>
      <Presentation>
        <PresentationCard>
          <ImgCard src='./assets/img/usuario.jpg' alt='programador' />
          <p style={{ fontSize: 'x-large' }}>Ricardo Badillo</p>
          <p style={{ fontSize: 'large', padding: '1rem 0rem' }}>
            Desarrollador Frontend
          </p>
          <CardInfo>
            <SiGmail style={{ fontSize: 'x-large' }} />
            <p style={{}}>ricardo@gmail.com</p>
          </CardInfo>
          <CardInfo>
            <SiWhatsapp style={{ fontSize: 'x-large' }} />
            <p>+58 414-xxxxxxx</p>
          </CardInfo>
        </PresentationCard>
        <PresentationCard>
          <ImgCard src='./assets/img/usuario.jpg' alt='programador' />
          <p style={{ fontSize: 'x-large' }}>Luis Barboza</p>
          <p style={{ fontSize: 'large', padding: '1rem 0rem' }}>
            Desarrollador Backend
          </p>
          <CardInfo>
            <SiGmail style={{ fontSize: 'x-large' }} />
            <p>luis@gmail.com</p>
          </CardInfo>
          <CardInfo>
            <SiWhatsapp style={{ fontSize: 'x-large' }} />
            <p style={{ color: 'white' }}>+58 412-xxxxxxx</p>
          </CardInfo>
        </PresentationCard>
        <PresentationCard>
          <ImgCard src='./assets/img/usuario.jpg' alt='programador' />
          <p style={{ fontSize: 'x-large' }}>José Bastidas</p>
          <p style={{ fontSize: 'large', padding: '1rem 0rem' }}>
            Desarrollador PWA
          </p>
          <CardInfo>
            <SiGmail style={{ fontSize: 'x-large' }} />
            <p>jose@gmail.com</p>
          </CardInfo>
          <CardInfo>
            <SiWhatsapp style={{ fontSize: 'x-large' }} />
            <p>+58 416-xxxxxxx</p>
          </CardInfo>
        </PresentationCard>
      </Presentation>
    </AppLayout>
  );
};

export default Contact;
