const velocidad = document.getElementById("velocidad"),
    aceleracion = document.getElementById("aceleración"),
    reset = document.getElementById("reset"),
    calc = document.getElementById("calc");
const tiempo = document.getElementById("tiempo"),
    altura = document.getElementById("altura");

reset.addEventListener("click", () => {
    this.tiempo.value = "";
    this.altura.value = "";
    velocidad.textContent = 0;
    aceleracion.textContent = 0;
})

calc.addEventListener("click", () => {
    const tiempo = this.tiempo.value,
        altura = this.altura.value;
    let calcA = altura / tiempo,
        calcB = ((tiempo * tiempo)/2)/tiempo,
        calcC = -calcA / tiempo,
        calcD = calcB / tiempo,
        acel = calcC / calcD,
        calcF = calcB * acel,
        velo = calcA - calcF;
    
    if (tiempo && altura) {
        velocidad.textContent = velo.toFixed(2);
        aceleracion.textContent = acel.toFixed(2);
    } else {
        velocidad.textContent = 0;
        aceleracion.textContent = 0;
    }
    })

