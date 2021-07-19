import React from "react";
// import { IoMdArrowForward } from "react-icons/io";
// import { Link } from "react-router-dom";
import styled from "styled-components/macro";
// import HomeOne from "../images/img7.jpg";
// import HomeTwo from "../images/img2.jpg";
// import HomeThree from "../images/img4.jpg";
import HistoryOne from "../images/img51.png";
import HistoryTwo from "../images/img52.jpeg";
import HistoryThree from "../images/img53.jpg";

const Section = styled.section`
  width: 100%;
  height: 100%;
  ${"" /* padding: 10rem calc((100vw - 1300px) / 2); */}
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  ${"" /* padding: 2rem 1rem; */}
`;
// const Heading = styled.div`
//   font-size: 1.5rem;
//   ${"" /* padding: 2rem 1rem; */}
//   margin-bottom: 40px;

//   h1 {
//     display: flex;
//     justify-content: center;
//     padding: 1rem 0 0 0;
//   }

//   @media screen and (max-width: 768px) {
//     text-align: start;
//   }
// `;
const InfoRow = styled.div`
  ${
    "" /* display: flex;
  flex-direction: row; */
  }
  ${"" /* padding: 1rem 0rem; */}
  justify-content: space-around;
  margin: 0 200px 0 200px;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: column;
    justify-content: center;
  }
`;
const InfoWrap = styled.div`
  padding: 0rem 1rem 0rem 0rem;
  ${"" /* min-height: 550px; */}
  height: 100%;

  h2 {
    padding: 6rem 0 0 0;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    ${"" /* padding-right: 5rem; */}
    display: flex;
    flex-flow: column;
    justiy-content: flex-start;
  }
  @media screen and (max-width: 320px) {
    padding-right: 5rem;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  text-content: center;
  padding: 0 0 2rem 0;
  flex-wrap: wrap;
`;

const ImageWrap = styled.div`
  overflow: hidden;
  box-shadow: 0px 2px 8px 0px var(--clr-gray-light);
  background-color: white;
  text-align: center;
  border-radius: 1rem;
  position: relative;
  width: 280px;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: contain;
  ${
    "" /* margin-bottom: 0.5rem;
  margin-top: 5rem; */
  }
  @media screen and (max-width: 320px) {
    padding-right: 5rem;
  }
`;

/* @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    ${"" /* flex-direction: column; */
/* justify-content: center; */

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   max-width: 600px;
//   max-height: 400px;
//   object-fit: cover;
//   margin-bottom: 1rem;
// `;
// const InfoLink = styled(Link)`
// display: flex;
// align-items: center;
// text-decoration: none;
// color: #000d1a;
// width: 140px;
// transition: 0.3s

// &:hover {
//   transform: translateY(-2px)
// };`;
// const Arrow = styled(IoMdArrowForward)`
//   margin-left: 10px;
// `;

const HistoryBackground = () => {
  return (
    <Section>
      <Container>
        {/* <Heading> */}
        {/* <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            Todo lo que necesita para el hogar
          </h1> */}
        {/* </Heading> */}
        <InfoRow>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            {/* <Image src={HomeOne} alt="home" /> */}
            <h2>
              <strong>Nuestra Historia</strong>
            </h2>
            <p>
              Fundado por Jose y su esposa, La Nayarit Furniture fue creada con
              el enfoque de poder servir más de cerca las necesidades de
              nuestros residentes de Lincoln Heights y sus alrededores.
            </p>
            <br />

            <p>
              Para nosotros, los mas importante es siempre ofrecer muebles de la
              mas alta calidad a un precio que sea accesible para nuestra
              comunidad. Contamos con accesibles planes de financiamiento a su
              servicio, para poder asegurar que todo cliente que entre por
              nuestra puerta, tenga la opción de escoger y llevar a casa el
              articulo deseado.
            </p>
            <br />

            <p>
              Jose Sanchez llego de Mexico como la mayoría de personas, buscando
              una mejor opción para el y su familia. Al poco tiempo de haber
              llegado, se dio cuenta que nuestra comunidad latina, enfrenta
              muchos obstáculos en el camino hacia el sueño americano. Después
              de trabajar en el “Field” y la construcción por un corto periodo,
              tuvo la oportunidad de trabajar en una mueblería, primero como
              empacador y eventualmente como vendedor. Fue así como se dio
              cuenta que la mayoría de negocios en la industria, solo se
              enfocaban a ver a los clientes con signos de peso y no interesarse
              genuinamente por las persona, y después de ahorrar durante algunos
              años, en el 2001, el y su esposa abrieron las puertas de su propio
              negocio, con el enfoque en ayudar al cliente ofreciendo un
              excelente servicio y siempre poniendo las necesidades de el
              cliente primero.
            </p>
          </InfoWrap>
          <ImageContainer>
            <ImageWrap>
              <Image src={HistoryOne} alt="history" />
            </ImageWrap>
            <ImageWrap>
              <Image src={HistoryTwo} alt="history" />
            </ImageWrap>
            <ImageWrap>
              <Image src={HistoryThree} alt="history" />
            </ImageWrap>
          </ImageContainer>
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

export default HistoryBackground;
