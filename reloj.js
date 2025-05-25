console.log("Reloj iniciado")
console.log(Date())


const dia = document.querySelectorAll(".dia span")
const digitalClock = document.getElementById("digitalClock")
const fechaDate = document.getElementById("fechaDate")
const lugar = document.getElementById("zonaHoraria")

function actualizacionReloj(){
    const dateFecha = new Date()
    const stringFecha = dateFecha.toString()
    const partes = stringFecha.split(' ')
    const diaSemana = partes[0]
    const mes = partes[1]
    const numeroDia = partes[2]
    const anio = partes[3]
    const hora = partes[4]
// const zonaHorario = partes[5]
     const zonaHorario =  Intl.DateTimeFormat().resolvedOptions().timeZone

    console.log(zonaHorario)

    digitalClock.textContent = hora;
    lugar.textContent = zonaHorario;
    fechaDate.textContent = `${numeroDia} ${mes} ${anio}`
    dia.forEach(d => {
    const clases = d.className.split(' ');
    if (clases.includes(diaSemana)) {
        d.classList.add('active');
    } else {
        d.classList.remove('active');
    }
});
}

actualizacionReloj()
let intervalo = setInterval(actualizacionReloj, 1000)
