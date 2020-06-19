import React from "react";
import Header from './Header';
import Footer from './Footer';
import ReactPlayer from 'react-player';
import { Container, Row, Col } from 'react-bootstrap';
import App from './../App.css';

class Video extends React.Component{
    render(){
        return <Container fluid><Header/>
        <Row>
          <Col md={{span:5, offset:1}} className="py-3">
            <ReactPlayer url='https://youtu.be/LHS2WwOK6Nc' width='560px'
          height='100%'  controls='true' volume='1' muted='true' />
          </Col>
          <Col md={{span:5}} className="py-3">
          <ReactPlayer url='https://youtu.be/5wREjMD0S6A' width='560px'
          height='100%'  controls='true' volume='1' muted='true'  />
          </Col>
        </Row>
          
            <Footer/>
            </Container>;
    }
}

export default Video;