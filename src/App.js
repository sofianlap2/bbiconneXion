import './App.css';
import React, {useState} from 'react'

import {BrowserRouter as Router , Route, Switch} from "react-router-dom";
import Body from "./components/Body";
import Gallery from "./components/sections/gallery/Gallery";
import Fashion from "./components/sections/fashion/Fashion"

function App() {
  const [menuBtn, setMenuBtn] = useState(false)
  return (
    <Router>
      
      <div className={menuBtn? "Appopen" : "App"}>
        </div>
        <div className="section-routes">
      <Switch>
        <Route path="/" exact render={(props) => (<Body menuBtn={menuBtn} setMenuBtn={setMenuBtn} {...props}/>)} ></Route>
        <Route path="/gallery" exact render={(props) => (<Gallery menuBtn={menuBtn} setMenuBtn={setMenuBtn} {...props}/>)} ></Route>
        <Route path="/fashiontv" exact render={(props) => (<Fashion menuBtn={menuBtn} setMenuBtn={setMenuBtn} {...props}/>)} ></Route>

      </Switch>
      </div>
      
    </Router>
  );
}

export default App;
