import React from "react";
import "../../assets/css/home.css";
import Layout from "../../layout";
import DoctorCard from "../../components/DoctorCard";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import LocationIcon from "../../assets/images/location-lcon.svg";
import { useState } from "react";

const AppontmentList = () => {
  const [key, setKey] = useState("anytime");
  return (
    <Layout>
      <div className="main-content-part appointment-page">
        <div className="top-nav-part">
          <h3>Appointment</h3>
          <div className="location-part">
            <span>
              <img src={LocationIcon} alt="location" />
            </span>
            <select name="location" id="location">
              <option value="california" selected>
                California, USA
              </option>
            </select>
          </div>
        </div>
        <div className="content-block">
          <div className="exercise-tab-part">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="anytime" title="anytime">
                <Row className="g-4">
                  <Col lg="6">
                    <Link to="/doctorDetails" className="linkCard">
                      <DoctorCard />
                    </Link>
                  </Col>
                  <Col lg="6">
                    <Link to="/" className="linkCard">
                      <DoctorCard />
                    </Link>
                  </Col>
                  <Col lg="6">
                    <Link to="/" className="linkCard">
                      <DoctorCard />
                    </Link>
                  </Col>
                  <Col lg="6">
                    <Link to="/" className="linkCard">
                      <DoctorCard />
                    </Link>
                  </Col>
                  <Col lg="6">
                    <Link to="/" className="linkCard">
                      <DoctorCard />
                    </Link>
                  </Col>
                  <Col lg="6">
                    <Link to="/" className="linkCard">
                      <DoctorCard />
                    </Link>
                  </Col>
                  <Col lg="6">
                    <Link to="/" className="linkCard">
                      <DoctorCard />
                    </Link>
                  </Col>
                  <Col lg="6">
                    <Link to="/" className="linkCard">
                      <DoctorCard />
                    </Link>
                  </Col>
                  <Col lg="6">
                    <Link to="/" className="linkCard">
                      <DoctorCard />
                    </Link>
                  </Col>
                  <Col lg="6">
                    <Link to="/" className="linkCard">
                      <DoctorCard />
                    </Link>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="video-consult" title="video consult">
                <Row className="g-4">
                  <Col lg="6">
                    <Link to="/doctorDetails" className="linkCard">
                      <DoctorCard />
                    </Link>
                  </Col>
                  <Col lg="6">
                    <Link to="/" className="linkCard">
                      <DoctorCard />
                    </Link>
                  </Col>
                  <Col lg="6">
                    <Link to="/" className="linkCard">
                      <DoctorCard />
                    </Link>
                  </Col>
                  <Col lg="6">
                    <Link to="/" className="linkCard">
                      <DoctorCard />
                    </Link>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="plus" title="plus">
                <Row className="g-4">
                  <Col lg="6">
                    <Link to="/doctorDetails" className="linkCard">
                      <DoctorCard />
                    </Link>
                  </Col>
                  <Col lg="6">
                    <Link to="/" className="linkCard">
                      <DoctorCard />
                    </Link>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AppontmentList;
