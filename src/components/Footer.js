import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYelp } from "react-icons/fa";
import { ImPhone } from "react-icons/im";

const Section = styled.section`
  background: #323232;
  color: #fff;
  width: 100%;
  padding-top: 0;
  margin-top: 0;

  ${
    "" /* @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  } */
  }

  ${
    "" /* min-height: 600px;
  padding: 3rem FaCalculator((100vw - 1300px) / 2); */
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  ${"" /* height: 100px; */}
  background: -webkit-linear-gradient(left top, #53565a, #1d1d1d);
  background: -o-linear-gradient(bottom right, #53565a, #1d1d1d);
  background: -moz-linear-gradient(bottom right, #53565a, #1d1d1d);
  background: linear-gradient(to bottom right, #53565a, #1d1d1d);
  ${"" /* padding: 2rem; */}
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0rem 8rem;
  background: -webkit-linear-gradient(left top, #f06569, #6e0d10);
  background: -o-linear-gradient(bottom right, #f06569, #6e0d10);
  background: -moz-linear-gradient(bottom right, #f06569, #6e0d10);
  background: linear-gradient(to bottom right, #f06569, #6e0d10);
  ${"" /* padding: 4rem 0rem; */}

  @media screen and (max-width: 768px) {
    ${"" /* flex-direction: column; */}
    text-align: center;
    min-width: 300px;
    padding: 0rem 0.5rem;
  }

  @media screen and (max-width: 280px) {
    text-align: center;
    min-width: 300px;
    padding-right: 2rem;
  }
`;
const Quote = styled.div`
  flex: 1;
  padding-top: 10px;

  h5 {
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 0.75;
    margin-top: 1rem;
    font-weight: 200rem;
    color: #121212;
  }

  h6 {
    font-size: clamp(1rem, 8vw, 3rem);
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 0.75;
    margin-left: 3rem;
    ${
      "" /* padding-left: 6rem;
    padding-right: 0rem; */
    }

    @media screen and (min-width: 1024px) {
      justify-content: center;
      padding-left: 0rem;
      padding-right: 3rem;
      max-width: 100rem;
    }

    @media screen and (max-width: 768px) {
      line-height: 1;
    }
  }
  p {
    display: flex;
    justify-content: center;
    line-height: 2;
    margin: 0;
    padding: 0;
  }

  ${
    "" /* h3 {
    font-size: clamp(2rem, 8vw, 5rem);
  } */
  }
`;
const FooterInfo = styled.div`
  padding: 0rem 0rem 0rem 0rem;
  line-height: 3;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 500px;
  justify-content: space-around;
  margin: auto;
  
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  padding: 0rem 0rem 1rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 280px) {
    text-align: center;
    min-width: 300px;
    padding-left: 0.5rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1.5rem;
  color: #d41920;
`;
const Instagram = styled(FaInstagram)`
  ${Icons}
`;

const Facebook = styled(FaFacebookF)`
  ${Icons}
`;
// const LinkedIn = styled(FaLinkedinIn)`
//   ${Icons}
// `;
const Yelp = styled(FaYelp)`
  ${Icons}
`;

const Call = styled(ImPhone)`
  ${Icons}
  margin-top: 14px;
  margin-right: 8px;
`;

const Copyright = styled.div`
  display: flex;
  justify-content: center;
`;

const Contact = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop
          style={{
            backgroundColor: "#d41920",
          }}
        >
          <Quote>
            <h6>
              <strong>VISIT US</strong>
            </h6>
            <h5>
              <strong>HOURS</strong>
            </h5>
            <p>
              <strong>MON - SAT | 10AM - 7PM</strong>
            </p>
            <p>
              <strong>SUN | 10AM - 3PM</strong>
            </p>
            <h5>
              <strong>ADDRESS</strong>
            </h5>
            <p>
              <strong>2619 N Broadway Los Angeles, CA 90031</strong>
            </p>
            <p>
              <strong>(323) 247-9094</strong>
            </p>
          </Quote>
        </FooterTop>
        <FooterInfo>
          <Link to="/contact">Contact Us</Link>
          <Link to="/contact">FAQ</Link>
          <Link to="/contact">Support</Link>
          <Link to="/contact">Questions</Link>
        </FooterInfo>
        {/* <FooterInfo>
          <h4>Offices</h4>
          <Link to="/homes">United States</Link>
          <Link to="/homes">Europe</Link>
          <Link to="/homes">Canada</Link>
        </FooterInfo> */}

        <FooterBottom>
          <SocialIcons>
            <a
              href="https://www.facebook.com/LaNayaritFurniture/about"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/lanayaritfurniture/?hl=en"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              href="https://www.yelp.com/biz/la-nayarit-furniture-los-angeles"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Yelp />
            </a>
            {/* <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedIn />
            </a> */}
          </SocialIcons>

          {/* <Contact>
            <Button to="/homes">
              Let's Chat <IoMdArrowRoundForward />
            </Button>
          </Contact> */}
        </FooterBottom>
        <Copyright>
          <p>Copyright &copy; 2021</p>
        </Copyright>
      </Container>
    </Section>
  );
};

export default Footer;
