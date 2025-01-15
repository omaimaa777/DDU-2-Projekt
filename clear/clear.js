function addCellEventListeners() {
    let cells = document.querySelectorAll("#grid .cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", function () {
            if (cells[i].clicked) {
                cells[i].style.backgroundColor = "#0e4c92";
            } else {
                cells[i].style.backgroundColor = "#7285a5";
            }
        });

        cells[i].addEventListener("mouseout", function () {
            if (cells[i].clicked) {
                cells[i].style.backgroundColor = "#131e3a";
            } else {
                cells[i].style.backgroundColor = "";
            }
        });

        cells[i].addEventListener("click", function () {
            if (cells[i].clicked) {
                cells[i].style.backgroundColor = "";
                cells[i].textContent = array[i];
                cells[i].clicked = false;
            } else {
                cells[i].style.backgroundColor = "#0e4c92";
                cells[i].textContent = "";
                cells[i].clicked = true;
            }
        });
    }
}

const clearButton = document.createElement("button");
body.insertBefore(clearButton, grid);
clearButton.textContent = "Fill Cleared";
clearButton.setAttribute("class", "wantMargin");

clearButton.addEventListener("click", function () {
    const cells = document.querySelectorAll("#grid .cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "";
        cells[i].textContent = array[i];
        cells[i].clicked = false;
    }
});

addCellEventListeners();

createButton.addEventListener("click", function () {
    addCellEventListeners();
});