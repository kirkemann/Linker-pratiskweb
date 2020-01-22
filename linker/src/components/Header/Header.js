import React from 'react'
import HeaderLogo from './HeaderLogo';
import HeaderNavbar from './HeaderNavbar';
import HeaderSprog from './Headersprog';
import Slider from '../Slider/Slider';


const Header = () => {
    return ( 
        <div className="container">
            <HeaderSprog />
            <HeaderLogo />
            <Slider />
            <HeaderNavbar />
        </div>
     );
}
 
export default Header;