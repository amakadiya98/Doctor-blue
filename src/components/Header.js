import {  React, useState} from 'react';
import '../assets/css/header.css';
import { BsSearch } from 'react-icons/bs'
import notificationIcon from '../assets/images/notification.svg'
import Avatar from 'react-avatar';
import profileImg from '../assets/images/Ellipse 179.svg'
import { Dropdown } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const Header = () => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className='header-main'>
            <div className="search-part">
                <input type="text" placeholder='search doctors' />
                <BsSearch size={16} className='icon-search' />
            </div>
            <div className="profile-part">
                <div className="notification-block">
                    <img src={notificationIcon} alt="notification-icon" width='20px' onClick={handleShow} style={{ cursor: 'pointer'}}/>

                    <div className="noti-no">4</div>
                </div>
                <div className="profile">
                    <Avatar src={profileImg} size='40'/>
                    <Dropdown>
                        <Dropdown.Toggle id='dropdown-profile' className='btn-custom'>Kate </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href='#'>Account</Dropdown.Item>
                            <Dropdown.Item href='#'>Patients</Dropdown.Item>
                            <Dropdown.Item href='#'>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} centered  size="lg">
        <Modal.Header closeButton className='justify-content-start border-0'>
          <Modal.Title className='text-center'>Notifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='body-content'>
            <div className='notification-card'>
                <h6>Jack Williams</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p className='ms-2'>5:45 PM, Feb 24</p>
            </div>
            <div className='notification-card'>
                <h6>Jack Williams</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p className='ms-2'>5:45 PM, Feb 24</p>
            </div>
            <div className='notification-card'>
                <h6>Jack Williams</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p className='ms-2'>5:45 PM, Feb 24</p>
            </div>
            <div className='notification-card'>
                <h6>Jack Williams</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p className='ms-2'>5:45 PM, Feb 24</p>
            </div>
          </div>
        </Modal.Body>
      
      </Modal>
        </div>
    )
}

export default Header
