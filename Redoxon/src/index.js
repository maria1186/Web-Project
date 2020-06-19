import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
//import App from './App';<App />
import Home from './components/Home';
import VitaminC from './components/VitaminC';
import Products from './components/Products';
import Redoxitos from './components/Redoxitos';
import Redoxon from './components/Redoxon';
import HowStayHealthy from './components/HowStayHealthy';
import WhereBuy from './components/WhereBuy';
import Faq from './components/Faq';
import WhoAreWe from './components/WhoAreWe';
import Video from './components/Video';
import * as serviceWorker from './serviceWorker';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
ReactDOM.render( <BrowserRouter>
<Route path="/" component={Home} exact />
        <Route path="/vitaminC" component={VitaminC} />
        <Route path="/products" component={Products} />
        <Route path="/Redoxitos" component={Redoxitos} />
        <Route path="/Redoxon" component={Redoxon} />
        <Route path="/HowStayHealthy" component={HowStayHealthy} />
        <Route path="/WhereBuy" component={WhereBuy} />
        <Route path="/Faq" component={Faq} />
        <Route path="/WhoAreWe" component={WhoAreWe} />
        <Route path="/Video" component={Video} />
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

