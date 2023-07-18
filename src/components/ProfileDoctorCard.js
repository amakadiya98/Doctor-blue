import React, { useState } from "react";
import "../assets/css/commonComponent.css"
import { useLocation, Link, useNavigate } from 'react-router-dom';
import DocImg from "../assets/images/doctor.png";

const ProfileDoctorCard = () => {
    return (
        <div className="profileDoctorCard-data">
            <Link
                to='/doctorDetails' className="linkCard">
                <div className="box">
                    <div className="leftPart">
                        <img src={DocImg} alt="Doctor Image" className="profile" />
                    </div>
                    <div className="rightPart">
                        <h3 className="name">Michael Simpson</h3>
                        <h3 className="profetion">Dentist</h3>
                        <button className="Btn">Book Now</button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProfileDoctorCard