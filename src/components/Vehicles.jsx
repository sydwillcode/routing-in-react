import React from "react";
import { Link } from 'react-router-dom';


export default class Vehicles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/vehicles")
      .then((res) => res.json())
      .then((vehicles) => this.setState({ vehicles }));
  }

  render() {
    return this.state.vehicles.map((vehicle) => {
      return (

          <div key={vehicle.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {vehicle.vehicle_class}
                </h6>
                <Link to={`/vehicles/${vehicle.id}`} className="btn btn-primary" >See More</Link>
              </div>
            </div>
          </div>
    
      );
    });
  }
}
