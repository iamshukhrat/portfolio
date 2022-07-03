// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col, Progress, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Light Box
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

//Import Components
import SectionTitle from "../components/SectionTitle";
import ProcessBox from "../components/ProcessBox";

// import images
import elmakon from "../assets/images/elmakon.jpg";
import softwaresystems from "../assets/images/softwaresystems.jpg";
import marcossoft from "../assets/images/marcos.jpg";
import elma from "../assets/images/elma.png";
import formula from "../assets/images/formula.png";

//creating array of images for image portfolio
const images = [
  elmakon,
  softwaresystems,
  marcossoft,
  elma,
  formula,
];

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          image: elmakon,
          title: "Online and offline mobile retail",
          subject: "Elmakon",
          author: "Yuldashev Shukhratjon",
          date: "13th August, 2019",
        },
        {
          image: softwaresystems,
          title: "Business Process Automation",
          subject: "Software Systems",
          author: "Yuldashev Shukhratjon",
          date: "13th August, 2019",
        },
        {
          image: marcossoft,
          title: "IT solutions",
          subject: "Marcos Soft",
          author: "Yuldashev Shukhratjon",
          date: "13th August, 2019",
        },
        {
          image: elma,
          title: "Manufactures sanitary paper products under the trademarks \"ELMA\", \"S'GLux\" and \"BABYLUX\".",
          subject: "Elma",
          author: "Yuldashev Shukhratjon",
          date: "13th August, 2019",
        },
        {
          image: formula,
          title: "Engine oil company",
          subject: "Formula",
          author: "Thomas Brewer",
          date: "13th August, 2019",
        },
      ],
      processes: [
        {
          id: 1,
          title: "Discuss The Project",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          link: "#",
        },
        {
          id: 2,
          title: "Develop & Elaborate",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          link: "#",
        },
        {
          id: 3,
          title: "Final Approvement",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          link: "#",
        },
      ],
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row className="align-items-center">
              <Col md="6">
                <div className="section-title">
                  <h4 className="title">About Me</h4>
                  <h6 className="text-primary mb-4">
                    I'm alif_coder.
                  </h6>
                  <p className="text-muted mb-0">
                    My name is Shukhatjon Yuldashev. I entered Tashkent University of Information Technologies in 2019.
                    I learned 1C and Java programming languages as an intern at Marcos Soft IT. Then I started working
                    on financial programs.
                    In 2020, I started working for ELMAKON. During this time, I learned PHP and Python programming
                    languages, and now I work there as a financial programmer. At ELMAKON, I successfully connected the
                    integration of the 1C platform with elmakon.uz, credit.elmakon.uz, zoodmall.uz, alifshop.uz, olcha.uz
                    sello.uz and other sites. I have also developed a separate real-time CallCenter module for the
                    ELMAKON 1C software. I am currently working on the ESB module.
                    In 2021, I was hired by SOFTWARE SYSTEMS as a JAVA and 1C programmer. Now I work for these two
                    companies. My most successful projects today: I created a program for Apple called ‘Production
                    Automation’ for the production of napkins and paper. I further optimized this project and integrated
                    it for android and ios into a specific financial complex application and referred this program to
                    Formula Motor Oil Company. This project is still being updated and optimized, and this project is
                    still used by various reputable companies.
                    <hr/>
                    My skills:
                    <ul>
                      <li>Java - OOP, CORE, SPRING, SPRING BOOT</li>
                      <li>PHP8 - SYMFONY, LARAVEL</li>
                      <li>Python - MACHINE LEARNING 101, NUMPY, DATA ENGINEERING</li>
                      <li>Platforms above 1C - 8.3, any mode, REST API, ODATA, XDTO</li>
                      <li>Database - SQL / NOSQL mastered</li>
                    </ul>
                  </p>
                  <div className="mt-4">
                    <a className="btn btn-primary mouse-down" href="tel:+998972600106">
                      <i className="mdi mdi-phone"></i> Contact Me
                    </a>
                  </div>
                </div>
              </Col>

              <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="ml-md-4">
                  <div className="progress-box">
                    <h6 className="title text-muted">Java</h6>
                    <Progress
                      value={84}
                      color="primary"
                      barClassName="position-relative"
                    >
                      <div className="progress-value d-block text-muted h6">
                        84%
                      </div>
                    </Progress>
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">PHP / MYSQL</h6>
                    <Progress
                      value={75}
                      color="primary"
                      barClassName="position-relative"
                    >
                      <div className="progress-value d-block text-muted h6">
                        75%
                      </div>
                    </Progress>
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">Python</h6>
                    <Progress
                      value={79}
                      color="primary"
                      barClassName="position-relative"
                    >
                      <div className="progress-value d-block text-muted h6">
                        79%
                      </div>
                    </Progress>
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">1C</h6>
                    <Progress
                      value={95}
                      color="primary"
                      barClassName="position-relative"
                    >
                      <div className="progress-value d-block text-muted h6">
                        95%
                      </div>
                    </Progress>
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">Data Structures</h6>
                    <Progress
                      value={93}
                      color="primary"
                      barClassName="position-relative"
                    >
                      <div className="progress-value d-block text-muted h6">
                        93%
                      </div>
                    </Progress>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60" id="portfolio">
            {/* section title */}
            <SectionTitle
              isLeft={true}
              title="My Work & Portfolio"
              desc=". Under the experiences I have gained to date, the role of these companies is enormous"
            />

            <Row>
              {this.state.projects.map((project, key) => (
                <Col lg="4" md="6" key={key} className="mt-4 pt-2">
                  <Card className="border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                    <CardBody className="p-0">
                      <img
                        src={project.image}
                        className="img-fluid"
                        alt="work"
                      />
                      <div className="overlay-work bg-dark"></div>
                      <div className="content">
                        <h5 className="mb-0" >
                          <Link
                            className="text-white title"
                          >
                            {project.title}
                          </Link>
                        </h5>
                        <h6 className="text-light tag mb-0">
                          {project.subject}
                        </h6>
                      </div>
                      <div className="icons text-center">
                        <Link
                          to="#"
                          onClick={() =>
                            this.setState({ isOpen: true, photoIndex: key })
                          }
                          className="text-primary work-icon bg-white d-inline-block rounded-pill mfp-image"
                        >
                          <i>
                            <FeatherIcon
                              icon="camera"
                              className="fea icon-sm"
                            />
                          </i>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
            {/* lightbox for portfolio images */}
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                imagePadding={100}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </Container>

          {/*<Container className="mt-100 mt-60">*/}
          {/*  /!* section title *!/*/}
          {/*  <SectionTitle*/}
          {/*    isLeft={true}*/}
          {/*    title="Work Process"*/}
          {/*    desc=" that can provide everything you need to generate awareness, drive traffic, connect."*/}
          {/*  />*/}

            {/*<Row>*/}
            {/*  /!* process box *!/*/}
            {/*  <ProcessBox processes={this.state.processes} />*/}
            {/*</Row>*/}
          {/*</Container>*/}
        </section>
      </React.Fragment>
    );
  }
}

export default About;
