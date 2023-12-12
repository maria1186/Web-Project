import React from 'react';
import Image from 'react-image-webp';
import Temperature from '../images/Redoxon_BG-9-Temperature-Changes.jpg';
import Cell from '../images/cell.jpg';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return <Container fluid="xl">

            <Header />
            <Row>
                <Col xs="auto">
                    <img src={Temperature} alt="" style={{ width: '100%', height: '100%' }} />
                </Col>
            </Row>
            <Row className="my-4 text-center"><Col md={{ span: 6, offset: 3 }}>
                <p>Замърсяване, резки температурни промени, вируси, бактерии, стрес, неподходящи диети.
                     Всеки ден се сблъскваме с фактори, които могат да повлияят на имунната система
                     и на здравето ни, фактори, за които най-вероятно никога не сте предполагали.
                     Редоксон® е създаден, за да помага за поддържане на имунната Ви система силна и здрава.
                     Ние сме в помощ на здравето в целия свят вече повече от 80 години.
                     Считаме, че всеки в този свят заслужава да бъде здрав и че доброто здраве не е
                     просто нужда. То е право. Нашата гама от новаторски продукти съдържа мощни и
                     ефективни съставки, които подкрепят и поддържат естествените защитни сили на
                     Вашия организъм и се борят с болестта.Те включват витамин C, цинк и
                 други жизнено важни витамини и минерали.</p>
            </Col>
            </Row>
            <Row><Col xs={12}>
                <Image webp={require("../images/3D_Redoxon-Redoxitos_packs_1116.webp")} alt="redoxitos" style={{ width: '100%' }} />
            </Col>

            </Row>
            <Row className="my-4 text-center"><Col md={{ span: 6, offset: 3 }}>
                <h1 className="my-4">Кой Редоксон® е подходящ за Вас?</h1>
                <p className="my-4">Запознайте се с продуктите от семейството на Редоксон®. Те са предназначени
                   за поддържане на имунната Ви система и съдържат  мощна комбинация от витамини и минерали.
            </p></Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Image webp={require("../images/berries.webp")} alt="berries" style={{ width: '100%', height:'450px' }} />
                </Col>
            </Row>
            <Row className="my-4 text-center">
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Силата на витамин C</h1>
                    <p>Витамин C дава на имунната Ви система сила, която е необходима за ефективното й функциониране.
                      Вашият организъм не може да произвежда витамин C, така че Вие трябва да го получавате с храната
              всеки ден, за да сте здрави. Ще го намерите в пресните плодове и зеленчуци – и в Редоксон®.</p>
                </Col>
            </Row>
            <Row><Col xs={12}>
                <img src={Cell} alt="Cell" style={{ width: '100%', height: '450px' }} />
            </Col>
            </Row>
            <Row className="mt-4 text-center"><Col md={{ span: 6, offset: 3 }}>
                <h1>Защита на имунната система с Редоксон</h1>
                <p>Искате да знаете кои храни могат да поддържат имунната Ви система или защо е важно да спите достатъчно?
                  Прочетете съветите на нашите специалисти и факти за здравето на имунната система.</p>
            </Col></Row>
            
            <Row className="mt-4" style={{ justifyContent: 'center' }}>
                <Col md={{ span: 3, offset: 1 }}><Image webp={require("../images/contact-us-home@2x.webp")} style={{ width: '100%' }} />
                    <h5 className="m-4 text-center">
                        <a href="/bg/contact-us.php">Свържете се с нас</a>
                    </h5>
                </Col>
                <Col md={3}>
                    <Image webp={require("../images/where-to-buy-home@2x.webp")} alt="where-to-buy-home" style={{ width: '100%' }} />
                    <h5 className="m-4 text-center">
                        <a href="/bg/where_to_buy/index.php">Откъде да го закупите</a>
                    </h5>
                </Col>
                <Col md={3}>
                    <Image webp={require("../images/who-we-are-home@2x.webp")} alt="who-we-are-home@2x" style={{ width: '100%' }} />
                    <h5 className="m-4 text-center">
                        <a href="/bg/who_we_are/index.php">Кои сме ние</a>
                    </h5>
                </Col>
            </Row>

            <Footer />
        </Container>
    }
}

export default Home;