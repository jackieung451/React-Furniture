import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import ImageOne from "../images/img4.jpg";

// const Section = styled.section`
//   background: #000d1a;
//   padding: 12rem 0rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// const Container = styled.div`
//   background: #fff;
//   padding: 3rem 2rem;
//   position: relative;
// `;

// const Wrap = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
// `;
// const ColumnLeft = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin: 0px -15px;
//   justify-content: flex-start;
//   padding: 1rem;
// `;

// const Content = styled.div`
//   flex: 0 0 50%;

//   @media screen and (max-width: 768px) {
//     flex: 0 0 100%;
//     max-width: 100%;
//     margin-top: 250px;
//   }

//   h1 {
//     margin-bottom: 2rem;
//     font-size: 2 rem;
//   }

//   p {
//     margin-bottom: 1rem;
//     line-height: 1.5;
//   }
// `;
// const ColumnRight = styled.div`
//   position: absolute;
//   top: -80px;
//   right: 0;
//   max-width: 850px;
//   height: 140%;
//   width: 45%;
//   padding-left: 1rem;

//   @media screen and (max-width: 768px) {
//     height: 320px;
//     top: -65px;
//     width: 80%;
//     margin: 0 auto;
//     left: 0;
//   }
// `;
// const Image = styled.img`
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
// `;

// const Features = () => {
//   return (
//     <Section>
//       <Container>
//         <Wrap>
//           <ColumnLeft>
//             <Content
//               data-aos="fade-right"
//               data-aos-duration="1200"
//               data-aos-delay="300"
//               data-aos-once="true"
//               data-aos-anchor-placement="center bottom"
//             >
//               <h1>Stunning Interior</h1>
//               <p>Loerefasfasfasfdsafas</p>
//               <p>Lorwerewrfwewewfwa</p>
//               <Button to="/homes">Learn More</Button>
//             </Content>
//           </ColumnLeft>
//           <ColumnRight>
//             <Image
//               src={ImageOne}
//               data-aos="fade-left"
//               data-aos-duration="1200"
//               data-aos-once="true"
//               data-aos-anchor-placement="center bottom"
//             />
//           </ColumnRight>
//         </Wrap>
//       </Container>
//     </Section>
//   );
// };

// export default Features;

// import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
// import styled from "styled-components/macro";
import HomeOne from "../images/img7.jpg";
import HomeTwo from "../images/img2.jpg";
import HomeThree from "../images/img4.jpg";

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
    padding: 1rem 0 0 0;
  }

  @media screen and (max-width: 768px) {
    text-align: start;
  }
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

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
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
const InfoLink = styled(Link)`
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
`;

const Features = () => {
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
            {/* <Image src={HomeOne} alt="home" /> */}
            <h2>Nuestra Tienda</h2>
            <h3>
              2619 N Broadway <br /> Los Angeles, California 90031
            </h3>
            <br />
            <br />
            <br />
            <br />
            <h3>
              (323) 247-9094 <br /> sales@lanayaritfurniture.com
            </h3>
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
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13219.034848151507!2d-118.22374474556887!3d34.07569910088133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd15fe4935319e285!2sLa%20Nayarit%20Furniture!5e0!3m2!1sen!2sus!4v1625958138842!5m2!1sen!2sus"
              width="600"
              height="450"
              // style="border:0;"
              // allowfullscreen=""
              // loading="lazy"
            />
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
          </InfoWrap>
        </InfoRow>
      </Container>
    </Section>
  );
};

export default Features;
