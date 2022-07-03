// React Basic and Bootstrap
import React, { Component } from "react";

// Import Generic components
import Section from "./Section";
import About from "./About";
import Testi from "./Testi";
import Blog from "./Blog";
import FooterWithoutMenuLightSocialOnly from "./FooterWithoutMenuLightSocialOnly";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Hero Start */}
        <Section />

        {/* About */}
        <About />

        {/* Testi */}
        <Testi />

        {/* Blog */}
        <Blog />
        <FooterWithoutMenuLightSocialOnly/>
      </React.Fragment>
    );
  }
}

export default Index;
