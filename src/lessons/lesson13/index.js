import React from 'react';
import '../../App.css';

export default function Lesson13() {
    const firstExample = () => {
        alert('if (4 == 4) { console.log(`Ok!`) } else {console.log(`Error`);}    //OPEN CONSOLE')

        if (4 == 4) {
            console.log('Ok!');
        } else {
            console.log('Error');
        }
    };

    const secondExample = () => {
        alert('const num = 50; if (num < 49) { console.log(`Error`);} else if (num > 100) {console.log(`Too much`);} else {console.log(`Ok!`);}    //OPEN CONSOLE')

        const num = 50;
        if (num < 49) {
            console.log('Error');
        } else if (num > 100) {
            console.log('Too much');
        } else {
            console.log('Ok!');
        }
    };

    const thirdExample = () => {
        alert('const num = 50; (num === 50) ? console.log(`Ok!`) : console.log(`Error`);   //OPEN CONSOLE')
        const num3 = 50;
        (num3 === 50) ? console.log('Ok!') : console.log('Error');
    };

    const fourthExample = () => {
        alert('const num = 50; switch (num) {case 49:console.log(`Wrong`);break; case 100: console.log(`Wrong`); break;case 50: console.log(`Correct`);break; default:console.log(`Try again`); break;}  //OPEN CONSOLE')

        const num = 50;
        //конструкция switch работает только на строгое соответствие в классическом виде
        switch (num) {
            case 49:
                console.log('Wrong');
                break;      // => синтаксическая конструкция, если верно то дальше не будет проверять, а остановится
            case 100:
                console.log('Wrong');
                break;
            case 50:
                console.log('Correct');
                break;
            default:   // => на тот случай, если не подошел ни один кейс
                console.log('Try again');
                break;
        }
    };


    return (
        <div>
            <h2 className='title'>Lesson 13</h2>
            <h4>Условие - Conditional statement</h4>
            <div className='container'>
                <button className='button' onClick={firstExample}>1ST EXAMPLE</button>
                <button className='button' onClick={secondExample}>2ND EXAMPLE - вложенные условия</button>
                <button className='button' onClick={thirdExample}>3RD EXAMPLE - тернарные операторы </button>
                <button className='button' onClick={fourthExample}>4TH EXAMPLE - switch </button>
            </div>
        </div>
    )
}
