AOS.init();

const dataDoZMadou = new Date("Jan 02, 2025 00:00:01");
const dataDoLululee = new Date("Sep 24, 2025 00:00:01");
const timeStampDoAniver = dataDoZMadou.getTime();


const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();


    const distanciaAteOAniver = timeStampDoAniver - timeStampAtual;


    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOAniver = Math.floor(distanciaAteOAniver / diasEmMs);
    const horasAteOAniver = Math.floor((distanciaAteOAniver % diasEmMs) / horasEmMs);
    const minutosAteOAniver = Math.floor((distanciaAteOAniver % horasEmMs) / minutosEmMs);
    const segundosAteOAniver = Math.floor((distanciaAteOAniver % minutosEmMs) / 1000);


    document.getElementById('contador').innerHTML = `${diasAteOAniver}d ${horasAteOAniver}h ${minutosAteOAniver}m ${segundosAteOAniver}s`;

    if(distanciaAteOAniver < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `Hoje`

    }

}, 1000);