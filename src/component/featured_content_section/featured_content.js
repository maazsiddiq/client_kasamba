import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './featured_content.css';
import psychicLogo from '../../images/psychic_logo.svg';
import lovelogo from '../../images/love_logo.svg';
import horoscope from '../../images/horoscope.svg';
import twolove from '../../images/2love_logo.svg';

const FeaturedContent = () => {
    return (
        <div>
            <Container className="feature_sec my-5">
            <h1 className="mb-5">Featured Content From Our Psychics</h1>
             <Row className="justify-content-center">
              <Col sm="3" lg="3" md="3" className="btn_hover">
              <button className="img_btn rambow_gradient rounded-2 w-100">
                <p>Our Top Psychics</p>
                <object data={psychicLogo}></object>
            </button>
              </Col>

              <Col sm="3" lg="3" md="3"  className="btn_hover">
              <button className="img_btn rambow_gradient rounded-2 w-100">
                <p>Love Forecast 2020</p>
                <object data={lovelogo}></object>
            </button>
              </Col>

              <Col sm="3" lg="3" md="3" className="btn_hover">
              <button className="img_btn rambow_gradient rounded-2 w-100">
                <p>Horoscope</p>
                <object data={horoscope}></object>
            </button>
              </Col>

              <Col sm="3" lg="3" md="3" className="btn_hover">
              <button className="img_btn rambow_gradient rounded-2 w-100">
                <p>Love Compatibility</p>
                <object data={twolove}></object>
            </button>
              </Col>
            </Row>
           </Container>
        
        </div>
    )
}
export default FeaturedContent;