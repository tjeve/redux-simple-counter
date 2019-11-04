const render = (state) => {
    const counterDOM = document.getElementById('counterValue');
    // console.log(counterDOM.style.color.innerHTML)
    // counterDOM.style.color.innerHTML = pickColor.value
    counterDOM.innerHTML = `<div style="color: ${pickColor.value}">${state.value}</div>`
}