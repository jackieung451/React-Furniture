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
    padding: 0rem 0 0 0;
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

const Celebration = () => {
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
            Ideas de Decoracion Thanksgiving
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
            <h3>1. Una mesa en tonos tierra</h3>
            <br />
            <p>
              Siguiendo el color característico del otoño, podemos poner un
              mantel marrón o un mantel blanco con manteles individuales en
              tonos marrones. Un buen recurso son las piezas de esparto o
              loneta, no es caro y el efecto es muy rústico. Si la mesa es
              grande, ancha y de madera es perfecto para no poner mantel y
              simplemente complementar con algún detalle.
            </p>
            <br />
            <h3>2. Naturaleza en la mesa de acción de gracias</h3>
            <br />
            <p>
              Preparando centros de mesa con flores secas y velas hechas a mano
              con flores secas. Con parafina y hojas secas nos quedarán unas
              velas muy bonitas. Cuándo las encendamos crearemos ese ambiente
              tan tierno, cálido y familiar que nos trasmite la llama de las
              velas.
            </p>
            <br />
            <h3>
              3. Los colores protagonistas pueden ser los marrones, anaranjados
              o amarillos{" "}
            </h3>
            <br />
            <p>
              Siguiendo la línea podemos hacer un detalle para cada comensal y
              añadirle un cartelito con su nombre. Por ejemplo, con una piña
              seca, de las que en esta época encontramos por el suelo, un trozo
              de papel semejando antigüedad (Con café y quemando los bordes) y
              un trozo de hilo hacemos un detalle muy sencillo y propio de la
              decoración de Thanskgiving.
            </p>
            <br />
            <h3>4. Adornar los exteriores de casa</h3>
            <br />
            <p>
              Colocar detalles en la entrada de la casa, como por ejemplo
              podemos hacer un adorno para la puerta o también se pueden
              comprar. Colocar unas manzanas rojas, como las que encontramos en
              la frutería y unas hojas secas en la entrada. Hacemos una figura
              con las manzanas y será un detalle que sorprenda a nuestros seres
              queridos antes de ver la mesa que tenemos preparada para acción de
              gracias.
            </p>
            <br />
            <h3>5. Preparar la mesa con adornos Otoñales</h3>
            <br />
            <p>
              Otra de las ideas para sorprender a nuestra familia en acción de
              gracias es preparando una mesa con frutas de otoño, hojas secas,
              velas blancas y, en el centro de la mesa podemos poner un jarrón
              con ramas (enteras) que hayan estado cayendo estos días de los
              árboles.
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

export default Celebration;
