import React from 'react';
import Logo from '../img/logo_lille1.png';
import Logo1 from '../img/tekniskeskole_logo.jpg'
import {NavLink} from 'react-router-dom';

const HeaderLogo = () => {
    return ( 
        <div className="container">
            <NavLink to="/"><img src={Logo} className="rounded d-block col-4 col-lg-1" alt="Logo" /></NavLink>
            <NavLink to="/"><img src={Logo1} className="rounded col-12 col-lg-4 d-block mx-4 mb-1" alt="Logo" /></NavLink>
        </div>

           

        
     );
}
 
export default HeaderLogo;

