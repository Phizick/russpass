import React from "react";
import styled from "styled-components";
import Places from "../../components/Places/Places";
import {HeaderItem} from "../../components/Header/Header";
import NavBar from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";



const ToursHeading = styled.h1`
  margin: 0 auto;
  height: 92px;
  width: 1288px;
  background: url("../../images/shade.png");
  border: 1px solid #eff7fb;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PLacesPage: React.FC = () => {
    return (
        <>
            <HeaderItem/>
            <ToursHeading>Выбирайте заинтересовавшие вас активности</ToursHeading>
            <NavBar/>
            <Places/>
            <Footer/>
        </>
    );
};

