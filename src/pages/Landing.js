import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';

import React from 'react'

const Landing = () => {
  return (
    <Wrapper>
     <nav>
          <img src={logo} alt='jobster logo' className='logo' />
     </nav>
     <div className='container page'>
          {/* info */}
          <div className='info'>
               <h1>Job <span>Tracking</span> App</h1>
               <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Odit temporibus,
                     enim ipsa, dolor aliquam mollitia dolores fugit, quidem
                      natus sequi corporis.
                     Et ut cupiditate ratione eius accusantium sapiente est qui?
               </p>
               <button className='btn btn-hero'>Login / Register</button>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
     </div>
     </Wrapper>
  )
}


export default Landing