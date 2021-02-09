let numberOfFilms;


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
}
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
    
        } else {
            i--;
        }
    }
}
rememberMyFilms();

// do {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
// }
// while (a.length < 1 && a.length > 50);
// do {
//     prompt('На сколько оцените его?', '');
// }
// while (b.length < 1 && b.length > 50);
// do {
//     prompt('Один из последних просмотренных фильмов?', '');
// }
// while (c.length < 1 && c.length > 50);
// do {
//     prompt('На сколько оцените его?', '');
// }
// while (d.length < 1 && d.length > 50);

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        console.log('Просмотрено довольно мало фильмов', '');
    } else if (numberOfFilms > 10 && numberOfFilms <= 30) {
        console.log('Вы классический пользователь', '');
    } else if (numberOfFilms > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

// console.log(personalMovieDB);






// const a = prompt('Один из последних просмотренных фильмов?', '');
// while (a.length < 1 || a.length > 50) {
//     console.log(a);
// }


function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();


function writeYourGenres() {
for (let i = 1; i <= 3; i++) {
const genre = prompt(`Ваш любимый жанр под номером ${i}`);
personalMovieDB.genres[i - 1] = genre;
}
}

writeYourGenres();




