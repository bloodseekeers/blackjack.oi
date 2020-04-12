// 2C = Two of Clubs
// 2D = Two of Diaminds
// 2H = Two of Hearts
// 2S = Two of Spades


// Make of Deck o Creacion de Baraja

let deck    = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A","j","Q", "k"];


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
        throw 'No hay cartas en la baraja'
    }
        const carta = deck.pop();
        console.log(carta);
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
    console.log({valor})
            // let puntos = 0;
            // // asignar el valor
            // if (isNaN( valor )) {
            //     puntos = (valor==='A') ? 11 : 10
            // } else {
            //     puntos = valor * 1;
            // }
            // console.log(puntos)