import { useTranslation } from 'react-i18next';

const getLanguage = () => {
    const [t, i18n] = useTranslation();
    console.log(t('Language'));
    return t('Language');
};

export const fetchMovieData = ({ page, language, dispatch }) => {
    fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=fa9c917c44788475f0bc0b053b762463&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page.toString()}&with_watch_monetization_types=flatrate`
    )
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: 'SUCCESS_FETCHMOVIEDATA', data });
        })
        .catch((err) => {
            dispatch({ type: 'FETCH_FAILED', err });
        });
};

export const fetchTopMovies = ({ dispatch, language }) => {
    fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=fa9c917c44788475f0bc0b053b762463&language=${language}&page=1`
    )
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: 'SUCCESS_TOPRATEDMOVIES', data });
        })
        .catch((err) => {
            dispatch({ type: 'FETCH_FAILED', err });
        });
    fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=fa9c917c44788475f0bc0b053b762463&language=${language}&page=1`
    )
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: 'SUCCESS_TOPRATEDSERIES', data });
        })
        .catch((err) => {
            dispatch({ type: 'FETCH_FAILED', err });
        });
};
export const fetchTopSeries = ({ dispatch, language }) => {
    fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=fa9c917c44788475f0bc0b053b762463&language=${language}&page=1`
    )
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: 'SUCCESS_TOPRATEDSERIES', data });
        })
        .catch((err) => {
            dispatch({ type: 'FETCH_FAILED', err });
        });
};
export const fetchDetails = ({ dispatch, Id, language, type }) => {
    type === 'movie'
        ? fetch(
              `https://api.themoviedb.org/3/movie/${Id}?api_key=fa9c917c44788475f0bc0b053b762463&language=${language}`
          )
              .then((response) => response.json())
              .then((data) => {
                  dispatch({ type: 'SUCCESS_SELECTEDMOVIE', data });
              })
              .catch((err) => {
                  dispatch({ type: 'FETCH_FAILED', err });
              })
        : fetch(
              `https://api.themoviedb.org/3/tv/${Id}?api_key=fa9c917c44788475f0bc0b053b762463&language=${language}`
          )
              .then((response) => response.json())
              .then((data) => {
                  dispatch({ type: 'SUCCESS_SELECTEDMOVIE', data });
              })
              .catch((err) => {
                  dispatch({ type: 'FETCH_FAILED', err });
              });
};
export const resetRedux = (dispatch) => {
    dispatch({ type: 'RESET_STATE' });
};
