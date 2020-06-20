import React from "react";
import { Link } from 'react-router-dom'



class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((people) => this.setState({ people }));
  }
  render() {
    return this.state.people.map((person) => {
      return (
          <div key={person.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{person.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{person.gender}</h6>
            <p>{person.age}</p>
            <Link to={`/people/${person.id}`} className="btn btn-primary">See More</Link>
          </div>
        </div>
        </div>
      );
    });
  }
}

export default People;
