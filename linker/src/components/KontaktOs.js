import React from 'react';
import Mail from './img/businessman-2956974_640.jpg'
import {NavLink} from 'react-router-dom';


const KontaktOs = () => {
    return ( 
        <div className="container">
            <h1 className="text-center my-4">Kontakt Os</h1>
            <div className="row">
                
                
                <form className="col-6">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlfor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlfor="inputText4">Fulde Navn</label>
                        <input type="text" className="form-control" id="inputText4" placeholder="Fornavn Og Efternavn" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlfor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="adresse" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlfor="inputCity">By</label>
                        <input type="text" className="form-control" id="inputCity" placeholder="By" />
                        </div>
                        
                        <div className="form-group col-md-6">
                        <label htmlfor="inputZip">PostNummer</label>
                        <input type="text" className="form-control" id="inputZip" placeholder="Post nummer" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlfor="exampleFormControlTextarea1">Besked: </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-outline-secondary mb-5">Send Besked</button>
                </form>          

                <div className="col-6 mt-5">
                <NavLink to="/"><img src={Mail} className="rounded d-block col-12" alt="Logo" /></NavLink>
                </div>
            </div>
        </div>

     );
}
 
export default KontaktOs;