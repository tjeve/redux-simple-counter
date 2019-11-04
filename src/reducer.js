let initialState = {
    value: 0,
    color: "black"
}

function deepcopy (x) {
    return JSON.parse(JSON.stringify(x))
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
    if (type === "PICK_STARTING_NUMBER") {
        console.log("Your starting number is", pickStartingNumber.value )
        return {
            value: pickStartingNumber.value
        }
    }
    return state
}

