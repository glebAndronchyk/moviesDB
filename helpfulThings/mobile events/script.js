window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();

        console.log('STart');
        console.log(event.touches);
        console.log(event.targetTouches);
    });

    box.addEventListener('touchmove', (event) => {
        event.preventDefault();

        console.log('move');
    });

    box.addEventListener('touchend', (event) => {
        event.preventDefault();

        console.log('end');
    });
});