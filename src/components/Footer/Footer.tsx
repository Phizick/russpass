import React from "react";
import styled from "styled-components";
import vk from '../../images/vk.png';
import classes from '../../images/classes.png';
import dzen from '../../images/dzen.png'

import moscowLogo from "../../images/gerb_moskvy 1.png";

const FooterWrapper = styled.footer`
  position: relative;
  background-color: #000;
  color: #fff;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-direction: column;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  font-size: 20px;

  @media (max-width: 450px) {
    margin-bottom: 16px;
  }
`;


const ContactText = styled.div`
  font-weight: bold;
`;

const PartnersAndAboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100%;
  flex-direction: column;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const PartnersWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media (max-width: 450px) {
    margin-bottom: 16px;
  }
`;

const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media (max-width: 450px) {
    margin-bottom: 16px;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
 
  
`;

const LineDivider = styled.div`
  position: absolute;
  bottom: 104px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #808080;

  @media (max-width: 450px) {
    bottom: 64px;
  }
`;

const MoscowLogo = styled.img`
  width: 80px;
  margin-right: 16px;
`;

const PrivacyPolicy = styled.div`
  position: absolute;
  bottom: 64px;
  right: 32px;
  font-size: 16px;

  @media (max-width: 450px) {
    position: static;
    margin-top: 24px;
    text-align: center;
  }

  a {
    color: #fff;

    &:hover {
      color: #808080;
    }
  }
`;

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <MoscowLogo src={moscowLogo} alt="Moscow logo" />
            <span>Комитет по туризму</span>

        </FooterWrapper>
    );
};

export default Footer;