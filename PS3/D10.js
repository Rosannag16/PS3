//array dei film

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]



/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.random() * 20;
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Rosa",
  surname: "Giordano",
  age: 19,

}
console.log(me);


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log(me);


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["Html", "CSS", "Javascript"]
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("nuovo elemento");
console.log(me);


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log(me);


// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

const risultato = dice();
console.log(risultato);



/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  } else {
    return numero2;
  }
}

let ris1 = whoIsBigger(100, 30);
console.log(ris1);



/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(stringa) {
  return stringa.split("");
}

let scritta = splitMe("Ciao sono Rosanna");
console.log(scritta);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(string, booleano) {
  if (booleano) {
    return string.slice(1);
  } else {
    return string.slice(0, -1);
  }

}

let funzione = deleteOne("Rosanna", true);
console.log(funzione);

let funzione2 = deleteOne("Rosanna", false);
console.log(funzione2);



/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(strg) {

  return strg.replace(/\d/g, '');
}

let result = onlyLetters("I have 4 dogs");
console.log(result);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

console.log(isThisAnEmail("giordanorosanna04@gmail.com"));
console.log(isThisAnEmail("ciaorosanna.gmail"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/


function whatDayIsIt() {
  const giornoCorrente = new Date();
  const giornoSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  const giorno = giornoCorrente.getDay();
  return giornoSettimana[giorno];
}
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollTheDices(num) {
  let sum = 0;
  let values = [];

  for (let i = 0; i < num; i++) {
    const risulatoo = dice();
    sum += risulatoo;
    values.push(risulatoo);
  }

  const tutto = {
    sum: sum,
    values: values
  };
  return tutto;
}

const risulatoo = rollTheDices(3);
console.log(risulatoo);


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/


function howManyDays(data) {
  const oggi = new Date();
  const dataDestinata = new Date(data);
  const tempo = oggi - dataDestinata;
  const quantiGiorni = Math.floor(tempo / (1000 * 60 * 60 * 24));
  return quantiGiorni;
}
const data = "2024-02-08";
const giorniPassati = howManyDays(data);
console.log(`Dall'${data} sono passati ${giorniPassati} giorni.`);


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() {
  const giorno = new Date();
  const compleanno = new Date(giorno.getFullYear(), 10, 16);
  return giorno.toDateString() === compleanno.toDateString();
}

const effettivo = isTodayMyBirthday();
console.log(effettivo);

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(oggetto, st) {
  delete oggetto[st];
  return oggetto;
}

const io = {
  name: "Rosa",
  age: 19,
  city: "Napoli"
};

const io2 = deleteProp(io, "age");
console.log(io2);







/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(movies) {
  if (movies.length === 0) {
    return null;
  }
  let recente = movies[0];
  for (let i = 1; i < movies.length; i++) {
    const currentMovieYear = parseInt(movies[i].Year, 10);
    const piuRecente = parseInt(recente.Year, 10);
    if (currentMovieYear > piuRecente) {
      recente = movies[i];
    }
  }
  return recente;
}
const recente = newestMovie(movies);
console.log(recente);


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function conteggio(movies) {
  return movies.length;
}
const quantiSono = conteggio(movies);
console.log(quantiSono);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/


function onlyTheYears(movies) {
  const anni = movies.map(movie => movie.Year);
  return anni;
}
const anni = onlyTheYears(movies);
console.log(anni);


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(movies) {
  const ultimoMillennio = movies.filter(movie => {
    const annoFilm = parseInt(movie.Year, 10);
    return annoFilm >= 1000 && annoFilm < 2000;
  });

  return ultimoMillennio;
}
const filmMillennio = onlyInLastMillennium(movies);
console.log(filmMillennio);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(movies) {
  const totaleAnni = movies.reduce((totale, movie) => totale + parseInt(movie.Year, 10), 0);
  return totaleAnni;
}
const yearsSum = sumAllTheYears(movies);
console.log(yearsSum);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(string, movies) {
  const titolo = movies.filter(movie =>
    movie.Title.toLowerCase().includes(string.toLowerCase())
  );
  return titolo;
}
const quanti = searchByTitle("Avengers", movies);
console.log(quanti);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(stringa, movies) {
  const trovati = movies.reduce((acc, movie) => {
    const isMatch = movie.Title.toLowerCase().includes(stringa.toLowerCase());
    if (isMatch) {
      acc.match.push(movie);
    } else {
      acc.unmatch.push(movie);
    }

    return acc;
  }, { match: [], unmatch: [] });

  return trovati;
}

const trovati = searchAndDivide("Avengers", movies);
console.log("quelli che ci sono:", trovati.match);
console.log("quelli che non  ci sono:", trovati.unmatch);


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(numero, movies) {
  const aggiorno = [...movies.slice(0, numero), ...movies.slice(numero + 1)];
  return aggiorno;
}

const numeroToRemove = 5;
const moviesWithoutnumero = removeIndex(numeroToRemove, movies);
console.log(numeroToRemove, moviesWithoutnumero);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selezionaElemento() {
  const container = document.getElementById("container");

  if (container) {
    console.log(container);
  } else {
    console.error("non c'è.");
  }

  return container;
}

selezionaElemento();



function selezionaElemento2() {
  const container2 = document.getElementById("container2");

  if (container2) {
    console.log(container2);
  } else {
    console.error("non c'è");
  }

  return container2;
}

selezionaElemento2();




/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function td() {
  const tag = document.getElementsByTagName("td");

  if (tag.length > 0) {
    console.log(tag);
  } else {
    console.error("non c'è");
  }

  return tag;
}

td();


function td2() {
  const tag2 = document.getElementsByTagName("td2");

  if (tag2.length > 0) {
    console.log(tag2);
  } else {
    console.error("non c'è");
  }

  return tag2;
}

td2();


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampa() {

  const td = document.getElementsByTagName("td");

  for (let i = 0; i < td.length; i++) {

    const textContent = td[i].textContent;
    console.log(` ${i + 1}:`, textContent);

  }

}

document.addEventListener("DOMContentLoaded", function () {
  stampa();
});


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function background() {
  const elementi = document.querySelectorAll("a");
  elementi.forEach(link => {
    link.style.backgroundColor = "red";
  });
}
background();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function myList() {
  const nuovo = document.createElement("li");
  const textContent = "Nuovo elemento della lista";
  nuovo.textContent = textContent;
  const myList = document.getElementById("myList");
  myList.appendChild(nuovo);
}

myList();


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

// Funzione per svuotare la lista non ordinata

function myList() {
  const myList = document.getElementById("myList");
  while (myList.firstChild) {
    myList.removeChild(myList.firstChild);
  }
}

myList();


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function aggiungiClasse() {
  const classe = document.querySelectorAll("tr");
  classe.forEach(classe => {
    classe.classList.add("test");
  });
}

aggiungiClasse();


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isItPrime(16));
console.log(isItPrime(11));


