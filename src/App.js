import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import HomeComponent from './containers/home/home.component';
import MoviesComponent from './containers/movies/movies.component';
import SeriesComponent from './containers/series/series.component';


export default class App extends Component {
  render() {
    return (

      <Router>
        <div className="header">
          <Link to="/" className="logo">Streaming<span
            style={{
              color: '#a73f3f',
              borderRight: '2px solid gray',
              paddingRight: '30px'
            }}>DEMO</span></Link>
          <div className="header-right">
            <a href="#login">Login</a>
            <a href="#trial" className="active">Start yout free trial</a>
          </div>
          <Route path="/" exact component={() => <h3 style={{ margin: '12px', color: '#666666' }}>Home</h3>} />
          <Route path="/movies" component={() => <h3 style={{ margin: '12px', color: '#666666' }}>Movies</h3>} />
          <Route path="/series" component={() => <h3 style={{ margin: '12px', color: '#666666' }}>Series</h3>} />

        </div>

        <div style={{ paddingTop: '90px', height: '847px' }}>
          <Route path="/" component={HomeComponent} exact={true} />
          <Route path="/movies" component={MoviesComponent} />
          <Route path="/series" component={SeriesComponent} />
        </div>


        <div className="footer-distributed">
          <div className="footer-left">
            <p className="footer-links">
              <span href="#" className="link-1">Home</span>
              <span href="#">Terms and Condition</span>
              <span href="#">Privacy Policy</span>
              <span href="#">Collcection Statement</span>
              <span href="#">Help</span>
              <span href="#">Manage Account</span>
            </p>
            <p className="footer-company-name">Copyright © 2020StreamingDEMO. All Rights Reserved.</p>
          </div>
          <div className="footer-right">
            <div className="footer-icons">
              <span alt="Contact us Facebook" style={{ background: "url('/social/facebook-white.svg')" }}></span>
              <span alt="Contact us Instagram" style={{ background: "url('/social/instagram-white.svg')" }}></span>
              <span alt="Contact us Twitter" style={{ background: "url('/social/twitter-white.svg')" }}></span>
            </div>
            <div style={{ flex: 1 }}></div>
            <div className="footer-icons">
              <img src="/store/app-store.svg" alt="Contact us Facebook" />
              <img src="/store/play-store.svg" alt="Contact us Facebook" />
              <img src="/store/windows-store.svg" alt="Contact us Facebook" />
            </div>
          </div>
        </div>
      </Router >
    )
  }
}
