import React from 'react'
import {NavLink} from 'react-router-dom';

const NyeFirma = (props) => {
    return ( 
        <div key={props.n.id} className="col-12 col-lg-4 col-md-6 mb-3">
            <img className="img-fluid w-100" src={"/img/" + props.n.aktiv} alt="aktivite"/>
            <h5 className="card-title">{props.n.overskrift}</h5>
            <p className="card-text small"> {props.n.producttext} </p>
            <NavLink className="btn btn-outline-success knap" to="#"> {props.n.link} </NavLink>
        </div>

     );
}
 
export default NyeFirma;