function fetchPosts() {
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    return fetch(URL, { method: 'GET' }).then((response) =>
        Promise.all([response, response.json()])
    );
}
function fetchDataRedux() {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        return fetchPosts().then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchPostsSuccess(json));
            } else {
                dispatch(fetchPostsError());
            }
        });
    };
}
