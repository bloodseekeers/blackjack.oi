// 2C = Two of Clubs
// 2D = Two of Diaminds
// 2H = Two of Hearts
// 2S = Two of Spades


let deck    = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A","j","Q", "k"];
let puntosJugador = 0;
let puntosIa = 0;
// Referencia HTML

const botonpedir = document.querySelector('#pCarta');

const puntosUsuario = document.querySelector('#carpj');

const cartaUsuario = document.querySelector('#cartasUsuario');


// Make of Deck o Creacion de Baraja

const crearDeck = () =>{
for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
        deck.push(i + tipo);    
    }
}
for (let esp of especiales ) {
    for (let tipo of tipos) {
        deck.push(esp + tipo);
    }
}
// baraja mezclada
deck = _.shuffle(deck);
return deck;
}
 
crearDeck();
// Pedir carta

const pedirCarta = () =>{
    if (deck.length===0) {
        alert('No hay mas cartas en la baraja')
        throw 'No hay cartas en la baraja'
    }
        const carta = deck.pop();
        return carta;
}

// valor de carta que se pide

const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
            (valor==='A') ? 11 : 10
            : valor * 1
}
    const valor = valorCarta(pedirCarta());
            // let puntos = 0;
            // // asignar el valor
            // if (isNaN( valor )) {
            //     puntos = (valor==='A') ? 11 : 10
            // } else {
            //     puntos = valor * 1;
            // }
            // console.log(puntos)

// DOM

botonpedir.addEventListener('click',() => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta( carta);
    puntosUsuario.innerText=(puntosJugador);
    // insertar carta al tablero
    const imgCarta = document.createElement('img');
    imgCarta.classList=('img-fluid');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    cartaUsuario.append(imgCarta);
    // puntos si obtuvo mas de 21 o menos
    if (puntosJugador > 21) {
        botonpedir.disabled = true;
        window.setTimeout(()=>{
            alert("Has perdido..! intentalo otra vez");
        },  1000);

    } else if (puntosJugador===21){
            alert('Felicidades Ganaste...!' );
    }
 });
