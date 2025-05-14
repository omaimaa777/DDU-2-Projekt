function setupClearCells() {
    let cells = document.querySelectorAll("#grid .cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", function () {
            if (cells[i].clicked) {
                cells[i].style.backgroundColor = "salmon";
            } else {
                cells[i].style.backgroundColor = "lightblue";
            }
        });

        cells[i].addEventListener("mouseout", function () {
            if (cells[i].clicked) {
                cells[i].style.backgroundColor = "lightcoral";
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
                cells[i].style.backgroundColor = "lightcoral";
                cells[i].textContent = "";
                cells[i].clicked = true;
            }
        });
    }
}

const clearButton = document.createElement("button");

body.insertBefore(clearButton, grid);

clearButton.textContent = "Restore All Numbers";
clearButton.setAttribute("class", "wantMargin");

setupClearCells();

clearButton.addEventListener("click", function () {
    const cells = document.querySelectorAll("#grid .cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "";
        cells[i].textContent = array[i];
        cells[i].clicked = false;
    }
});

createButton.addEventListener("click", function () {
    setupClearCells();
});
