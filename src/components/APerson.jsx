import React from "react";
import { Link } from 'react-router-dom'


class APerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
    };
  }
  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((person) => this.setState({ person }));
  }
  render() {
    
      return (
          
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.state.person.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Eye Color {this.state.person.eye_color}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Hair Color {this.state.person.hair_color}</h6>
            <p>{this.state.person.age}</p>
            <Link to="./" className="btn btn-primary">Go Back</Link>
          </div>
        </div>
       
      ) 
  }
}

export default APerson;
