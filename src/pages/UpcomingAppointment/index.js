import React from 'react'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import { Row, Col, Button } from 'react-bootstrap';
import '../../assets/css/doctorInfo.css'
import UpcomingPatientsCard from '../../components/UpcomingPatientsCard'
import Calendar from '../../components/Calendar';

import { useLocation, Link, useNavigate } from 'react-router-dom'
const UpcomingAppointment = () => {
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
                    <div className='mb-4'>
                        <UpcomingPatientsCard />
                    </div>
                    <div className='mb-4'>
                        <UpcomingPatientsCard />
                    </div>
                </Col>
            </Row>
        </div>
      </div>
    </Layout>
  )
}

export default UpcomingAppointment
