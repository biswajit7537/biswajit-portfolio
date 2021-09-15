import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.jpeg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div>
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Biswajit Mishra</strong>
                <br />Passionate about programming, Web Development, DevOps, AWS, Machine Learning. <br/>Born and brought up
                in Odisha, India.
                <br/>
                
                I am a Student currently pursuing MCA(Master In Computer Application) at Silicon Institute of Technology, Bhubaneswar.
                <br />
               
                In 2020, I successfully completed my Graduation in BSc Mathematics
                from Bijupattnaik College of Science and Education, Bhubaneswar.
                <br/>
               
                In 2017, I successfully completed my +2 Science
                from Rajdhani college, Bhubaneswar.
                <br/>
               
                In 2015, I successfully completed my 10th
                from Govt High School, I.R.C Village, Bhubaneswar.
          
                <br />I love learning about new technologies, and by applying them to build better and scalable
                products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                 
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1LQCjPKbIwVuKKt84p_dU6_OldrM49RaD/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/biswajit7537"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/biswajitmishra99/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
