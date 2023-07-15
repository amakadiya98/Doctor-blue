
import React, { useState } from 'react'
import '../assets/css/commonComponent.css'
import CommunityImg from '../assets/images/community.png'
import DoctorimgIcon from '../assets/images/doctorimgIcon.png'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Comment from '../assets/images/comment.svg'
import Like from '../assets/images/like.svg'
import LikePerson from '../assets/images/likePerson.png'
const CommunityCard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <div className='community-card'>
        <div className='community-card-content'>
            <div className='image-part d-flex justify-content-center align-content-center'>
                <img src={CommunityImg} alt='CommunityImg' />
            </div>
            <div className='text-part'>
              <div className='img-date-part'>
                <div className='prodile-img-name'>
                    <img src={DoctorimgIcon} />
                    <p>Dr. Henna S.</p>
                </div>
                <p className='gray'>Feb 28 2023</p>
              </div>
              <h6>Healthy lifestyle for diabetics Lorem Ipsum is the printing and typesetting industry. </h6>
              <div className='like-comment-data'>
                <div className='like-comment-text ms-1'>
                    <p className='gray'>23 Comments</p>
                    <p className='gray ms-3' onClick={handleShow} style={{ cursor: 'pointer'}}>51 Likes</p>
                </div>
                <div className='like-commnet-icon'>
                    <a href='#'>
                        <img src={Like} alt='chat'/>
                    </a>
                    <a href='#'>
                        <img src={Comment} alt='chat' className='ms-2'/>
                    </a>
                </div>
              </div>
            </div>
        </div>

        <Modal show={show} onHide={handleClose} centered  size="md">
        <Modal.Header closeButton className='justify-content-start'>
          <Modal.Title className='text-center'>Likes (55)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='body-content'>
            <ul className='like-person-list'>
              <li className='like-person'>
                <img src={LikePerson} alt="person" />
                <p>Alice Smith</p>
              </li>
              <li className='like-person'>
                <img src={LikePerson} alt="person" />
                <p>Emma Jones</p>
              </li>
              <li className='like-person'>
                <img src={LikePerson} alt="person" />
                <p>Jack Williams</p>
              </li>
              <li className='like-person'>
                <img src={LikePerson} alt="person" />
                <p>James Taylor</p>
              </li>
              <li className='like-person'>
                <img src={LikePerson} alt="person" />
                <p>Charlotte Brown</p>
              </li>
              <li className='like-person'>
                <img src={LikePerson} alt="person" />
                <p>Ella Devies</p>
              </li>
            </ul>
           
          </div>
        </Modal.Body>
      
      </Modal>
   </div>
  )
}

export default CommunityCard