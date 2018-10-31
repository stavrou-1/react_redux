const initialState = {
    count: 0
}

export const reducer = (state = initialState, action) => {
    // state is set to undefined at first.
    // so we need to set up an initail state above the reducer.
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            }
        default:
        return state;
    }
}