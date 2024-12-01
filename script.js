
function calculateArea(width, height) {
    
    while (isNaN(width) || width <= 0 || isNaN(height) || height <= 0) {
        console.log("Please enter valid positive numbers for width and height.");
        width = parseFloat(prompt("Enter a positive number for width:"));
        height = parseFloat(prompt("Enter a positive number for height:"));
    }

    const area = width * height;
    console.log(`The area of the rectangle is: ${area}`);
    
    const areaElement = document.getElementById("areaResult");
    if (areaElement) {
        areaElement.innerText = `Area: ${area}`;
    }
}


calculateArea(5, 3);  // Outputs 15
calculateArea(10, 5); // Outputs 50


document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("colorButton");

    button.addEventListener("click", function () {
        
        alert("Button clicked!");

        
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

        
        button.style.transition = "background-color 0.3s ease";
        button.style.backgroundColor = randomColor;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const ul = document.getElementById("itemList");

    const newItem = document.createElement("li");
    newItem.textContent = "Item 4";
    ul.appendChild(newItem);

    
    function getRandomString(length = 8) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    ul.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            event.target.textContent = getRandomString(10);
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const div = document.getElementById("boxModelDiv");

    
    div.addEventListener("click", function () {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        div.style.backgroundColor = randomColor;
    });

    
    div.addEventListener("mouseover", function () {
        const randomBorderColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        div.style.borderColor = randomBorderColor;
    });

    
    div.addEventListener("mouseout", function () {
        div.style.borderColor = "#333";
    });
});
