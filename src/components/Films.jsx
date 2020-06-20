import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => this.setState({ films }));
  }

  render() {
    return (this.state.films.map((film) => {
      return (
          <div key={film.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{film.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{film.director}</h6>
            <Link to={`/films/${film.id}`} className="btn btn-primary">See more</Link>
          </div>
        </div>
          </div>
      )
    })
    )}
}

export default Films;
