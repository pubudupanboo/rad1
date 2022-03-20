//import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Slot from './Slot';
import NewStructure  from './NewStructure';
import SlotMain from './SlotMain';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SlotDisableRule from './SlotDisableRule';

function App() {

const title = "Wllcome to Parking System";
const likes = 50;
const link = "www.google.com";

  return (
    <Router>
    <div className="App">
       <Navbar/>
       
      
     <div className="content">
        {/* <Home/>
       <h1>{title}</h1>
      <p>Likes {likes} times</p>
      <a href={link}> Google </a>  */}
      
      <Switch>
        <Route exact path="/Home">
        <Home/>
        </Route>
        <Route path="/NewStructure">
        <NewStructure/>
        </Route>
        <Route path="/Login">
        <Login/>
        </Route>
        <Route path="/Slot">
        <Slot/>
        </Route>
        <Route path="/SlotMain">
        <SlotMain/>
        </Route>
        <Route path="/SlotDisableRule">
        <SlotDisableRule/>
        </Route>
      </Switch>
      

     </div>
    </div>
    </Router>
  );
}

export default App;
