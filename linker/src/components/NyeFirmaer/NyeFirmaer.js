import React, { useState } from 'react';

import NyeFirma from './NyeFirma';

const NyeFirmaer = () => {

    const [aktivite]= useState([
       
        {aktiv: 'analytics-3088958_640.jpg', overskrift: 'Web2land ', producttext: 'Jeg er klar til at prøve krafter med web verden ', link: 'Læs mere her', id: 1},
        {aktiv: 'artificial-intelligence-3382507_640.jpg', overskrift: 'Web for all', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 2},
        {aktiv: 'matrix-2953869_640.jpg', overskrift:'Web2Web', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 3},
        {aktiv: 'matrix-2953869_640.jpg', overskrift:'Web4Me', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 4},
       
    ]);

    return ( 
        <div className="card col-12">
            <div className="card-body">
                
                <div className="aktiviteter-list  ">
                <h2 className="mb-3">Nye Firmaer</h2>
                    <div className="col-12">
                        <div className="row">
                            {aktivite.map(n => {
                                return ( 
                                <NyeFirma n={n} key={n.id} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>    
        </div>                
     );
}
 
export default NyeFirmaer;