//Main variables
let Biscuits = 0

//Default functions
function Forever() {
    document.getElementById('BigBiscuit').onmousedown = Chocolate()
    document.getElementById('BigBiscuit').onmouseup = Vanilla()
}

//Main functions
function AddBiscuit(Amount) {
    Biscuits += Amount
}

function Chocolate() {
    document.getElementById('BigBiscuit').className = 'Chocolate'
}

function Vanilla() {
    document.getElementById('BigBiscuit').className = 'Vanilla'
}

//Background stuff
setInterval(Forever, 0)