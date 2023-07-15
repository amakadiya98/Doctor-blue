import React from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import UpcomingPatientsCard from '../../components/UpcomingPatientsCard'
import { Row, Col } from 'react-bootstrap';
import { useLocation, Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PatientImg from '../../assets/images/patient.png';
import Calendar  from '../../components/Calendar'

const Patient = () => {
  return (
    <Layout>
      <div className='main-content-part topBox'>
        <div className='innerInfo withoutOrange'>
          <Row>
            <Col xl={5} lg={12}>
              <div className='doctorDetailsCard'>
                <div className="doctorContent">
                <Calendar/>
                </div>
                <div className='patientInfoData'>
                  <h6>Today’s Appointment</h6>
                  <div className='appointmentPart'>
                    <div className='doctor-card upcomingPatientsCard mb-3'>
                      <div className='doctor-card-content'>
                        <div className='image-part d-flex align-items-center'>
                          <img src={PatientImg} alt='Patient' className='w-100' />
                        </div>
                        <div className='text-part w-100'>
                          <h5>Emily Thomas</h5>
                          <p className='gray'>Heart Surgery</p>
                          <p>5:45 PM, <span style={{ color: '#ADADAD' }}>Feb 24</span></p>
                          <Button className="componentBtn green-btn mt-3 w-100">30 Feb 2023</Button>
                        </div>
                      </div>

                    </div>
                    <div className='doctor-card upcomingPatientsCard mb-3'>
                      <div className='doctor-card-content'>
                        <div className='image-part d-flex align-items-center'>
                          <img src={PatientImg} alt='Patient' className='w-100' />
                        </div>
                        <div className='text-part w-100'>
                          <h5>Emily Thomas</h5>
                          <p className='gray'>Heart Surgery</p>
                          <p>5:45 PM, <span style={{ color: '#ADADAD' }}>Feb 24</span></p>
                          <Button className="componentBtn green-btn mt-3 w-100">30 Feb 2023</Button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={7} lg={12}>
            <div className='doctorDetailsCard mb-3'>
              <div className='patientListpartTitle'>
                <h6>Today’s patient</h6>
                <Link to="/allPatient">All patient</Link>
              </div>
            <div className='mb-4 w-100'>
                <Link to="/allPatient">
                  <UpcomingPatientsCard />
                </Link>
                
              </div>
              <div className='mb-4 w-100'>
                <Link to="/allPatient">
                  <UpcomingPatientsCard />
                </Link>
                
              </div>
            </div>
              
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default Patient
