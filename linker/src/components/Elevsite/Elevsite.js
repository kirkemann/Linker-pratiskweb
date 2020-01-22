import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

const Elever = (props) => {

    console.log(props.evnerid);
    

    const [aktivite]= useState([
       
        {aktiv: 'women-2748752_640.jpg', evner: 1,  overskrift: 'Ea Easen ', producttext: 'Jeg er klar til at prøve krafter med web verden ', link: 'Læs mere her', id: 1},
        {aktiv: 'model-2911332_640.jpg', evner: 2, overskrift: 'Bo Bosen', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 2},
        {aktiv: 'pic1.png', evner: 3, overskrift:'ib ibsen', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 3},
        {aktiv: 'girl-919048_640.jpg', evner: 3, overskrift: 'lea larsen ', producttext: 'Jeg er klar til at prøve krafter med web verden ', link: 'Læs mere her', id: 4},
        {aktiv: 'business-man-1385050_640.jpg', evner: 2, overskrift: 'Bo Bosen', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 5},
        {aktiv: 'beard-1845166_640.jpg', evner: 3, overskrift:'ib ibsen', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 6},
        {aktiv: 'portrait-3204843_640.jpg', evner: 1, overskrift: 'lea larsen ', producttext: 'Jeg er klar til at prøve krafter med web verden ', link: 'Læs mere her', id: 7},
        {aktiv: 'human-3782189_640.jpg', evner: 3, overskrift: 'Bo Bosen', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 8},
        {aktiv: 'attractive-1869761_640.jpg', evner: 1, overskrift:'Lone ibsen', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 9},
        {aktiv: 'women-2748752_640.jpg', evner: 2,  overskrift: 'Ea Easen ', producttext: 'Jeg er klar til at prøve krafter med web verden ', link: 'Læs mere her', id: 10},
        {aktiv: 'model-2911332_640.jpg', evner: 1, overskrift: 'Bo Bosen', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 11},
        {aktiv: 'pic1.png', evner: 2, overskrift:'ib ibsen', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 12},
        {aktiv: 'girl-919048_640.jpg', evner: 3, overskrift: 'lea larsen ', producttext: 'Jeg er klar til at prøve krafter med web verden ', link: 'Læs mere her', id: 13},
        {aktiv: 'business-man-1385050_640.jpg', evner: 3, overskrift: 'Bo Bosen', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 14},
        {aktiv: 'beard-1845166_640.jpg', evner: 2, overskrift:'ib ibsen', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 15},
        {aktiv: 'portrait-3204843_640.jpg', evner: 1, overskrift: 'lea larsen ', producttext: 'Jeg er klar til at prøve krafter med web verden ', link: 'Læs mere her', id: 16},
        {aktiv: 'human-3782189_640.jpg', evner: 3, overskrift: 'Bo Bosen', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 17},
        {aktiv: 'attractive-1869761_640.jpg', evner: 2, overskrift:'Lone ibsen', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 18},
       
    ]);

    console.log(props.evnerid);
    

    let Evner = aktivite.filter(function (n) {

        if (props.evnerid !== "0") {
            return n.evner === parseInt(props.evnerid);
        }else{
            return n
        }



    }).map(function (n) {
        return(
            <div key={n.id} className="col-12 col-lg-4 col-md-6 mb-3">
                <img className="img-fluid w-100" src={"/img/" + n.aktiv} alt="Elev"/>
                <h5 className="card-title">{n.overskrift}</h5>
                <p className="card-text small"> {n.producttext} </p>
                <NavLink className="btn btn-outline-success knap" to="#"> {n.link} </NavLink>
            </div>
        )
    })

    return ( 
       

        <div className="card col-12">
            <div className="card-body">
                <div className="aktiviteter-list ">
                
                    <h2 className="my-3">Her er din nye elev</h2>
                        <div className="col-12">
                            <div className="row my-5">
                                {Evner}

                            </div>
                        </div>
                </div>
            </div>    
        </div>            
     );

}
 
export default Elever;