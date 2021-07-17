import React from "react";
import styled from "styled-components/macro";
import HomeThree from "../images/img7.jpg";

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
  p {
    display: flex;
    justify-content: center;
    padding: 5rem 0 0 0;
  }
  ul {
    padding: 2rem;
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

const InteriorDesign = () => {
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
            Decoracion Tendencias en Interiores
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
            <h3>1. Estilo nórdico predominaba en términos de decoración </h3>
            <br />
            <h2>
              Ahora se busca romper con la neutralidad de los espacios nórdicos
              combinándolo con piezas modernas y tapizados mas arriesgados.
            </h2>
            <h2>Para ello puedes usar:</h2>
            <br />
            <ul>
              <li>
                <strong>Corcho</strong>: se suele usar en la fabricación de
                muebles, pero también para revestir paredes, además sirve para
                aislar del ruido en ciertas zonas de nuestro hogar como la
                habitación de los más pequeños.
              </li>
              <li>
                <strong>Baldosas</strong>: como decíamos, se dejan de lado los
                tonos fríos y nada mejor que las baldosas de terracota con
                acabado mate para ello. No sólo sirven para el suelo ya que
                también pueden usarse para revestir paredes o chimeneas.
              </li>
              <li>
                <strong>Cabeceros tapizados</strong>: actualmente se usan
                cabeceros de madera lisa o con algún detalle, pero próximamente
                veremos cómo los tapizados, tanto los clásicos con botones y
                tonos neutros, como los de terciopelo, se irán imponiendo poco a
                poco.
              </li>
            </ul>
            <br />
            <h3>2. Decoración de interiores en salones modernos</h3>
            <br />
            <p>
              En los salones modernos, se buscan colores que ayuden a dar más
              amplitud a la estancia. Esto se puede conseguir con colores
              frescos y neutros.
            </p>
            <p>
              Aunque se pueden llegar a{" "}
              <strong>mezclar hasta tres colores en un salón</strong>, siempre
              habrá uno que predomine sobre el resto y los demás servirán para
              embellecer la estancia.
            </p>
            <p>
              Algunos colores que veremos dentro de poco resaltando salones de
              todo el mundo serán:
            </p>
            <ul>
              <li>
                <strong>Inspirados en el universo</strong>: colores como el
                morado, azul o metálicos.
              </li>
              <li>
                <strong>Verde oscuro</strong>: aporta profundidad a las
                habitaciones y combina bien con el blanco y colores neutros como
                el beige.
              </li>
              <li>
                <strong>Rosa o fucsia</strong>: darán el toque brillante en un
                salón donde el blanco sea el color principal.
              </li>
            </ul>
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

export default InteriorDesign;
