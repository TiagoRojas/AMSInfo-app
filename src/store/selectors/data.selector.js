export const getEverything = (state) => state.dataReducer;
export const getTopRatedMovies = (state) => state.dataReducer.topRatedMovies;
export const getSelectedMovie = (state) => state.dataReducer.selectedMovie;
export const getMovieData = (state) => state.dataReducer.movieData;
export const getTopRatedSeries = (state) => state.dataReducer.topRatedSeries;
export const getIsDataFetched = (state) => state.dataReducer.dataFetched;
