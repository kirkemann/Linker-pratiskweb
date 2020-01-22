import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './index';
import Kontakt_os from './components/KontaktOs';
import Home from './Home';
import Elev from './components/Elevsite/Elevsi';
import SelvElev from './components/selvelev/SelvEleve';
import Opret from './components/Opret';
import OpretVirksomhed from './components/OpretVirksomhed';
import LinkerForVirksomheder from './components/LinkerForVirksomheder';
import Firmae from './components/Firma/Firmae';
import ForAtOprette from './components/ForAtOprette';
import LinkerForSkole from './components/LinkerForSkole';
import SkolePaaLinker from './components/SkolePaaLinker';
import TipsOgRaad from './components/selvelev/TipsOgRaad';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/Forside" component={Home} />

        <Route path="/Elever" component={Home} />
              <Route path="/Elev" component={Elev} />
              <Route path="/SelvElev" component={SelvElev} />
              <Route path="/TipsOgRaad" component={TipsOgRaad} />
              <Route path="/Opret" component={Opret} />

        <Route path="/Virksomheder" component={Home} />
              <Route path="/Firmae" component={Firmae} />
              <Route path="/OpretVirksomhed" component={OpretVirksomhed} />
              <Route path="/LinkerForVirksomheder" component={LinkerForVirksomheder} />
              <Route path="/ForAtOprette" component={ForAtOprette} />
        
        <Route path="/Skoler" component={Home} />
              <Route path="/LinkerForSkole" component={LinkerForSkole} />
              <Route path="/SkolePaaLinker" component={SkolePaaLinker} />

        <Route path="/kontakt_os" component={Kontakt_os} />
       
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
