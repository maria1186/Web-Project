import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Image from 'react-image-webp';
import { Container, Row, Col } from 'react-bootstrap';
import App from './../App.css';

class WhereBuy extends React.Component {
    render() {
        return <Container fluid>
            <Header />
            <Row>
                <Col md={{span:12}}>
                    <Image webp={require("../images/where-to-buy-home@2x.webp")} style={{width:'100%'}}/>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="text-center py-5">Откъде да закупите Redoxon</h1>
                </Col>
            </Row>
            <Row>

                <Col md={{span:3, offset:2}}>
                    <Image webp={require("../images/366.webp")} />
                </Col>
                <Col md={{span:3}}>
                    <Image webp={require("../images/framar.webp")} />
                </Col>
                <Col md={{span:3}}>
                    <Image webp={require("../images/remedium.webp")} />
                </Col>
            </Row>
            <Row>
                <Col md={{span:3, offset:2}}>
                    <Image webp={require("../images/sofarma.webp")} />
                </Col>
                <Col md={{span:3}}>
                    <Image webp={require("../images/subra.webp")} />
                </Col>
                <Col md={{span:3}}>
                    <Image webp={require("../images/adonis.webp")} />
                </Col>
            </Row>
            <Row>
                <Col md={{span:3, offset:2}}>
                    <Image webp={require("../images/green_medea_logo.webp")} />
                </Col>
                <Col md={{span:3}}>
                    <Image webp={require("../images/afya_logo.webp")} />
                </Col>
                <Col md={{span:3}}>
                    <Image webp={require("../images/sanita.webp")} />
                </Col>
            </Row>
            <Row>
                <Col md={{span:2, offset:5}}>
                    <Image webp={require("../images/mypharmacybg.webp")} />
                </Col>

            </Row>

            <Footer />
        </Container>;
    }
}


export default WhereBuy;