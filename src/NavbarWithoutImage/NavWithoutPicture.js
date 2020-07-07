import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBDropdownItem, MDBDropdownMenu, MDBDropdown, MDBDropdownToggle  } from 'mdbreact';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import Logo from '../NavigationBar/Logo.jpg';
import LightBox from '../LightBox/LightBox';
import Home from '../App.js';
import MainArticle from '../MainArticle/MainText';
import Footer from '../DonjaStrana/FooterDonji';

class NavWithoutPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }



  render() {
    return (
      <div>
        <header >
          <Router>
            <MDBNavbar  color="bg-light" fixed="top" light expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <img src={Logo} height="40px" width="180px" />
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                 <MDBNavLink style={{fontSize: '20px', fontWeight: 'bold'}} hover overlay="blue-strong" to="#">Über uns</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBDropdown>
                  <MDBDropdownToggle nav caret style={{fontSize: '20px', fontWeight: 'bold'}}>
                  <span className="mr-2">Dienstleistungen</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/Dienstleistungen/">Dienstleistungen</MDBDropdownItem>
                  <MDBDropdownItem href="/Grundreinigung">Grundreinigung</MDBDropdownItem>
                  <MDBDropdownItem href="/Teppichbodenreinigung">Teppichbodenreinigung</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink style={{fontSize: '20px', fontWeight: 'bold'}} to="#">Kontakt</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
        </header>
      </div>
    );
  }
}

export default NavWithoutPicture;
