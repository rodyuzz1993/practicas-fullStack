console.log("Caluladora iniciada")

const boton = document.querySelectorAll("#operaciones input")
const resultado = document.getElementById("resultado")
const numero = document.querySelectorAll("input.numero")
const operacion = document.querySelectorAll("input.ope")
const borrar = document.getElementById("delete")
const clear = document.getElementById("clear")
const igual = document.getElementById("igual")

numero.forEach(value => {
    console.log(value.value)
    value.addEventListener("click", ()=> clickear(value))
});

operacion.forEach(value => {
    console.log(value.value)
    value.addEventListener("click", ()=> clickear(value))
    value.addEventListener("click", ()=> inutilizar(operacion))
});


borrar.addEventListener("click", ()=> borrarCaracter())
clear.addEventListener("click", ()=> reiniciar())

function clickear(parametro){
    resultado.textContent += parametro.value
}

function inutilizar(parametro){
    parametro.forEach(value => {
        value.disabled = true;
    })
}

function utilizar(parametro){
    parametro.forEach(value => {
        value.disabled = false;
    })
}

function borrarCaracter(){
    const posicionUltimo = resultado.textContent.length - 1
    const ultimoNumero = resultado.textContent[posicionUltimo]
    operacion.forEach(value => {
        if(ultimoNumero == value.value){
            utilizar(operacion)
            }
        })
    resultado.textContent = resultado.textContent.slice(0, -1)
}

function reiniciar(){
    resultado.innerHTML = "0"
    utilizar(operacion)
}

function operacionResultado(){
    const textoContenido = resultado.textContent
    operacion.forEach(operador =>{
        const simbolo = operador.value
        const partes = textoContenido.split(`${simbolo}`)
        const num1 = parseFloat(partes[0]);
        const num2 = parseFloat(partes[1])
        let resultadoOperacion
        if(textoContenido.includes(simbolo)){
            switch (simbolo){
                case '+':
                    resultadoOperacion = num1 + num2;
                    break;
                case '-':
                    resultadoOperacion = num1 - num2;
                    break;
                case 'x':
                    resultadoOperacion = num1 * num2;
                    break;
                case '/':
                    resultadoOperacion = num1 / num2;
                    break;
            }
            resultado.textContent += ` = ${resultadoOperacion}`;
            return;
        }
    })
}

igual.addEventListener("click", () => operacionResultado())
