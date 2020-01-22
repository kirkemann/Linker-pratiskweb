import React from 'react';
import Logo from '../components/img/logo_lille.png';
import pic from './img/hacker-2883632_640.jpg'
import {NavLink} from 'react-router-dom';

const LinkerForVirksomheder = () => {

    return (
        <div className="container ">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center my-5">Hvad er linker for din skole</h1>
                </div>
                <div className="col-6">
                    <p className="text-left mx-4 ">- Linker hjælper din skole samt elever med at forbinde skolen til virksomheder. </p> 
                    <p className="text-left mx-4 ">- I kan bruge Linker til at henvise jeres elever til virksomheder</p>
                    <p className="text-left mx-4 ">- Det gør det meget nemmere for eleverne at tage kontakt til virksomheder</p>
                    <p className="text-left mx-4 ">- I vil have et stort udvalg af virksomheder til jeres elever hvad der angår elev samt praktikplads</p>
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