import React, { useState } from "react";
import "../assets/css/commonComponent.css"
import { useLocation, Link, useNavigate } from 'react-router-dom';
import DocImg from "../assets/images/doctor.png";

const ProfileAppointmentCardLight = () => {
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
                        <h3 className="time">
                        5:45 PM,<span className="date"> Feb 24</span>
                        </h3>
                        <button className="Btn light">Wait for call</button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProfileAppointmentCardLight