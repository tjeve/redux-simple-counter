const render = (state) => {
    const counterDOM = document.getElementById('counterValue');
    counterDOM.innerHTML = state.value;
    
    console.log(counterDOM.innerHTML)
}
// You want to change the render function to change the style of the number being displayed
