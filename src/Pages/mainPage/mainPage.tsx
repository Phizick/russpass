import React from 'react';
import styled from 'styled-components';
import {MainContent} from "../../components/Main/Main";
import {HeaderItem} from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../Utils/ScrollToTop/ScrollToTop";
import {Link} from "react-router-dom";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ContinueButton = styled.button<{ active?: boolean }>`
  font-size: 18px;
  padding: 10px;
  background-color: ${(props) => (props.active ? '#FFCF08' : '#ccc')};
  border: none;
  color: black;
  cursor: ${(props) => (props.active ? 'pointer' : 'not-allowed')};
  width: 600px;
  height: 48px;
  border-radius: 12px;
  margin: 50px auto; 
 
`;



const HomePage: React.FC = ()  => {


    return (
        <>
            <ScrollToTop/>
        <Container>
           <HeaderItem/>
            <h1 style={{
                margin: `0 auto`,
                height: `92px`,
                width: `1288px`,
                background: `url("../../images/shade.png")`,
                border: `1px solid #EFF7FB`,
                borderRadius: `12px`,
                alignItems: `center`,
                display: `flex`,
                justifyContent: `center`
            }}>Путешествия по России начинаются здесь</h1>
            <MainContent/>
            <Link to={'/tours'}>
                <ContinueButton active={true}>
                    Продолжить
                </ContinueButton>
            </Link>
        </Container>
        <Footer/>
            </>
    );
};

export default HomePage;