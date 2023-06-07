import React from "react";
import {RouteObject} from "react-router-dom";
import HomePage from "../../Pages/mainPage/mainPage";
import DiscoverPage from "../DiscoverPage/DiscoverPage";
import {ToursPage} from "../../Pages/ToursPage/ToursPage";
import {RestPage} from "../../Pages/RestaurantsPage/RestaurantsPage";
import {EventsPage} from "../../Pages/EventsPage/EventsPage";
import {PLacesPage} from "../../Pages/PlacesPage/PlacesPage";
import {HotelPage} from "../../Pages/HotelPage/HotelPage";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <DiscoverPage/>
    },
    {
        path: '/home',
        element: <HomePage />
    },
    {
        path: '/tours',
        element: <ToursPage/>
    },
    {
        path: '/rest',
        element: <RestPage/>
    },
    {
        path: '/events',
        element: <EventsPage/>
    },
    {
        path: '/places',
        element: <PLacesPage/>
    },
    {
        path: '/hotels',
        element: <HotelPage/>
    }
]