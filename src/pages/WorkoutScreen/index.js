import React, { useState } from "react";
import Layout from "../../layout";
import { Button, Modal } from "react-bootstrap";
import TopBar from "../../components/TopBarNavigation";
import "../../assets/css/workout.css";
import videoBanner from "../../assets/images/workout-video.png";
import clockIcon from "../../assets/images/clock-five.svg";
import pauseBtn from "../../assets/images/pause-btn.svg";
import Ex1 from "../../assets/images/ex-1.png";
import modalVideo from "../../assets/images/modal-video.svg";
import doneImg from "../../assets/images/done-icon.svg";
import Info from '../../assets/images/info.png'
import Zoom from '../../assets/images/zoom.png'

const WorkoutScreen = () => {
  const [workoutModel, setWorkoutModel] = useState(false);
  const [completeWorkout, setCompleteWorkout] = useState(false);

  return (
    <Layout>
      <TopBar />
      <div className="main-content-part main-container">
        <div className="top-video-block">
          <img src={videoBanner} alt="video-banner" />
            <div className="overImageIcon">
                <button className="icon-btn">
                  <img src={Info} alt="info"/>
                </button>
                <button className="icon-btn">
                  <img src={Zoom} alt="zoom" className="zoom"/>
                </button>
            </div>
        </div>
        <div className="workout-details">
          <div className="type">
            <h5 className="title">Running</h5>
            <div className="timing">
              <img src={clockIcon} alt="clock" />
              <span>03 min</span>
            </div>
          </div>
          <div className="control">
            <span className="reps">2/15 reps</span>
            <p className="timmer">02:14</p>
            <Button variant="transparent">
              <img src={pauseBtn} alt="btn-pause" />
            </Button>
          </div>
          <div className="next-workout-card">
            <div className="exercise-card">
              <div className="img-text-part">
                <div className="img-block">
                  <img src={Ex1} alt="ex-1" />
                </div>
                <div className="text-part ps-3">
                  <h6>squatting with rubber</h6>
                  <p>15 Reps</p>
                </div>
              </div>
              <button
                className="primary-btn"
                onClick={() => setWorkoutModel(true)}
              >
                Next
              </button>
              <div className="right">
                <button
                  className="outline-primary-btn"
                  onClick={() => setCompleteWorkout(true)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={workoutModel}
        onHide={() => setWorkoutModel(false)}
        size="lg"
        className="main-container"
      >
        <Modal.Body>
          <div className="top-heading">
            <p>Running</p>
            <button
              className="btn btn-transpatent"
              onClick={() => setWorkoutModel(false)}
            >
              X
            </button>
          </div>
          <div className="content-block">
            <img src={modalVideo} alt="modal-video" />
          </div>
          <div className="bottom-block">
            <div className="review">
              <span className="no-block">1</span>
              <span className="rv-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
            <div className="review">
              <span className="no-block">2</span>
              <span className="rv-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
            <div className="review">
              <span className="no-block">3</span>
              <span className="rv-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
            <div className="review">
              <span className="no-block">4</span>
              <span className="rv-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
            <div className="workout-desc">
              <span className="workout-reps">2/15 reps</span>
              <p>02:14</p>
              <button className="primary-btn">Report to Doctor</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* workout complete modal */}
      <Modal
        show={completeWorkout}
        onHide={() => setCompleteWorkout(false)}
        size="md"
        className="complete-modal"
      >
        <Modal.Body>
          <div className="top-heading">
            <button
              className="btn btn-transpatent"
              onClick={() => setCompleteWorkout(false)}
            >
              X
            </button>
          </div>
          <div className="content-block">
            <img src={doneImg} alt="modal-video" />
          </div>
          <div className="bottom-block">
            <div className="workout-desc">
              <span className="workout-reps">Well Done!</span>
              <p>Congratulations On finishing </p>
              <span className="modal-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
              <button className="primary-btn">Continue</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Layout>
  );
};

export default WorkoutScreen;
