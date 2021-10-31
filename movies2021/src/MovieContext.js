import React, {useState, createContext, useEffect} from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    
    /* const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23453
        },
        {
            name: 'Game of Thrones',
            price: '$12',
            id: 23453
        },
        {
            name: 'Inception',
            price: '$11.5',
            id: 23453
        }
    ]);  */
    const [movies,setMovies] = useState([]);
    //const api_key= "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"   
    const getMovieRequest = async () => { 
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&page=1`;

        const response = await fetch(url); 
        const responseJson = await response.json(); 
        setMovies(responseJson.results);
    };

    useEffect(() => {
        getMovieRequest();
    }, []); 

    
    return (
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieProvider
