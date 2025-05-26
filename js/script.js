const container = document.querySelector("#container");

/*const div = document.createElement("div");
div.classList.add("grid");
div.setAttribute("style", "width: 150px; height: 150px; background: pink;");

container.appendChild(div);*/

const gridSize = 16;
function createGrid(size) {
    for (let i = 0; i <= size; i++) { //Rows
        for (let j = 0; j <= size; j++) { //Columns
            const gridDiv = document.createElement("div")
            gridDiv.classList.add("grid-item");
            gridDiv.setAttribute("style", "background: pink;");
            gridDiv.style.width = `${containerWidth / size}px`;
            gridDiv.style.height = `${containerHeight / size}px`
            container.appendChild(gridDiv);
        }
        
    }
}

// Get the container dimensions to calculate individual grid size
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;
createGrid(gridSize);