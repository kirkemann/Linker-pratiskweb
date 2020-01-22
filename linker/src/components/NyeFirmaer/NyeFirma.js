import React from 'react'
import {Link} from 'react-router-dom';

const NyeFirma = (props) => {
    return ( 
        <div key={props.n.id} className="col-12 col-lg-6 col-md-6 my-3">
            <img className="img-fluid w-100" src={"/img/" + props.n.aktiv} alt="aktivite"/>
            <h5 className="card-title">{props.n.overskrift}</h5>
            <p className="card-text small"> {props.n.producttext} </p>
            <Link className="btn btn-outline-secondary" to="#"> {props.n.link} </Link>
        </div>

     );
}
 
export default NyeFirma;