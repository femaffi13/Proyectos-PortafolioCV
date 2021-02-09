document.getElementById('color').addEventListener('input', getColor)

function getColor(){
    let col = document.getElementById('color').value
    document.getElementById('visualizador').style.background = col
    document.getElementById('visualizador').innerHTML = col 
}