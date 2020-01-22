import React from 'react';
import Logo from '../components/img/logo_lille.png';
import pic from './img/matrix-2953869_640.jpg'
import {NavLink} from 'react-router-dom';

const ForAtOprette = () => {

    return (
        <div className="container ">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center my-5">For at tilmelde din virksomhed på Linker skal du gøre følgende:</h2>
                </div>
                <div className="col-6">
                    <p className="text-left mx-4 ">- Du skal tilmelde dig inde på kontaktformen</p> 
                    <p className="text-left mx-4 ">- Din virksomhed skal bruge 1 hovedansvarlig som skal navngives</p>
                    <p className="text-left mx-4 ">- I skal udfylde alle felter med korrekte oplysninger </p>
                    <p className="text-left mx-4 ">- Efter I har udfyldt alle jeres oplysninger skal I sende det</p>
                    <p className="text-left mx-4 ">- Efter vores tilmeldingsproces giver vi den hovedansvarlig et opkald med opsætningen af jeres Linker profil</p>
                    <p className="text-left mx-4 ">- Derefter kan I begynde at lede efter den elev I mangler!</p>
                    <NavLink to="/"><img src={Logo} className="rounded d-block col-12 col-lg-8 offset-2 mt-3" alt="Logo" /></NavLink>
                </div>
                <div className="col-6">
                <NavLink to="/"><img src={pic} className="rounded d-block col-12 col-lg-12 " alt="Logo" /></NavLink>
                </div>
            </div>
        </div>
    )
}

export default ForAtOprette