import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Image from 'react-image-webp';
import { Container, Row, Col } from 'react-bootstrap';
import App from './../App.css';
class Redoxon extends React.Component {
    render() {
        return <Container fluid>
            <Header />
            <Row>
                <Col><Image webp={require("../images/double-action-header_BG.webp")} style={{ width: '100%' }} /></Col>
            </Row>
            <Row className="mt-4 text-center">
                <Col><h1 className="blue-title">Редоксон® с Витамин C и Цинк поддържане на имунната система</h1>
                </Col>
            </Row>
            <Row className="strip"><Col md={{ span: 4, offset: 2 }} className="my-5">
                <Image webp={require("../images/vic-zinc.webp")} />
            </Col>
                <Col md={{ span: 3 }} className="my-5 pt-5">
                    <p>Редоксон® Двойно действие е комбинация от висока концентрация витамин C и цинк, които помагат за поддържане на имунната Ви система.
    Двете жизнено важни хранителни вещества в състава на Редоксон® Двойно действие се допълват едно друго и поддържат имунната система на организма Ви.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <h1 style={{color:' #0082cb',textAlign:'center'}} className="my-4">Препоръчителна доза за поддържане на имунната система здрава</h1>
                </Col>
            </Row>
           <Row>
               <Col md={{span:6, offset:3}} className="text-center">
               <p>По половин таблетка, разтворена в 200 ml вода.</p>
            <h2 style={{fontSize:'32px',fontWeight:'500'}}>Активни съставки</h2>
            <p>Витамин С (аскорбинова киселина); цинк (цинков цитрат трихидрат); пълнител: сорбитол; регулатор на киселинността:натриев хидрогенкарбонат, натриев карбонат, безводен; киселина: лимонена киселина, безводна; оцветител: бетакаротен 1% CWS/M; oвкусител: портокал, мандарина; подсладител: аспартам, калиев ацесулфам.“</p>
            <hr></hr>
               </Col>
           </Row>
            <Row>
                <Col><h1 style={{color:' #0082cb',textAlign:'center'}} className="my-4">Хранителна информация</h1>
                <div class="table-responsive">
            <table>
                <tbody><tr className="no-color">
                    <td></td>
                    <td>на таблетка*</td>
                    <td>NRV</td>
                </tr>

                    <tr>
                        <td className="cat-blue">Витамин C</td>
                        <td className="cat-blue">1000mg</td>
                        <td className="cat-blue">625%</td>
                    </tr>

                    <tr>
                        <td className="cat-blue">Цинк</td>
                        <td className="cat-blue">10mg</td>
                        <td className="cat-blue">100%</td>
                    </tr>

                </tbody></table></div>
            <p className="text-center pb-3">NRV = Хранителна референтна стойност. * Еквивалентна на препоръчителната доза за дневен прием.</p>
            <hr style={{margin:'0 auto', width:'60%'}}></hr>
                </Col>
            </Row>
            <Row>
                <Col md={{span:6, offset:3}}>
                <h1 className="blue-title text-center my-4">Предупреждения</h1>
            <p className="text-center">Хранителните добавки не трябва да се използват като заместител на разнообразното хранене или здравословния начин на живот. Приемът на по-голяма от препоръчителната дневна доза може да бъде вреден. Прекомерната консумация може да предизвика лаксативни ефекти.</p>
                </Col>
            </Row>
            
            <Footer />
        </Container>;

    }
}

export default Redoxon;
