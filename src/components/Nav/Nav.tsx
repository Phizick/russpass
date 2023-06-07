import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid rgb(239, 247, 251);
  border-radius: 12px;
  padding: 10px;
  max-width: 1240px;
  margin: 15px auto;  
`;


const Separator = styled.span`
  display: block;
  width: 1px;
  height: 20px;
  background-color: #ccc;
  margin: 5px;
`;

const NavLinks = [
    { title: "Отели", active: true, path: '/hotels'},
    { title: "Рестораны", active: false, path: '/rest' },
    { title: "Ивенты", active: false, path: '/events' },
    { title: "Маршруты", active: false, path: '/' },
    { title: "Места", active: false, path: '/places' },
    { title: "Туры", active: false, path: '/tours' },
];

const NavBar: React.FC = () => {
    return (
        <Nav>
            {NavLinks.map((link, index) => (
                <React.Fragment key={index}>
                    <Link to={link.path}>{link.title}</Link>
                    {index !== NavLinks.length - 1 && <Separator />}
                </React.Fragment>
            ))}
        </Nav>
    );
};

export default NavBar;