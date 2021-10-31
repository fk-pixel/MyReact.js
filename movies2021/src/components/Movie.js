import React from 'react'
//import Moment from 'react-moment'; 
//import { StarFill } from 'react-bootstrap-icons';

function Movie(props) {
    
    
    return (
        <div key={props.id}>
           {/* <h1>{props.name}</h1>
           <p>{props.price}</p> */}
           <div className='image-container d-flex justify-content-center'>
                <a href={`https://www.themoviedb.org/movie/${props.id}`} alt="link-to-site">
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.path}`} alt='movie'/>
                </a>
            </div>

           <div className="movie-info">
                <center><p className="movie-title font-weight-bold">{props.name}</p></center>
                <p><span className="movie-date font-weight-bold">Release Date:</span>{props.release_date}</p>
                <p><span className="movie-rating font-weight-bold">Rating:</span> {props.vote} <span className="movie-rating font-weight-bold"></span></p>
                <p><span className="movie-overview font-weight-bold">Overview:</span> {props.overview}</p>
            </div>

        </div>
    )
}

export default Movie
