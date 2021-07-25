import React from "react";
import styled from "styled-components/macro";
import HomeThree from "../images/img91.jpg";

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
    padding: 5rem 0 0 0;
  }

  @media screen and (max-width: 768px) {
    justify-center: center;
    padding-left: 1rem;
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
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: column;
    justify-content: center;
  }
`;
const InfoWrap = styled.div`
  padding: 0rem 1rem;
  min-height: 550px;
  height: 100%;
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 1rem;
    font-weight: 350;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    min-width: 500px;
  }
  @media screen and (max-width: 500px) {
    min-width: 300px;
    padding-right: 2rem;
  }
  @media screen and (max-width: 320px) {
    min-width: 280px;
    padding-right: 5.5rem;
    padding-left: 0rem;
  }
  @media screen and (max-width: 280px) {
    min-width: 280px;
    padding-right: 7.5rem;
    padding-left: 0rem;
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
            <strong>Thanksgiving Decoration Ideas</strong>
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
            <h3>1. A Table In Earth Tones</h3>
            <br />
            <p>
              Following the characteristic color of autumn, we can put a brown
              tablecloth or a white tablecloth with individual tablecloths in
              brown tones. A good resource are esparto pieces or loneta, it is
              not expensive and the effect is very rustic. If the table is
              large, wide and wooden is perfect for not putting tablecloth and
              just supplement with some detail.
            </p>
            <br />
            <h3>2. Nature At The Thanksgiving Table</h3>
            <br />
            <p>
              Preparing centerpieces with dried flowers and handmade candles
              with dried flowers. With paraffin and dried leaves we will have
              some very nice candles. When we turn them on we will create that
              atmosphere so tender, warm and familiar that it transmits to us
              the flame of the candles.
            </p>
            <br />
            <h3>3. The Main Colors Can Be Brown, Orange, or Yellow</h3>
            <br />
            <p>
              Following the line we can make a detail for each diner and add a
              little sign with your name on it. For example, with a pineapple
              dry, of which at this time we find on the ground, a piece of paper
              similar to antiquity (With coffee and burning the edges) and a
              piece of thread we make a very simple detail and typical of the
              thanskgiving decoration.
            </p>
            <br />
            <h3>4. Decorate The Exteriors Of The House</h3>
            <br />
            <p>
              Place details at the entrance of the house, such as we can make an
              ornament for the door or we can also buy. Place some red apples,
              like the ones we find in the greengrocer and some dried leaves at
              the entrance. We make a figure with apples and will be a detail
              that surprises our beings dear ones before seeing the table we
              have prepared for action of Thank You.
            </p>
            <br />
            <h3>5. Prepare The Table With Autumnal Ornaments</h3>
            <br />
            <p>
              Another idea to surprise our family in action of thanks is
              preparing a table with autumn fruits, dried leaves, white
              candlesticks and, in the center of the table we can put a vase
              with (whole) branches that have been falling these days of the
              trees.
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
