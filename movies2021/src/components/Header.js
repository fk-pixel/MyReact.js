import React, {useContext} from 'react'
import { useState } from 'react/cjs/react.development'
import { MovieContext } from '../MovieContext'

const Header = (props) => {

    const [movies, setMovies] = useContext(MovieContext)
    //const [search, setSearch] = useState('')

    return (
        <>
        <nav className="header">
            <div className="container-fluid">
                <p className="header-brand">Movie Search App</p>
                <form className="d-flex input-group-lg">
                <input className="form-control me-2" 
                    type="search" 
                    placeholder="Find a movie" 
                    aria-label="Search"
                    value={props.value}
                    onChange={(event) => props.setSearch(event.target.value)}></input>
                </form>
                <span>Now Listed Movies: {props.length}</span>
            </div>
        </nav>
      </>
    )
}

export default Header
