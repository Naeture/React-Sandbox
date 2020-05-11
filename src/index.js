import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Container from 'react-bootstrap/Container';
import Navbar from './components/navbar';
import Card from './components/card';
import CardDeck from './components/carddeck';
import CardsWithData from './components/cardswithdata.js';

ReactDOM.render(
    <Container fluid>
        <React.Fragment>
              <Navbar />
              <br></br>
              <Card />
              <br></br>
              <CardDeck />
              <br></br>
              <CardsWithData />
          </React.Fragment>
    </Container>, 
    document.getElementById('root')
);