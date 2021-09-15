import React, { useEffect, useState } from 'react'
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube'
// import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData()
  }, [fetchUrl])

  console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }
  
  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl('')
    } else {
      setTrailerUrl('5VYb3B1ETlk')
    }
    // if (trailerUrl) {
    //   setTrailerUrl('')
    // } else {
    //   movieTrailer(movie?.name || '')
    //   .then(url => {
    //     const urlParams = new URLSearchParams(new URL(url).search);
    //     setTrailerUrl(urlParams.get('v'));
    //   })
    //   .catch(error => console.log(error));
    // }
  }

  return (
    <div className="row">
      <h2 style={{paddingLeft: '20px'}}>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => {
          const {id, name, poster_path, backdrop_path} = movie
          return <img key={id}
            onClick={handleClick}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${base_url}${isLargeRow ? poster_path : backdrop_path}`} alt={name} />
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
