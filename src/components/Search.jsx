import React, { useState } from 'react'

const Search = ({search}) => {
	const [searchValue, setSearchValue] = useState('')

	const onSearchInputChange = (e) => {
		setSearchValue(e.target.value)
	}

	const onSearchBtnClick = () => {
		searchValue && search(searchValue)
	}

	const onEnterPress = (e) => {
		e.key === "Enter" && onSearchBtnClick()
	}

    return (
        <div className="search">
			<div className="search__inner">
				<input type="text" className="search__input" onChange={onSearchInputChange} value={searchValue} onKeyDown={onEnterPress} placeholder="Some movie..." />
				<button className="search__btn btn" onClick={onSearchBtnClick}>Search</button>
			</div>
		</div>
    )
}

export default Search
