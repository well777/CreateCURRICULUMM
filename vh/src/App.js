import React, { Component } from 'react';
import './App';
import Home from'./pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
class App extends Component {
   render() {
     return (
         <div className="App">
            
            <Home/>
            <About/>
            <Contact/>
         </div>
     );
   }
}
export default App;