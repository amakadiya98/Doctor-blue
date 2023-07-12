
import React, { useState } from 'react'
import '../assets/css/commonComponent.css'
import FillStar from '../assets/images/star.svg'
import BlanckStar from '../assets/images/star-blanck.svg'
import Patient from '../assets/images/patient.png'
import Button from 'react-bootstrap/Button';
import CommunityImg from '../assets/images/community.png'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import Comment from '../assets/images/comment.svg'
import Like from '../assets/images/like.svg'
const CommunityCard = () => {
 
  return (
   <div className='community-card'>
        <div className='community-card-content'>
            <div className='image-part d-flex justify-content-center align-content-center'>
                <img src={CommunityImg} alt='CommunityImg' />
            </div>
            <div className='text-part'>
              <div className='img-date-part'>
                <div className='prodile-img-name'>
                    <img src="" />
                    <p>Dr. Henna S.</p>
                </div>
                <p>Feb 28 2023</p>
              </div>
              <h6>Healthy lifestyle for diabetics Lorem Ipsum is the printing and typesetting industry. </h6>
              <div className='like-comment-data'>
                <div className='like-comment-text'>
                    <p>23 Comments</p>
                    <p>51 Likes</p>
                </div>
                <div className='like-commnet-icon'>
                    <a href='#'>
                        <img src={Like} alt='chat'/>
                    </a>
                    <a href='#'>
                        <img src={Comment} alt='chat'/>
                    </a>
                </div>
              </div>
            </div>
        </div>
   </div>
  )
}

export default CommunityCard