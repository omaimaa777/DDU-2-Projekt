function highlightMatchingCells(number) {
    let cells = document.querySelectorAll("#grid .cell");
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === "X") {
            cells[i].style.backgroundColor = "#131e3a";
        } else if (parseInt(cells[i].textContent) === number) {
            cells[i].style.backgroundColor = "#0e4c92";
        } else {
            cells[i].style.backgroundColor = "";
        }
    }
}

function replaceMatchingCells(number) {
    let cells = document.querySelectorAll("#grid .cell");
    let count = 0;
    for (let i = 0; i < cells.length; i++) {
        if (parseInt(cells[i].textContent) === number) {
            cells[i].textContent = "X";
            cells[i].style.backgroundColor = "#131e3a";
            count++;
        }
    }
    return count;
}

const divRemove = document.createElement("div");
const newRandomNumber = document.createElement("button");
const removeButton = document.createElement("button");
const numberBox = document.createElement("div");
const removeBox = document.createElement("div");
let randomNum

body.insertBefore(divRemove, grid);
divRemove.appendChild(newRandomNumber);
divRemove.appendChild(numberBox);
divRemove.appendChild(removeButton);
divRemove.appendChild(removeBox);

divRemove.setAttribute("id", "divRemove");
numberBox.setAttribute("class", "boxes");
removeBox.setAttribute("class", "boxes");

removeBox.textContent = " - ";
numberBox.textContent = " - ";
newRandomNumber.textContent = "New random number";
removeButton.textContent = "Remove";

newRandomNumber.addEventListener("click", function () {
    randomNum = randomNumber();
    numberBox.textContent = randomNum;
    highlightMatchingCells(randomNum);
    removeBox.textContent = " - ";
});

removeButton.addEventListener("click", function () {
    let numberToRemove = parseInt(numberBox.textContent);
    let count = replaceMatchingCells(numberToRemove);
    removeBox.textContent = `${randomNum} removed: ${count} times`;
    if (count === 1) {
        removeBox.textContent = `${randomNum} removed: ${count} time`;
    }
    else if (removeBox.textContent === `${randomNum} removed: 0 times`) {
        removeBox.textContent = "Nothing to remove";
    }
});