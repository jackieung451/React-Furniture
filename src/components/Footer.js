import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Section = styled.section`
  background: #000d1a;
  color: #fff;
  width: 100%;
  ${
    "" /* min-height: 600px;
  padding: 3rem FaCalculator((100vw - 1300px) / 2); */
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  ${"" /* padding: 2rem; */}
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0rem 4rem;
  ${"" /* padding: 4rem 0rem; */}

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Quote = styled.div`
  flex: 1;
  padding: 2rem 0rem;

  h6 {
    font-size: clamp(2rem, 8vw, 5rem);
    display: flex;
    justify-content: center;
  }
  p {
    display: flex;
    justify-content: center;
    line-height: 3;
  }

  ${
    "" /* h3 {
    font-size: clamp(2rem, 8vw, 5rem);
  } */
  }
`;
const FooterInfo = styled.div`
  padding: 2rem;
  line-height: 3;

  display: flex;
  flex-direction: row;
  max-width: 700px;
  ${
    "" /* display: flex;
  flex-direction: row; */
  }
  justify-content: space-around;
  margin: auto;

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
  color: #cd853f;
`;
const Instagram = styled(FaInstagram)`
  ${Icons}
`;

const Facebook = styled(FaFacebookF)`
  ${Icons}
`;
const LinkedIn = styled(FaLinkedinIn)`
  ${Icons}
`;
const Youtube = styled(FaYoutube)`
  ${Icons}
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
        <FooterTop>
          <Quote>
            <h6>Open: Monday to Saturday </h6>
            <h6>10:00am - 7:00pm</h6>
            <h6>Sunday 10:00am - 3:00pm</h6>
            <p>2619 N Broadway Los Angeles, CA 90031</p>
            <p>Call Now 323.247.9094</p>
          </Quote>
        </FooterTop>
        <FooterInfo>
          <Link to="/contact">Contact Us</Link>
          <Link to="/homes">FAQ</Link>
          <Link to="/homes">Support</Link>
          <Link to="/homes">Questions</Link>
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
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Youtube />
            </a>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedIn />
            </a>
          </SocialIcons>
          {/* <Contact>
            <Button to="/homes">
              Let's Chat <IoMdArrowRoundForward />
            </Button>
          </Contact> */}
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
