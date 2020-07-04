import React, { useState } from 'react';
import './header.css';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Col
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" className="green_gradient dropshadow pr-2 p-0 justify-content-center">
    
       
       <NavLink href="/" className="text-light"><FontAwesomeIcon icon={faPhoneAlt}  /> 833-Medusas <b>833-633-8727</b></NavLink>
       
       
          <Nav className="ml-auto d-flex" navbar>
            <NavItem>
              <NavLink className="text-light" style={{opacity:"0.7"}} href="/">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="text-light">Log In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="text-light">How It Works</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="text-light">Contact</NavLink>
            </NavItem>
          </Nav>
         
           </Navbar>
    </div>
  );
}

export default Header;