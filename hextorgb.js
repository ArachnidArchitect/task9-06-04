let display = document.querySelector('h2')
let input = document.querySelector('input')
let btn = document.querySelector('button')


btn.addEventListener('click', ()=>{
    hexToRgb(input.value)
})

function hexToRgb(hex) {
    const myHex = hex.substring(1);
    const r = parseInt(myHex.substring(0, 2), 16);
    const g = parseInt(myHex.substring(2, 4), 16);
    const b = parseInt(myHex.substring(4, 6), 16);
    console.log(r, g, b)
    display.innerText = `(R: ${r},G: ${g},B: ${b})`
}

