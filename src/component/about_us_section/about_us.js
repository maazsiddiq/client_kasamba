import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Form, FormGroup, Input, Button } from 'reactstrap';

import './about_us.css';
import phone from '../../images/phone-ring.svg';
import p from '../../images/psychic.jpg';
import rightArrow from '../../images/right-arrow.svg';

const AboutUs = () => {
    return (
        <div >
        <Container fluid className="callBanner dropshadow mt-5">
           <Row className="mx-5 p-0 justify-content-center">
            <Col sm="12"><h2 className="text-center textshadow m-3" >Lorem Ipsum Dolor Sit Amet</h2>
             </Col>
             <Col md="6" lg="5" className="text-justify p-3">
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam</p>
           </Col>

          <Col md="6" lg="5" className="p-3">
            <Row className="align-self-center">
              <Col lg="2" md="2" sm="3"> <img src={phone}  alt="" />
              </Col>
              <Col lg="10" sm="12" ><p className="pt-3">833-Medusas <b>833-633-8727</b> <br/> Call Us Anytime</p>
              </Col>
            </Row>
          </Col>
        </Row>
       </Container>

    
    <Container className="aboutUs">
     <Row className="justify-content-center dropshadow">
      <Col md="6" sm="12" className="p-4 px-5 ">
      <h1>About Us</h1>
         <p className="text-justify">
          Your journey to a brighter future starts with Medusa Psychics.
          We're all searching for the right path for us and for the key to a better life. With the right guidance, you can find it. Since 1999, Medusa Psychics’s psychics have guided over 3 million people in their paths to true love and happiness, career success and self-empowerment. Through psychic readings, tarot readings, astrology readings and more with top psychic advisors, we are here to help you get the guidance you need and the answers you’re looking for in life.
         </p>
      </Col>

      <Col md="6" className="p-0">
      <img src={p} alt="" className="w-100 h-100" />
      </Col>
    </Row>
    </Container>


    <Container className="becomePsychic">
     <Row className="justify-content-center dropshadow">
      <Col md="6" sm="12" className="p-0 rambow_gradient">
      <h1>Become A Psychic</h1>
      <div class="pl-4 pr-5 py-4 text-justify">
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam</li>
                    <li>Lorem ipsum dolor sit amet</li>
                </ul>
            </div>
        </Col>

        <Col md="6" sm="12" className="px-lg-5 px-md-0 px-sm-5 p-0">
        <Form className="px-5 py-5">
        <h2>Register Now</h2>
        <FormGroup>
        <Input type="text" name="email" id="exampleEmail" placeholder="Name" />
      </FormGroup>
      <FormGroup>
        <Input type="email" name="password" id="examplePassword" placeholder="Email Address" />
      </FormGroup>
      <FormGroup>
        <Input type="tel" name="password" id="examplePassword" placeholder="Mobile Number" />
      </FormGroup>
      <Button type="submit" className="float-right mb-5"><img src={rightArrow} alt="" /> Submit</Button>
        </Form>
        </Col> 
    </Row>
    </Container>

    </div>
    );
}
export default AboutUs;