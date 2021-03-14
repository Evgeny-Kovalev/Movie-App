import React from 'react'
import defaultImg from '../assets/poster-default.png'
const MovieItem = ({title, year, imgSrc}) => {
    return (
        <li className="movies__item movie">
            <div className="movie__title">{title}</div>
            <img src={imgSrc === "N/A" ? defaultImg : imgSrc} alt="" className="movie__img"/>
            <div className="movie__year">({year})</div>
        </li>
    )
}

export default MovieItem
