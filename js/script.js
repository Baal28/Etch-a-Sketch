const container = document.querySelector("#container");
const gridSize = document.querySelector("#btn");

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

function createGrid(size) {
    container.innerHTML= '';

    for (let i = 0; i < size * size; i++) { 
        const gridDiv = document.createElement("div")
        let randomNumberR = Math.floor(Math.random() * 256);
        let randomNumberG = Math.floor(Math.random() * 256);
        let randomNumberB = Math.floor(Math.random() * 256);
        gridDiv.style.background = `rgb(${randomNumberR},${randomNumberG},${randomNumberB})`;
        gridDiv.addEventListener("mouseenter", function(){
            gridDiv.style.background = "black";
        })
        gridDiv.addEventListener("mouseleave", function(){
            let randomNumberR = Math.floor(Math.random() * 256);
            let randomNumberG = Math.floor(Math.random() * 256);
            let randomNumberB = Math.floor(Math.random() * 256);
            gridDiv.style.background = `rgb(${randomNumberR},${randomNumberG},${randomNumberB})`;
        });
        gridDiv.classList.add("grid-item");
        
        gridDiv.style.width = `${containerWidth / size}px`;
        gridDiv.style.height = `${containerHeight / size}px`;

        console.log(`Grid Item ${i} - Width: ${containerWidth / size}px, Height: ${containerHeight / size}px`);
        container.appendChild(gridDiv);
        
    }
}

// Get the container dimensions to calculate individual grid size
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;