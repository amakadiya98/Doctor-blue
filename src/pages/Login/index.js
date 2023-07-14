import React, { useState } from 'react';
import '../../assets/css/login.css';
import doctorsImg from '../../assets/images/login-page-banner.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { Modal, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TruecalloerLogo from '../../assets/images/Truecaller_Logo.png'
import ReactFlagsSelect from 'react-flags-select';


const Login = () => {
  const navigate = useNavigate();
  const [showModal, setModalShow] = useState(false);
  const [selected, setSelected] = useState("IN");

  const closeModal = () => setModalShow(false);

  const submitOTP = () => {
    navigate('/dashboard');
  }

  return (
    <div className='login-main'>
      <div className="content-wrapper">
        <div className="banner-part">
          <div className="banner-content">
            <img src={doctorsImg} alt="doctors-logo" />
            <div className="text-part">
              <h4>Over 500+ Doctors & Physiotherapists</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, cumque fuga ullam explicabo nemo dolorem nam laboriosam in! Voluptatem, vel.</p>
            </div>
          </div>
        </div>
        <div className="form-part">
          <button className='close-btn'>
            <AiOutlineClose size={28} />
          </button>
          <div className="content">
            <div className="header-part">
              <h3>Enter your mobile number</h3>
              <p>We will send you a confirmation code</p>
            </div>
            <div className="middle-form">
              <div className="input-part">
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                  countries={['US','GB','IN']}
                  selectedSize={16}
                  optionsSize={16}
                  className="menu-flags"
                  selectButtonClassName="menu-flags-button"
                  customLabels={{
                    "US": { primary: "+1"},
                    "GB": { primary: "+44"},
                    "IN": { primary: "+91"}
                  }}
                />
                <input type="text" defaultValue={9912348485} />
              </div>
              <p className='info-text'>By signing up you are agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
            </div>
            <div className="action-part">
              <button className="btn btn-orange" onClick={() => setModalShow(true)}>
                Send OTP
              </button>
              <div className="divider">
                <span className='line'></span>
                <p className='text'>OR</p>
              </div>
              <button className="btn btn-orange outline" onClick={() => setModalShow(true)}>
                Login With <img src={TruecalloerLogo} alt='truecaller_logo' className='ms-1' />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Body style={{ border: 'none' }}>
          <div className="content-modal">
            <div className="top-btn-part">
              <button className='btn close-btn' onClick={closeModal}>
                <AiOutlineClose size={20} color='#000' />
              </button>
            </div>
            <div className="modal-inside-content">
              <h5 className='heading'>Enter OTP Sent to your number</h5>
              <p className='desc-text'>4 digit OTP has sent you your mobile number</p>
              <p className='mobileno'>9912348485 <Badge pill className='edit-badge'>Edit</Badge></p>
              <div className="otp-input-group">
                <input
                  type="text"
                  maxLength={1}
                  defaultValue={5}
                  autoFocus
                />
                <input
                  type="text"
                  maxLength={1}
                  defaultValue={5}
                  autoFocus
                />
                <input
                  type="text"
                  maxLength={1}
                  defaultValue={5}
                  autoFocus
                />
                <input
                  type="text"
                  maxLength={1}
                  defaultValue={5}
                  autoFocus
                />
              </div>
              <button className='btn-continue' onClick={submitOTP}>Continue</button>
              <span className='notreceive-text'>Haven't you received the SMS?</span>
              <button className='resend-btn'>Resend Code</button>
              <p className="timer">00:30</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Login