import React, { Component } from 'react';
import 'tachyons';
import './FooterDonji.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


class FooterDonji extends Component {
  render(){
      return (
        <MDBFooter color="blue" >
            <MDBContainer fluid background="white" >
            </MDBContainer>
            <div className="footer-copyright text-center">
              <MDBContainer fluid style={{background: 'darkblue', height: '100px', paddingTop: '25px', color: 'white'}}>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.beelclean.com"> BEEL-CLEAN </a>
                <p>Design by: Mirza</p>
              </MDBContainer>
            </div>
          </MDBFooter>
  );
  }
}

export default FooterDonji;
