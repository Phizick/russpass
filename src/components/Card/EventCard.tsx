import React from 'react';
import styled from 'styled-components';
import kindle from '../../images/kindle.png'


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  padding: 10px; 
  transition: all 0.3s ease;
  background: #F5F5F5;
  border: 1px solid #F5F5F5;   
  border-radius: 20px;
  width: 392px;
  height: 306px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.08);
    background: #FFFFFF;
    cursor: pointer;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ImageWrapper = styled.div`
  width: 125px;
  height: 96px;    
  margin-right: 20px;
  border-bottom: 16px solid white;
  border-left: 8px solid white;
  border-right: 8px solid white;
  border-top: 8px solid white;
  transform: rotate(-3deg);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.08);
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageKindle = styled.img`
    position: absolute;
    left: 65px;
    top: -10px;
    z-index: 5;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 3px;
`;

const Price = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 0;
  overflow: hidden;  
  text-overflow: ellipsis;
  max-height: 95px;
`;

const Button = styled.button`  
  border: none;
  color: black;
  cursor: pointer;  
  padding: 10px 20px;  
  font-size: 16px;
  background: #FFCF08;
  border-radius: 12px;
  

  &:hover {
    opacity: .5;
  }
`;

const EventCard: React.FC<any> = ({ data }) => {
    const { dictionary_data: {
        image_explore_preview,
        description,
        title,
        address
    },
        _id: {
            $oid
        }
    } = data;
    console.log(data)


    return (
        <CardWrapper>
            <HeaderWrapper>
                <div>
                    <Title>{title}</Title>
                    <Price>{address}</Price>
                </div>
                <ImageWrapper>
                    <ImageKindle src={kindle} alt={'kindle'}/>
                    <Image src={`https://cms.russpass.ru/v1/file/${image_explore_preview[0]?.source?.id}/800`} alt={title} />
                </ImageWrapper>
            </HeaderWrapper>
            <Description>{description}</Description>
            <a href={`https://russpass.ru/restaurant/${$oid}`}><Button >Узнать больше</Button></a>
        </CardWrapper>
    );
};

export default EventCard;