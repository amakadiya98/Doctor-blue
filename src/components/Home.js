import React from 'react'
import landingBack from '../assets/images/landing-banner.png';
import '../assets/css/home.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    }
    return (
        <div className='home-main' onClick={() => handleClick()}>
            <img src={landingBack} alt='hero-bg' className='home-bg' />
        </div>
    )
}

export default Home
