import React, { Component } from "react";
import { NewRelease, TopRated } from "./CardComponent";
import axios from "axios";

class AnimeBody extends Component {
  state = {
    newAnime: [],
    topAnime: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    await axios.get("http://localhost:5000/anime/").then((response) => {
      this.setState({
        loading: false,
        newAnime: response.data.newAnime,
        topAnime: response.data.topAnime,
      });
    });

    // console.log(this.state.newAnime);
  }

  render() {
    const newRelease = this.state.newAnime.map((anime) => {
      return <NewRelease anime={anime} key={anime.mal_id} />;
    });

    const topRated = this.state.topAnime.map((anime) => {
      return <TopRated anime={anime} key={anime.mal_id} />;
    });

    const { loading } = this.state;

    if (loading) {
      return (
        <div class="d-flex justify-content-center text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <div className="container mt-4">
        <div class="card">
          <div class="card-header">
            <div class="row justify-content-start">
              <div class="col-6">Anime Summer 2020</div>
              <div class="col-6 text-right">One of two columns</div>
            </div>
          </div>
          <div class="card-body row row-cols-1 row-cols-md-5 g-4">
            {newRelease}
          </div>
        </div>
        <div class="card mt-4">
          <div class="card-header">Top Rated Anime</div>
          <div class="card-body row row-cols-1 row-cols-md-5 g-4">
            {topRated}
          </div>
        </div>
      </div>
    );
  }
}

export default AnimeBody;
