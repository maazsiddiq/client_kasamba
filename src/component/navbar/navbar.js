import React, { useState } from 'react';
import './navbar.css';
import logo from '../../images/logo.svg'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Navb_ = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="dropshadow" expand="md" >
        <NavbarBrand className="ml-lg-5 ml-md-3 ml-1" href="/">
          <img src={logo} class="main_logo" alt="Medusa Psychic Academy" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mt-2 mt-lg-0 text-center align-self-center nav_btn" navbar>
            <NavItem>
              <NavLink>Psychic <br/> Readings</NavLink>
            </NavItem>
            <NavItem className="active rambow_gradient">
              <NavLink>Love & <br/> Relationships </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Tarot <br/> Readings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Fortune <br/> Telling</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Dream <br/> Analysis</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Career <br/> Forecasts</NavLink>
            </NavItem>
            <NavItem className="align-self-center">
              <NavLink>More</NavLink>
            </NavItem>
          </Nav>
        
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navb_;