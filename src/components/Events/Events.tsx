import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import EventCard from "../Card/EventCard";


const ToursWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;  
  max-width: 85%;
  margin: 0 auto; 
`;

const Events: React.FC = () => {
    const [data, setData] = useState([]);
    const { userId } = useSelector((state: any) => state.auth)    

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch(`https://api.allorigins.win/get?url=http://46.243.143.123:8010/user/${userId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const tagIds = jsonResponse.interests[0];
            const tags = {
                events: tagIds.events,
                
            };
            fetchData(tags);
        };
        fetchUserData();
    }, [userId]);

    const fetchData = async (tags: any) => {
        const response = await fetch(
            "https://cors-anywhere.herokuapp.com/http://46.243.143.123:8010/recommendations",
            {
                method: "POST",
                body: JSON.stringify(tags),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        const dictionaryData = jsonResponse.events.map((tour: any) => tour);
        const randomData = dictionaryData.sort(() => Math.random() - 0.5).slice(0, 10);
        setData(randomData);
    };

    return (
        <ToursWrapper>
            {data && data.length >= 0 &&
                data.map((event: any) => (
                    <EventCard key={event.city} data={event} />

                ))}
        </ToursWrapper>
    );
};

export default Events;


