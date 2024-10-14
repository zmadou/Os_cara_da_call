AOS.init();

const dataDoZMadou = new Date("Jan 02, 2025 00:00:01");
const dataDoLululee = new Date("Sep 24, 2025 00:00:01");
const dataDoLocke = new Date("Apr 03, 2025 00:00:01");

const niversDatas = [
    ["zMadou", new Date("Jan 02, 2025 00:00:01")],
    ["Lululee", new Date("Sep 24, 2025 12:00:01")],
    ["Locke", new Date("Apr 03, 2025 12:00:01")],
]


const contaAsHoras = setInterval(function() {
    let menorDia = 400;
    let menorData = niversDatas[0];

    const agora = new Date();
    const timeStampAtual = agora.getTime();

    niversDatas.forEach((data, index)=> {
        const timeStampDoAniver = data[1].getTime();
        const distanciaAteOAniver = timeStampDoAniver - timeStampAtual;

        const diasEmMs = 1000 * 60 * 60 * 24;

        const diasAteOAniver = Math.floor(distanciaAteOAniver / diasEmMs + 0.5);
        console.log(diasAteOAniver)
        if (diasAteOAniver < menorDia && diasAteOAniver >= 0) {
            menorDia = diasAteOAniver;
            menorData = data
        }


    })
    
    // const timeStampDoAniver = dataDoZMadou.getTime();
    const timeStampDoAniver = menorData[1];
    
    const distanciaAteOAniver = timeStampDoAniver - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOAniver = Math.floor(distanciaAteOAniver / diasEmMs + 0.5);
    const horasAteOAniver = Math.floor((distanciaAteOAniver % diasEmMs) / horasEmMs + 0.5);
    const minutosAteOAniver = Math.floor((distanciaAteOAniver % horasEmMs) / minutosEmMs + 0.5);
    const segundosAteOAniver = Math.floor((distanciaAteOAniver % minutosEmMs) / 1000 + 0.5);

    document.getElementById('contador').innerHTML = `${diasAteOAniver}d ${horasAteOAniver}h ${minutosAteOAniver}m ${segundosAteOAniver}s`;

    document.getElementById('membro').innerHTML = `${menorData[0]}`

    if(diasAteOAniver == 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `Hoje`

    }

}, 1000);