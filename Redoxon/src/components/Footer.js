import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import Image from 'react-image-webp';
import { Container, Row, Col } from 'react-bootstrap';
import App from './../App.css';

class Footer extends React.Component{
    render(){
        return <Container fluid style={{height:'200px'}}>
          <Row>
          <Col md={{span:2}} className="social-links pt-5">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=http://www.redoxon.bg/bg/home/index.php" className="facebook-share" target="_blank" rel='noreferrer noopener'>
                            <Image webp={require("../images/facebook-white-icon.webp")} />
                        </a></li>
                    <li><a href="https://twitter.com/share" target="_blank" rel='noreferrer noopener' className="twitter-share"><Image webp={require("../images/twitter-white-icon.webp")} /></a></li>
                    <li><a href="https://plus.google.com" className="google-share"><Image webp={require("../images/google-white-icon.webp")} /></a></li>
                    <li><a href="mailto:?body=http://www.redoxon.bg/bg/home/index.php" className="email-share"><Image webp={require("../images/email-white-icon.webp")} /></a></li>
                </ul>
            </Col>
            </Row>
            <Row>
              <Col md={{span:4, offset:4}} className="pt-4">
                <Image webp={require("../images/logo.webp")} style={{width:'67%', display:'block',margin:'0 auto'}} />
                </Col>
            </Row>
            <Row style={{background:'radial-gradient(ellipse at center, #e66a33 7%,#af0f0a 100%)'}}>
              <Col md={{span:8, offset:2}} className="p-5">
            <Navbar collapseOnSelect expand="md">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" style={{borderTop:'1px solid #fff', borderBottom:'1px solid #fff'}}>
    <Nav className="ml-3 py-4">
    <Nav.Link href="#" style={{color:'#fff'}}>Свържете се с нас</Nav.Link>
      <Nav.Link href="#" style={{color:'#fff'}}>Права за ползване</Nav.Link>
      <Nav.Link href="#" style={{color:'#fff'}}>Декларация за поверителност</Nav.Link>
      <Nav.Link href="#" style={{color:'#fff'}}>Публикувани от</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        <p className="footerBottom py-3"> Copyright© 2017 Redoxon® Bayer AG.</p>
        <p className="footerBottom">Ако желаете да докладвате нежелана лекарствена реакция или оплакване от качеството на продукта, моля свържете се с Вашият лекар или фармацевт,
          с Изпълнителната Агенция по Лекарствата или използвайте линка отдолу:
           https: //www.bayer.bg/bg/bayer-in-bulgaria/drug-safety/</p>
         <p className="footerBottom">Редоксон е хранителна добавка с подсладители.По половин таблетка дневно. 
           Да не се превишава препоръчваната дневна доза и да не се използва като
            заместител на разнообразното хранене.</p>
            <p className="footerBottom">Байер България ЕООД, ул.Резбарска№ 5, 1510 София,
          България, тел 02 / 4247280 L.BG.MKT .08 .2017 .1088 * IMS Health data, MAT June 2016
        За информация по медицински въпроси: med.info.bg @bayer.com или на телефон: (+359 2) 811 77 66 </p>;
        </Col>
        </Row>
    </Container>
    }
}


export default Footer;