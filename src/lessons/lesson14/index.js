import React from 'react';
import '../../App.css';

export default function Lesson14() {
    const firstExample = () => {
        alert(' let num = 50; while (num <= 55) { console.log(num);num++;  };  //OPEN CONSOLE')

        // while
        let num = 50;
        while (num <= 55) {
            console.log(num);
            num++; //инкремент
        };
    };

    const secondExample = () => {
        alert('let num = 50; do { console.log(num); num++; }  while (num < 55);    //OPEN CONSOLE')

        //do while
        let num = 50;
        do {
            console.log(num);
            num++;
        }
        while (num < 55);
    };

    const thirdExample = () => {
        alert('for (let i = 1; i < 8; i++) {console.log(i);}   //OPEN CONSOLE')

        //for 1
        for (let i = 1; i < 8; i++) {
            console.log(i);
        }

    };

    const fourthExample = () => {
        alert('let num = 50; for (let i = 1; i < 8; i++) { console.log(num); num++; };   //OPEN CONSOLE')

        //for 2
        let num = 50;
        for (let i = 1; i < 8; i++) {
            console.log(num);
            num++;
        };
    };

    const fifthExample = () => {
        alert('for (let i = 1; i < 10; i++) { if (i === 6) { break } console.log(i); };   //OPEN CONSOLE')

        //for 3
        for (let i = 1; i < 10; i++) {
            if (i === 6) {
                break // => прерывает цикл на этом этапе, как только i достиг 6
                // continue // => позволяет пропустить шаг 
            }
            console.log(i);
        };
    };

    return (
        <div>
            <h2 className='title'>Lesson 14</h2>
            <h4>Циклы - Loop</h4>
            <div className='container'>
                <button className='button' onClick={firstExample}>1ST EXAMPLE - while</button>
                <button className='button' onClick={secondExample}>2ND EXAMPLE - do while</button>
                <button className='button' onClick={thirdExample}>3RD EXAMPLE - for #1</button>
                <button className='button' onClick={fourthExample}>4TH EXAMPLE - for #2 </button>
                <button className='button' onClick={fifthExample}>5TH EXAMPLE - for (break/continue) </button>
            </div>
        </div>
    )
}
