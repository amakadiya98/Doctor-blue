import React from "react";
import "../../assets/css/home.css";
import Layout from "../../layout";
import "../../assets/css/commonComponent.css";
import { Col, Row } from "react-bootstrap";
import womenTranning from "../../assets/images/young-woman-training.svg";
import play from "../../assets/images/play.svg";
import FillStar from "../../assets/images/star.svg";
import Patient from "../../assets/images/Dr-Henna-S.svg";
import AppointmentBg from "../../assets/images/suggestion-card-bg.svg";
import like from "../../assets/images/like.svg";
import comment from "../../assets/images/comment.svg";

const Dashboard = () => {
  return (
    <Layout>
      <div className="main-home-part">
        <Row>
          <Col lg="6">
            <div className="left-part">
              <div className="top-card">
                <img src={womenTranning} alt="card-img" />
                <div className="info-block">
                  <h3>Today's Workout Plan</h3>
                  <button className="play-btn">
                    <img src={play} alt="btn-icon" />
                    <span>26 min</span>
                  </button>
                </div>
              </div>
              <div className="doctors-list">
                <div className="title-block">
                  <h6>Best Doctors</h6>
                  <button className="view-all-btn">View all</button>
                </div>
                <div className="assign-doctor-card">
                  <div className="doctor-card-content">
                    <div className="image-part">
                      <img src={Patient} alt="Patient" />
                    </div>
                    <div className="text-part">
                      <h5 className="name">Dr. Henna S.</h5>
                      <p className="name">Physiotherapist</p>
                      <div className="rating-part">
                        <img src={FillStar} alt="star" />
                        <img src={FillStar} alt="star" />
                        <img src={FillStar} alt="star" />
                        <img src={FillStar} alt="star" />
                        <img src={FillStar} alt="star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="assign-doctor-card">
                  <div className="doctor-card-content">
                    <div className="image-part">
                      <img src={Patient} alt="Patient" />
                    </div>
                    <div className="text-part">
                      <h5 className="name">Dr. Henna S.</h5>
                      <p className="name">Physiotherapist</p>
                      <div className="rating-part">
                        <img src={FillStar} alt="star" />
                        <img src={FillStar} alt="star" />
                        <img src={FillStar} alt="star" />
                        <img src={FillStar} alt="star" />
                        <img src={FillStar} alt="star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="assign-doctor-card">
                  <div className="doctor-card-content">
                    <div className="image-part">
                      <img src={Patient} alt="Patient" />
                    </div>
                    <div className="text-part">
                      <h5 className="name">Dr. Henna S.</h5>
                      <p className="name">Physiotherapist</p>
                      <div className="rating-part">
                        <img src={FillStar} alt="star" />
                        <img src={FillStar} alt="star" />
                        <img src={FillStar} alt="star" />
                        <img src={FillStar} alt="star" />
                        <img src={FillStar} alt="star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="right-part">
              <div className="doctors-list">
                <div className="title-block">
                  <h6>Upcoming Appointment</h6>
                  <button className="view-all-btn">View all</button>
                </div>
                <div className="assign-doctor-card">
                  <div className="doctor-card-content">
                    <div className="image-part">
                      <img src={Patient} alt="Patient" />
                    </div>
                    <div className="text-part">
                      <div className="info-block">
                        <h5 className="name">Dr. Henna S.</h5>
                        <p className="name">Physiotherapist</p>
                        <button className="join-btn">Join the call</button>
                      </div>
                      <div className="time-block">
                        <p className="time">5:45 PM</p>
                        <span className="date">Feb 24</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="assign-doctor-card">
                  <div className="doctor-card-content">
                    <div className="image-part">
                      <img src={Patient} alt="Patient" />
                    </div>
                    <div className="text-part">
                      <div className="info-block">
                        <h5 className="name">Dr. Henna S.</h5>
                        <p className="name">Physiotherapist</p>
                        <button className="join-btn wait">Wait for call</button>
                      </div>
                      <div className="time-block">
                        <p className="time">5:45 PM</p>
                        <span className="date">Feb 24</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="assign-doctor-card">
                  <div className="doctor-card-content">
                    <div className="image-part">
                      <img src={Patient} alt="Patient" />
                    </div>
                    <div className="text-part">
                      <div className="info-block">
                        <h5 className="name">Dr. Henna S.</h5>
                        <p className="name">Physiotherapist</p>
                        <button className="join-btn">Join the call</button>
                      </div>
                      <div className="time-block">
                        <p className="time">5:45 PM</p>
                        <span className="date">Feb 24</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recommanded">
                <div className="title-block">
                  <h6>Recommended for you</h6>
                  <button className="view-all-btn">View all</button>
                </div>
                <div className="suggestion-card">
                  <img src={AppointmentBg} alt="suggestion-bg" />
                  <div className="suggestion-content">
                    <div className="profile-block">
                      <div  className="dr-block">
                        <img src={Patient} alt="dr-img" />
                        <p className="dr-name">Dr. Henna S.</p>
                      </div>
                      <p className="date">Feb 28 2023</p>
                    </div>
                    <p className="desc">
                      Healthy lifestyle for diabetics Lorem Ipsum is the
                      printing and typesetting industry.{" "}
                    </p>
                    <div className="details">
                      <div className="left">
                        <span>23 Comments</span>
                        <span>51 Likes</span>
                      </div>
                      <div className="right">
                        <button><img src={like} alt="like-logo" /></button>
                        <button><img src={comment} alt="comment-logo" /></button>
                      </div>
                    </div>
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

export default Dashboard;
