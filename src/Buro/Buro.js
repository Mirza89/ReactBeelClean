import React from "react";
import Lightbox from "react-image-lightbox";
import LightBox from '../LightBox/LightBox';
import NavBezSlike from '../NavbarWithoutImage/NavWithoutPicture';

class Buro extends React.Component {
render(){
    return(
      <div>
      <br />
      <br />
      <NavBezSlike />
      <LightBox />
      <br />
      <h2>Ovdje treba nesto napisati za Hausmeisterservice</h2>
      </div>
      )
    }
  }
export default Buro;
