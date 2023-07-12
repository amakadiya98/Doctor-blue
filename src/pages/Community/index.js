import React from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import PatientCard from '../../components/PatientCard'
import { Row, Col } from 'react-bootstrap';
import { useLocation, Link, useNavigate } from 'react-router-dom'
import CommunityCard from '../../components/CommunityCard'

const PatientList = () => {
  return (
    <Layout>
      <div className='main-content-part'>
        <Row className='g-4'>
          <Col xl="6" lg="12">
          <CommunityCard />
          </Col>
          <Col xl="6" lg="12">
          <CommunityCard />
          </Col>
          <Col xl="6" lg="12">
          <CommunityCard />
          </Col>
          <Col xl="6" lg="12">
          <CommunityCard />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default PatientList
