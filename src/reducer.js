const initialState = {
    value: 0
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1
        }
    }
    if (type === "DECREMENT") {
        return {
            value: state.value - 1
        }
    }
    if (type === "INCREMENT_BY_5") {
        return {
            value: state.value + 5
        }
    }
    if (type === "DECREMENT_BY_5") {
        return {
            value: state.value - 5
        }
    }
    // if (type === "RED") {
    //     //Changes the Color of the counter
    //     }
    return state
}