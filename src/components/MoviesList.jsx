import React from 'react'
import MovieItem from './MovieItem'

const MoviesList = ({movies}) => {
    return (
        <ul className="movies__list">
            {movies.map(item => 
                <MovieItem 
                    title={item.Title} 
                    year={item.Year}
                    imgSrc={item.Poster}
                    key={item.imdbID}
                />
            )}
        </ul>
    )
}

export default MoviesList
