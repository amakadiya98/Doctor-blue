import React from 'react'
// import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import { Row, Col, Button } from 'react-bootstrap';
import Doctor from '../../assets/images/doctorInfo.png'
import Star from '../../assets/images/star.svg'
import Location from '../../assets/images/location.svg'
import Call from '../../assets/images/call.svg'
import Chat from '../../assets/images/chat.svg'
import User from '../../assets/images/user.svg'
import Verify from '../../assets/images/verify.svg'
import Rating from '../../assets/images/rating.svg'
import '../../assets/css/doctorInfo.css'
import { useLocation, Link, useNavigate } from 'react-router-dom'
const DoctorDetails = () => {
  return (
    <Layout>
      <TopBar />
      <div className='main-content-part topBox'>
        <div className='top-orange-box'></div>
        <div className='innerInfo'>
            <Row>
                <Col lg={5}>
                    <div className='doctorDetailsCard'>
                        <div className="doctorContent">
                            <div className='imnage-part'>
                                <img src={Doctor} alt='doctor' />
                                <div className='rating'>
                                    <p><img src={Star} alt="star" /> 4.5 (60)</p>
                                </div>
                            </div>
                            <div className='doctorInfo'>
                                <h4>Dr. Kate Brown</h4>
                                <h5>Physiotherapist</h5>
                                <h6><img src={Location} alt='location' /> California, USA</h6>
                            </div>
                            <div className='logInfo'>
                                <div className='badge call'>
                                    <img src={Call} alt='call' />
                                </div>
                                <div className='badge email'>
                                    <img src={Chat} alt='email' />
                                </div>
                            </div>
                            <div className='expData'>
                                <div className='part'>
                                    <img src={User} alt='user' />
                                    <h6>58</h6>
                                    <p>Patient</p>
                                </div>
                                <div className='part'>
                                    <img src={Verify} alt='verified' />
                                    <h6>12 years</h6>
                                    <p>Experience</p>
                                </div>
                                <div className='part'>
                                    <img src={Rating} alt='timer' />
                                    <h6>4.5</h6>
                                    <p>Till 7:00 PM</p>
                                </div>
                            </div>
                            <div className='aboutInfo'>
                                <h6>About Doctor</h6>
                                <p>Lorem Ipsum is simply dummy text of 
                                    theprinting and typesetting industry. 
                                    Lorem Ipsum is simply dummy text of  
                                    the printing and typesetting industry. 
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={7}>
                <div className='doctorDetailsCard mb-3'>
                    <Row className='w-100'>
                        <Col md={6}>
                            <div className='doctorDetailsCard'>
                                <div className='rightSmallCard'>
                                    <h6>5</h6>
                                    <p>Total time assign</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='doctorDetailsCard'>
                                <div className='rightSmallCard'>
                                    <h6>0</h6>
                                    <p>Assign by you</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='doctorDetailsCard startdata'>
                    <div className='rightPartData'>
                        <div className='infoField filed'>
                            <h6>In Clinic Appointment</h6>
                            <h5>$800 Fees</h5>
                        </div>
                        <div className='locationTimeField filed'>
                            <div className='block'>
                                <p>Manipal Hospital</p>
                                <p>California, USA</p>
                            </div>
                            <div className='block'>
                                <p>Wait Time</p>
                                <p className='badge'>60 min</p>
                            </div>
                        </div>
                        <div className='infoField filed'>
                            <p>Today, 22 Feb <span>12 Slots</span></p>
                            <div className='radio-badge-part'>
                                <form>
                                    <label>
                                        <input type="radio" name="radio"/>
                                        <span>9:00 AM</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio"/>
                                        <span>9:30 AM</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio"/>
                                        <span>10:00 AM</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio"/>
                                        <span>10:30 AM</span>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-part'>
                        <Link to="/doctorSlot">View all Slots</Link>
                    </div>
                </div>
                </Col>
            </Row>
            <div className='buttonPart mt-3 d-flex justify-content-center'>
                <Button className='theme-button' style={{fontWeight: 400}}>Assign <span>Dr. Henna S.</span></Button>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default DoctorDetails
