const initialState = {
    movieData: [],
    topRatedMovies: [],
    selectedMovie: [],
    topRatedSeries: [],
    dataFetched: false,
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUCCESS_TOPRATEDMOVIES':
            return {
                ...state,
                topRatedMovies: action.data.results,
                dataFetched: true,
            };
        case 'SUCCESS_SELECTEDMOVIE':
            return {
                ...state,
                selectedMovie: action.data,
            };
        case 'SUCCESS_FETCHMOVIEDATA':
            return {
                ...state,
                movieData: state.movieData.concat(action.data.results),
            };
        case 'SUCCESS_TOPRATEDSERIES':
            return {
                ...state,
                topRatedSeries: action.data.results,
            };
        case 'RESET_STATE':
            return initialState;
        default:
            return state;
    }
};

export default dataReducer;
