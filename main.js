const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const resultado = document.querySelector(".resultado");
let contador = 0;

btnLeft.addEventListener("click", function () {
    contador--;
    resultado.innerHTML = contador;
});

btnRight.addEventListener("click", function () {
    contador++;
    resultado.innerHTML = contador;
});
