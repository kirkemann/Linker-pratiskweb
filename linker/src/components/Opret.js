import React from 'react';


const Opret = () => {

    return (
    <div className="container register">
        <div className="row ">
            <div className="col-md-3 register-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                <h4>Login på din profil her</h4>
                <input type="submit" className="btn btn-outline-success" name="" value="Login"/><br/>
            </div>
            <div className="col-md-9 register-right">
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 className="register-heading ">Ansøg som elev</h3>
                        <div className="row register-form">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control"  placeholder="Fornavn *"  />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Efternavn *" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password *" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control"  placeholder="Confirm Password *" />
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Din Email *" />
                                </div>
                                <div className="form-group">
                                    <input type="text"  name="txtEmpPhone" className="form-control" placeholder="Telefon nr *" />
                                </div>
                                <div className="form-group">
                                    <select className="form-control">
                                        <option className="hidden" >Vælg din uddannelse her</option>
                                        <option>3D integartor</option>
                                        <option>Webudvikler</option>
                                        <option>Multimedia integrator</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Uddannelse´s sted *" />
                                </div>
                                <input type="submit" className="btnRegister btn btn-outline-success"  value="Register"/>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <h3  className="register-heading mt-3">Ansøg som Virksomhed</h3>
                        <div className="row register-form">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Virksomhed´s navn *" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Navn og Efternavn *" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email *" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Telefon nr *" />
                                </div>


                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password *" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Confirm Password *" />
                                </div>
                                <div className="form-group">
                                    <select className="form-control">
                                        <option className="hidden"  >Branche</option>
                                        <option>Webudvikler</option>
                                        <option>Multimedia integrator</option>
                                        <option>3D Integrator</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="CVR *" />
                                </div>
                                <input type="submit" className="btnRegister"   value="Register"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    )

}

export default Opret;