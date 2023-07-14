import React from 'react'

import Patient from '../assets/images/patient.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import FillStar from '../assets/images/star.svg'
import '../assets/css/commonComponent.css'
import { useLocation, Link, useNavigate } from 'react-router-dom'

const options = {
    loop:true,
    nav:false,
    dots:false,
    margin:0, 
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 1.5,
        },
        1000: {
            items: 2.2,
        },
        1366:{
            items: 3.5,
        },
        1520:{
            items: 4.5,
        }
    },
}

const AppointmentCard = () => {
    return (
        <div class='container-fluid' >      
        <OwlCarousel {...options}
            className="owl-theme assign-slider"
          >
            <div>
                <Link to="/doctorList" className='doctorList'>
                    <div className='assign-doctor-card'>
                        <div className='doctor-card-content'>
                            <div className='image-part'>
                                    <img src={Patient} alt='Patient' />
                                </div>
                            <div className='text-part'>
                                <h5 className='name'>Dr. Henna S.</h5>
                                <p className='name'>Physiotherapist</p>
                                <div className='rating-part'>
                                    <img src={FillStar} alt='star' />
                                    <img src={FillStar} alt='star' />
                                    <img src={FillStar} alt='star' />
                                    <img src={FillStar} alt='star' />
                                    <img src={FillStar} alt='star' />
                                </div>
                            </div>
                        </div>
                        <div className='bottom-part'>
                            <p>3 Time Assigned</p>
                        </div>
                    </div>
                </Link>
            </div>
           
        </OwlCarousel>
        </div>

    )
}

export default AppointmentCard