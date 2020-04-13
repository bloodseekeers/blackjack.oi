/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
// botones
const pCarta   = document.querySelector('#pCarta');
const btnDetene = document.querySelector('#detener');
const btnNuevo   = document.querySelector('#nGame');
// Cartas Tablero
const divCartasJugador     = document.querySelector('#cartasUsuario');
const divCartasComputadora = document.querySelector('#cartasRobot');

const puntosPersona = document.querySelector('#carpj');
const puntoIa = document.querySelector('#puntosIa');

// Esta función crea un nuevo deck
const crearDeck = () => {

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}

crearDeck();


// Esta función me permite tomar una carta
const pedirCarta = () => {

    if ( deck.length === 0 ) {
        window.setTimeout(()=>{
            alert('Noy hay cartas en la baraja')
        },1000)
        
    }
    const carta = deck.pop();
    return carta;
}

// pedirCarta();
const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}

// turno de la computadora
const turnoComputadora = ( puntosMinimos ) => {

    do {
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosIa.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            window.setTimeout(()=>{
                alert('Empate :P');
            }, 2000)
        } else if ( puntosMinimos > 21 ) {
            alert('Perdiste..! vuelve a intentarlo')
        } else if( puntosComputadora > 21 ) {
            alert('Ganaste !Felicidades¡');
        } else {
            alert('Perdiste..! vuelve a intentarlo')
        }
    }, 2300 );
}



// Eventos
window.setTimeout(()=>{

    pCarta.addEventListener('click', () => {
    
        const carta = pedirCarta();
        
        puntosJugador = puntosJugador + valorCarta( carta );
        puntosPersona.innerText = puntosJugador;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasJugador.append( imgCarta );
    
        if ( puntosJugador > 21 ) {
            pCarta.disabled   = true;
            btnDetene.disabled = true;
            turnoComputadora( puntosJugador );
            
        } else if ( puntosJugador === 21 ) {
            pCarta.disabled   = true;
            btnDetene.disabled = true;
            turnoComputadora( puntosJugador );
        }
    
    });
}, 2000);


btnDetene.addEventListener('click', () => {
    pCarta.disabled   = true;
    btnDetene.disabled = true;

    turnoComputadora( puntosJugador );
});

btnNuevo.addEventListener('click', () => {

  location.reload();

});