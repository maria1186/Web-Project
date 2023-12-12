import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Image from 'react-image-webp';
import { Container, Row, Col } from 'react-bootstrap';
import App from './../App.css';

class Redoxsitos extends React.Component {
    render() {
        return <Container fluid="xl">
            <Header />
            <Row><Col>
                <Image webp={require("../images/redoitos-h-BG.webp")} style={{width: '1263px'}} />
            </Col></Row>
            <Row className="mt-4 text-center"><Col>
                <h1 className="title-orange">Редокситос® Желирани бонбони за нормалното функциониране на имунната система</h1>
            </Col></Row>
            <Row className="strip"><Col md={{ span: 4, offset: 2 }} className="my-5">
                <Image webp={require("../images/vic-zinc.webp")} />
            </Col>
                <Col md={{ span: 3 }} className="my-5 pt-5"><p>Редокситос е хранителна добавка разработена от Байер, която допринася за нормалното функциониране на имунната система, чрез съдържанието си на витамин С.</p></Col>
            </Row>
            <Row>
                <Col className="my-4 pt-4"><h1 className="title-orange">Какво е Редокситос?</h1></Col>
            </Row>
            <Row><Col md={{ span: 7, offset: 3 }} className="text-center py-4">

                <p>За нормално функциониране на имунната система на децата</p>
                <p>Когато водите динамичен начин на живот, малко помощ винаги е добре дошла. Редокситос® Желирани бонбони съдържа витамин С, който Ви помага да се почувствате изпълнени с енергия, когато имате нужда от допълнителна подкрепа. С отличния вкус на желирани бонбони Вие по забавен и вкусен начин давате на Вашите деца допълнителната подкрепа за имунната им система, от която се нуждаят. Хранителна добавка със захар и вкус на портокал. Да не се използва като заместител на разнообразното хранене.</p>
                <p><em>*Витамин С подпомага нормалния енергиен метаболизъм.</em></p>
                <p><em>** Съдържа витамин С, който подпомага имунната система </em></p>
                <hr></hr>
            </Col></Row>
            <Row>
                <Col>
                    <h1 className="title-orange">Хранителна информация</h1>
                </Col>
            </Row>
            <Row><Col>
                <div class="table-responsive">
                    <table>
                        <tbody><tr className="no-color">
                            <td></td>
                            <td>на таблетка*</td>
                            <td>NRV</td>
                        </tr>

                            <tr>
                                <td className="bg-orange">Витамин С</td>
                                <td className="bg-orange">30mg</td>
                                <td className="bg-orange">37.5%</td>
                            </tr>

                        </tbody></table>
                    <p className="nrv text-center">NRV = Хранителна референтна стойност. * Еквивалентна на препоръчителната доза за дневен прием.</p>
                    <hr>
                    </hr>
                </div>
            </Col></Row>

            <Row>
                <Col>
                    <h1 className="title-orange">Какви са съставките на Редокситос влияещи на нормалното функциониране на имунната система?</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 8, offset: 2 }} className="text-center mt-5">
                    <p>Всяко желе съдържа Витамин С: 30mg, 50% ПДДП*.</p>
                    <p>*Препоръчителна доза за дневен прием</p>
                    <p className="mt-5"><strong><em>Съставки: </em></strong><em>Витамин С; пълнители: сироп от глюкоза, захар; желиращ агент: свински желатин; регулатор на киселинността: лимонена киселина, безводна;аромат: портокал; оцветител: оранжев цвят (карминова киселина); носител: вода.</em></p>
                    <p className="mt-5">Препоръчителната доза е:</p>
                    <p>-1 (едно) желе/ден (30mg) за деца навъзраст от 4-8 години;</p>
                    <p>-2 (две) желета/ден (60mg) за деца на възраст от 9-13 години;</p>
                    <p>-3 (три) желета/ден (90mg) за деца навъзраст от 14-18 години;</p>
                    <p className="mt-5">Енергийна стойност/100g: 1405kJ/331Kcal</p>
                </Col>
            </Row>



            <Footer />
        </Container>;

    }
}

export default Redoxsitos;
