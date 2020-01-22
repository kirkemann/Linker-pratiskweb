import React from 'react';
import Eleve from './Elever/Eleve';
import NyeFirmae from './NyeFirmaer/NyeFirmae';
import NyeEleve from './NyeElever/NyeEleve';
import NytFirmae from './NytFirmaer/NytFirmae';



function Nyt() {
    return (

        <div className="Nyt">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-3">
                        <Eleve />
                    </div>
                    <div className="col-12 col-lg-6 mb-3">
                        <NytFirmae />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-3">
                        <NyeEleve />
                    </div>
                    <div className="col-12 col-lg-6 mb-3">
                        <NyeFirmae />
                    </div>
                </div>
            </div>
        </div>

    );
  }
  
  export default Nyt;