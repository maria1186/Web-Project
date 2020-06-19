import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Image from 'react-image-webp';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Container, Row, Col } from 'react-bootstrap';
import App from './../App.css';

class Products extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			key: 'daily-prophylaxis',
		};
	}
    render() {
       

        return <Container fluid > < Header />
            <Row>
                <Col>
                    <Image webp={require("../images/everyday-prevention-header.webp")} style={{ width: '100%' }} /> </Col >
            </Row>
            <Row className="mt-4 text-center">
                <Col>
                    <h1> Разберете кой продукт на Redoxon е подходящ за вас и ще помогне в профилактиката за по - здрава имунна система. </h1>

                </Col>
            </Row>
            <Row>

                <Col className="py-4">

                    <Tabs activeKey={this.state.key}
				onSelect={key => this.setState({ key })} id="products">

                        <Tab eventKey="daily-prophylaxis" title="Ежедневна профилактика">

                            <Image webp={require("../images/redoxon-double-action.webp")} className="py-4" />


                    <h1 className="w-50 text-center py-4"> Редоксон® Двойно Действие ефервесцентни таблетки за по - здрава имунна система </h1>
                    <p className="w-50">  Когато водите динамичен начин на живот, малко помощ винаги е добре дошла.<br>
                    </br>Редоксон® Двойно Действие съдържа витамин С, който Ви помага да се почувствате<br>
                    </br> 
                    <br></br> Редоксон® Двойно Действие е комбинация от високодозиран витамин С и Цинк,<br>
                    </br> които поддържат функцията на имунната Ви система. Хранителната добавка не трябва
                     да се използва като заместител на разнообразното хранене.</p>
                                                   
                            <p> * Витамин С подпомага нормалния енергиен метаболизъм. </p>

                        </Tab>
                        <Tab eventKey="fighting-sickness" title="Борба с болестта">


                            <Image webp={require("../images/redoxon-double-action.webp")} className="py-4"/>

                            <h1 className="w-50 text-center py-4"> Редоксон® Двойноnp Действие ефервесцентни таблетки за профилактика на имунната система </h1>
                            <p className="w-50"> Когато водите динамичен начин на живот, малко помощ винаги е добре дошла.
                             Редоксон® Двойно Действие съдържа витамин С, който Ви помага да се почувствате
                              изпълнени с енергия, когато имате нужда от допълнителна подкрепа.
                               Редоксон® Двойно Действие е комбинация от високодозиран витамин С и Цинк,
                                които поддържат функцията на имунната Ви система. Хранителната добавка не трябва
                                 да се използва като заместител на разнообразното хранене. </p>
                            <p>Витамин С подпомага нормалния енергиен метаболизъм. * </p>

                        </Tab>
                        <Tab eventKey="children" title="Специфични нужди – за деца">

                            <Image webp={require("../images/package.webp")} className="py-4"/>

                            <h1 className="w-50 text-center py-4"> Редокситос® Желирани бонбони за по - здрава имунна система </h1>
                            <p className="w-50"> Когато водите динамичен начин на живот, малко помощ винаги е добре дошла.
                             Редокситос® Желирани бонбони съдържа витамин С, който Ви помага да се почувствате
                            изпълнени с енергия, когато имате нужда от допълнителна подкрепа.
                                 С отличния вкус на желирани бонбони Вие по забавен и вкусен начин давате
                                 на Вашите деца допълнителната подкрепа за имунната им система,
                                от която се нуждаят. Хранителната добавка не трябва да се използва като 
                               заместител на разнообразното хранене. </p>


                            <p> * Витамин С подпомага нормалния енергиен метаболизъм. **
                           Съдържа витамин С, който подпомага имунната система </p>
                        </Tab>

                    </Tabs>
                </Col>



            </Row>
            <Footer />
        </Container>;
    }
}

export default Products;