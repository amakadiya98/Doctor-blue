import React, { useState } from "react";
import "../../assets/css/profile.css";
import { Button, Col, Nav, Row, Tab } from "react-bootstrap";
import BackIcon from "../../assets/images/left.svg";
import profileUpload from "../../assets/images/pic-upload.svg";
import UploadIcon from "../../assets/images/upload.svg";
import { useNavigate } from "react-router-dom";

const HealthProfile = () => {
  const [activeEvent, setActiveEvent] = useState("Personal");
  const navigate = useNavigate();

  return (
    <div className="profile-main">
      <Tab.Container activeKey={activeEvent}>
        <div className="header-part">
          <div className="left-part">
            <button className="back btn btn-primary">
              <img src={BackIcon} alt="btn-icon" />
            </button>
            <h2>Your Health Profile</h2>
          </div>
          <div className="right-part">
            <Nav
              as="ul"
              className="nav-pills light w-100 justify-content-between"
            >
              <Nav.Item as="li">
                <Nav.Link
                  eventKey="Personal"
                  className="tab-btn"
                  as="button"
                  onClick={() => setActiveEvent("Personal")}
                >
                  Personal
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  eventKey="Medical"
                  as="button"
                  onClick={() => setActiveEvent("Medical")}
                >
                  Medical
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  eventKey="Lifestyle"
                  as="button"
                  onClick={() => setActiveEvent("Lifestyle")}
                >
                  Lifestyle
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
        <Tab.Content>
          <Tab.Pane eventKey="Personal">
            <div className="form-data full-width-data">
              <Row className="g-4">
                <Col lg="6">
                  <div className="filed">
                    <label htmlFor="profile-img" className="upload">
                      <div className="profile-pic">
                        <img src={profileUpload} alt="camera" />
                        <p>Profile Picture</p>
                      </div>
                    </label>
                    <input type="file" accept="image/*" id="profile-img" />
                  </div>
                  <div className="filed">
                    <label>Name</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="Mohi Thomas"
                    />
                  </div>
                  <div className="filed">
                    <label>Contact Number</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="+1 99123 48485"
                    />
                  </div>
                  <div className="filed">
                    <label>Email id</label>
                    <input
                      type="email"
                      className="input-field"
                      defaultValue="mohithomas@gmail.com"
                    />
                  </div>
                </Col>
                <Col lg="6">
                  <div className="filed">
                    <label>Date of Birth</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="14 sep 1993"
                    />
                  </div>
                  <div className="filed">
                    <label>Material Status</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="Unmarried"
                    />
                  </div>
                  <div className="filed">
                    <label>Height</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue='5.3"'
                    />
                  </div>
                  <div className="filed">
                    <label>Weight</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="64 kg"
                    />
                  </div>
                  <div className="filed">
                    <label>Location</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="California, USA"
                    />
                  </div>
                </Col>
              </Row>
              <div className="buttonPart mt-5 d-flex justify-content-center">
                <Button
                  className="theme-button"
                  onClick={() => setActiveEvent("Medical")}
                >
                  Continue
                </Button>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="Medical">
            <div className="form-data full-width-data">
              <Row className="g-4">
                <Col lg="6">
                  <div className="filed">
                    <label>Allergies</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="No"
                    />
                  </div>
                  <div className="filed">
                    <label>Current Medications</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="No"
                    />
                  </div>
                  <div className="filed">
                    <label>Past Medications</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="No"
                    />
                  </div>
                  <div className="filed">
                    <label>Chronic Diseases</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="No"
                    />
                  </div>
                  <div className="filed">
                    <label>Injuries</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="No"
                    />
                  </div>
                </Col>
                <Col lg="6">
                  <div className="filed">
                    <label>Surgeries</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="No"
                    />
                  </div>
                  <div className="filed">
                    <label>Surgery Report</label>
                    <div className="upload-part mt-2">
                      <div class="form-group file-area">
                        <input
                          type="file"
                          name="images"
                          id="images"
                          required="required"
                          multiple="multiple"
                        />
                        <div class="file-dummy">
                          <div class="success">
                            Great, your files are selected. Keep on.
                          </div>
                          <div class="default">
                            <div className="image-block mb-2">
                              <img src={UploadIcon} alt="icon" />
                            </div>
                            Add report here (png, jpg, pdf)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="buttonPart mt-5 d-flex justify-content-center">
                <Button
                  className="theme-button"
                  onClick={() => setActiveEvent("Lifestyle")}
                >
                  Continue
                </Button>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="Lifestyle">
            <div className="form-data full-width-data">
              <Row className="g-4">
                <Col lg="6">
                  <div className="filed">
                    <label>Smoking Habits</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="I don’t smoke"
                    />
                  </div>
                  <div className="filed">
                    <label>Alcohol consumption</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="Rare"
                    />
                  </div>
                  <div className="filed">
                    <label>Activity Level</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="Active"
                    />
                  </div>
                  <div className="filed">
                    <label>Food Preference</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="Vegetarian"
                    />
                  </div>
                  <div className="filed">
                    <label>Occupation</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="IT Professional"
                    />
                  </div>
                </Col>
              </Row>
              <div className="buttonPart mt-5 d-flex justify-content-center">
                <Button
                  className="theme-button"
                  onClick={() => navigate("/dashboard")}
                >
                  Continue
                </Button>
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default HealthProfile;
