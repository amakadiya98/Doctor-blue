import React from 'react'
import '../../assets/css/splashScreen.css';
import splash from '../../assets/images/splash-banner.svg';

const SplashScreen = () => {
  return (
    <div className='screen-main'>
    <div className="number-block">
        <h3>02</h3>
    </div>
    <img src={splash} alt="banner-img" className="bottom-img" />
    </div>
  )
}

export default SplashScreen