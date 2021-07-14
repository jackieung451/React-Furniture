import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import HomeOne from "../images/img31.jpg";
import HomeTwo from "../images/img32.jpg";
import HomeThree from "../images/img4.jpg";

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
const Heading = styled.div`
  font-size: 1.5rem;
  ${"" /* padding: 2rem 1rem; */}
  margin-bottom: 40px;

  h1 {
    display: flex;
    justify-content: center;
    padding: 1rem 0 0 0;
  }

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;
const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 800px;
  ${
    "" /* display: flex;
  flex-direction: row; */
  }
  ${"" /* padding: 1rem 0rem; */}
  justify-content: space-around;
  margin: 0 100px 0 100px;

  @media screen and (max-width: 768px) {
    ${
      "" /* flex-direction: column;
    object-fit: cover; */
    }
    object-fit: contain;
    grid-template-columns: 1fr;
  }
`;
const InfoWrap = styled.div`
  padding: 0rem 1rem;
  min-height: 550px;
  height: 100%;

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    ${"" /* margin-bottom: 1rem; */}
    display: flex;
    flex-direction: column;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  ${
    "" /* max-width: 600px;
  max-height: 400px; */
  }
  object-fit: contain;
  margin-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    ${"" /* background-size: cover; */}
    object-fit: cover;
  }
`;
const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000d1a;
  width: 140px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 1rem;
  } ;
`;
const Arrow = styled(IoMdArrowForward)`
  margin-left: 10px;
  ${"" /* margin-bottom: 1rem; */}
`;

const Listings = () => {
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
            Todo lo que necesita para el hogar
          </h1>
        </Heading>
        <InfoRow>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image src={HomeOne} alt="home" />
            <h2>Salas</h2>
            <InfoLink to="/homes">
              <p>Ver Mas</p>
              <Arrow />
            </InfoLink>
            {/* <Image src={HomeThree} alt="home" />
            <h2>Comedores</h2>
            <InfoLink to="/homes">
              <p>Ver Mas</p>
              <Arrow /> */}
            {/* </InfoLink> */}
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image
              src={HomeTwo}
              alt="home"
              css={`
                // margin-top: 120px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                  // display: flex;
                  // flex-direction: column;
                  // justify-content: center;
                  // align-items: flex-start;
                  // order: 1;
                }
              `}
            />
            <h2>Recamaras</h2>
            <InfoLink to="/homes">
              <p>Ver Mas</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
        </InfoRow>
      </Container>
    </Section>
  );
};

export default Listings;
