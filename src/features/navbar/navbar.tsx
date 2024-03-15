import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/54-agency-logo-navbar.svg';
import { RandomKey } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const NavbarContent = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 23px;
  z-index: 2;
  mix-blend-mode: difference;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const NavbarContentMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .NavbarContentMenu-item {
    font-size: 20px;
    font-weight: 450;
    line-height: 23px;
    color: #fff;
    margin-right: 46px;
    transition: 0.3s;
    &:hover {
      color: #bfe72c;
    }
  }
`;

const ProjectQuotations = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  color: rgb(191, 231, 44);
  font-size: 20px;
  font-weight: 500;
  line-height: 23px;
  text-align: center;
  cursor: pointer;
  &:hover {
    span {
      color: #bfe72c;
    }
  }
  span {
    transition: 0.3s;
    color: #fff;
    margin-right: 24px;
  }
`;

const menuItems = ['Проекты', 'Услуги', 'Агентство', 'Контакты'];

function Navbar() {
  return (
    <NavbarContent>
      <div className="container">
        <img src={logo} alt="Logo site" />

        <NavbarContentMenu>
          {menuItems.map((item) => (
            <Link className="NavbarContentMenu-item" to="#" key={RandomKey()}>
              {item}
            </Link>
          ))}
        </NavbarContentMenu>

        <ProjectQuotations>
          <span className="icon-Telegram" />
          Обсудить проект
        </ProjectQuotations>
      </div>
    </NavbarContent>
  );
}

export default Navbar;
