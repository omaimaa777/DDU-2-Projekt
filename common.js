function randomNumber() {
    return Math.ceil(99 * Math.random());
}

function startGrid() {
    const grid = document.createElement("div");
    grid.setAttribute("id", "grid");
    body.insertBefore(grid, script);
    for (let i = 0; i < 95; i++) {
        const cell = document.createElement("div");
        const randomNumbers = randomNumber();
        array.push(randomNumbers);
        grid.appendChild(cell);
        cell.setAttribute("class", `cell`);
        cell.textContent = randomNumbers;
    }
}

function resetGrid(callback) {
    let cells = document.querySelectorAll("#grid .cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "";
    }
    if (callback) {
        callback();
    }
};

const body = document.querySelector("body");
const homebutton = document.querySelector(".home-button");
const a = document.createElement("a");
const numbers = document.createElement("div");
const input = document.createElement("input");
const h2 = document.createElement("h2");
const createButton = document.createElement("button");
const script = document.querySelector("script");
let array = [];

homebutton.appendChild(a);
body.insertBefore(numbers, script);
numbers.appendChild(h2);
numbers.appendChild(input);
numbers.append(createButton);

a.setAttribute("class", "home-links");
a.setAttribute("href", "../index.html");
numbers.setAttribute("id", "numbers");

a.textContent = "Home"
h2.textContent = "How many numbers in the grid?";
createButton.textContent = "Create";

input.value = "95";

startGrid();

createButton.addEventListener("click", function () {
    const inputText = input.value;
    let grid = document.getElementById("grid");
    array = [];

    if (grid) {
        grid.innerHTML = "";
    } else {
        let grid = document.createElement("div");
        body.insertBefore(grid, script);
        grid.setAttribute("id", "grid");
    }

    for (let i = 0; i < input.value; i++) {
        let cell = document.createElement("div");
        let randomNumbers = randomNumber();
        array.push(randomNumbers);
        grid.appendChild(cell);
        cell.setAttribute("class", `cell`);
        cell.textContent = randomNumbers;

    }
});
