
// collegare variabile  contenitore in html
const contenitore = document.getElementById('first-container');


// inizializzare un programma che stampi i numeri da 1 a 100
for ( let i = 1; i < 101; i++){
    console.log(i)

    const squareElement = document.createElement('div');
    squareElement.classList.add('box');
    contenitore.append(squareElement);

    // selezionare numeri multipli di 3 e 5 e modificare aspetto 
    if ( i % 15 === 0){
        squareElement.classList.add('box--r');
        squareElement.append('fizzbuzz');
     
    } else if( i % 5 === 0){
        squareElement.classList.add('box--y');
        squareElement.append('buzz');

    } else if( i % 3 === 0){
        squareElement.classList.add('box--g');
        squareElement.append('fizz');
    } else 
     squareElement.append(i);
}
 



