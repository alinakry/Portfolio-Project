

let header = document.getElementById('header');

let cells = document.querySelectorAll('#field td');

let counter = 0;

function victory() {
    const combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let combo of combos) {
        if (cells[combo[0]].innerHTML == cells[combo[1]].innerHTML && cells[combo[1]].innerHTML == cells[combo[2]].innerHTML && cells[combo[0]].innerHTML != '') {
            return true;
        }
    }
    return false;
}


function click(e) {
    if (counter % 2) {
        e.target.innerHTML = '<img src="./img/cross.png" width = 100>'
    } else {
        e.target.innerHTML = '<img src="./img/o.png" width = 100>'
    }


    if (victory()) {
        for (let cell of cells) {
            cell.removeEventListener('click', click);
        }
        if (counter % 2 == 0) {
            header.innerHTML = 'O is the winner';
        } else {
            header.innerHTML = 'X is the winner';
        }
    }
    else if (counter == 8) {
        header.innerHTML = ' Draw ';
    }
    counter++;
    e.target.removeEventListener('click', tap);

}


document.getElementById('start-button').addEventListener('click', () => {
    header.innerHTML = 'Tic Tac Toe';
    counter = 0;
    for (let cell of cells) {
        cell.innerHTML = '';
        cell.addEventListener('click', click);
    }
});










