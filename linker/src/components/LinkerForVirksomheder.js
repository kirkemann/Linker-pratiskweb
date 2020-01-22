import React from 'react';
import Logo from '../components/img/logo_lille.png';
import pic from './img/hacker-2883632_640.jpg'
import {NavLink} from 'react-router-dom';

const LinkerForVirksomheder = () => {

    return (
        <div className="container ">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center my-5">Hvad er Linker for virksomheder</h1>
                </div>
                <div className="col-6">
                    <p className="text-left mx-4 ">- Linker er et bindeled mellem skoler og virksomheder. På Linker kan du som virksomhed søge på netop den elev/elever I mangler.</p> 
                    <p className="text-left mx-4 ">- Vi samarbejder med alle de danske erhvervsskoler, hvilket indebærer at vi har elever der er i gang med alle erhvervsuddannelser i landet.</p>
                    <p className="text-left mx-4 ">- I kan via vores hjemmeside se profiler inde for alle erhvervsfag. </p>
                    <p className="text-left mx-4 ">- Man kan se elevens profil, kompetencer, arbejde samt tage kontakt til eleven direkte fra hjemmesiden. </p>
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