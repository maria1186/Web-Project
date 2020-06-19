import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-image-webp';
import App from './../App.css';

class Header extends React.Component {
  render() {
    return <div><Row>
      <Col md={{ span: 4 }} className="pt-4">
        <Image webp={require("../images/logo.webp")} style={{ width: '67%', display: 'block', margin: '0 auto' }} />
      </Col>
    </Row>

      <Row>
        <Col md={12}>
          <Navbar collapseOnSelect expand="lg" style={{ background: 'linear-gradient(to bottom, #b50e0b 0%,#ec641a 100%)' }}
            className="py-3">

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <ul className="navbar-nav" style={{ marginLeft: '5em' }}>
                <li className="nav-item"><Link to="/">Начало</Link></li>
                <li className="dropdown">
                  <Link to="/products">Продукти <span>&#9660;</span></Link>

                  <ul className="drop-item">
                    <li className=""> <Link to="/Redoxitos">Редокситос Желирани бонбони</Link></li>
                    <li className=""> <Link to="/Redoxon">Редоксон Двойно действие</Link></li>
                  </ul>
                </li>

                <li className="nav-item"><Link to="/vitaminC" >VitaminC</Link></li>
                <li className="nav-item"><Link to="/HowStayHealthy"> Как да останем здрави?</Link></li>
                <li className="nav-item"><Link to="/WhereBuy">Откъде да го закупите</Link></li>
                <li className="nav-item"><Link to="/Faq">FAQ</Link></li>
                <li className="nav-item"><Link to="/WhoAreWe">Кои сме ние</Link></li>
                <li className="nav-item"><Link to="/Video">Видео</Link></li>

              </ul>

            </Navbar.Collapse>

          </Navbar>
          
        </Col>
      </Row></div>;
  }
}


export default Header;