import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './profile_cards.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faCircle, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import profileImg from '../../images/profile.png';
import button from '../../images/live_chatbtn.svg';  

const ProfileCards = () => {


var Profile

   Profile = [{Title:"Title Name", Subtitle:"Expertise: psychic Reading", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis", Dollar:"$8.49"},
 {Title:"Title Name", Subtitle:"Expertise: psychic Reading", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis", Dollar:"$8.49"},
 {Title:"Title Name", Subtitle:"Expertise: psychic Reading", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis", Dollar:"$8.49"},
 {Title:"Title Name", Subtitle:"Expertise: psychic Reading", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis", Dollar:"$8.49"},
 {Title:"Title Name", Subtitle:"Expertise: psychic Reading", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis", Dollar:"$8.49"},
 {Title:"Title Name", Subtitle:"Expertise: psychic Reading", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis", Dollar:"$8.49"},
 {Title:"Title Name", Subtitle:"Expertise: psychic Reading", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis", Dollar:"$8.49"},
 {Title:"Title Name", Subtitle:"Expertise: psychic Reading", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis", Dollar:"$8.49"}
]

   var cards

 cards = Profile.map((here) =>{
        return<Col xm="12" sm="6" md="4" lg="3"> 
        <Card className="dropshadow mt-5" style={{borderRadius:"10px"}}>
        <div className="rounded-top-2 rambow_gradient p-3">
          <div className="rating_area d-flex align-self-center">
            <Col md="9" className="d-flex p-0">
              
               <FontAwesomeIcon icon={faStar} className="fa-star"/>
               <FontAwesomeIcon icon={faStar} className="fa-star" />
               <FontAwesomeIcon icon={faStar} className="fa-star" />
               <FontAwesomeIcon icon={faStar} className="fa-star" />
               <FontAwesomeIcon icon={faStar} className="fa-star" />
               <div className="review_no"> 1.5k Review</div>
               
            </Col>
            <Col md="3" className="p-0 text-right d-flex online_state">
            <div className="mr-1">
            <FontAwesomeIcon icon={faCircle} className="text-success" />
            </div> Online 
            </Col>
          </div>

          <div className="d-flex justify-content-center">
             <FontAwesomeIcon icon={faUserCircle} size="5x" className="mt-3" />
          </div>
         <h6 className="text-center text-white"><b>{here.Title}</b></h6>
         <p className="text-center text-light m-0">{here.Subtitle} </p>
        </div>
        <CardBody>
        <CardText className=" ml-2 mr-2 p-0" >{here.text} </CardText>
        </CardBody>
      </Card>
      </Col>
   });


    return (
        <div>
            <Container>
                <Row>
                {cards}
                </Row>
                </Container>
        </div>
    )
}
export default ProfileCards;