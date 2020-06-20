import React from "react";
import { Link } from 'react-router-dom';


export default class Vehicles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicle: {},
    };
  }
  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/vehicles/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((vehicle) => this.setState({ vehicle }));
  }

  render() {
   
      return (        
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{this.state.vehicle.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {this.state.vehicle.vehicle_class}
                </h6>
      <p className="card-text">{this.state.vehicle.description}</p>
                <Link to="./" className="btn btn-primary">Go Back</Link>
              </div>
            </div>   
      )
 
  }
}