import React, { useState } from 'react';
import {Link} from 'react-router-dom';



const Firmaer  = (props) => {

    console.log(props.evnerid);

    const [aktivite]= useState([
       
       
        {aktiv: 'analytics-3088958_640.jpg',evner: 1, overskrift: 'Web2land ', producttext: 'Jeg er klar til at prøve krafter med web verden ', link: 'Læs mere her', id: 1},
        {aktiv: 'artificial-intelligence-3382507_640.jpg',evner: 2, overskrift: 'Web for all', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 2},
        {aktiv: 'matrix-2953869_640.jpg',evner: 3, overskrift:'Web2Web', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 3},
        {aktiv: 'analytics-3088958_640.jpg',evner: 1, overskrift: 'Web2land ', producttext: 'Jeg er klar til at prøve krafter med web verden ', link: 'Læs mere her', id: 4},
        {aktiv: 'artificial-intelligence-3382507_640.jpg',evner: 2, overskrift: 'Web for all', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 5},
        {aktiv: 'matrix-2953869_640.jpg',evner: 3, overskrift:'Web2Web', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 6},
        {aktiv: 'analytics-3088958_640.jpg',evner: 1, overskrift: 'Web2land ', producttext: 'Jeg er klar til at prøve krafter med web verden ', link: 'Læs mere her', id: 7},
        {aktiv: 'artificial-intelligence-3382507_640.jpg',evner: 2, overskrift: 'Web for all', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id:8},
        {aktiv: 'matrix-2953869_640.jpg',evner: 3, overskrift:'Web2Web', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 9},
        {aktiv: 'analytics-3088958_640.jpg',evner: 1, overskrift: 'Web2land ', producttext: 'Jeg er klar til at prøve krafter med web verden ', link: 'Læs mere her', id: 10},
        {aktiv: 'artificial-intelligence-3382507_640.jpg',evner: 2, overskrift: 'Web for all', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 11},
        {aktiv: 'matrix-2953869_640.jpg',evner: 3, overskrift:'Web2Web', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 12},
        {aktiv: 'analytics-3088958_640.jpg',evner: 1, overskrift: 'Web2land ', producttext: 'Jeg er klar til at prøve krafter med web verden ', link: 'Læs mere her', id: 13},
        {aktiv: 'artificial-intelligence-3382507_640.jpg',evner: 2, overskrift: 'Web for all', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 14},
        {aktiv: 'matrix-2953869_640.jpg',evner: 3, overskrift:'Web2Web', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 15},
        {aktiv: 'analytics-3088958_640.jpg',evner: 1, overskrift: 'Web2land ', producttext: 'Jeg er klar til at prøve krafter med web verden ', link: 'Læs mere her', id: 16},
        {aktiv: 'artificial-intelligence-3382507_640.jpg',evner: 2, overskrift: 'Web for all', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 17},
        {aktiv: 'matrix-2953869_640.jpg',evner: 3, overskrift:'Web2Web', producttext: 'Jeg er klar til at prøve krafter med web verden', link: 'Læs mere her', id: 18},

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
            <div key={n.id} className="col-12 col-lg-4 col-md-6 my-3">
                <img className="img-fluid w-100" src={"/img/" + n.aktiv} alt="Elev"/>
                <h5 className="card-title">{n.overskrift}</h5>
                <p className="card-text small"> {n.producttext} </p>
                <Link className="btn btn-outline-secondary" to="#"> {n.link} </Link>
            </div>
        )
    })

    return ( 
       

        <div className="card col-12">
            <div className="card-body">
                <div className="aktiviteter-list ">
                
                    <h2 className="my-3">Her er din nye elevplader</h2>
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
 
export default Firmaer;