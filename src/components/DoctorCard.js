import React from "react";
import "../assets/css/commonComponent.css";
import Star from "../assets/images/star.svg";
import Comment from "../assets/images/comment-alt.svg";
import Doctor from "../assets/images/doctor.png";
const DoctorCard = () => {
  return (
    <div className="doctor-card">
      <div className="doctor-card-content">
        <div className="image-part">
          <img src={Doctor} alt="doctor" />
        </div>
        <div className="text-part">
          <h5>Dr. Kate Brown</h5>
          <h6>Physiotherapist</h6>
          <p>20 yrs of exp. overall</p>
          <p>California, USA</p>
          <div className="rating">
            <p>
              <img src={Comment} alt="comment alt" /> 58 Patient Stories
            </p>
          </div>
        </div>
      </div>
      <div className="doctor-rating-part">
        <div className="rating-block">
          <p>
            <img src={Star} alt="star" /> 4.5 (60)
          </p>
        </div>
        <div className="book-now">
          <button>Book Now</button>
        </div>
      </div>
      <div className="hospital-details">
        <span className="divider"></span>
        <p>Manipal Hospital</p>
        <p>$800 Consultation Fees</p>
      </div>
      <div className="bottom-bar light-bg">
        <p>$15 Consultation fees</p>
      </div>
    </div>
  );
};

export default DoctorCard;
