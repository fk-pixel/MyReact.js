import React, {useContext} from 'react'
import Movie from './Movie';
import { MovieContext } from '../MovieContext';

const MovieList = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div>
            
            {movies && movies.map(movie => (
                <Movie 
                    name={movie.title} 
                    overview={movie.overview} 
                    key={movie.id}
                    vote={movie.vote_average}
                    popularity={movie.popularity}
                    release_date={movie.release_date}
                    path={movie.poster_path}
                />
            ))}
        </div>
    )
}

export default MovieList
