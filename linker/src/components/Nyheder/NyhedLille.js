import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

const NyhederLille = () => {

    const [nyheder]= useState([
       
        {class: 'col-12 w-100 mt-4 mb-4 text-center', alt: 'Verdensballetten på Møllerup Gods', nyhed: 'cover-nyhed_verdensballet.jpg', overskrift: 'Verdensballetten på Møllerup Gods lørdag d. 12. juli 2019 blev en skøn aften', producttext: 'Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020 ', link: 'Læs mere her', id: 1},
        {class: 'col-12 col-lg-4 col-md-6', alt: 'Køb vores hampeprodukter', nyhed: 'cover_nyhed_hampeprodukter.jpg', overskrift: 'Køb vores hampeprodukter', producttext: 'På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som kan købe her på webshoppen.', link: 'Køb online her', id: 2},
        {class: 'col-12 col-lg-4 col-md-6', alt: 'Verdensballetten 2019', nyhed: 'cover_nyhed_verdensballet_lille.jpg', overskrift: 'Verdensballetten 2019', producttext: 'Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods. ', link: 'Se mere her', id: 3},
        {class: 'col-12 col-lg-4 col-md-6', alt: 'Historien om Møllerup Gods', nyhed: 'cover_nyhed_historie.jpg', overskrift:'Historien om Møllerup Gods ', producttext: 'Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven', link: 'Læs historien her', id: 4}
       
    ]);

    return ( 

                    <div className="row">
                    {nyheder.map(n => {
                        return ( 
                            <div key={n.id} className={n.class}>
                                <img className="img-fluid" src={"/img/" + n.nyhed} alt={n.alt} />
                                <h4>{n.overskrift}</h4>
                                <p> {n.producttext} </p>
                                <NavLink className="text-danger" to="#"> {n.link} </NavLink>
                            </div>
                         );
                    })}
                    </div>

                    
     );
}
 
export default NyhederLille;