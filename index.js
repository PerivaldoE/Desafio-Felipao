let NomeHeroi = "Sr dos Bares"
let XP  = 9999

let Nivel

switch (true) {
    case XP <= 1000:
        Nivel = "Ferro";
        break;

        case XP >= 1001 && XP <= 2000:
        Nivel = "Bronze";
        break;

        case XP >= 2001 && XP <= 5000:
        Nivel = "Prata";
        break;

        case XP >= 5001 && XP <= 7000:
        Nivel = "Ouro";
        break;

        case XP >= 7001 && XP <= 8000:
        Nivel = "Platina";
        break;

        case XP >= 8001 && XP <= 9000:
        Nivel = "Ascendente";
        break;

        case XP >= 9001 && XP <= 10000:
        Nivel = "Imortal";
        break;

        case XP > 10001:
        Nivel = "Radiante";
        break;

        default:
            Nivel = "Desconhecido";

}


console.log("O Herói de nome " + NomeHeroi + " esta no nivel de " + Nivel)