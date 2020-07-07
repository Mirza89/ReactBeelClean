import React from 'react';
import './App.css';
import 'tachyons';
import NavigationBar from './NavigationBar/NavigationBar';
import MainArticle from './MainArticle/MainText';
import Footer from './DonjaStrana/FooterDonji';
import 'bootstrap/dist/css/bootstrap.min.css';
import LightBox from './LightBox/LightBox.js';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import Buro from './Buro/Buro';
import GrundReinigung from './Grund/GrundReinigung';
import TeppichbodenReinigung from './Teppich/TeppichbodenReinigung';


class App extends React.Component  {
  render(){
  return (
    <div className="App">
    <Router>
    <Switch>
     <Route exact path="/" component={NavigationBar} />
     <Route strict path="/Hausmeisterservice" component={Buro} />
     <Route strict path="/Grundreinigung" component={GrundReinigung} />
     <Route strict path="/TeppichbodenReinigung" component={TeppichbodenReinigung} />
    </Switch>
    </Router>
    <Footer style={{height: '50px', marginTop: '-50px', position: 'fixed'}}/>
    </div>
  );
 }
}

export default App;
