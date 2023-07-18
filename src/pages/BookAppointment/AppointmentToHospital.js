import React from "react";
import Layout from "../../layout";
import TopBar from "../../components/TopBarNavigation";
import { Button, Col, Row } from "react-bootstrap";
import Calendar from "../../components/Calendar";

const AppointmentToHospital = () => {
  return (
    <Layout>
      <TopBar />
      <div className="main-content-part topBox hospitalAppointment">
        <div
          className="innerInfo withoutOrange"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "95%",
            justifyContent: "space-between",
          }}
        >
          <Row>
            <Col lg={5}>
              <div className="doctorDetailsCard">
                <div className="doctorContent">
                  <Calendar />
                </div>
              </div>
            </Col>
            <Col lg={7}>
            <div className="doctorDetailsCard mb-4">
                <div className="hospital-slots-details">
                    <div className="left-details">
                        <p>Manipal Hospital, California, USA</p>
                        <p className="green-text">12 slots available</p>
                        <p>$800 Fees</p>
                    </div>
                    <div className="right-times">
                        <p>Wait Time</p>
                        <span className="green-text">60 min</span>
                    </div>
                </div>
            </div>
              <div className="doctorDetailsCard">
                <div className="filter-box">
                  <label htmlFor="appointment-input">Morning</label>
                  <div className="radio-badge-part mt-0">
                    <form>
                      <label>
                        <input type="radio" name="radio" />
                        <span>9:00 AM</span>
                      </label>
                      <label>
                        <input type="radio" name="radio" />
                        <span>9:30 AM</span>
                      </label>
                      <label>
                        <input type="radio" name="radio" />
                        <span>10:00 AM</span>
                      </label>
                      <label>
                        <input type="radio" name="radio" />
                        <span>10:30 AM</span>
                      </label>
                      <label>
                        <input type="radio" name="radio" />
                        <span>11:00 AM</span>
                      </label>
                      <label>
                        <input type="radio" name="radio" />
                        <span>11:30 AM</span>
                      </label>
                    </form>
                  </div>
                </div>
                <div className="filter-box">
                  <label htmlFor="appointment-input">Evening</label>
                  <div className="radio-badge-part mt-0">
                    <form>
                      <label>
                        <input type="radio" name="radio" />
                        <span>4:00 PM</span>
                      </label>
                      <label>
                        <input type="radio" name="radio" />
                        <span>4:30 PM</span>
                      </label>
                      <label>
                        <input type="radio" name="radio" />
                        <span>5:00 PM</span>
                      </label>
                      <label>
                        <input type="radio" name="radio" />
                        <span>5:30 PM</span>
                      </label>
                      <label>
                        <input type="radio" name="radio" />
                        <span>6:00 PM</span>
                      </label>
                      <label>
                        <input type="radio" name="radio" />
                        <span>6:30 PM</span>
                      </label>
                    </form>
                  </div>
                </div>
                <div className="filter-box">
                  <label htmlFor="appointment-input">Night</label>
                  <p style={{margin: 0, color: '#adadad', fontSize: '18px'}}>No Slots</p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="d-flex justify-content-center mt-3">
            <Button className="theme-button">Book Appointment</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AppointmentToHospital;
