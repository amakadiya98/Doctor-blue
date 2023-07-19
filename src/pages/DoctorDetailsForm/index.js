import React from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import LeftIcon from '../../assets/images/left.svg'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import DoctorImg from '../../assets/images/doctor.png'
import Calendar from '../../assets/images/calendar.svg'
import Calendar2 from '../../assets/images/calendar-2.svg'
import ChatIcon from '../../assets/images/chatIcon.svg'
import Gym from '../../assets/images/gym.svg'
import User from '../../assets/images/userIcon.svg'
import History from '../../assets/images/history.svg'
import Setting from '../../assets/images/setting.svg'

const DoctorDetailsForm = () => {
  return (
    <Layout>
      <TopBar />
      <div className='main-content-part doctorDetailsForm-part  '>
        <div className='doctorName'>
          <div className='image-part mb-2'>
            <img src={DoctorImg} alt='doctor' />
          </div>
          <p>Dr. Kate Brown</p>
          <p className='email'>katebrown@gmail.com</p>
        </div>
        <div className='common-link-card-part'>
          <Link to="/myAppointment" className='link-card'>
            <div className='iconPart'>
              <div className='iconRound'>
                <img src={Calendar} alt='icon' />
              </div>
              <p className='text'>My Appointments</p>
            </div>

            <div className='img-block'>
              <img src={LeftIcon} alt='left' />
            </div>
          </Link>
          <Link to="" className='link-card'>
            <div className='iconPart'>
              <div className='iconRound'>
                <img src={Calendar2} alt='icon' />
              </div>
              <p className='text'>Appointment Settings</p>
            </div>

            <div className='img-block'>
              <img src={LeftIcon} alt='left' />
            </div>
          </Link>
          <Link to="" className='link-card'>
            <div className='iconPart'>
              <div className='iconRound'>
                <img src={ChatIcon} alt='icon' />
              </div>
              <p className='text'>Chat</p>
            </div>

            <div className='img-block'>
              <img src={LeftIcon} alt='left' />
            </div>
          </Link>
          <Link to="" className='link-card'>
            <div className='iconPart'>
              <div className='iconRound'>
                <img src={Gym} alt='icon' />
              </div>
              <p className='text'>My Assigned Exercises</p>
            </div>

            <div className='img-block'>
              <img src={LeftIcon} alt='left' />
            </div>
          </Link>
          <Link to="" className='link-card'>
            <div className='iconPart'>
              <div className='iconRound'>
                <img src={User} alt='icon' />
              </div>
              <p className='text'>My Patient</p>
            </div>

            <div className='img-block'>
              <img src={LeftIcon} alt='left' />
            </div>
          </Link>
          <Link to="" className='link-card'>
            <div className='iconPart'>
              <div className='iconRound'>
                <img src={History} alt='icon' />
              </div>
              <p className='text'>History</p>
            </div>

            <div className='img-block'>
              <img src={LeftIcon} alt='left' />
            </div>
          </Link>
          <Link to="" className='link-card'>
            <div className='iconPart'>
              <div className='iconRound'>
                <img src={Setting} alt='icon' />
              </div>
              <p className='text'>Settings</p>
            </div>

            <div className='img-block'>
              <img src={LeftIcon} alt='left' />
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default DoctorDetailsForm
