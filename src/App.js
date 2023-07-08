import React from 'react';
import ReactDOM from 'react-dom/client';

import Info from './Info';
import About from './About';
import Intrests from './Intrests';
import Footer from './Footer';

function App(){
  return(
    <div id="layout">
      <Info/>
      <About/>
      <Intrests/>
      <Footer/>
    </div>
  )
}

export default App;