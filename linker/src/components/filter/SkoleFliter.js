import React, {useState} from 'react';
import Elevsite from '../Elevsite/Elevsite'


function Filter() {

    const [evnerid, setEvnerid] = useState("0");

    function evnerChanges(e) {


        setEvnerid(e.target.value);

        if (e.target.value === "1") {
            document.querySelector("#frontend").style.display = "flex";
            document.querySelector("#backend").style.display = "none";
            document.querySelector("#anim").style.display = "none";
        }
        else if(e.target.value === "2") {
            document.querySelector("#backend").style.display = "flex";
            document.querySelector("#frontend").style.display = "none";
            document.querySelector("#anim").style.display = "none";
        }
        else if(e.target.value === "3") {
            document.querySelector("#backend").style.display = "none";
            document.querySelector("#frontend").style.display = "none";
            document.querySelector("#anim").style.display = "flex";
        }
        else{
            document.querySelector("#frontend").style.display = "none";
            document.querySelector("#backend").style.display = "none";
            document.querySelector("#anim").style.display = "none";
        }
        

    }

    return (

        <div className="container">
            <div className="row">
                <div className="form-group col-3">
                    <select className="form-control" onChange={evnerChanges}>
                        <option  value="0" >Vælg</option>
                        <option  value="1" >Frontend</option>
                        <option  value="2" >Backend</option>
                        <option  value="3" >3D</option>
                    </select>
                </div>
            </div>
             <div id="frontend" className="row display">
                <div className="form-group offset-1 col-2"> 
                    <div className="row">                  
                        <input className="mt-2 mr-2" type="checkbox" aria-label="Checkbox" />
                        <p className="text-black">HTML</p> 
                    </div>    
                </div>
                <div className="form-group col-2"> 
                    <div className="row">                  
                        <input className="mt-2 mr-2" type="checkbox" aria-label="Checkbox" />
                        <p className="text-black">Css</p> 
                    </div>    
                </div>
                <div className="form-group col-2"> 
                    <div className="row">                  
                        <input className="mt-2 mr-2" type="checkbox" aria-label="Checkbox" />
                        <p className="text-black">React</p> 
                    </div>    
                </div>
                <div className="form-group col-2"> 
                    <div className="row">                  
                        <input className="mt-2 mr-2" type="checkbox" aria-label="Checkbox" />
                        <p className="text-black">Node.js</p> 
                    </div>    
                </div>
            </div>
             <div id="backend" className="row display">
                <div className="form-group offset-1 col-2"> 
                    <div className="row">                  
                        <input className="mt-2 mr-2" type="checkbox" aria-label="Checkbox" />
                        <p className="text-black">Python</p> 
                    </div>    
                </div>
                <div className="form-group col-2"> 
                    <div className="row">                  
                        <input className="mt-2 mr-2" type="checkbox" aria-label="Checkbox" />
                        <p className="text-black">MongoDB</p> 
                    </div>    
                </div>
                <div className="form-group col-2"> 
                    <div className="row">                  
                        <input className="mt-2 mr-2" type="checkbox" aria-label="Checkbox" />
                        <p className="text-black">Javscript</p> 
                    </div>    
                </div>
                <div className="form-group col-2"> 
                    <div className="row">                  
                        <input className="mt-2 mr-2" type="checkbox" aria-label="Checkbox" />
                        <p className="text-black">Mysql</p> 
                    </div>    
                </div>
            </div>
             <div id="anim" className="row display">
                <div className="form-group offset-1 col-2"> 
                    <div className="row">                  
                        <input className="mt-2 mr-2" type="checkbox" aria-label="Checkbox" />
                        <p className="text-black">3D</p> 
                    </div>    
                </div>
                <div className="form-group col-2"> 
                    <div className="row">                  
                        <input className="mt-2 mr-2" type="checkbox" aria-label="Checkbox" />
                        <p className="text-black">3D</p> 
                    </div>    
                </div>
                <div className="form-group col-2"> 
                    <div className="row">                  
                        <input className="mt-2 mr-2" type="checkbox" aria-label="Checkbox" />
                        <p className="text-black">3D</p> 
                    </div>    
                </div>
                <div className="form-group col-2"> 
                    <div className="row">                  
                        <input className="mt-2 mr-2" type="checkbox" aria-label="Checkbox" />
                        <p className="text-black">3D</p> 
                    </div>    
                </div>
            </div>
            <Elevsite evnerid={evnerid} />
 
        </div>
    )
}

export default Filter

