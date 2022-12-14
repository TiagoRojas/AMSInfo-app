const initialState = {
    list: [],
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LIST':
            return {
                ...state,
                list: action,
            };
        default:
            return state;
    }
};

export default orderReducer;
