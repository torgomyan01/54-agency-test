import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/54-agency-logo-navbar.svg';
import logoStar from '../../assets/images/logo-star.svg';
import number from '../../assets/images/54.svg';
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

  .logo-site {
    &.star {
      display: none;
      width: 40px;
      height: 40px;
    }
    &.number {
      display: none;
      width: 30px;
      height: 30px;
    }

    @media (max-width: 960px) {
      width: 156px;
    }
    @media (max-width: 768px) {
      width: 130px;
    }
    @media (max-width: 600px) {
      width: 130px;
      display: none;
      &.star {
        display: block;
      }
    }
    @media (max-width: 375px) {
      &.star {
        display: none;
      }
      &.number {
        display: block;
      }
    }
  }
`;

const NavbarContentMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &.mobile {
    display: none !important;
  }
  @media (max-width: 600px) {
    display: none;
    &.mobile {
      display: block !important;
      .NavbarContentMenu-item {
        display: block;
      }
    }
  }

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
    &:last-child {
      margin-right: 0;
    }

    @media (max-width: 960px) {
      font-size: 16px;
      margin-right: 24px;
    }
    @media (max-width: 768px) {
      font-size: 14px;
      margin-right: 20px;
    }
    @media (max-width: 600px) {
      display: none;
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
  @media (max-width: 960px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  &:hover {
    span {
      color: #bfe72c;
    }
  }
  span {
    transition: 0.3s;
    color: #fff;
    margin-right: 24px;
    @media (max-width: 960px) {
      margin-right: 20px;
    }
    @media (max-width: 625px) {
      display: none;
    }
  }
`;

const menuItems = ['Проекты', 'Услуги', 'Агентство', 'Контакты'];

function Navbar() {
  return (
    <NavbarContent>
      <Fade delay={3000} duration={2000} triggerOnce>
        <div className="container">
          <img src={logo} alt="Logo site" className="logo-site" />
          <img src={logoStar} alt="Logo site" className="logo-site star" />
          <img src={number} alt="Logo site" className="logo-site number" />

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

          <NavbarContentMenu className="mobile">
            <Link className="NavbarContentMenu-item" to="#">
              Меню
            </Link>
          </NavbarContentMenu>
        </div>
      </Fade>
    </NavbarContent>
  );
}

export default Navbar;
