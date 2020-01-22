import React from 'react';
import Logo from '../img/logo_lille.png';

import {NavLink} from 'react-router-dom';

const LinkerForVirksomheder = () => {

    return (
        <div className="container ">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center my-3">Tips og god råd</h1>
                </div>
                <div className="col-6">
                    <h3 className="text-center my-3">TIPS TIL ELEVEN!</h3>
                    <p className="text-left mx-4 ">- Virksomheder lægger utrolig meget vægt på jeres profil. Sørg altid for, at jeres profil er simpel, nem at læse og at den indeholder jeres CV samt portfolio</p><br/>
                    <h3 className="text-center my-3">CV</h3>
                    <p className="text-left mx-4 ">- Lav et troværdigt CV. I skal kunne redegøre for alt det indeholder.</p>
                    <p className="text-left mx-4 ">- Nævn jeres tidligere arbejdspladser samt arbejdserfaringer. </p>
                    <p className="text-left mx-4 ">- Altid hav den første arbejdsplads i bunden af cv’et og seneste øverst.</p>
                    <p className="text-left mx-4 ">- Lav en kort beskrivelse af jer selv. Det må gerne være personligt, bare ikke i alt for mange detaljer. </p>
                    <p className="text-left mx-4 ">- I skal have et billede af jer selv </p>
                    <p className="text-left mx-4 ">- I skal skrive navn, alder, adresse, uddannelsessted samt hvilken uddannelse I tager.</p>
                    
                </div>
                <div className="col-6">
                    <h3 className="text-center my-3">Portfolio</h3>
                    <p className="text-left mx-4 ">- I skal altid have jeres portfolio opdateret med jeres seneste projekter.</p>
                    <p className="text-left mx-4 ">- I får mange flere henvendelser fra virksomheder det ikke indeholder halvfærdige produkter.</p>
                    <p className="text-left mx-4 ">- Jo flere færdige produkter I har i jeres portfolio jo bedre er det. </p><br/>
                    
                    <h3 className="text-center my-3">LINKER PROFIL</h3>
                    <p className="text-left mx-4 ">- Hold altid øje med jeres beskeder, og sørg for at svar en god tone.</p>
                    <p className="text-left mx-4 ">- Hold jeres Linker profil opdateret.</p>
                    <p className="text-left mx-4 ">- Tag et ordentligt billede. I kan eventuelt bruge en hvid væg som baggrund.</p>
                    <p className="text-left mx-4 ">- Sørg for at alle oplysningerne er korrekte. </p>
                    <p className="text-left mx-4 ">- Jeres beskrivelse skal være relateret til jeres uddannelse. </p>
  
                </div>
                <div className="col-12">
                <NavLink to="/"><img src={Logo} className="rounded d-block col-12 col-lg-8 offset-2 mt-5" alt="Logo" /></NavLink>
                </div>
            </div>
        </div>
    )
}

export default LinkerForVirksomheder