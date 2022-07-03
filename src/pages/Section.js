import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Typist from "react-typist";

import ScrollspyNav from "./ScrollspyNav";

import bg01 from "../assets/images/background.png";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-home rtl-personal-hero d-flex align-items-center"
          style={{background: `url(${bg01}) center center no-repeat`}}
          id="home"
        >
          <Container>
            <Row className="align-items-center">
              <Col lg="8" md="9">
                <div className="title-heading mt-4">
                  <h1 className="display-3 font-weight-bold mb-3">
                    Here I'm <br />
                    <Typist>
                      <span className="element">Yuldashev Shukhratjon</span>
                      <Typist.Backspace count={21} delay={200} />
                      <span className="element">alif_coder</span>
                      <Typist.Backspace count={10} delay={200} />
                      <span className="element">Data Science Developer</span>
                      <Typist.Backspace count={22} delay={200} />
                      <span className="element">Web Developer</span>
                      <Typist.Backspace count={13} delay={200} />
                      <span className="element">Analytical</span>
                      <Typist.Backspace count={15} delay={200} />
                      <span className="element">Financial Developer</span>
                    </Typist>
                  </h1>
                  <p className="para-desc text-muted">
                    “If you define the problem correctly, you almost have the solution.” Steve Jobs
                  </p>
                  <div className="mt-4 pt-2 row">
                    <ScrollspyNav
                        scrollTargetIds={["portfolio"]}
                        activeNavClass="active"
                        scrollDuration="800"
                        headerBackground="true"
                    >
                      <a
                          href="#portfolio"
                          className="btn btn-primary mt-2 mr-2 mouse-down"
                      >
                        <i className="mdi mdi-camera"></i> View Portfolio
                      </a>
                    </ScrollspyNav>
                      <a
                        href="ShukhratjonYuldashev.pdf"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary mt-2 mouse-down ml-1" download
                      >
                        <i className="mdi mdi-cloud-download"></i> Hire Me
                      </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
