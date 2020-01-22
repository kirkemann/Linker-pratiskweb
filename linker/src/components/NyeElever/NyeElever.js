import React, { useState } from 'react';
import NyeElev from './NyeElev';

const NyeElever = () => {

    const [aktivite]= useState([
       
        {aktiv: 'women-2748752_640.jpg', overskrift: 'Ea Easen ', producttext: 'Jeg er klar til at prøve krafter med web verden ', link: 'Læs mere her', id: 1},
        {aktiv: 'man-1209494_640.jpg', overskrift: 'Bo Bosen', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 2},
        {aktiv: 'girl-919048_640.jpg', overskrift:'Liv Livsen', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 3},
        // {aktiv: 'employee-1169923_640.jpg', overskrift:'Bo Bosen', producttext: 'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.', link: 'Køb produkter her', id: 4},
        {aktiv: 'business-man-1385050_640.jpg', overskrift:'Ib Ibsen', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 5},
       
    ]);

    return ( 
       
        <div className="card col-12">
            <div className="card-body">
                <div className="aktiviteter-list ">
                
                    <h2 className="mb-3">Nye elever</h2>
                        <div className="col-12">
                            <div className="row">
                                {aktivite.map(n => {
                                return ( 
                                <NyeElev n={n} key={n.id} />
                                );
                                })}
                            </div>
                        </div>
                </div>
            </div>    
        </div>            
     );
}
 
export default NyeElever;