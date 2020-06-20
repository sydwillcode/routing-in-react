import React, { Component } from "react";
import { Link } from 'react-router-dom';


class AFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
    };
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((film) => this.setState({ film }))
      .catch(err =>console.log(err))
  }

  render() {
    
      return (
          
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.state.film.title}</h5>
      <p className="card-text">{this.state.film.description}</p>
            <Link to="./" className="btn btn-primary">Go Back </Link>
          </div>
        </div>
         
      )
    }
    
}

export default AFilm;
