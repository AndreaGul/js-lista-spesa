'use strict';

//Richiamiamo l'elemento ul nell'html con classe lista
const lista = document.querySelector('.lista');

//Ci creiamo un array con gli elemente della spesa
const spesa = ['pane', 'pasta', 'pomodori', 'hamburger', 'acqua', 'insalata'];

//Dichiariamo una variabile 'i' che useremo come contatore
let i = 0;

//Come condizione del ciclo inpostiamo che 'i' deve essere minore della lunchezza dell'array spesa
while (i < spesa.length) {
  //creaiamo un elemento li
  const li = document.createElement('li');

  //nell'elemento li inseriamo l'elemento in posizione i dell'array spesa
  li.textContent = spesa[i];

  //appendiamo li al ul con classe lista
  lista.append(li);

  //nel ciclo incrementiamo i di 1
  i++;
}
console.log(lista);
