import React, { useEffect } from 'react';
import '../App.css';

function Lockscreen() {
    
    useEffect(() => {
        makeButtonUnclickable();
    }, []);

    return (
        <div className='lockscreen'>
            <div className="child">
                <h1> Would you like to see my portfolio?</h1>
                <button> Heck Yeah! </button>
                <button className="unclickable"> No way! </button>
            </div>
        </div>
    );
}

export default Lockscreen;

function makeButtonUnclickable() {
    const button = document.querySelector('.unclickable');
    button.addEventListener('mouseover', (event) => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const randomX = Math.random() * (screenWidth - button.offsetWidth);
        const randomY = Math.random() * (screenHeight - button.offsetHeight);

        button.style.position = 'absolute';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    });
}