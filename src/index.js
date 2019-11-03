const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

function deepcopy(x) {
    return JSON.parse(JSON.stringify(x))
}

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));

// Dispatch the "DECREMENT" action every time the -1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));

// Dispatch the "INCREMENT_BY_5" action every time the + 5 button is pressed
const incrementBy5Button = document.getElementById('increment-by-5');
incrementBy5Button.addEventListener('click', e => dispatch({ type: "INCREMENT_BY_5"}));

// Dispatch the "DECREMENT_BY_5" action every time the - 5 button is pressed
const decrementBy5Button = document.getElementById("decrement-by-5");
decrementBy5Button.addEventListener('click', e => dispatch({ type: "DECREMENT_BY_5" }));

// Dispatch the "PICKCOLOR" action every time a color is chosen from the dropdown menu
const pickColor = document.getElementById("pick-color")
pickColor.addEventListener("change", e => dispatch({ type: "PICKCOLOR", color: pickColor.value }))

// Dispatch the "PICK_STARTING_NUMBER" action when the form is filled out and the submit button is pressed
const pickStartingNumber = document.getElementById("startingNumber")
const button = document.getElementById("button")
button.addEventListener("click", e => dispatch({ type: "PICK_STARTING_NUMBER", 
value: pickStartingNumber.value }))