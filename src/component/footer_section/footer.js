import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faTwitterSquare, faGooglePlusSquare
} from '@fortawesome/free-brands-svg-icons';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <div className="main-footer rambow_gradient text-light">
         <Container className="text-center text-md-left p-5">
          <Row>
           <Col md="3">
               <h5 className="font-weight-bold text-uppercase mt-3 mb-4">about us</h5>
               <ul className="list-unstyled">
                   <li>
                       <a href="#">About Us</a>
                   </li>
                   <li>
                       <a href="#">Psychic Directory</a>
                   </li>
                   <li>
                       <a href="#">Service Center</a>
                   </li>
                   <li>
                       <a href="#">Copyright Policy</a>
                   </li>
                   <li>
                       <a href="#">Site Map</a>
                   </li>
                   <li>
                       <a href="#">Blog</a>
                   </li>
                   <li>
                       <a href="#">Articles</a>
                   </li>
               </ul>
           </Col>
           <hr className="clearfix w-100 d-md-none"/>


           <Col md="3">
           <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Affiliate Program</h5>
  
          <ul className="list-unstyled">
             <li>
              <p>Online Marketer? Blogger? Webmaster? Promote our Psychic Advice Platform and earn up to $100 per New Paying Client</p>
             </li>
          </ul>
           </Col>
           <hr className="clearfix w-100 d-md-none"/>


           <Col md="3">
           <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Are you a Psychic?</h5>
  
          <ul className="list-unstyled">
           <li>
               <p>Join Medusa Psychics today to engage with thousands of new clients via online chat, phone or email.</p>
           </li>
           <li>
               <a href="#!">Join as an advisor</a>
           </li>
          </ul>
           </Col>
           <hr className="clearfix w-100 d-md-none"/>


           <Col md="3">
           <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Follow Us</h5>
           
           <ul className="list-unstyled">
               <li>
                   <p><FontAwesomeIcon icon={faPhoneAlt}/> 833-Medusas <b>833-633-8727</b></p>
                   <hr class="clearfix w-100" />
               </li>
               <li>
                <a href="#!">
                    <FontAwesomeIcon icon={faFacebookSquare} size= "2x" className="mr-2" />
                </a>
                <a href="#!">
                    <FontAwesomeIcon icon={faTwitterSquare} size= "2x" className="mr-2" />
                </a>
                <a href="#!">
                <FontAwesomeIcon icon={faGooglePlusSquare} size= "2x" className="mr-2" />
                </a>
                <a href="#!">
                <FontAwesomeIcon icon={faTwitterSquare} size= "2x"  />
                </a>
            </li>
           </ul>
           </Col>

           <Col sm="12">
           <hr class="clearfix w-100"/>
               <p>Psychics are not employees or representatives of Medusa Psychics. Use of this site is subject to the Terms of Use | Privacy Policy | Disclaimer
            Address: ABC</p>
           </Col>

         </Row>
         </Container>

         <div className="footer-bottom text-center py-3" style={{background:"rgba(0,0,0,0.8)"}}>
         © 2020 Copyright:
         <a href="#!"> Medusa Psychic Academy</a>
         </div>

         </div>

        </div>
    )
}
export default Footer;