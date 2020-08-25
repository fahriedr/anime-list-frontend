import React, { Component } from "react";
import { FindAnime, Loading } from "./CardComponent";
import axios from "axios";

class AnimeResults extends Component {
  state = {
    anime: [],
    loading: false,
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const title = this.props.match.params.title;
    const anime = await axios.get("http://localhost:5000/anime/" + title);

    this.setState({
      loading: false,
      anime: anime.data,
    });
    console.log(this.state.anime);
  };

  render() {
    const findAnime = this.state.anime.map((anime) => {
      return <FindAnime anime={anime} key={anime.mal_id} />;
    });

    let { loading } = this.state;

    // if (loading) {
    //   return (
    //     <div class="spinner-border text-primary" role="status">
    //       <span class="sr-only">Loading...</span>
    //     </div>
    //   );
    // }
    let title = this.props.match.params.title.split("_").join(" ");
    return (
      <div className="container mt-4">
        <div class="card mt-4">
          <div class="card-header">Results for {title}</div>
          <div class="card-body row row-cols-1 row-cols-md-5 g-4">
            {loading ? <Loading /> : findAnime}
          </div>
        </div>
      </div>
    );
  }
}

export default AnimeResults;
