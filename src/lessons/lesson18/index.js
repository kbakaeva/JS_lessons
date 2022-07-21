import React from 'react';
import '../../App.css';

export default function Lesson18() {

    let numberOfFilms;
    const name = prompt('Один из последних просмотренных фильмов?', ''),
        rate = prompt('На сколько оцените его?', '');
    const lengthA = name.length

    function start() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        };
    }

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false,
        lengthA: lengthA,
    };

    function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            if (name !== null && rate !== null && name !== '' && rate !== '' && name.length < 50) {
                personalMovieDB.movies[name] = rate;
                console.log('Done');
            } else {
                console.log('Error');
                i--; // декремент
            }
        }
    };

    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Ты классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        };
    };

    // function showMyDB(hidden) {
    // if (!hidden) {
    // console.log(personalMovieDB);
    // }
    // }
    // showMyDB(personalMovieDB.private);

    function showMyDB() {
        if (!personalMovieDB.private) {
            console.log(personalMovieDB);
        }
    }
    showMyDB();
    function writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`)
            personalMovieDB.genres[i - 1] = genre;
        }
    }
    console.log(personalMovieDB.genres);

    return (
        <div>
            <h2 className='title'>Lesson 18</h2>
            <h4>Задачи - Function</h4>
            <ol style={{ textAlign: 'left' }}>
                <li className='list'>
                    Первую часть задания повторить по уроку
                </li>
                <li className='list'>
                    Создать функцию showMyDB которая будет проверять свойства private. Если стоит в позиции false - выводит в консоль главный объект программы
                </li>
                <li className='list'>
                    Создать функции writeYourGenres, в которой пользователь будет 3 раза отвечать на вопрос "Ваш любимый жанр под номером номер по порядку". Каждый ответ записывается в массив данных genres. P.S. Функцию вызывать не обязательно.
                </li>
                <li className='list'>
                    Потренироваться и переписать цикл еще двумя способами
                </li>
            </ol>
            <div className='container'>
                <button className='button' onClick={start}>START</button>
                <button className='button' onClick={rememberMyFilms}>REMEMBER MY FILMS</button>
                <button className='button' onClick={detectPersonalLevel}>DETECT PERSONAL LEVEL</button>
                <button className='button' onClick={showMyDB}>SHOW MY DB</button>
                <button className='button' onClick={writeYourGenres}>WRITE YOUR GENRES</button>
            </div>
        </div>
    )
}
