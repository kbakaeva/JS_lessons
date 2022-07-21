import React from 'react';
import '../../App.css';

export default function Lesson15() {
    const firstTask = () => {
        const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

        const personalMovieDB = {
            count: numberOfFilms,
            movies: {},
            actors: {},
            genres: [],
            private: false,
        };

        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            personalMovieDB.movies[a] = b;
            //a - свойство объекта
            //b - значение его
        }
        console.log(personalMovieDB);

    };

    const secondTask = () => {
        const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
        const name = prompt('Один из последних просмотренных фильмов?', ''),
            rate = prompt('На сколько оцените его?', '');
        const lengthA = name.length

        const personalMovieDB = {
            count: numberOfFilms,
            movies: {},
            actors: {},
            genres: [],
            private: false,
            lengthA: lengthA,
        };

        for (let i = 0; i < 2; i++) {
            if (name !== null && rate !== null && name !== '' && rate !== '' && name.length < 50) {
                personalMovieDB.movies[name] = rate;
                console.log('Done');
            } else {
                console.log('Error');
                i--; // декремент
            }

            if (personalMovieDB.count < 10) {
                console.log('Просмотрено довольно мало фильмов');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('Ты классический зритель');
            } else if (personalMovieDB.count >= 30) {
                console.log('Вы киноман');
            } else {
                console.log('Произошла ошибка');
            };
        }
        console.log(personalMovieDB);

    };

    const thirdTask = () => {
        const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
        const name = prompt('Один из последних просмотренных фильмов?', ''),
            rate = prompt('На сколько оцените его?', '');
        const lengthA = name.length

        const personalMovieDB = {
            count: numberOfFilms,
            movies: {},
            actors: {},
            genres: [],
            private: false,
            lengthA: lengthA,
        };
        let num = 0
        while (num < 2) {
            num++;
            if (name !== null && rate !== null && name !== '' && rate !== '' && name.length < 50) {
                personalMovieDB.movies[name] = rate;
                console.log('Done');
            } else {
                console.log('Error');
                num--; // декремент
            }

            if (personalMovieDB.count < 10) {
                console.log('Просмотрено довольно мало фильмов');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('Ты классический зритель');
            } else if (personalMovieDB.count >= 30) {
                console.log('Вы киноман');
            } else {
                console.log('Произошла ошибка');
            };
        }
        console.log(personalMovieDB);

    };

    const fourthTask = () => {
        const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
        const name = prompt('Один из последних просмотренных фильмов?', ''),
            rate = prompt('На сколько оцените его?', '');
        const lengthA = name.length

        const personalMovieDB = {
            count: numberOfFilms,
            movies: {},
            actors: {},
            genres: [],
            private: false,
            lengthA: lengthA,
        };
        let num = 0
        do {
            num++;
            if (name !== null && rate !== null && name !== '' && rate !== '' && name.length < 50) {
                personalMovieDB.movies[name] = rate;
                console.log('Done');
            } else {
                console.log('Error');
                num--; // декремент
            }

            if (personalMovieDB.count < 10) {
                console.log('Просмотрено довольно мало фильмов');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('Ты классический зритель');
            } else if (personalMovieDB.count >= 30) {
                console.log('Вы киноман');
            } else {
                console.log('Произошла ошибка');
            };
        } while (num < 2)
        console.log(personalMovieDB);
    };


    return (
        <div>
            <h2 className='title'>Lesson 15</h2>
            <h4>Задачи - LOOP, CONDITIONAL STATEMENT</h4>
            <ol style={{ textAlign: 'left' }}>
                <li className='list'>
                    Автоматизировать вопросы пользователю про фильмы при помощи цикла
                </li>
                <li className='list'>
                    Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки, отменить ответ или ввести название фильма длиннее, чем 50 символов. Если это происходит - возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как str.length - и получить ее длину)
                </li>
                <li className='list'>
                    При помощи условий проверить personalMovieDB.count, если он меньше 10 вывести - сообщение "просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - "Вы киноман". Если же не подошло ни к одному варианту - "Произошла ошибка"
                </li>
                <li className='list'>
                    Потренироваться и переписать цикл еще двумя способами
                </li>
            </ol>
            <div className='container'>
                <button className='button' onClick={firstTask}>1ST TASK</button>
                <button className='button' onClick={secondTask}>2ND TASK</button>
                <button className='button' onClick={thirdTask}>3RD TASK</button>
                <button className='button' onClick={fourthTask}>4TH TASK</button>
            </div>
        </div>
    )
}
