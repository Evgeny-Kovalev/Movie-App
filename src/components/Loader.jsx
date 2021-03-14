import React from 'react'
import preloaderSvg from './../assets/tail-spin.svg'

const Loader = () => {
    return (
        <div className="loader">
            <img className="loader__img" src={preloaderSvg} alt=""/>
        </div>
    )
}

export default Loader
