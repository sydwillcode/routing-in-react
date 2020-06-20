import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Films from './components/Films';
import Vehicles from './components/Vehicles';
import Home from './components/Home';
import AFilm from './components/AFilm';
import AVehicle from './components/AVehicle';
import People from './components/People';
import APerson from './components/APerson'


export default function App() {


  return (
    <Router>
      <>
        <div className="d-flex justify-content-center my-2">
          <Link to="/" > <button className="btn btn-primary mx-3">Go Home</button></Link>
          <Link to="/films" ><button className="btn btn-primary mx-3">View Films</button></Link>
          <Link to="/vehicles" ><button className="btn btn-primary mx-3">View Vehicles</button></Link>
          <Link to="/people" ><button className="btn btn-primary mx-3">View People</button></Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/films" component={Films} />
          <Route path="/films/:id" component={AFilm} />
          <Route exact path="/vehicles" component={Vehicles} />
          <Route path="/vehicles/:id" component={AVehicle} />
          <Route exact path="/people" component={People} />
          <Route path="/people/:id" component={APerson} />
        </Switch>
      </>
    </Router>
  )
}