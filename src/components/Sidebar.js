import React from 'react'
import logo from '../assets/images/docpy.svg'
import '../assets/css/sidebar.css'
import logout from '../assets/images/signOut.svg'
import home from '../assets/images/home.svg'
import homeActive from '../assets/images/homeActive.svg'
import community from '../assets/images/community.svg';
import communityActive from '../assets/images/community-active.svg';
import excersize from '../assets/images/excersize.svg';
import excersizeActive from '../assets/images/excersize-active.svg';
import appointment from '../assets/images/appointment.svg';
import appointmentActive from '../assets/images/appointment-active.svg';
import { useLocation, Link, useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation();
  const activePage = location.pathname.replace('/', '');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  }

  return (
    <div className='sidebar-main'>
      <div className="logo-part">
        <img src={logo} alt="docpy-logo" width={150} />
      </div>
      <div className="nav-part">
        <div className="top-navpart">
          <Link
            to='/dashboard'
            style={{ textDecoration: "none", color: "inherit" }}>
            <div className={` ${activePage === 'dashboard' ? 'nav-btn active' : 'nav-btn'}`}>
              <img src={activePage === 'dashboard' ? homeActive : home} alt="" className='icon' />
              <p className='text'>Home</p>
            </div>
          </Link>
          <Link
            to='/exercises'
            style={{ textDecoration: "none", color: "inherit" }}>
            <div className={`${activePage === 'exercises' ? 'nav-btn active' : 'nav-btn'}`}>
              <img src={activePage === 'exercises' ? excersizeActive : excersize} alt="" className='icon' />
              <p className='text'>Exercises</p>
            </div>
          </Link>
          <Link
            to='/appointment'
            style={{ textDecoration: "none", color: "inherit" }}>
            <div className={`${activePage === 'appointment' ? 'nav-btn active' : 'nav-btn'}`}>
              <img src={activePage === 'appointment' ? appointmentActive : appointment} alt="" className='icon' />
              <p className='text'>Appointment</p>
            </div>
          </Link>
          <Link
            to='/community'
            style={{ textDecoration: "none", color: "inherit" }}>
            <div className={`${activePage === 'community' ? 'nav-btn active' : 'nav-btn'}`}>
              <img src={activePage === 'community' ? communityActive : community} alt="" className='icon' />
              <p className='text'>Community</p>
            </div>
          </Link>
        </div>
        <div className="bottom-logoutpart">
          <button className='logout-btn' onClick={() => handleLogout()}>
            <img src={logout} alt="logout-icon" className='icon' />
            <p className='text'>Logout</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
