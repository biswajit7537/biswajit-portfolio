import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects

import L_foodHouse from "../../assets/img/projects/foodHouse.png";
import L_docketProject from "../../assets/img/projects/docketProject.png";
import L_snakeGame from "../../assets/img/projects/snakeGame.png";
import L_drumKitProject from "../../assets/img/projects/drumKitProject.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";

import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/javascriptLogo.png";



import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>

          {/* Project: Real time food ording website */}
          <ImageEvent
            date="21/08/2021"
            className="text-center"
            text="Real time food ordering website with admin dash board"
            src={L_foodHouse}
            alt="Real time food ordering website"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Real time food ording system with admin dashboard.
                      
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register new user</li>
                          <li>Signin exiting user</li>
                          <li>add food to cart</li>
                          <li>Stripe Payment gateway</li>
                          <li>Real time status show of each order</li>
                          <li>Admin dash board</li>
                          <li>Real time status updation of Admin side for each order</li>
                          <li>Payment via COD or Online</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="React"                                                         
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MONGODB
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://food-house-project.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/biswajit7537/foodHouse"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: to-do list project */}

          <ImageEvent
            date="04/07/2021"
            className="text-center"
            text="To-do List web App"
            src={L_docketProject}
            alt="Todo list project"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A Todo list web app.
                        
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User Login and Register system</li>
                          <li>add list items</li>
                          <li>Save list</li>
                          <li>Logout user</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="React"                                                         
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node JS
                            </span>
                          </li>
                         
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="React"                                                         
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              EXPRESS JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="React"                                                         
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MONGODB
                            </span>
                          </li>
                         
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://whispering-woodland-73260.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/biswajit7537/Docket-project"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: snake game*/}

          <ImageEvent
            date="04/06/2021"
            className="text-center"
            text="Snake game project"
            src={L_snakeGame}
            alt="Product Hunt Clone"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a snake game. 
                        
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>play the game using navigation keys</li>
                          <li>background music while playing the game</li>
                          <li>option to choose difficulty level</li>
                          <li>Display the Score</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_DJANGO}
                                alt="Django"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                         
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://biswajit7537.github.io/snake-game-project2/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/biswajit7537/snake-game-project2"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: drum kit project using javaScript */}
          <ImageEvent
            date="01/05/2021"
            className="text-center"
            text="Drum Kit Project"
            src={L_drumKitProject}
            alt="Portfolio using Django"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is my first Project in JavaScript
                        
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>generates different drum sounds</li>
                          <li>sound generate using mouse click</li>
                          <li>sound generate using specific keyboard keys</li>
                          <li>
                            Hosted using github pages.
                          </li>
                  
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_DJANGO}
                                alt="Django"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                         
                        </ul>
                        <hr />
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://biswajit7537.github.io/drumkit-project1/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/biswajit7537/drumkit-project1"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
