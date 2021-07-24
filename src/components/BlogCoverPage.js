import React from "react";
import { IoMdArrowForward } from "react-icons/io";
// import {  } from "react-router-dom";
import styled from "styled-components/macro";
import ImageOne from "../images/img91.jpg";
import ImageTwo from "../images/img92.jpg";
import ImageThree from "../images/img93.jpg";
import ImageFour from "../images/img94.jpg";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  NavLink,
  Redirect,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import Thanksgiving from "../pages/Thanksgiving";
import FengShui from "../pages/FengShui";

const Section = styled.section`
  width: 100%;
  height: 100%;
  ${
    "" /* @media screen and (max-width: 768px) {
    padding: 5rem 0rem;
    margin-bottom: 1rem;
  } */
  }
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
//   margin-top: 0px;

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  grid-template-rows: 500px;
  justify-content: center;
  ${"" /* flex-direction: column; */}
  margin: 0 100px 0 100px;
  padding: 10rem 0rem 0rem 0rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    object-fit: contain;
  }
  ${"" /* padding: 1rem 0rem; */}

  ${"" /* margin: 0 200px 0 200px; */}

  ${
    "" /* @media screen and (max-width: 768px) {
    flex-direction: column;
  } */
  }
`;
const InfoWrap = styled.div`
padding: 0 0 10rem 0;
${
  "" /* display: flex;
flex-direction: row;
justify-content: space-around;
margin-bottom: 0rem;
align-items: center; */
}
${"" /* grid-template-columns: 1fr; */}
  ${"" /* padding: 10rem 10rem; */}
  ${"" /* margin-bottom: 10rem; */}
  ${"" /* min-height: 550px; */}
  ${"" /* height: 100%; */}
button {background: black;
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  ${"" /* transition: 0.3s; */}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;
  color: #fff;
  font-size: 20px;
  ${"" /* border-radius: 50px; */}

  &:hover {
    transform: translateY(-2px);
  }}

  h2 {
    margin-bottom: 0.5rem;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    ${
      "" /* margin: 10rem 0 0 0;
    padding: 15rem 0 10rem 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center; */
    }
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (max-width: 320px) {
    ${"" /* padding-right: 2rem; */}
    justify-content: center;
  }
  ${
    "" /* @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  } */
  }
`;
/* const BoxOne = styled.div`
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
const BoxTwo = styled.div`
  margin-bottom: 3rem;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  } ;
`;
const BoxThree = styled.div`
  margin-bottom: 3rem;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  } ;
`;
const BoxFour = styled.div`
  margin-bottom: 3rem;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  } ;
`; */

const Image = styled.img`
  width: 100%;
  height: 100%;

  max-width: 600px;
  max-height: 400px;

  object-fit: contain;
  margin-bottom: 0.5rem;
  margin-top: 5rem;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
    margin-top: 0rem;
    margin-bottom: 0rem;
    object-fit: contain;
  }
`;
/* const InfoLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
color: #000d1a;
width: 140px;
transition: 0.3s

&:hover {
  transform: translateY(-2px)
};`;
const Arrow = styled(IoMdArrowForward)`
  margin-left: 10px;
`; */

const BlogCoverPage = () => {
  let history = useHistory();

  return (
    <Section>
      <Container>
        {/* <Heading>
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              Todo lo que necesita para el hogar
            </h1>
          </Heading> */}
        <InfoRow>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image src={ImageOne} alt="home" />
            <h2>Ideas de Decoracion Thanksgiving</h2>
            {/* <NavLink to="../Thanksgiving">Ver Mas</NavLink>
              <Arrow /> */}
            <button
              onClick={() => {
                history.push("/thanksgiving");
              }}
            >
              {/* <Route path="/Thanksgiving" component={Thanksgiving} />
              <Redirect exact from="/BlogCoverPage" to="/Thanksgiving" /> */}
              {/* <button onClick={() => history.pushState("/Thanksgiving")}> */}
              Ver Mas
              {/* <p>Ver Mas</p>
              <Arrow /> */}
            </button>
            {/* <Image src={HomeThree} alt="home" />
            <h2>Comedores</h2>
            <InfoLink to="/homes">
              <p>Ver Mas</p>
              <Arrow /> */}
            {/* </InfoLink> */}

            {/* </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          > */}
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image src={ImageTwo} alt="home" />
            <h2>Decoracion Feng Shui para tu Hogar</h2>
            <button
              onClick={() => {
                history.push("/fengshui");
              }}
            >
              Ver Mas
            </button>
            {/* <Link to="../FengShui">Ver Mas</Link> */}
            {/* <InfoLink to="/FengShui">
              <p>Ver Mas</p>
              <Arrow />
            </InfoLink> */}
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image src={ImageThree} alt="home" />
            <h2>Decoracion Tendencias en Interiores</h2>
            <button
              onClick={() => {
                history.push("/interior");
              }}
            >
              Ver Mas
            </button>
            {/* <InfoLink to="/homes">
              <p>Ver Mas</p>
              <Arrow />
            </InfoLink> */}

            {/* </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          > */}
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image src={ImageFour} alt="home" />
            <h2>Decoracion Tendencias en Industrial</h2>
            <button
              onClick={() => {
                history.push("/industrial");
              }}
            >
              Ver Mas
            </button>
            {/* <InfoLink to="/homes">
              <p>Ver Mas</p>
              <Arrow />
            </InfoLink> */}
          </InfoWrap>
        </InfoRow>
      </Container>
    </Section>

    /* <Redirect from="/BlogCoverPage/" to="/Thanksgiving" /> */
    /* <Switch>
        {/* <Redirect path={`${path}/Thanksgiving`}>
          <Thanksgiving />
        </Redirect> */
    /* <Route path={`${path}/Thanksgiving`} component={Thanksgiving} /> */
    /* <Thanksgiving />
         <Redirect>
         
        {/* <Route path="/FengShui" component={FengShui} /> */
    /* <Route path="/FengShui" component={FengShui} /> */
    /* <FengShui />
        </Redirect> */
    /* </Switch> */
  );
};

export default BlogCoverPage;
