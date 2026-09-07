const carruselElemento = document.querySelector(".carrusel-items");

let posicionMaximaDesplazamiento = carruselElemento.scrollWidth - carruselElemento.clientWidth;
let intervaloDesplazamiento = null;
let pasoDesplazamiento = 1;

const iniciarDesplazamiento = () => {
  intervaloDesplazamiento = setInterval(function () {
    carruselElemento.scrollLeft = carruselElemento.scrollLeft + pasoDesplazamiento;
    if (carruselElemento.scrollLeft === posicionMaximaDesplazamiento) {
      pasoDesplazamiento = pasoDesplazamiento * -1;
    } else if (carruselElemento.scrollLeft === 0) {
      pasoDesplazamiento = pasoDesplazamiento * -1;
    }
  }, 10);
};

const detenerDesplazamiento = () => {
  clearInterval(intervaloDesplazamiento);
};

carruselElemento.addEventListener("mouseover", () => {
  detenerDesplazamiento();
});

carruselElemento.addEventListener("mouseout", () => {
  iniciarDesplazamiento();
});

iniciarDesplazamiento();
