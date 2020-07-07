import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask,MDBTypography, MDBBox  } from "mdbreact";
import './MainText.css';

const MainText = () => {
  return (
    <section className="text-center my-5" id="GlavnaSekcija">
    <section id="GlavniText">
        <MDBTypography tag='h2' variant="h2-responsive" style={{color: 'white'}}>Wir möchten Ihnen was mitteilen</MDBTypography>
        <MDBBox id="prviText" tag="p" mb={0}>BEEL-CLEAN
          Gebäudereinigung Spezialist
          Sauberkeit ist die Visitenkarte eines jeden Unternehmens. Laufspuren im
          Eingangsbereich, Handabdrücke auf Türen und Fernsten und ein
          ungepflegte Toilettenbereich beschmutzen auch das positive Image, das
          Sie durch jahrelange Kundenpflege und groß angelegte Kampagnen
          aufgebaut haben.
          Das Team von BEEL-CLEAN sorgt für perfekte Reinheit im Büro, im
          Kundenbereich und selbstverständlich auch bei sanitären Einrichtung.
          Wenn auch Sie Ihren Kunden und Ihren Mitarbeitern neben einem
          perfekten Image professionelle Sauberkeit bieten möchten, dann rufen Sie
          uns an. Wir freuen uns auf Ihren Anruf!!!</MDBBox><br /><hr /><br />

    </section>

    <section id="Farbanje">
    <MDBTypography tag='h2' variant="h2-responsive" style={{color: 'white'}}>Unsere Dienstleistungen in kurzformat</MDBTypography>
      <MDBRow className="text-center">
        <MDBCol lg="4"  md="12" className="mb-lg-0 mb-4">
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3" style={{color: '#fff'}}>Büroreinigung</h4>
            <p className="grey-text">
              <ul>
              <p>Unsere Leistungen für die Büroreinigung und Unterhaltsreinigung umfassen ganz nach Absprache folgende Bereiche:</p>
              <ul>Reinigung und Pflege für:</ul><br />
              <li className="text-left">Fußböden</li>
              <li className="text-left">Möbel</li>
              <li className="text-left">Technische Geräte</li>
              <li className="text-left">Sanitärbereiche</li>
              <li className="text-left">Leeren von Mülleimern und Aschenbechern</li>
              </ul>
            </p>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3" style={{color: '#fff'}}>Treppenhausreinigung</h4>
            <p className="grey-text">
              Verlassen Sie sich bei der Treppenhausreinigung genauso wie in allen Bereichen der Gebäudereinigung auf
              BEEL-CLEAN aus München. Unser erfahrenes Team kümmert sich schnell und sorgfältig um Ihre Immobilie und sorgt dafür,
              dass bereits beim Betreten des Treppenhauses alles in bestem Licht erstrahlt.
            </p>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3" style={{color: '#fff'}}>Glasreinigung</h4>
            <p className="grey-text">
              Ob Ihre Immobilie an einer viel befahrenen Straße steht,
              in der Nähe eine Baustelle ist oder Schlieren und der alltägliche Staub die Sicht trüben:
              Wir haben die passenden Reinigungsprodukte für jeden Einsatz.
            </p>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
      {/* Novi red */}
      <MDBRow className="text-center">
        <MDBCol lg="4"  md="12" className="mb-lg-0 mb-4">
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3" style={{color: '#fff'}}>Hausreinigung</h4>
            <p className="grey-text">
              Treba mi text da napisem nesto ovdje.
            </p>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3" style={{color: '#fff'}}>Baufeinreinigung</h4>
            <p className="grey-text">
              Die Fassade ist entscheidend für den Eindruck Ihres Unternehmens. Erstrahlen Sie immer im besten Licht!
              BEEL-CLEAN aus München bietet die zuverlässige und gründliche Reinigung
              und Instandhaltung Ihrer Fassaden, damit Ihre Immobilie auch von außen stets den besten Eindruck macht.
            </p>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3" style={{color: '#fff'}}>Grundreinigung</h4>
            <p className="grey-text">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae.
            </p>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
      {/* Novi red */}
      <MDBRow className="text-center">
        <MDBCol lg="4"  md="12" className="mb-lg-0 mb-4">
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3" style={{color: '#fff'}}>Beschichtung</h4>
            <p className="grey-text">
              Treba mi text da napisem nesto ovdje.
            </p>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3" style={{color: '#fff'}}>Hausmeisterservice</h4>
            <p className="grey-text">
                Treba mi text da napisem nesto ovdje.
            </p>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
      </section>
    </section>
  );
}

export default MainText;
