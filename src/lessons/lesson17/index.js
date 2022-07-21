import React from 'react';
import '../../App.css';

export default function Lesson17() {
    const firstExample = () => {
        //длина строки, массива;
        //можно посмотреть все свойства через console.dir;
        // свойство;
        const str = 'test';
        const arr = [1, 2, 4];
        console.log(str.length);
        console.log(arr.length);

    };

    const secondExample = () => {
        // метод;
        const str = 'test';

        console.log(str[2]);
        console.log(str.toUpperCase());
        console.log(str.toLocaleLowerCase());
        console.log(str);
    };

    const thirdExample = () => {
        const fruit = 'Some fruit';

        console.log(fruit.indexOf('fruit'));
        console.log(fruit.indexOf('q'));  //-1 нет такой искомой строки => поиск подстроки
    };

    const fourthExample = () => {
        const logg = 'Hello, world';

        console.log(logg.slice(6, 11)); //вырезается с 6 индекса до 11
        console.log(logg.slice(6));  //вырезается с 6 индекса до конца
        console.log(logg.slice(-5, -1));  //вырезается с права 5 индекса до 1;
        console.log(logg.substring(6, 11)); // похожа на slice;
        console.log(logg.substr(6, 5)); // с 6 индекса 5 символов
    };

    const fifthExample = () => {
        //методы с числами
        const num = 12.2;
        console.log(Math.round(num));
    };


    const sixthExample = () => {
        //методы с числами
        const test = '12.2px';
        console.log(parseInt(test));
        console.log(parseFloat(test));
    };

    return (
        <div>
            <h2 className='title'>Lesson 17</h2>
            <h4>Методы и свойства строк и чисел - Methods and properties of strings and numbers</h4>
            <div className='container'>
                <button className='button' onClick={firstExample}>1ST EXAMPLE</button>
                <button className='button' onClick={secondExample}>2ND EXAMPLE</button>
                <button className='button' onClick={thirdExample}>3RD EXAMPLE</button>
                <button className='button' onClick={fourthExample}>4TH EXAMPLE</button>
                <button className='button' onClick={fifthExample}>5TH EXAMPLE</button>
                <button className='button' onClick={sixthExample}>6TH EXAMPLE</button>
            </div>
        </div>
    )
}
