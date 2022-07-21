import React from 'react';
import '../../App.css';

export default function LessonE() {
    const firstExample = () => {
        alert('   //OPEN CONSOLE')



    };

    const secondExample = () => {
        alert('   //OPEN CONSOLE')


    };

    const thirdExample = () => {
        alert('  //OPEN CONSOLE')

    };

    const fourthExample = () => {
        alert(' //OPEN CONSOLE')

    };

    return (
        <div>
            <h2 className='title'>Lesson 14</h2>
            <h4>Циклы - Loop</h4>
            <div className='container'>
                <button className='button' onClick={firstExample}>1ST EXAMPLE</button>
                <button className='button' onClick={secondExample}>2ND EXAMPLE</button>
                <button className='button' onClick={thirdExample}>3RD EXAMPLE</button>
                <button className='button' onClick={fourthExample}>4TH EXAMPLE</button>
            </div>
        </div>
    )
}
