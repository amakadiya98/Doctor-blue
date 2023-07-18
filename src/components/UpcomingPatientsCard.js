import React from "react";
import "../assets/css/commonComponent.css";
import Patient from "../assets/images/Anna Kowalsky.svg";
import Button from "react-bootstrap/Button";

const UpcomingPatientsCard = () => {
  return (
    <div className="doctor-card upcomingPatientsCard">
      <div className="doctor-card-content">
        <div className="image-part d-flex align-items-center">
          <img src={Patient} alt="Patient" className="w-100" />
        </div>
        <div className="text-part w-100">
          <h5 className="mb-0">Anna Kowalsky</h5>
          <p className="gray">Heart Surgery</p>
          <p>
            5:45 PM, <span style={{ color: "#ADADAD" }}>Feb 24</span>
          </p>
          <Button className="componentBtn mt-3" style={{padding: '8px 40px'}}>Join the call</Button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingPatientsCard;
