import React from 'react'
import '../../assets/css/home.css'
import Layout from '../../layout'
import TopBar from '../../components/TopBarNavigation'
import LeftIcon from '../../assets/images/left.svg'
import { useLocation, Link, useNavigate } from 'react-router-dom'
const Settings = () => {
  return (
    <Layout>
      <TopBar />
      <div className='main-content-part'>
        <div className='common-link-card-part'>
            <Link to="" className='link-card'>
                <p className='text'>Help Us</p>
                <div className='img-block'>
                    <img src={LeftIcon} alt='left'/>
                </div>
            </Link>
            <Link to="" className='link-card'>
                <p className='text'>About Us</p>
                <div className='img-block'>
                    <img src={LeftIcon} alt='left'/>
                </div>
            </Link>
            <Link to="" className='link-card'>
                <p className='text'>Rate Us</p>
                <div className='img-block'>
                    <img src={LeftIcon} alt='left'/>
                </div>
            </Link>
            <Link to="" className='link-card'>
                <p className='text'>Privacy & Policy</p>
                <div className='img-block'>
                    <img src={LeftIcon} alt='left'/>
                </div>
            </Link>
            <Link to="" className='link-card'>
                <p className='text'>Are you a doctor?</p>
                <div className='img-block'>
                    <img src={LeftIcon} alt='left'/>
                </div>
            </Link>
        </div>
        </div>
    </Layout>
  )
}

export default Settings
