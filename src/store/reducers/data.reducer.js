const initialState = {
    topRated: [],
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUCCESS_FETCH':
            return {
                ...state,
                topRated: action.data.results,
            };
        default:
            return state;
    }
};

export default dataReducer;
