import React, { useState } from "react";
import "../../assets/css/commonComponent.css"
import Layout from "../../layout";
import TopBar from "../../components/TopBarNavigation";
import { Row, Col } from 'react-bootstrap';
import ProfileDoctorCard from "../../components/ProfileDoctorCard";

const ProfileDoctor = () => {

    return (
        <Layout>
            <TopBar />
            <div className="main-profile-doctor-content-part">

                <Row className="g-4">
                    <Col lg="6">
                        <ProfileDoctorCard />
                    </Col>
                    <Col lg="6">
                        <ProfileDoctorCard />
                    </Col>
                    <Col lg="6">
                        <ProfileDoctorCard />
                    </Col>
                    <Col lg="6">
                        <ProfileDoctorCard />
                    </Col>
                </Row>


            </div>
        </Layout>
    );
};

export default ProfileDoctor;