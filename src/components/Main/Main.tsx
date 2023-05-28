import React from "react";
import styled from "styled-components";
import b2b from '../../images/b2b.png';
import baikal from '../../images/байкал.png';
import family from '../../images/family.png';
import lovers from '../../images/lovers.png';

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  gap: 24px;
  padding: 104px 32px;
  border-radius: 20px;
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.06);
  border: 1px solid #EBEBEB;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 0.5rem;
  color: #FFFFFF;
  z-index: 2;
`;

const Subtitle = styled.p`
  font-size: 1rem;  
  z-index: 2;
  color: rgba(255, 255, 255, .6);
  text-align: center;
  margin-bottom: 24px;
  height: 25px;
  overflow: hidden;
`;

const BackgroundImage = styled.div<{ imageUrl: string }>`
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  height: 100%;
  border-radius: 20px;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const Frame = styled.div`
  background-color: #f2f2f2;
  border-radius: 20px;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 2rem;
  width: 288px;
  height: 348px;
`;

const FrameContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  height: 100%;
  justify-content: space-between;
`;
export const MainContent: React.FC = () => {



    return (
        <Main>
            <Frame>
                <BackgroundImage imageUrl={baikal}>
                    <Overlay />
                    <FrameContent>
                        <Title>Отдых на природе
                            наедине с собой</Title>
                        <Subtitle>Озеро байкал</Subtitle>
                    </FrameContent>
                </BackgroundImage>
            </Frame>
            <Frame>
                <BackgroundImage imageUrl={lovers}>
                    <Overlay />
                    <FrameContent>
                        <Title>Путешествие
                            для влюбленных</Title>
                        <Subtitle>Черное море</Subtitle>
                    </FrameContent>
                </BackgroundImage>
            </Frame>
            <Frame>
                <BackgroundImage imageUrl={family}>
                    <Overlay />
                    <FrameContent>
                        <Title>Каникулы
                            для всей семьи</Title>
                        <Subtitle>Белоозерский</Subtitle>
                    </FrameContent>
                </BackgroundImage>
            </Frame>
            <Frame>
                <BackgroundImage imageUrl={b2b}>
                    <Overlay />
                    <FrameContent>
                        <Title>Командировка
                            с комфортом</Title>
                        <Subtitle>Киргизстан</Subtitle>
                    </FrameContent>
                </BackgroundImage>
            </Frame>

        </Main>
    )
}