const initialState = {
    theme: 'dark-theme',
};

const appConfigReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'THEMEFETCHED':
            return {
                ...state,
                theme: action.data.rows._array[0].theme,
            };
        default:
            return state;
    }
};

export default appConfigReducer;
