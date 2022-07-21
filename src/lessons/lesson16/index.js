import React from 'react';
import '../../App.css';

export default function Lesson16() {
    const firstExample = () => {
        //Function Declaration
        function showFirstMessage() {
            console.log('Hello, world');
        }
        showFirstMessage();
    };

    const secondExample = () => {
        let global = 20; //глобальная переменная
        function showFirstMessage(text) {
            console.log(text);
            let num = 20;  //локальная переменная 
            global = 10;  //перезаписываем глобальную переменную
            console.log(num);
        }
        showFirstMessage('Hello, world')
        console.log(global);


        //замыкание функции- это сама функция, вместе со всеми внешними переменными, которые ей доступны
    };

    const thirdExample = () => {

        function calc(a, b) {
            return (a + b);  //return - окончание функции 
        }
        console.log(calc(4, 3));
        console.log(calc(7, 8));
    };

    const fourthExample = () => {
        function ret() {
            let num = 50;
            return num;
        }

        const anotherNum = ret();
        console.log(anotherNum);

    };

    const fifthExample = () => {
        // Function Expression
        const logger = function () {
            console.log(('Hello'));
        };
        logger();
    };

    const sixthExample = () => {
        // Function Expression
        const calc = (a, b) => a + b;
        console.log(calc(5, 5));
        const calc1 = (a, b) => { return a + b };
        console.log(calc1(7, 7));
    };

    // Function Declaration - она существует еще до того как код запустится (как она вызвана), как переменная var;
    // Function Expression - отличие от Declaration, она создается тогда, когда доходит поток кода, и вызвать ее можно после объявления;
    // Arrow functions - не имеет контекста вызова;

    return (
        <div>
            <h2 className='title'>Lesson 16</h2>
            <h4>Функции, стрелочные функции - Function Declaration, Arrow functions </h4>
            <div className='container'>
                <button className='button' onClick={firstExample}>1ST EXAMPLE</button>
                <button className='button' onClick={secondExample}>2ND EXAMPLE</button>
                <button className='button' onClick={thirdExample}>3RD EXAMPLE </button>
                <button className='button' onClick={fourthExample}>4TH EXAMPLE</button>
                <button className='button' onClick={fifthExample}>5TH EXAMPLE</button>
                <button className='button' onClick={sixthExample}>6TH EXAMPLE</button>
            </div>
        </div>
    )
}
