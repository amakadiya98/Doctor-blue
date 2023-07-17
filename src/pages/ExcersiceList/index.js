import { React } from "react";
import "../../assets/css/home.css";
import Layout from "../../layout";
import TopBar from "../../components/TopBarNavigation";
import "../../assets/css/doctorInfo.css";
import Ex1 from "../../assets/images/ex-1.png";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const ExcersiceList = () => {
  const navigate = useNavigate();
  const startWorkoutSession = () => {
    navigate("/splash");
  };

  return (
    <Layout>
      <TopBar />
      <div className="main-content-part excersiceList">
        <div className="exercise-content">
          <div className="exercise-card mb-3">
            <div className="img-text-part">
              <div className="img-block">
                <img src={Ex1} alt="ex-1" />
              </div>
              <div className="text-part ps-3">
                <h6>Running</h6>
                <p>15 Reps</p>
              </div>
            </div>
            <div class="checkbox me-2">
              <input type="checkbox" id="checkbox_12" />
              <label for="checkbox_12"></label>
            </div>
          </div>
          <div className="exercise-card mb-3">
            <div className="img-text-part">
              <div className="img-block">
                <img src={Ex1} alt="ex-1" />
              </div>
              <div className="text-part ps-3">
                <h6>squatting with rubber</h6>
                <p>15 Reps</p>
              </div>
            </div>
            <div class="checkbox me-2">
              <input type="checkbox" id="checkbox_11" />
              <label for="checkbox_11"></label>
            </div>
          </div>
          <div className="exercise-card mb-3">
            <div className="img-text-part">
              <div className="img-block">
                <img src={Ex1} alt="ex-1" />
              </div>
              <div className="text-part ps-3">
                <h6>Bhujapidasana pose</h6>
                <p>3 Times</p>
              </div>
            </div>
            <div className="icon">
              {" "}
              <div class="checkbox me-2">
                <input type="checkbox" id="checkbox_9" />
                <label for="checkbox_9"></label>
              </div>
            </div>
          </div>
          <div className="exercise-card mb-3">
            <div className="img-text-part">
              <div className="img-block">
                <img src={Ex1} alt="ex-1" />
              </div>
              <div className="text-part ps-3">
                <h6>Bhujapidasana pose</h6>
                <p>3 Times</p>
              </div>
            </div>
            <div className="icon">
              {" "}
              <div class="checkbox me-2">
                <input type="checkbox" id="checkbox_9" />
                <label for="checkbox_9"></label>
              </div>
            </div>
          </div>
          <div className="exercise-card mb-3">
            <div className="img-text-part">
              <div className="img-block">
                <img src={Ex1} alt="ex-1" />
              </div>
              <div className="text-part ps-3">
                <h6>Bhujapidasana pose</h6>
                <p>3 Times</p>
              </div>
            </div>
            <div className="icon">
              {" "}
              <div class="checkbox me-2">
                <input type="checkbox" id="checkbox_9" />
                <label for="checkbox_9"></label>
              </div>
            </div>
          </div>
        </div>

        <div className="button-part mt-1">
          <Button
            className="theme-button"
            onClick={() => startWorkoutSession()}
          >
            Start Workout
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ExcersiceList;
