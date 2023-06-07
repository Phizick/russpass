import React, {useState} from 'react';
import styled from 'styled-components';
import {activities} from "../../Constants/activities";
import {interestsTemplate} from '../../Constants/activitiesTemplate'
import {Link} from "react-router-dom";
import Footer from "../Footer/Footer";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1288px;
  border: 1px solid #EBEBEB;
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 32px;
  margin: 0 auto;
`;

const Card = styled.div<{ imageUrl: string; selected?: boolean }>`
  position: relative;
  width: 100%;
  height: 184px;
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: cover;
  cursor: pointer;
  opacity: ${(props) => (props.selected ? 1 : .5)};
  border-radius: 12px;
`;

const CardTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
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

interface Props {
    onSubmit: any;
}

interface Activity {
    id: string | number;
    title: string;
    imageUrl: string;
}


export default function InterestsPage({ onSubmit }: Props) {
    const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

    const sortInterestsByTemplate = (interestsTemplate: any, selectedActivities: string[]): any => {
        const interestCategories: string[] = [
            'events',
            'places',
            'restaurants',
            'tours',
            'tracks',
            'excursions',
            'routes',
            'hotels'
        ];
        const activityMap: { [id: string]: string[] } = {};
        const sortedInterests: any = {};

        interestCategories.forEach((category) => {
            activityMap[category] = interestsTemplate[category] || [];
            sortedInterests[category] = [];
        });

        const validSelectedActivities = selectedActivities.filter((activityId) => {
            const activityCategories = interestCategories.filter((category) => activityMap[category].includes(activityId));
            return activityCategories.length > 0;
        });

        validSelectedActivities.forEach((activityId) => {
            const activityCategories = interestCategories.filter((category) => activityMap[category].includes(activityId));
            activityCategories.forEach((category: string) => {
                sortedInterests[category].push(activityId);
            });
        });
        return sortedInterests;
    };

    const handleCardClick = ({ id }: Activity) => {
        if (selectedActivities.includes(`${id}`)) {
            setSelectedActivities(selectedActivities.filter((activityId) => activityId !== `${id}`));
        } else {
            setSelectedActivities([...selectedActivities, `${id}`]);
        }
        sortInterestsByTemplate(interestsTemplate, selectedActivities);

    };

    const handleSubmit = () => {
        const sortedActivities = sortInterestsByTemplate(interestsTemplate, selectedActivities);

        console.log(sortedActivities)


        const formData = {
            interests: [sortedActivities],
            password: "testing",
            username: "testing",
        };
        onSubmit(formData);
    };


    return (
        <>
            <CardContainer>
                {activities.map((activity, index) => (
                    <Card
                        key={index}
                        imageUrl={activity.imageUrl}
                        selected={selectedActivities.includes(`${activity.id}`)}
                        onClick={() => handleCardClick(activity)}
                    >
                        <CardTitle>{activity.title}</CardTitle>
                    </Card>
                ))}
            </CardContainer>
            <ButtonContainer>
                <Link to={'/home'}>
                <ContinueButton active={selectedActivities.length >= 1} onClick={handleSubmit}>
                    Продолжить
                </ContinueButton>
                </Link>
            </ButtonContainer>
            <Footer/>
        </>
    );
}