import React from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import { Row, Col, Button } from 'react-bootstrap';
import '../../assets/css/doctorInfo.css'
import UpcomingPatientsCard from '../../components/UpcomingPatientsCard'
import Calendar from '../../components/Calendar';
const MyAppointment = () => {
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
                <div className='doctorDetailsCard mb-3'>
                  <div className='patientListpartTitle'>
                    <h6>Today’s patient</h6>
                  </div>
                  <div className='mb-4 w-100'>
                        <UpcomingPatientsCard />
                    </div>
                    <div className='mb-4 w-100'>
                        <UpcomingPatientsCard />
                    </div>
              </div>
                  
                </Col>
            </Row>
        </div>
      </div>
    </Layout>
  )
}

export default MyAppointment
