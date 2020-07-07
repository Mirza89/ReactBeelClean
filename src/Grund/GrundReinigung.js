import React from "react";
import Lightbox from "react-image-lightbox";
import LightBox2 from '../LightBox2/LightBox2';
import NavBezSlike from '../NavbarWithoutImage/NavWithoutPicture';

class GrundReinigung extends React.Component {
render(){
    return(
      <div>
      <br />
      <br />
      <NavBezSlike />
      <LightBox2 />
      <br />
      <h2>Ovdje treba nesto napisati za Grundreinigung</h2>
      </div>
      )
    }
  }
export default GrundReinigung;
