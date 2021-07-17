import React from "react";
import styled from "styled-components/macro";
import HomeThree from "../images/img7.jpg";
import HomeTwo from "../images/img6.jpg";
import HomeOne from "../images/img5.jpg";

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
  ${
    "" /* display: flex;
  justify-content: center; */
  }
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

const IndustrialDesign = () => {
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
            Decoracion Industrial
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

            <p>
              Sí, lo sé, la decoración industrial tiene poco de natural. Pero un
              toque aquí y otro allá, siempre le aporta elegancia a cualquier
              interior.
            </p>
            <p>
              Predominantemente masculino, es un estilo que surgió en Nueva York
              durante la década de los 50, cuando jóvenes artistas comenzaron a
              instalarse en amplias y espaciosas fábricas abandonadas en busca
              de <strong>espacio</strong> y <strong>luz.</strong>
            </p>
            <Image src={HomeTwo} alt="home" />
            <br />
            <p>
              Con el tiempo, el estilo evolucionó en lo que hoy conocemos como{" "}
              <strong>lofts</strong>.
            </p>
            <br />
            <h3>1. Elementos estructurales a la vista</h3>
            <br />
            <p>
              La decoración de estilo industrial se caracteriza por no
              enmascarar ni ocultar los materiales de construcción y no tener
              miedo en mostrar sus estructuras al desnudo:
            </p>
            <ul>
              <li>Vigas de madera sin tratar</li>
              <li>Paredes de ladrillos vista</li>
              <li>Hierro y hormigón al descubierto</li>
              <li>Ventanas desnudas</li>
              <li>Tuberías y conductos de metal</li>
            </ul>
            <br />
            <Image src={HomeOne} alt="home" />
            <br />
            <h3>
              2. La decoración industrial es un estilo que se ha convertido en
              una de las mayores tendencias en el mundo del diseño de interiores
              de los últimos años. Paredes de ladrillos vistas, vigas de madera,
              muebles vintage…{" "}
            </h3>
            <p>
              No hay duda de que la decoración de estilo industrial seguirá
              siendo una de las grandes tendencias de este 2019.
            </p>
            <p>¿Te animas a darle un acento industrial a tu hogar?</p>

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

export default IndustrialDesign;
