function addCellEventListeners() {
    let cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function () {
            let number = cells[i].textContent;
            let count = 0;
            for (let j = 0; j < cells.length; j++) {
                if (cells[j].textContent === number) {
                    cells[j].style.backgroundColor = "#0e4c92";
                    count++;
                } else {
                    cells[j].style.backgroundColor = "";
                }
            }
            pickNumber.textContent = `${count} copies of the number ${number}`;
            if (count === 1) {
                pickNumber.textContent = `${count} copy of the number ${number}`;
            }
        });
    }
}

const div = document.createElement("div");
const pickNumber = document.createElement("h2");
const resetButton = document.createElement("button");

body.insertBefore(div, grid);
div.appendChild(pickNumber);
div.appendChild(resetButton);
div.setAttribute("id", "numbers");
div.setAttribute("class", "wantMargin");
pickNumber.textContent = "Click on a number to find copies";
resetButton.textContent = "Reset";

resetButton.addEventListener("click", function () {
    resetGrid(function () {
        pickNumber.textContent = "Click on a number to find copies";
    });
});

addCellEventListeners();

createButton.addEventListener("click", function () {
    addCellEventListeners();
});