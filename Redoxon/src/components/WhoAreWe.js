import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Image from 'react-image-webp';
import SliderTwo from '../images/about-us-header2.jpg'
import HappyFamily from '../images/happy-family.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import App from './../App.css';

//add slick slider for two images
class WhoAreWe extends React.Component{
    render(){
        const settings = {
            dots: false,
            arrows:true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return<Container fluid>
        <Header/>
        <Row>
            <Col md={{span:12}}>
         
        
        <Slider {...settings}>
          <div>
          <Image webp={require("../images/about-us-header1.webp")} alt="people"/>
          </div>
          <div>
            <img src={SliderTwo} alt="people"/>
          </div>
        
        </Slider>
    
            </Col>
        </Row>
        <Row>
          <Col>
          <h1 className="py-4 text-center">В защита на здравето в целия свят</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{span:6,offset:3}} style={{textAllign:'center'}}>
          <h2 className="title-orange">Нашата философия</h2>
          <p>Ние в Редоксон®  считаме, че нищо не е по-важно от здравето. За всеки човек по света
                    да бъде здрав е повече от нужда. Това е основно човешко право.</p>
          </Col>
        </Row>
        <Row>
          <Col md={{span:6,offset:3}} style={{textAllign:'center'}}>
          <h2 className="title-orange">Специалисти по имунната система</h2>
          <p>Силната имунна система е от фундаментално значение за човешкото здраве.
                    Ние сме специалисти по имунната система и всичко, към което се стремим,
                      е да помагаме на хората да станат здрави и да поддържат здравето си.</p>
          </Col>
        </Row>
        <Row>
          <Col md={{span:6,offset:3}} style={{textAllign:'center'}}>
          <h2 className="title-orange">Нашата мисия</h2>
        <p>Нашата мисия е да защитаваме здравето по света. Ето защо нашите продукти Редоксон®
                    са специално създадени да поддържат отделните компонентите на Вашата имунна система,
                    като дихателната система, червата, кожата и имунните клетки. Ние също сме предприели
                      дългосрочна  програма за работа в общността в целия свят. Нейната цел е да помага
                      на хората да разберат значението на поддържането на добро здраве и да ги подкрепя
                        в прилагането на това в практиката.</p>
          </Col>
        </Row>
        <Row>
          <Col md={{span:6,offset:3}} style={{textAllign:'center'}}>
          <h1>Да променим нещата и да осигурим по добра защита на здравето в целия свят</h1>
          <p>С настоящите инициативи в Еквадор и Мексико ние защитаваме общонстите по света, като
           обучаваме и работим за чистота, здраве, хигиена и безопасност. Ние сме спонсорирали
            почистването на местния парк в една община в Еквадор, за да помогнем да се пребори
             с болестите, причинени от боклуците. Ние също защитаваме жителите на един от най-големите
              градове в света, Мексико Сити, подкрепяки ги в борбата срещу безмълвните заплахи,
               които ежедневно застрашават техния имунитет, като им предоставяме подслон и достъп
                до продуктите Редоксон®.</p>
          </Col>
        </Row>
        <Row>
          <Col md={{span:12}} className="py-4 text-center">
          <img  src={HappyFamily}  alt="family"/>
          </Col>
        </Row>
        <Row>
          <Col md={{span:6,offset:3}} style={{textAllign:'center'}} className="text-center py-4">
          <h1>Подкрепа за Вашето здраве в продължение на повече от 80 години</h1>
          <p>Редоксон®  помага за поддържане на здравето на хората в целия свят в продължение на повече
            от 80 години. През 1934 г.  прокарахме пътя на първата хранителна добавка с витамин C
             в света и оттогава  сме неизменни лидери. Днес ние предлагаме гама от иновативни продукти,
              предназначени да поддържат имунната система* и да ви помогнат да поддържате своето здраве.</p>
             <p><sub>*Витамин C и цинк допринасят за нормалната функция на имунната система.</sub></p> 
          </Col>
        </Row>
        <Row className="p-4">
          <Col md={{span:3}}>
          <Image webp={require("../images/stay-healthy-promo.webp")} style={{width:'100%'}} alt="stayHealthy"/>
          <a href="/bg/how_to_stay_healthy/index.php" style={{display:'block', color:'#666'}} className="text-center py-4">
            Вижте нашите съвети как да поддържате своето здраве</a>
          </Col>
      
        
          <Col md={{span:3}}>
          <Image webp={require("../images/vitamin-c-promo.webp")} style={{width:'100%'}} alt="vitaminC"/>
         <a href="/bg/vitamin_c/index.php" style={{display:'block', color:'#666'}} className="text-center py-4">Открийте силата на витамин C</a>
          </Col>
      
        <Col md={{span:3}}>
        <Image webp={require("../images/promo1.webp")} style={{width:'100%'}} alt="Redoxon"/>
         <a href="/bg/products/index.php" style={{display:'block', color:'#666'}} className="text-center py-4">Намерете подходящия за Вас Редоксон®</a>
        </Col>
        <Col md={{span:3}}>
        <Image webp={require("../images/faq-promo.webp")} style={{width:'100%'}} alt="schoolClass"/>
         <a href="/bg/faq/index.php" style={{display:'block', color:'#666'}} className="text-center py-4">Имате въпрос? Вижте нашите "Често задавани въпроси"</a>
        </Col>
        </Row>
        <Footer/>
        </Container>;
        
    }
}


export default WhoAreWe;