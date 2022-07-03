// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Star Rating
import StarRatings from "react-star-ratings";

import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

//Import Images
import bg02 from "../assets/images/bg02.jpg";
import client1 from "../assets/images/01.jpg";
import client2 from "../assets/images/02.jpg";

class Testi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          id: 1,
          image: client1,
          name: "Thomas Israel",
          post: "C.E.O",
          rating: 5,
          desc:
            "I truly believe there’s always a solution to every problem.",
        },
        {
          id: 2,
          image: client2,
          name: "Carl Oliver",
          post: "P.A",
          rating: 4,
          desc:
            "The fear of being different prevents most people from seeking new ways to solve their problems.",
        },
      ],
      activeIndex: 0,
    };
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.state.clients.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.state.clients.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    return (
      <React.Fragment>
        <section
          className="section"
          style={{ background: `url(${bg02}) center center` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg="7" className="text-center">
                <Carousel
                  activeIndex={this.state.activeIndex}
                  next={this.next}
                  previous={this.previous}
                >
                  {this.state.clients.map((client, key) => (
                    <CarouselItem
                      key={key + 1}
                      onExiting={this.onExiting()}
                      onExited={this.onExited()}
                    >
                      <div key={key} className="customer-testi text-center">
                        <p className="text-light para-dark h6 font-italic">
                          " {client.desc} "
                        </p>
                        <StarRatings
                          rating={client.rating}
                          starRatedColor="#F17425"
                          numberOfStars={5}
                          name="rating"
                          starDimension="15px"
                          className="list-unstyled mb-0 mt-3"
                        />
                        <h6 className="text-light title-dark">
                          {" "}
                          {client.name}{" "}
                        </h6>
                        <img
                          src={client.image}
                          style={{ height: 65, width: 65 }}
                          className="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                          alt="testimonial"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                  <CarouselControl
                    direction="prev"
                    onClickHandler={this.previous}
                  >
                    <span className="carousel-control-prev-icon"></span>
                    <span className="sr-only">Previous</span>
                  </CarouselControl>
                  <CarouselControl direction="next" onClickHandler={this.next}>
                    <span className="carousel-control-next-icon"></span>
                    <span className="sr-only">Next</span>
                  </CarouselControl>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Testi;
