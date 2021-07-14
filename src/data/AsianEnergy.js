import React from "react";
import styled from "styled-components/macro";
import HomeThree from "../images/img8.jpg";

const Section = styled.section`
  width: 100%;
  height: 100;
  ${"" /* padding: 10rem calc((100vw - 1300px) / 2); */}
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  ${"" /* padding: 2rem 1rem; */}
`;
const Heading = styled.div`
  font-size: 1.5rem;
  ${"" /* padding: 2rem 1rem; */}
  margin-bottom: 40px;

  h1 {
    display: flex;
    justify-content: center;
    padding: 5rem 0 0 0;
  }

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
`;
const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  ${"" /* padding: 1rem 0rem; */}
  justify-content: space-around;
  margin: 0 200px 0 200px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const InfoWrap = styled.div`
  padding: 0rem 1rem;
  min-height: 550px;
  height: 100%;
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const AsianEnergy = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            Decoración Feng Shui para tu Hogar
          </h1>
        </Heading>
        <InfoRow>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            {/* <Image src={HomeOne} alt="home" /> */}

            <Image src={HomeThree} alt="home" />
            <h2>
              La decoración de tu hogar es esencial para armonizar el espacio y
              atraer la energía positiva a tu vida.
            </h2>

            <h3>
              1. Para lograr el equilibrio, en la decoración Feng Shui, se
              utilizan los 5 elementos básicos de la naturaleza: madera, fuego,
              tierra, agua y metal.
            </h3>
            <br />
            <p>
              Se busca la armonía y vibraciones positivas con cada elemento que
              se coloque en el diseño interior. Así mismo, la ubicación según
              los puntos cardinales, también juega un papel importante en el
              equilibrio del Yin y el Yan, las malas y buenas energías. Sigue
              estos sencillos consejos para armonizar tu casa y evitar flujos de
              energía negativa
            </p>
            <br />
            <h3>2. Protege el Chi</h3>
            <br />
            <p>
              El chi asociado a estos aspectos lo representa el Norte de tu
              hogar, y es por donde llegan las buenas oportunidades. Es
              importante hacer de este espacio un lugar que invite a estar, con
              flores, un tapete de bienvenida y mucha luz. Es la primera
              impresión que otros tendrán al llegar a tu casa.
            </p>
            <br />
            <h3>3. Crea un ambiente armonioso</h3>
            <br />
            <p>
              Para reducir tensiones y discusiones es importante colocar y
              encender cuatro velas de color verde el Este del salón principal.
            </p>
            <br />
            <h3>4. Evita drenar tu energía</h3>
            <br />
            <p>
              Es recomendable que tu cama no se encuentre entre una puerta y una
              ventana, y menos delante de un espejo, ya que estos absorben la
              energía personal.
            </p>
            <br />
            <h3>5. Coloca cuarzos y velas en esquinas o pasillos largos</h3>
            <br />
            <p>
              Estas se consideran zonas problemáticas que cortan la energía.
              Esto actuará como protección.
            </p>
            <br />
            <h3>6. Utiliza esta paleta de colores</h3>
            <br />
            <p>
              Utilizar tonos en color amarillo, mostaza o café atraerán la
              estabilidad, mientras que el gris o el plateado generan una
              energía de orden.
            </p>
            <br />
            <h3>
              7. Implementa la filosofía Ying-Yang en los espacios de tu hogar
            </h3>
            <br />
            <p>
              Crea espacios dirigidos a realizar actividades más energéticas
              como la cocina o el estudio, balanceándolas con otros de
              relajación como tu habitación o tu jardín.
            </p>
            {/* <h3>
              2619 N Broadway <br /> Los Angeles, California 90031
            </h3>
            <br />
            <br />
            <br />
            <br />
            <h3>
              (323) 247-9094 <br /> sales@lanayaritfurniture.com
            </h3> */}
            {/* <InfoLink to="/homes">
              <p>Ver Mas</p>
              <Arrow />
            </InfoLink> */}
            {/* <Image src={HomeThree} alt="home" />
            <h2>Comedores</h2>
            <InfoLink to="/homes">
              <p>Ver Mas</p>
              <Arrow /> */}
            {/* </InfoLink> */}
          </InfoWrap>
          {/* <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          > */}
          {/* <Image
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13219.034848151507!2d-118.22374474556887!3d34.07569910088133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd15fe4935319e285!2sLa%20Nayarit%20Furniture!5e0!3m2!1sen!2sus!4v1625958138842!5m2!1sen!2sus"
              width="600"
              height="450"
              // style="border:0;"
              // allowfullscreen=""
              // loading="lazy"
            /> */}
          {/* alt="home"
              css={`
                // margin-top: 120px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            /> */}
          {/* <h2>Recamaras</h2>
            <InfoLink to="/homes">
              <p>Ver Mas</p>
              <Arrow />
            </InfoLink> */}
          {/* </InfoWrap> */}
        </InfoRow>
      </Container>
    </Section>
  );
};

export default AsianEnergy;
