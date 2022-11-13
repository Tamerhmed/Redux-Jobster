import {Logo} from '../components';
import team_work from '../assets/images/team_work.svg';
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <Wrapper>
     <nav>
          <Logo />
     </nav>
     <div className='container page'>
          {/* info */}
          <div className='info'>
               <h2>Trade job management software to streamline jobs, estimating & quoting.</h2>
               <p>
                    Leave the hard graft behind. If your job management system can't
                     capture new
                     leads as jobs, create accurate quotes and takeoffs,
                     and dispatch instant online quotes with e-signatures, then it's
                      time to upgrade.
               </p>
               <Link to='/register' className='btn btn-hero'>Login / Register</Link>
          </div>
          <img src={team_work} alt='job hunt' className='img main-img' />
     </div>
     </Wrapper>
  )
}


export default Landing