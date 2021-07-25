import React from "react";
import styled from "styled-components/macro";
import HomeThree from "../images/img92.jpg";

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
            <strong>Feng Shui Decoration for Your Home</strong>
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
              <strong>
                The decoration of your home is essential to harmonize the space
                and attract positive energy to your life.
              </strong>
            </h2>

            <h3>
              1. To achieve balance, in Feng Shui decoration, it is they use the
              5 basic elements of nature: wood, fire, earth, water and metal.
            </h3>
            <br />
            <p>
              Harmony and positive vibrations are sought with each element that
              is placed in the interior design. Also, the location according to
              the cardinal points, also plays an important role in the balance
              of the Yin and the Yan, the bad and good energies. Go on these
              simple tips to harmonize your house and avoid flows of negative
              energy.
            </p>
            <br />
            <h3>2. Protect Chi</h3>
            <br />
            <p>
              The chi associated with these aspects is represented by the North
              of your home, and that's where the good opportunities come from.
              is important to make this space a place that invites you to be,
              with flowers, a welcome mat and lots of light. It is the first
              impression that others will have when they arrive at your home.
            </p>
            <br />
            <h3>3. Create A Harmonious Environment</h3>
            <br />
            <p>
              To reduce tensions and arguments it is important to place and
              light four green candles east of the main hall.
            </p>
            <br />
            <h3>4. Avoid Draining Your Energy</h3>
            <br />
            <p>
              It is recommended that your bed is not between a door and a
              window, and less in front of a mirror, since these absorb the
              personal energy.
            </p>
            <br />
            <h3>5. Place Quartz And Candles In Corners Or Long Corridors</h3>
            <br />
            <p>
              These are considered problem areas that cut off energy. This will
              act as protection.
            </p>
            <br />
            <h3>6. Use This Color Palette</h3>
            <br />
            <p>
              Using shades of yellow, mustard or brown will attract the
              stability, while grey or silver generate a power of order.
            </p>
            <br />
            <h3>
              7. Implement The Ying-Yang Philosophy In The Spaces Of Your Home
            </h3>
            <br />
            <p>
              Create spaces aimed at more energetic activities such as the
              kitchen or the studio, balancing them with others of relaxation
              like your room or your garden.
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
