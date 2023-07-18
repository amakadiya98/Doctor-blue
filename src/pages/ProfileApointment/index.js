import React, { useState } from "react";
import "../../assets/css/commonComponent.css"
import Layout from "../../layout";
import TopBar from "../../components/TopBarNavigation";
import { Row, Col } from 'react-bootstrap';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import DocImg from "../../assets/images/doctor.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProfileAppointmentCard from "../../components/ProfileAppointmentCard";
import ProfileAppointmentCardLight from "../../components/ProfileAppointmentCardLight";

const ProfileApointment = () => {

    const [key, setKey] = useState("upcoming");

    return (
        <Layout>
            <TopBar />
            <div className="main-profile-doctor-content-part">

                <div className="exercise-tab-part">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="upcoming" title="Upcoming">
                            <Row className="g-4">
                                <Col lg="6">
                                    <ProfileAppointmentCard />
                                </Col>
                                <Col lg="6">
                                    <ProfileAppointmentCardLight />
                                </Col>
                                <Col lg="6">
                                    <ProfileAppointmentCardLight />
                                </Col>
                                <Col lg="6">
                                    <ProfileAppointmentCard />
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="completed" title="Completed">
                            <Row className="g-4">
                                <Col lg="6">
                                    <ProfileAppointmentCard />
                                </Col>
                                <Col lg="6">
                                    <ProfileAppointmentCard />
                                </Col>
                                <Col lg="6">
                                    <ProfileAppointmentCard />
                                </Col>
                                <Col lg="6">
                                    <ProfileAppointmentCard />
                                </Col>
                                <Col lg="6">
                                    <ProfileAppointmentCard />
                                </Col>
                                <Col lg="6">
                                    <ProfileAppointmentCard />
                                </Col>
                            </Row>
                        </Tab>

                    </Tabs>
                </div>


            </div>
        </Layout>
    );
};

export default ProfileApointment;