import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class Navbar extends Component {
  state = {
    title: "",
  };

  //   componentDidMount = () => {
  //     axios;
  //   };

  handlerChange = (e) => {
    this.setState({
      title: e.target.value,
    });

    console.log(this.state.title);
  };

  handlerSubmit = () => {
    window.event.preventDefault();
    window.location = "/anime/" + this.state.title.split(" ").join("_");
  };

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
            <a class="navbar-brand">Navbar</a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/anime">
                  <a class="nav-link active" aria-current="page">
                    Anime
                  </a>
                </Link>
                <Link>
                  <a class="nav-link">Manga</a>
                </Link>
              </div>
            </div>
            <form class="d-flex" onSubmit={this.handlerSubmit}>
              <input
                class="form-control mr-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.handlerChange}
              ></input>
              <button class="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
