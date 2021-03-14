export const initialState = {
    loading: false,
    movies: [],
    errorMessage: '',
}

const Reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_MOVIE_FETCH":
            return {
                ...state,
                loading: true,
                errorMessage: false,
            }
        case "SEARCH_MOVIE_ERROR":
            return {
                ...state,
                loading: false,
                errorMessage: action.errorMessage,
            }
        case "SEARCH_MOVIE_SUCCESS":
            return {
                ...state,
                loading: false,
                movies: action.movies
            }
        
        default:
            return state
    }
}
export default Reducer