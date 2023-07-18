import React from "react";
import "../../assets/css/home.css";
import Layout from "../../layout";
import TopBar from "../../components/TopBarNavigation";
import { Row, Col, Button } from "react-bootstrap";
import "../../assets/css/doctorInfo.css";
import UpcomingPatientsCard from "../../components/UpcomingPatientsCard";
import Calendar from "../../components/Calendar";
const BookAppointment = () => {
  return (
    <Layout>
      <TopBar />
      <div className="main-content-part topBox">
        <div className="innerInfo withoutOrange">
          <Row>
            <Col lg={5}>
              <div className="doctorDetailsCard">
                <div className="doctorContent">
                  <Calendar />
                </div>

                <div className="bottom-left-content" style={{ width: "100%" }}>
                  <div className="patientListpartTitle">
                    <h6>Book Appointment</h6>
                  </div>
                  <div className="mb-4 w-100">
                    <UpcomingPatientsCard />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="doctorDetailsCard" style={{height: '100%'}}>
                <div className="filter-box">
                  <label htmlFor="appointment-input">Appointment For</label>
                  <input type="text" defaultValue={"Back pain"} />
                </div>
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
                  <div className="radio-badge-part mt-0">
                    <form>
                      <label>
                        <input type="radio" name="radio" />
                        <span>8:00 PM</span>
                      </label>
                      <label>
                        <input type="radio" name="radio" />
                        <span>8:30 PM</span>
                      </label>
                      <label>
                        <input type="radio" name="radio" />
                        <span>9:00 PM</span>
                      </label>
                      <label>
                        <input type="radio" name="radio" />
                        <span>9:30 PM</span>
                      </label>
                      <label>
                        <input type="radio" name="radio" />
                        <span>10:00 PM</span>
                      </label>
                      <label>
                        <input type="radio" name="radio" />
                        <span>10:30 PM</span>
                      </label>
                    </form>
                  </div>
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

export default BookAppointment;
