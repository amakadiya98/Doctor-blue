import { useState, React } from 'react'
// import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import { Row, Col, Button } from 'react-bootstrap';
import '../../assets/css/doctorInfo.css'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Ex1 from '../../assets/images/ex-1.png'
import Modal from 'react-bootstrap/Modal';
import Calendar from '../../components/Calendar';

const History = () => {
    const [key, setKey] = useState('morning');
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <Layout>
            <TopBar />
            <div className='main-content-part topBox'>
                <div className='innerInfo withoutOrange'>
                    <Row>
                        <Col lg={5}>
                            <div className='doctorDetailsCard'>
                                <div className="doctorContent">
                                <Calendar/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className='doctorDetailsCard startdata mb-3'>
                                <div className='rightPartData'>
                                    <div className='filed pb-3'>
                                        <div className='exercise-tab-part'>
                                            <h6 className='title'>11th Feb Exercises</h6>
                                            <Tabs
                                                id="controlled-tab-example"
                                                activeKey={key}
                                                onSelect={(k) => setKey(k)}
                                                className="mb-3"
                                            >
                                                <Tab eventKey="morning" title="Morning">
                                                    <div className='exercise-content'>
                                                        <div className='exercise-card mb-3' onClick={handleShow}>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>Running</h6>
                                                                    <p>15 Reps</p>
                                                                </div>
                                                            </div>
                                                            <div class="checkbox me-2">
                                                    <input type="checkbox" id="checkbox_12" />
                                                    <label for="checkbox_12"></label>
                                                    </div>
                                                        </div>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>squatting with rubber</h6>
                                                                    <p>15 Reps</p>
                                                                </div>
                                                            </div>
                                                            <div class="checkbox me-2">
                                                    <input type="checkbox" id="checkbox_11" />
                                                    <label for="checkbox_11"></label>
                                                    </div>
                                                        </div>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>Bhujapidasana pose</h6>
                                                                    <p>3 Times</p>
                                                                </div>
                                                            </div>
                                                            <div className='icon'> <div class="checkbox me-2">
                                                    <input type="checkbox" id="checkbox_9" />
                                                    <label for="checkbox_9"></label>
                                                    </div></div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="afternoon" title="Afternoon">
                                                <div className='exercise-content'>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>Running</h6>
                                                                    <p>15 Reps</p>
                                                                </div>
                                                            </div>
                                                            <div class="checkbox me-2">
                                                    <input type="checkbox" id="checkbox_8" />
                                                    <label for="checkbox_8"></label>
                                                    </div>
                                                        </div>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>squatting with rubber</h6>
                                                                    <p>15 Reps</p>
                                                                </div>
                                                            </div>
                                                            <div class="checkbox me-2">
                                                    <input type="checkbox" id="checkbox_7" />
                                                    <label for="checkbox_7"></label>
                                                    </div>
                                                        </div>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>Bhujapidasana pose</h6>
                                                                    <p>3 Times</p>
                                                                </div>
                                                            </div>
                                                            <div class="checkbox me-2">
                                                    <input type="checkbox" id="checkbox_6" />
                                                    <label for="checkbox_6"></label>
                                                    </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="evening" title="Evening">
                                                <div className='exercise-content'>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>Running</h6>
                                                                    <p>15 Reps</p>
                                                                </div>
                                                            </div>
                                                            <div class="checkbox me-2">
                                                    <input type="checkbox" id="checkbox_4" />
                                                    <label for="checkbox_4"></label>
                                                    </div>
                                                        </div>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>squatting with rubber</h6>
                                                                    <p>15 Reps</p>
                                                                </div>
                                                            </div>
                                                            <div class="checkbox me-2">
                                                    <input type="checkbox" id="checkbox_5" />
                                                    <label for="checkbox_5"></label>
                                                    </div>
                                                        </div>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>Bhujapidasana pose</h6>
                                                                    <p>3 Times</p>
                                                                </div>
                                                            </div>
                                                            <div class="checkbox me-2">
                                                    <input type="checkbox" id="checkbox_2" />
                                                    <label for="checkbox_2"></label>
                                                    </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="night" title="Night">
                                                <div className='exercise-content'>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>Running</h6>
                                                                    <p>15 Reps</p>
                                                                </div>
                                                            </div>
                                                            <div class="checkbox me-2">
                                                    <input type="checkbox" id="checkbox_1" />
                                                    <label for="checkbox_1"></label>
                                                    </div>
                                                        </div>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>squatting with rubber</h6>
                                                                    <p>15 Reps</p>
                                                                </div>
                                                            </div>
                                                            <div class="checkbox me-2">
                                                    <input type="checkbox" id="checkbox_121" />
                                                    <label for="checkbox_121"></label>
                                                    </div>
                                                        </div>
                                                        <div className='exercise-card mb-3'>
                                                            <div className='img-text-part'>
                                                                <div className='img-block'>
                                                                    <img src={Ex1} alt='ex-1' />
                                                                </div>
                                                                <div className='text-part ps-3'>
                                                                    <h6>Bhujapidasana pose</h6>
                                                                    <p>3 Times</p>
                                                                </div>
                                                            </div>
                                                            <div class="checkbox me-2">
                                                    <input type="checkbox" id="checkbox_1211" />
                                                    <label for="checkbox_1211"></label>
                                                    </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </Col>
                    </Row>

                </div>
                <Modal show={show} onHide={handleClose} centered  size="lg">
        <Modal.Header closeButton className='justify-content-start border-0'>
          <Modal.Title className='text-center'>Notifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='body-content'>
            <div className='notification-card'>
                <h6>Jack Williams</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p className='ms-2'>5:45 PM, Feb 24</p>
            </div>
            <div className='notification-card'>
                <h6>Jack Williams</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p className='ms-2'>5:45 PM, Feb 24</p>
            </div>
            <div className='notification-card'>
                <h6>Jack Williams</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p className='ms-2'>5:45 PM, Feb 24</p>
            </div>
            <div className='notification-card'>
                <h6>Jack Williams</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p className='ms-2'>5:45 PM, Feb 24</p>
            </div>
          </div>
        </Modal.Body>
      
      </Modal>
            </div>
        </Layout>
    )
}

export default History
