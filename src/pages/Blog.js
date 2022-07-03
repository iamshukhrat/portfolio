// React Basic and Bootstrap
import React, {Component} from "react";
import axios from "axios";
import {
    Container,
    Row,
    Col,
    Alert,
    Form,
    FormGroup,
    Input,
    Label,
    Card,
    CardBody,
} from "reactstrap";
import {Link} from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../components/SectionTitle";
import BlogBox from "../components/BlogBox";

// import images
import personal01 from "../assets/images/1.jpg";
import personal02 from "../assets/images/2.jpg";
import personal03 from "../assets/images/3.jpg";
import personal04 from "../assets/images/4.jpg";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                {
                    id: 1,
                    image: personal01,
                    title: "Resting time on SAFARI",
                    like: "34",
                    comment: "08",
                    autor: "Yuldashev Shukhratjon",
                    date: "21th March, 2022",
                },
                {
                    id: 2,
                    image: personal02,
                    title: "You just have to enjoy your life",
                    like: "43",
                    comment: "03",
                    autor: "Yuldashev Shukhratjon",
                    date: "22th March, 2022",
                },
                {
                    id: 3,
                    image: personal03,
                    title: "Dubai Miracle Garden",
                    like: "12",
                    comment: "00",
                    autor: "Yuldashev Shukhratjon",
                    date: "24th March, 2022",
                },
                {
                    id: 4,
                    image: personal04,
                    title: "Despite the Sunday, I am still at work",
                    like: "17",
                    comment: "09",
                    autor: "Yuldashev Shukhratjon",
                    date: "26th June, 2022",
                },
            ],
            Contactvisible: false,
            name: "",
            phone: "",
            email: "",
            comments: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();

        let dataBot = JSON.stringify({
            "chat_id": "889372793",
            "text": "Person : " + this.state.name + "\n" +
                "Number : " + this.state.phone + "\n" +
                "Email : " + this.state.email + "\n" +
                "Text : " + this.state.comments + "\n",
            "parse_mode": "markdown",
        });
        let config = {
            method: 'post',
            url: 'https://api.telegram.org/bot5521357229:AAFFHoqwlm5WFzurx0yctOVEiwf_-MEOkik/sendMessage',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json'
            },
            data: dataBot,
        };
        axios(config).then(function (response) {

        }).catch(function (error) {

        })
        this.setState({
            Contactvisible: true,
            name: '',
            phone: '',
            email: '',
            comments: '',
        })
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        {/* section title */}
                        <SectionTitle
                            isLeft={true}
                            title="Latest News"
                            desc=" . Are you ready to welcome the world? Let's go!"
                        />

                        <Row>
                            {/* blog box */}
                            <BlogBox blogs={this.state.blogs}/>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60" id="contact">
                        {/* section title */}
                        <SectionTitle
                            isLeft={true}
                            title="Contact Me"
                            desc=". I am ready to share my experience with you. What about you?"
                        />

                        <Row>
                            <Col lg="4" md="6" className="mt-4 pt-2">
                                <Card className="rounded shadow border-0">
                                    <CardBody className="py-5">
                                        <h4>Get In Touch !</h4>
                                        <div className="custom-form mt-3">
                                            <div id="message"></div>
                                            <Alert
                                                color="primary"
                                                isOpen={this.state.Contactvisible}
                                                toggle={() => {
                                                    this.setState({
                                                        Contactvisible: !this.state.Contactvisible,
                                                    });
                                                }}
                                            >
                                                Contact details send successfully.
                                            </Alert>
                                            <Form
                                                method="post"
                                                onSubmit={this.handleSubmit}
                                                name="contact-form"
                                                id="contact-form"
                                            >
                                                <Row>
                                                    <Col md="12">
                                                        <FormGroup className="position-relative">
                                                            <Label>
                                                                Your Name <span className="text-danger">*</span>
                                                            </Label>
                                                            <div className="position-relative">
                                                                <i>
                                                                    <FeatherIcon
                                                                        icon="user"
                                                                        className="fea icon-sm icons"
                                                                    />
                                                                </i>
                                                            </div>
                                                            <Input
                                                                name="name"
                                                                id="name"
                                                                type="text"
                                                                className="form-control pl-5"
                                                                placeholder="First Name :"
                                                                required
                                                                onChange={(e) => this.handleChange(e)}
                                                                value={this.state.name}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="12">
                                                        <FormGroup className="position-relative">
                                                            <Label>
                                                                Phone Number <span className="text-danger">*</span>
                                                            </Label>
                                                            <div className="position-relative">
                                                                <i>
                                                                    <FeatherIcon
                                                                        icon="phone"
                                                                        className="fea icon-sm icons"
                                                                    />
                                                                </i>
                                                            </div>
                                                            <Input
                                                                name="phone"
                                                                id="phone"
                                                                type="phone"
                                                                className="form-control pl-5"
                                                                placeholder="Phone Number :"
                                                                required
                                                                onChange={(e) => this.handleChange(e)}
                                                                value={this.state.phone}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <Label>
                                                                Your Email{" "}
                                                                <span className="text-danger">*</span>
                                                            </Label>
                                                            <div className="position-relative">
                                                                <i>
                                                                    <FeatherIcon
                                                                        icon="mail"
                                                                        className="fea icon-sm icons"
                                                                    />
                                                                </i>
                                                            </div>
                                                            <Input
                                                                name="email"
                                                                id="email"
                                                                type="email"
                                                                className="form-control pl-5"
                                                                placeholder="Your email :"
                                                                required
                                                                onChange={(e) => this.handleChange(e)}
                                                                value={this.state.email}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="12">
                                                        <FormGroup className="position-relative">
                                                            <Label>Comments</Label>
                                                            <div className="position-relative">
                                                                <i>
                                                                    <FeatherIcon
                                                                        icon="message-circle"
                                                                        className="fea icon-sm icons"
                                                                    />
                                                                </i>
                                                            </div>
                                                            <textarea
                                                                name="comments"
                                                                id="comments"
                                                                rows="4"
                                                                className="form-control pl-5"
                                                                placeholder="Your Message :"
                                                                onChange={(e) => this.handleChange(e)}
                                                                value={this.state.comments}
                                                            ></textarea>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col sm={12} className="text-center">
                                                        <Input
                                                            type="submit"
                                                            id="submit"
                                                            name="send"
                                                            className="submitBnt btn btn-primary btn-block"
                                                            value="Send Message"
                                                        />
                                                        <div id="simple-msg"></div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="8" md="6" className="pl-md-3 pr-md-3 mt-4 pt-2">
                                <Card className="border-0 shadow rounded">
                                    <div className="map map-height-two map-gray">
                                        <iframe
                                            title="Elmakon"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.760881419544!2d69.28007454535266!3d41.323724275819885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3780455555%3A0xcf3267f5a662c0c8!2sZiraat%20Bank%20Uzbekistan!5e0!3m2!1suz!2s!4v1656259222240!5m2!1suz!2s"
                                            style={{border: 0}}
                                            className="rounded"
                                            allowFullScreen=""
                                        ></iframe>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Blog;
