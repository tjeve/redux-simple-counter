const render = (state) => {
    const counterDOM = document.getElementById('counterValue');
    // console.log("render.js line 3. state.value =", state.value)
    // counterDOM.innerHTML = state.value
    counterDOM.innerHTML = `<div style="color: ${pickColor.value}">${state.value}</div>`
    
    
}
// You want to change the render function to change the style of the number being displayed
