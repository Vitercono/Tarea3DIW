const loginHeader = document.querySelector('h1#h1-login');
if (loginHeader) {
    loginHeader.addEventListener('click', () => {
        document.title = "¿Por qué harías click ahí?";
    });
}

const cambiarColorImg = document.querySelector('img#cambiarColor');
if (cambiarColorImg) {
    cambiarColorImg.addEventListener('click', () => {
        var fondo = document.getElementById('yoCambio');
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        fondo.style.backgroundColor = "#" + randomColor;
    });
}

const volverColorImg = document.querySelector('img#volverColor');
if (volverColorImg) {
    volverColorImg.addEventListener('click', () => {
        document.getElementById('yoCambio').style.backgroundColor = "#5f111191";
    });
}

const highlightitems = document.querySelectorAll('.highlight-item');
const infopelicula = document.getElementById('info-pelicula');

highlightitems.forEach(item => {
    item.addEventListener('click', ()=>{
        infopelicula.classList.add('mostrar');

        const titulo = item.querySelector('h3').innerText;
        let texto = item.querySelector('input').value;

        infopelicula.innerHTML=`<h3>${titulo}</h3><p>${texto}</p>`;
    })
})