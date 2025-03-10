import React from 'react'
import '../../styles/Global.css';
import '../../styles/Footer.css';

import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
        <p className='footer__copy'>Copyright &copy; 2025 <span>Srivasanth</span></p>
        <div className='footer__iconcontainer'>
            <a className='footer__socialicon' href="https://www.linkedin.com/in/srivasanth-jammula" target="_blank" rel="noopener noreferrer"><GrLinkedinOption/></a>         
        </div>            
  </footer>
  )
}

export default Footer
