export const fetchData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                'https://api.themoviedb.org/3/movie/top_rated?api_key=fa9c917c44788475f0bc0b053b762463&language=es-ES&page=1'
            );
            const data = await response.json();
            dispatch({ type: 'SUCCESS_FETCH', data });
        } catch (err) {
            dispatch({ type: 'FETCH_FAILED', err });
        }
    };
};
