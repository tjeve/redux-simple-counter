const initialState = {
    value: 0,
    color: "black"
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
    // You want to change the color of the counter to the color that was selected
    // Diagram the cycle of events and see what is happening where on a sheet of paper
    // ...when you get home
    if (type === "PICKCOLOR") {
        console.log("Your color choice is", pickColor.value)
        return {
            value: state.value
        }
    }
    return state
}

