import React, { useState } from "react";
import "../../assets/css/home.css";
import Layout from "../../layout";
import Calendar from "../../components/Calendar";
import { Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Ex1 from "../../assets/images/ex-1.png";
import Heart from "../../assets/images/heart-session.png";
import Arm from "../../assets/images/arm-session.png";
import Shoulder from "../../assets/images/shoulder-session.png";
import { useNavigate } from "react-router-dom";

const Excersice = () => {
  const [key, setKey] = useState("morning");
  const navigate = useNavigate(); 

  const handleStartWorkout = () => {
    navigate("/excersiceList"); 
  }; 

  return (
    <Layout>
      <div className="main-content-part h-90">
        <Row>
          <Col lg={5}>
            <div className="doctorDetailsCard">
              <div className="doctorContent">
                <Calendar />
                <div className="today-workout-list">
                  <h6 className="title-workout">Today’s Workout</h6>
                  <div className="exercise-content">
                    <div className="exercise-card mb-3">
                      <div className="img-text-part">
                        <div className="img-block">
                          <img src={Ex1} alt="ex-1" />
                        </div>
                        <div className="text-part ps-3">
                          <h6>Running</h6>
                          <p>15 Reps</p>
                        </div>
                      </div>
                      <div class="checkbox me-2">
                        <input type="checkbox" id="checkbox_12" />
                        <label for="checkbox_12"></label>
                      </div>
                    </div>
                    <div className="exercise-card mb-3">
                      <div className="img-text-part">
                        <div className="img-block">
                          <img src={Ex1} alt="ex-1" />
                        </div>
                        <div className="text-part ps-3">
                          <h6>squatting with rubber</h6>
                          <p>15 Reps</p>
                        </div>
                      </div>
                      <div class="checkbox me-2">
                        <input type="checkbox" id="checkbox_11" />
                        <label for="checkbox_11"></label>
                      </div>
                    </div>
                    <div className="exercise-card mb-3">
                      <div className="img-text-part">
                        <div className="img-block">
                          <img src={Ex1} alt="ex-1" />
                        </div>
                        <div className="text-part ps-3">
                          <h6>Bhujapidasana pose</h6>
                          <p>3 Times</p>
                        </div>
                      </div>
                      <div className="icon">
                        {" "}
                        <div class="checkbox me-2">
                          <input type="checkbox" id="checkbox_9" />
                          <label for="checkbox_9"></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="doctorDetailsCard startdata mb-3">
              <div className="rightPartData">
                <div className="filed pb-3">
                  <div className="exercise-tab-part">
                    <h6 className="title">Today's excercises plan</h6>
                    <Tabs
                      id="controlled-tab-example"
                      activeKey={key}
                      onSelect={(k) => setKey(k)}
                      className="mb-3"
                    >
                      <Tab eventKey="morning" title="Morning">
                        <div className="session-card-content">
                          <div className="session-card heart">
                            <div className="details">
                              <h6 className="session-title">Heart</h6>
                              <p className="workout-text">Workout Session</p>
                              <button
                                className="start-btn"
                                onClick={() => handleStartWorkout()}
                              >
                                Start Workout
                              </button>
                            </div>
                            <div className="image-block">
                              <img src={Heart} alt="session-img" />
                            </div>
                          </div>
                          <div className="session-card arm">
                            <div className="details">
                              <h6 className="session-title">Arm</h6>
                              <p className="workout-text">Workout Session</p>
                              <button
                                className="start-btn"
                                onClick={() => handleStartWorkout()}
                              >
                                Start Workout
                              </button>
                            </div>
                            <div className="image-block">
                              <img src={Arm} alt="session-img" />
                            </div>
                          </div>
                          <div className="session-card shoulder">
                            <div className="details">
                              <h6 className="session-title">Shoulder</h6>
                              <p className="workout-text">Workout Session</p>
                              <button
                                className="start-btn"
                                onClick={() => handleStartWorkout()}
                              >
                                Start Workout
                              </button>
                            </div>
                            <div className="image-block">
                              <img src={Shoulder} alt="session-img" />
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="afternoon" title="Afternoon"></Tab>
                      <Tab eventKey="evening" title="Evening"></Tab>
                      <Tab eventKey="night" title="Night"></Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Excersice;
