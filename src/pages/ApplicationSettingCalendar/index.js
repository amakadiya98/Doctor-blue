import { React, useState } from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import PatientCard from '../../components/PatientCard'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useLocation, Link, useNavigate } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Calendar from '../../components/Calendar'
const ApplicationSettingCalendar = () => {
    const [key, setKey] = useState('general');
   
   
    return (
        <Layout>
            <TopBar />
            <div className='main-content-part topBox'>
                <div className='innerInfo withoutOrange'>
                    <Row>
                        <Col lg={5}>
                            <div className='doctorDetailsCard'>
                                <div className="doctorContent">
                                    <Calendar />
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className='exercise-tab-part'>
                                <Tabs
                                    id="controlled-tab-example"
                                    activeKey={key}
                                    onSelect={(k) => setKey(k)}
                                    className="mb-3 mt-0  d-flex justify-content-center"
                                >
                                    <Tab eventKey="general" title="General">
                                    <div className='form-data'>
                                        <div className='filed'>
                                            <label>Availablility</label>
                                            <div className='yes-no-radio'>
                                                <label style={{ flex: 1 }}>
                                                    <input type="radio" name="radio" checked />
                                                    <div class="front-end box w-100 py-2">
                                                        <span>Yes</span>
                                                    </div>
                                                </label>

                                                <label style={{ flex: 1 }}>
                                                    <input type="radio" name="radio" />
                                                    <div class="back-end box w-100 py-2">
                                                        <span>No</span>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='filed'>
                                            <label>Available Time</label>
                                            <div className='start-part'>
                                                <label style={{ fontWeight: 400 }}>Start</label>
                                                <div className='timer-block d-flex align-items-center'>
                                                    <Form.Select aria-label="Default select example">
                                                        <option>8:30 AM</option>
                                                        <option value="1">9:00 AM</option>
                                                        <option value="2">9:05 AM</option>
                                                        <option value="3">9:30 AM</option>
                                                    </Form.Select>
                                                    <div className='yes-no-radio ms-3'>
                                                        <label>
                                                            <input type="radio" name="radio" checked />
                                                            <div class="front-end box w-100">
                                                                <span>AM</span>
                                                            </div>
                                                        </label>

                                                        <label >
                                                            <input type="radio" name="radio" />
                                                            <div class="back-end box w-100">
                                                                <span>PM</span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='end-part mt-3'>
                                                <label style={{ fontWeight: 400 }}>End</label>
                                                <div className='timer-block d-flex align-items-center'>
                                                    <Form.Select aria-label="Default select example">
                                                        <option>8:30 AM</option>
                                                        <option value="1">9:00 AM</option>
                                                        <option value="2">9:05 AM</option>
                                                        <option value="3">9:30 AM</option>
                                                    </Form.Select>
                                                    <div className='yes-no-radio ms-3'>
                                                        <label>
                                                            <input type="radio" name="radio" checked />
                                                            <div class="front-end box w-100">
                                                                <span>AM</span>
                                                            </div>
                                                        </label>

                                                        <label >
                                                            <input type="radio" name="radio" />
                                                            <div class="back-end box w-100">
                                                                <span>PM</span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='filed'>
                                            <label>Select Days</label>
                                            <div className='radio-badge-part radio-badge-outline'>
                                                <form>
                                                    <label>
                                                        <input type="radio" name="radio" />
                                                        <span>Mon</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="radio" />
                                                        <span>Tue</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="radio" />
                                                        <span>Wen</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="radio" />
                                                        <span>Thu</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="radio" />
                                                        <span>Fri</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="radio" />
                                                        <span>Sat</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="radio" />
                                                        <span>Sun</span>
                                                    </label>
                                                </form>
                                            </div>
                                        </div>
                                        <div className='filed'>
                                            <label>Duration</label>
                                            <Form.Select aria-label="Default select example">
                                                <option>5:00 min</option>
                                                <option value="1">15:00 min</option>
                                                <option value="2">25:00 min</option>
                                                <option value="3">35:00 min</option>
                                            </Form.Select>
                                        </div>
                                        <div className='buttonPart mt-5 d-flex justify-content-center'>
                                            <Button className='theme-button'>Done</Button>
                                        </div>
                                        </div>
                                    </Tab>
                                    
                                    <Tab eventKey="dayWise" title="Day Wise">
                                        <div className='form-data'>

                                            <div className='filed'>
                                                <label>Availablility</label>
                                                <div className='yes-no-radio'>
                                                    <label style={{ flex: 1 }}>
                                                        <input type="radio" name="radio" checked />
                                                        <div class="front-end box w-100">
                                                            <span>Yes</span>
                                                        </div>
                                                    </label>

                                                    <label style={{ flex: 1 }}>
                                                        <input type="radio" name="radio" />
                                                        <div class="back-end box w-100">
                                                            <span>No</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className='filed'>
                                                <label>Available Time</label>
                                                <div className='start-part'>
                                                    <label style={{ fontWeight: 400 }}>Start</label>
                                                    <div className='timer-block d-flex align-items-center'>
                                                        <Form.Select aria-label="Default select example">
                                                            <option>8:30 AM</option>
                                                            <option value="1">9:00 AM</option>
                                                            <option value="2">9:05 AM</option>
                                                            <option value="3">9:30 AM</option>
                                                        </Form.Select>
                                                        <div className='yes-no-radio ms-3'>
                                                            <label>
                                                                <input type="radio" name="radio" checked />
                                                                <div class="front-end box w-100">
                                                                    <span>AM</span>
                                                                </div>
                                                            </label>

                                                            <label >
                                                                <input type="radio" name="radio" />
                                                                <div class="back-end box w-100">
                                                                    <span>PM</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className='end-part mt-3'>
                                                    <label style={{ fontWeight: 400 }}>End</label>
                                                    <div className='timer-block d-flex align-items-center'>
                                                        <Form.Select aria-label="Default select example">
                                                            <option>8:30 AM</option>
                                                            <option value="1">9:00 AM</option>
                                                            <option value="2">9:05 AM</option>
                                                            <option value="3">9:30 AM</option>
                                                        </Form.Select>
                                                        <div className='yes-no-radio ms-3'>
                                                            <label>
                                                                <input type="radio" name="radio" checked />
                                                                <div class="front-end box w-100">
                                                                    <span>AM</span>
                                                                </div>
                                                            </label>

                                                            <label >
                                                                <input type="radio" name="radio" />
                                                                <div class="back-end box w-100">
                                                                    <span>PM</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='filed'>
                                                <label>Select Days</label>
                                                <div className='radio-badge-part radio-badge-outline'>
                                                    <form>
                                                        <label>
                                                            <input type="checkbox" name="checkbox" />
                                                            <span>Mon</span>
                                                        </label>
                                                        <label>
                                                            <input type="checkbox" name="checkbox" />
                                                            <span>Tue</span>
                                                        </label>
                                                        <label>
                                                            <input type="checkbox" name="checkbox" />
                                                            <span>Wen</span>
                                                        </label>
                                                        <label>
                                                            <input type="checkbox" name="checkbox" />
                                                            <span>Thu</span>
                                                        </label>
                                                        <label>
                                                            <input type="checkbox" name="checkbox" />
                                                            <span>Fri</span>
                                                        </label>
                                                        <label>
                                                            <input type="checkbox" name="checkbox" />
                                                            <span>Sat</span>
                                                        </label>
                                                        <label>
                                                            <input type="checkbox" name="checkbox" />
                                                            <span>Sun</span>
                                                        </label>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className='filed'>
                                                <label>Duration</label>
                                                <Form.Select aria-label="Default select example">
                                                    <option>5:00 min</option>
                                                    <option value="1">15:00 min</option>
                                                    <option value="2">25:00 min</option>
                                                    <option value="3">35:00 min</option>
                                                </Form.Select>
                                            </div>

                                            <div className='buttonPart mt-5 d-flex justify-content-center'>
                                                <Button className='theme-button'>Done</Button>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Layout>
    )
}

export default ApplicationSettingCalendar
