import React from "react";
import "./Landing.css";
import cloudingridouterlogo from "./../images/cloudingridouterlogo.png";
import cloudingridinnerlogo from "./../images/cloudingridinnerlogo.png";
// import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

function Landing() {
  return (
    <div className="parent">
      {/* <section className="landing-section" id="one">
        <div className="outer">
          <div className="section-content">
            <img
              alt="kubernetes"
              src="https://metacenter.io/static/images/aws-k8s.svg"
            ></img>
          </div>
        </div>
      </section> */}
      <section className="landing-section" id="zero">
        <div className="center-content">
          <div className="hero-logo-circles">
            <img
              className="hero-logo-circle"
              alt="circle"
              src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-red-2f7737b286dff1537adff47b8201aa43e33cbe1e47bd528ca2189809917fe132.svg"
            ></img>
            <img
              className="hero-logo-circle"
              alt="circle"
              src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-orange-semi-d9d13d5529ae8f3c91dc80b182cf14fc629118bbdac8851b36e102dd15652557.svg"
            ></img>
            <img
              className="hero-logo-circle"
              alt="circle"
              src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-orange-235189ed438049f084ca873f6ed2055c4127ddef84a55fa464053f34c10157e6.svg"
            ></img>
            <img
              className="hero-logo-circle"
              alt="circle"
              src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-red-semi-5aec49dbe5d420f928cece7001b96267ee17a9d3577374b68b4fba47c547bd75.svg"
            ></img>
            <img
              className="hero-logo-circle"
              alt="circle"
              src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-yellow-semi-af7a94ccf4768a81e6692d808f00e33ac88d9110f842d02c5ab211577686301a.svg"
            ></img>
            <img
              className="hero-logo-circle"
              alt="circle"
              src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-yellow-bf8ec5927e343b3a804448d37a799c9c346af320f30b3cdc019297938fe00300.svg"
            ></img>
            <img
              className="hero-logo-circle"
              alt="circle"
              src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-green-semi-6b12059c6aea11bf60e8f3c89afdffb6b817913541a1ce72cbca29f733224984.svg"
            ></img>
            <img
              className="hero-logo-circle"
              alt="circle"
              src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-green-8a75a5e7cc4f8426a47f5ebfe2459283d3554cfdcf8dc5f492fda0b26d2d6d79.svg"
            ></img>
            <img
              className="hero-logo-circle"
              alt="circle"
              src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-blue-semi-930c6662236ab84933e73083bc057b869b895bd36cef9e3e5254018fb61bc82a.svg"
            ></img>
            <img
              className="hero-logo-circle"
              alt="circle"
              src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-blue-50996d0762fb6d9ee13d6a52404dd01327fc542cc729777d532c9b633103c835.svg"
            ></img>
            <img
              className="outer-logo"
              alt="Cloud in Grid outer logo"
              src={cloudingridouterlogo}
            ></img>
            <img
              className="inner-logo"
              alt="Cloud in Grid inner logo"
              src={cloudingridinnerlogo}
            ></img>
            <Particles
              params={{
                particles: {
                  number: {
                    value: 80,
                    density:{
                      enable:true,
                      value_area:516
                    }
                  },
                  move:{
                    speed: 3
                  },
                  color:{
                    value: "#ff0000"
                  },
                  line_linked:{
                    color: "#008000"
                  }
                },
                
                interactivity: {
                  events: {
                      onhover: {
                          enable: true,
                          mode: "repulse"
                      }
                  }
              }
              }}
            />
            <span className="cloudingridtext">CLOUDINGRID</span>
          </div>
        </div>
      </section>
      <section className="landing-section bg-primary" id="two">
        <div className="outer">
          <div className="section-content">
            <div className="center-content">
              <h1 className="margin-top-0 text-primary">About CloudInGrid</h1>
              <br />
              <p className="text-faded">
                {" "}
                Lorem Ipsum ijhgiuhgf ijgfhieg ekjhgkjeg erghkejgng
                gojhegrkjgriuehgiueg giujegkjsnbgkjsgg{" "}
              </p>
              <p className="text-faded">
                {" "}
                Lorem shgfoiehg kjgrhiehg kjhgkjheg kjdhfgkjhd khgehgr
                kjngkjdhgf kjhgkjeg{" "}
              </p>
              <Link to="#two" className="btn btn-default btn-xl page-scroll">
                Learn More
              </Link>
              <img
              alt="kubernetes"
              src="https://metacenter.io/static/images/aws-k8s.svg"
            ></img>
            </div>
          </div>
        </div>
      </section>
      
      <section className="landing-section" id="three">
        <div className="outer">
          <div className="section-content">
            <div className="center-content text-center">
              <h2 className="margin-top-0 text-primary">Features</h2>
              <hr className="primary" />
            </div>
            <div className="col-lg-3 col-md-3 text-center">
              <div className="feature">
                {/* <i
                  className="icon-lg ion-android-laptop wow fadeIn"
                  data-wow-delay=".3s"
                ></i> */}
                <i className="fa fa-send fa-3x"></i>
                <h3>Everything you need!</h3>
                <p className="text-muted">
                  Provides all necessary materials and services needed to reduce
                  friction when working with an API (For example: onboarding,
                  registration, API key provisioning, payments).
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 text-center">
              <div className="feature">
                {/* <i
                  className="icon-lg ion-social-sass wow fadeInUp"
                  data-wow-delay=".2s"
                ></i> */}
                <i className="fa fa-check fa-3x"></i>
                <h3>Trust Generation</h3>
                <p className="text-muted">
                  Generates trust and gives an indication if your business will
                  be committed to an API over a long enough period.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 text-center">
              <div className="feature">
                {/* <i
                  className="icon-lg ion-ios-star-outline wow fadeIn fa-rocket"
                  data-wow-delay=".3s"
                ></i> */}
                <i className="fa fa-handshake-o fa-3x"></i>
                <h3>Helping Hand</h3>
                <p className="text-muted">
                  Helps potential API customers find the developer portal and
                  the API products it contains through Search Engine
                  Optimization and other web traffic generation.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 text-center">
              <div className="feature">
                {/* <i
                  className="icon-lg ion-ios-star-outline wow fadeIn"
                  data-wow-delay=".3s"
                ></i> */}
                <i className="fa fa-wrench fa-3x"></i>
                <h3>Relevant Tools</h3>
                <p className="text-muted">
                  Has tools to manage and maintain the relationship with API
                  customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-section bg-tertiary" id="four">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 text-center">
              <h2 className="margin-top-0 text-primary wow fadeIn">
                Get in Touch
              </h2>
              <hr className="primary" />
              <p>
                We love feedback. Fill out the form below and we'll get back to
                you as soon as possible.
              </p>
            </div>
            <div className="col-lg-10 col-lg-offset-1 text-center">
              <form className="contact-form row">
                <div className="col-md-4">
                  <label></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-4">
                  <label></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-4">
                  <label></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="col-md-12">
                  <label></label>
                  <textarea
                    className="form-control"
                    rows="9"
                    placeholder="Your message here.."
                  ></textarea>
                </div>
                <div className="col-md-4 col-md-offset-4">
                  <label></label>
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#alertModal"
                    className="btn btn-primary btn-block btn-lg"
                  >
                    Send <i className="fa fa-send"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6 col-sm-3 column">
              <h4 className="h4-color">Information</h4>
              <ul className="list-unstyled">
                <li>
                  <Link className="a-color" to="#one">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="a-color" to="#two">
                    Features
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-3 column">
              <h4 className="h4-color">Registration</h4>
              <ul className="list-unstyled">
                <li>
                  <Link className="a-color" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="a-color" to="/signup">
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-3 column">
              <h4 className="h4-color">Stay Posted</h4>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    title="No spam, we promise!"
                    placeholder="Tell us your email"
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#alertModal"
                    type="button"
                  >
                    Subscribe for updates
                  </button>
                </div>
              </form>
            </div>
          </div>
          <br />
        </div>
      </footer>
    </div>
  );
}

export default Landing;
