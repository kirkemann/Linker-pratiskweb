import React from 'react';
import Logo from '../components/img/logo_lille.png';
import pic from './img/matrix-2953869_640.jpg'
import {NavLink} from 'react-router-dom';

const LinkerForVirksomheder = () => {

    return (
        <div className="container ">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center my-5">Hvordan kommer min skole på Linker </h1>
                </div>
                <div className="col-6">
                    <p className="text-left mx-4 ">- I udfylder tilmeldingsblanketten med en hovedansvarlig for skolen samt skolenavn. </p> 
                    <p className="text-left mx-4 ">- Når disse felter er udfyldt sender I den ind til os</p>
                    <p className="text-left mx-4 ">- Når blanketten er tilsendt vores afdeling tager vi fat i den hovedansvarlige person, og opretter jer derefter i vores system</p>
                    <p className="text-left mx-4 ">- Derefter kan I begynde at lede efter netop de virksomheder jeres elever mangler!</p>
                    <NavLink to="/"><img src={Logo} className="rounded d-block col-12 col-lg-8 offset-2" alt="Logo" /></NavLink>
                </div>
                <div className="col-6">
                <NavLink to="/"><img src={pic} className="rounded d-block col-12 col-lg-12 " alt="Logo" /></NavLink>
                </div>
            </div>
        </div>
    )
}

export default LinkerForVirksomheder