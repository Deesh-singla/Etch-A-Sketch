for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    document.getElementById('container').append(div);
    color();
}


function color() {
    let div = document.querySelectorAll('#container div');
    div.forEach(div1 => {
        div1.addEventListener("mouseenter", () => {
            div1.style.backgroundColor = "black";
        })
    })
}

let num_of_box = 0;
document.getElementById("index").addEventListener("click", () => {
    num_of_box = document.getElementById("in").value;
    if (num_of_box > 100) { alert('no. of boxes cannot be more then 100 in one side') }
    else if (num_of_box === "" || isNaN(num_of_box) || num_of_box <= 0) {
        alert('Please enter a valid number greater than 0.');
        clear();
    }
    else {
        newgrid();
    }
})

function newgrid() {
    let container = document.querySelector("#container");
    let div = document.querySelectorAll('#container div');
    div.forEach((div1) => {
        container.removeChild(div1);
    })
    for (let i = 0; i < num_of_box * num_of_box; i++) {
        let div = document.createElement('div');
        let a = 480 / num_of_box
        div.style.height = `${a}px`;
        div.style.width = `${a}px`;
        container.append(div);
    }
    color();
}

function clear() {
    let div = document.querySelectorAll("#container div");
    div.forEach(div1 => {
        div1.style.backgroundColor = "white";
    })
}

function eraser() {
    let div = document.querySelectorAll("#container div");
    div.forEach(div1 => {
        div1.addEventListener("mouseenter", () => {
            div1.style.backgroundColor = "white";
        })
    })
}

function randomColor() {
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);
    let div = document.querySelectorAll("#container div");
    div.forEach(div1 => {
        div1.addEventListener("mouseenter", () => {
            div1.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
        })
    })
}
function randomColor2() {
    let div = document.querySelectorAll("#container div");
    div.forEach(div1 => {
        let random1 = Math.floor(Math.random() * 255);
        let random2 = Math.floor(Math.random() * 255);
        let random3 = Math.floor(Math.random() * 255);
        div1.addEventListener("mouseenter", () => {
            div1.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
        })
    })
}
function opacity() {
    let divs = document.querySelectorAll("#container div");
    divs.forEach(div1 => {
        let x=0;
        div1.addEventListener("mouseenter", () => {
            x+=0.1;
            div1.style.backgroundColor = `rgb(0,0,0,${x})`; 
        });

    });
}


document.getElementById("clear").addEventListener("click", clear)

document.getElementById("eraser").addEventListener("click", eraser)

document.getElementById("color").addEventListener("click", () => {
    clear();
    randomColor();
})

document.getElementById("rgb").addEventListener("click", () => {
    clear();
    randomColor2();
})
document.getElementById("opacity").addEventListener("click", () => {
    clear();
    opacity();
})

