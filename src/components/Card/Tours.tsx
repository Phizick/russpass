import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import TourCard from './Card';
import {useSelector} from "react-redux";


const ToursWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;  
  max-width: 85%;
  margin: 0 auto; 
`;

const Tours: React.FC = () => {
    const [data, setData] = useState([]);
    const { userId } = useSelector((state: any) => state.auth)
    console.log(userId)

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch(`http://46.243.143.123:8010/user/${userId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const tagIds = jsonResponse.interests && jsonResponse.interests.length
                ? jsonResponse.interests[0]
                : jsonResponse.interests;
            const tags = {
                tours: tagIds.tours,
            };
            fetchData(tags);
            console.log(tags)
        };
        fetchUserData();
    }, []);

    const fetchData = async (tags: any) => {
        const response = await fetch(
            "http://46.243.143.123:8010/recommendations",
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
        const dictionaryData = jsonResponse.tours.map((tour: any) => tour);
        const randomData = dictionaryData.sort(() => Math.random() - 0.5).slice(0, 10);
        setData(randomData);
    };



    return (
        <ToursWrapper>
            {data && data.length > 0 &&
                data.map((tour: any) => (
                    <TourCard key={tour.city} data={tour} />

                ))}
        </ToursWrapper>
    );
};

export default Tours;


