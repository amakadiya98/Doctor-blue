import { useState, React } from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import SearchIcon from '../../assets/images/search.svg'
import { Row, Col, Button, Nav, Tab, Form } from 'react-bootstrap';
import '../../assets/css/foot.css'
import Ex1 from '../../assets/images/ex-1.png'
import Modal from 'react-bootstrap/Modal';
import { useLocation, Link, useNavigate } from 'react-router-dom'
import checkIcon from '../../assets/images/check (1).png'
import FilterIcon from '../../assets/images/filter.svg'

const Foot = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Layout>
            <TopBar />
            <div className='main-content-part foot-page p-0' defaultActiveKey="first">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col xl={4} lg={5}>
                            <div className='foot-sidebar'>
                                <h6>Choose Session</h6>
                                <Nav variant="pills" className="flex-column">
                                <Nav.Item className='d-flex justify-content-start align-items-center'>
                                <div class="checkbox me-2">
                                                    <input type="checkbox" id="checkbox_6" />
                                                    <label for="checkbox_6"></label>
                                                    </div>
                                <Nav.Link eventKey="first">
                                
                                            Morning Session</Nav.Link>
                                       
                                    </Nav.Item>
                                    <Nav.Item className='d-flex justify-content-start align-items-center'>
                                    <div class="checkbox me-2">
                                                    <input type="checkbox" id="checkbox_4" />
                                                    <label for="checkbox_4"></label>
                                                    </div>
                                        <Nav.Link eventKey="second">Afternoon Session </Nav.Link>
                                       
                                    </Nav.Item>
                                    <Nav.Item className='d-flex justify-content-start align-items-center'>
                                    <div class="checkbox me-2">
                                                    <input type="checkbox" id="checkbox_5" />
                                                    <label for="checkbox_5"></label>
                                                    </div>
                                    <Nav.Link eventKey="third">Evening Session</Nav.Link>
                                        
                                    </Nav.Item>
                                    <Nav.Item className='d-flex justify-content-start align-items-center'>
                                    <div class="checkbox me-2">
                                                    <input type="checkbox" id="checkbox_6" />
                                                    <label for="checkbox_6"></label>
                                                    </div>
                                    <Nav.Link eventKey="four">Night Session</Nav.Link>
                                       
                                    </Nav.Item>
                                </Nav>
                            </div>

                        </Col>
                        <Col xl={8} lg={7}>

                            <div className='content-data mt-5 pe-4'>
                                <div className='serchPart'>
                                    <div className='searchInput'>
                                        <div className='searchIcon'>
                                            <img src={SearchIcon} alt='searchIcon' />
                                        </div>
                                        <input type='text' placeholder='Search exercises' />
                                        <div className='filterIcon'>
                                            <img src={FilterIcon} alt='filterIcon' />
                                        </div>
                                    </div>
                                </div>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
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
                                                    <input type="checkbox" id="checkbox_2" />
                                                    <label for="checkbox_2"></label>
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
                                                    <input type="checkbox" id="checkbox_3" />
                                                    <label for="checkbox_3"></label>
                                                    </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
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
                                                    <input type="checkbox" id="checkbox_8" />
                                                    <label for="checkbox_8"></label>
                                                    </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
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
                                                    <input type="checkbox" id="checkbox_9" />
                                                    <label for="checkbox_9"></label>
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
                                                    <input type="checkbox" id="checkbox_10" />
                                                    <label for="checkbox_10"></label>
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
                                                    <input type="checkbox" id="checkbox_11" />
                                                    <label for="checkbox_11"></label>
                                                    </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four">
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
                                                    <input type="checkbox" id="checkbox_13" />
                                                    <label for="checkbox_13"></label>
                                                    </div>
                                            </div>

                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>

                            </div>
                            <div className='buttonPart mt-4 mx-auto'>

                                <Button className='theme-button d-block  mx-auto' onClick={handleShow}>Next</Button>
                                <Button className='theme-outline-btn mt-3 d-block  mx-auto' style={{ backgroundColor: '#FDF5F2', borderColor: '#FDF5F2' }}>+ Add More</Button>
                            </div>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
            {/* Exercises Counter modal */}

            {/* <Modal show={show} onHide={handleClose} centered size="md">
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>Exercises Counter</Modal.Title>
                </Modal.Header>
                <Modal.Body className='pb-0'>
                    <div className='body-content'>
                        <div className='form-data w-100' style={{ maxWidth: '100%' }}>
                            <div className='filed'>
                                <label>Patient Mobile Number</label>
                                <input type='text' className='input-field' placeholder='+1 123 456 789' />
                            </div>
                            <div className='filed'>
                                <label>Exercises Set</label>
                                <Form.Select aria-label="Default select example" className='mb-3'>
                                    <option>Pincode</option>
                                    <option value="1">02</option>
                                    <option value="2">03</option>
                                    <option value="3">04</option>
                                </Form.Select>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='theme-button'>
                        Done
                    </Button>
                </Modal.Footer>
            </Modal> */}

            {/* Filter modal */}
            <Modal show={show} onHide={handleClose} centered size="md">
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body className='pb-0'>
                    <div className='body-content'>
                        <ul className='filterList'>
                            <li>
                                <Link to="">
                                    Ankle

                                </Link>

                            </li>
                            <li className='selcted'>
                                <Link to="">
                                    Stomach
                                    <div className='select-img'>
                                        <img src={checkIcon} alt='checkIcon' />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="">Elbows
                                    <div className='select-img'>
                                        <img src={checkIcon} alt='checkIcon' />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    Face

                                </Link>

                            </li>
                            <li>
                                <Link to="">Foot</Link>

                            </li>
                            <li>
                                <Link to="">Head</Link>

                            </li>
                            <li>
                                <Link to="">Knee</Link>

                            </li>

                        </ul>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='theme-button'>
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>

        </Layout>
    )
}

export default Foot
