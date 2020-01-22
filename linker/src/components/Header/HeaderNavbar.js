import React from 'react';
import {NavLink} from 'react-router-dom';

const HeaderNavbar = () => {

  
    return ( 
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light-gray">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Forside</NavLink>
              </li>
            <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Elever
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <NavLink className="dropdown-item" to="Elev">Søg Skole Elev</NavLink>
                  <NavLink className="dropdown-item" to="SelvElev">Søg Selvlært Elev</NavLink>
                  <NavLink className="dropdown-item" to="Opret">Opret dig </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Virksomheder
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" to="Firmae">Søg Virksomhed</NavLink>
                  <NavLink className="dropdown-item" to="LinkerForVirksomheder">Hvad er Linker</NavLink>
                  <NavLink className="dropdown-item" to="#">?????</NavLink>
                  <NavLink className="dropdown-item" to="OpretVirksomhed">Opret Virksomhed</NavLink>
                </div>
              </li>

              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Skoler
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <NavLink className="dropdown-item" to="#">?????</NavLink>
                  <NavLink className="dropdown-item" to="#">?????</NavLink>
                  <NavLink className="dropdown-item" to="#">?????r</NavLink>

                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Kontakt_os">Kontakt os</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
     );
}
 
export default HeaderNavbar;