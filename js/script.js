let currentGridSize = 8;
const container = document.querySelector("#container");
const gridSize = document.querySelector("#btn");
const clearGrid = document.querySelector("#clearbtn");

    gridSize.addEventListener("click", function(size){
        size = parseInt(prompt("How many squares you want to create?"));
        if (size >= 1 && size <= 100) {
            createGrid(size);
        } else if(isNaN(size)) {
            alert("Enter a number please.");
        } else {
            alert("Enter a number between 1 and 100");
        }
        
    });

    clearGrid.addEventListener("click", function(){
        size = 8
        if (size) {
            createGrid(size);
        }
    });

function createGrid(size) {
    container.innerHTML= '';

    for (let i = 0; i < size * size; i++) { 
        const gridDiv = document.createElement("div")
        let randomNumberR = Math.floor(Math.random() * 256);
        let randomNumberG = Math.floor(Math.random() * 256);
        let randomNumberB = Math.floor(Math.random() * 256);
        gridDiv.style.background = `rgb(${randomNumberR},${randomNumberG},${randomNumberB})`;
        gridDiv.dataset.originalR = randomNumberR;
        gridDiv.dataset.originalG = randomNumberG;
        gridDiv.dataset.originalB = randomNumberB;
        gridDiv.dataset.darknessLevel = 0;
        gridDiv.addEventListener("mouseenter", function(){
            /*gridDiv.style.background = "black";*/
            let currentDarknessLevel = parseInt(gridDiv.dataset.darknessLevel);
                currentDarknessLevel++
                gridDiv.dataset.darknessLevel = Math.min(currentDarknessLevel, 10);
            let originalR = parseInt(gridDiv.dataset.originalR);
            let originalG = parseInt(gridDiv.dataset.originalG); 
            let originalB = parseInt(gridDiv.dataset.originalB);
            let multiplier = (10 - currentDarknessLevel) / 10;
            let newR = Math.floor(originalR * multiplier);
            let newG = Math.floor(originalG * multiplier);
            let newB = Math.floor(originalB * multiplier);
            gridDiv.style.background = `rgb(${newR},${newG},${newB})`    
        })
        /*gridDiv.addEventListener("mouseleave", function(){
            let randomNumberR = Math.floor(Math.random() * 256);
            let randomNumberG = Math.floor(Math.random() * 256);
            let randomNumberB = Math.floor(Math.random() * 256);
            gridDiv.style.background = `rgb(${randomNumberR},${randomNumberG},${randomNumberB})`;
        });*/
        gridDiv.classList.add("grid-item");
        
        gridDiv.style.width = `${containerWidth / size}px`;
        gridDiv.style.height = `${containerHeight / size}px`;

        container.appendChild(gridDiv);
        
    }
}

// Get the container dimensions to calculate individual grid size
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

createGrid(currentGridSize, false);