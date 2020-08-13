import React, { Component } from "react";
import Navbar from "../components/Navbar";
import AnimeBody from "../components/AnimeBody";
import AnimeResult from "../components/AnimeResult";
import { BrowserRouter, Route } from "react-router-dom";

export class Anime extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Route path="/anime" exact component={AnimeBody} />
          <Route path="/anime/:title" exact component={AnimeResult} />
        </BrowserRouter>
      </div>
    );
  }
}

export default Anime;
