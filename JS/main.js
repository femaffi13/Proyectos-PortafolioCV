document.getElementById('color').addEventListener('input', getColor)

function getColor(){
    let col = document.getElementById('color').value
    document.getElementById('visualizador').style.background = col
    document.getElementById('visualizador').innerHTML = col 

    if (col !== '#ffffff'){
        document.getElementById('visualizador').style.color = '#fff';
    } else {
        document.getElementById('visualizador').style.color = '#000';
    }
}