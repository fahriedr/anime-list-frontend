import React from "react";

const NewRelease = ({ anime }) => {
  // console.log(anime);
  const MAX_LENGTH = 25;
  return (
    <div class="col">
      <div class="card">
        <a href="#">
          <img src={anime.image_url} class="card-img-top" alt="..."></img>
          <div className="card-img-overlay"></div>
        </a>
      </div>
      <p>{anime.title.substring(0, MAX_LENGTH)}...</p>
    </div>
  );
};

const TopRated = ({ anime }) => {
  // console.log(anime);
  const MAX_LENGTH = 25;
  return (
    <div class="col">
      <div class="card">
        <a href="#">
          <img src={anime.image_url} class="card-img-top" alt="..."></img>
          <div className="card-img-overlay">
            <h6>
              <span class="badge bg-primary">
                <i class="fas fa-star">{anime.score}</i>
              </span>
            </h6>
          </div>
        </a>
      </div>
      <p>{anime.title.substring(0, MAX_LENGTH)}...</p>
    </div>
  );
};

const FindAnime = ({ anime }) => {
  // console.log(anime);
  const MAX_LENGTH = 25;
  return (
    <div class="col">
      <div class="card">
        <a href="#">
          <img src={anime.image_url} class="card-img-top" alt="..."></img>
          <div className="card-img-overlay">
            <h6>
              <span class="badge bg-primary">
                <i class="fas fa-star">{anime.score}</i>
              </span>
            </h6>
          </div>
        </a>
      </div>
      <p>{anime.title.substring(0, MAX_LENGTH)}...</p>
    </div>
  );
};

const Loading = () => {
  // console.log(anime);
  const MAX_LENGTH = 25;
  return (
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export { NewRelease, TopRated, FindAnime, Loading };
