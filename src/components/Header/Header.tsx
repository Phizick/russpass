import logo from "../../images/logo.png";
import {FiBriefcase, FiDollarSign, FiGlobe, FiHeart, FiMenu, FiUser} from "react-icons/fi";
import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  height: 4rem;
  background-color: #fff;

  h1 {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0 auto;
    
  }
`;

const Logo = styled.img`
  height: 2rem;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;

  a {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #222;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #ff4a4a;
    }
  }
`;
export const HeaderItem = () => {
    return (
        <Header>
            <Logo src={logo} alt="Logo" />
            <Menu>
                <MenuItem>
                    <a href="#">
                        <FiMenu />
                         Меню
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href="#">
                        <FiDollarSign />
                         Бонус 500
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href="#">
                        <FiGlobe />
                         Рус
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href="#">
                        <FiBriefcase />
                         Проекты Мостуризм
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href="#">
                        <FiHeart />
                         Избранное
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href="#">
                        <FiUser />
                         Профиль
                    </a>
                </MenuItem>
            </Menu>
        </Header>
    )
}
