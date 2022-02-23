let elem = document.getElementById('img');
let hole = document.getElementById('moved');
let score = document.getElementById('num');

// let startAnimation = false;
let id;
let x = 0;

function start() {
    id = setInterval(() => {
        x += 1;
        elem.style.transform = `translateX(${x}px)`;
    }, 0);
}

function stop() {
    clearInterval(id);


    let a = elem.getBoundingClientRect();
    let b = hole.getBoundingClientRect();
    console.log(a);
    console.log(b);

    const elemCoordainate = { x: 284, y: 251, radius: 4 };
    const holeCoordainate = { x: 904, y: 233, radius: 5 };


    // let sumOfRadius = elemCoordainate.radius + holeCoordainate.radius;

    if (elemCoordainate.x < holeCoordainate.x) {
        console.log('hello');
    }
    else if (elemCoordainate.x === holeCoordainate.x) {
        console.log('winner');
    }
    else if (elemCoordainate.x > holeCoordainate.x) {
        console.log('lost');
    }
}


function reset() {
    x = 0;
    elem.style.transform = `translateX(${x}px)`;
}
