let input = document.getElementById("inp");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

// Function to handle both button clicks and keyboard input
function handleInput(value) {
    if (value === "=") {
        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } else if (value === "Ac") {
        string = "";
        input.value = string;
    } else if (value === "DEL") {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else {
        string += value;
        input.value = string;
    }
}

// Add event listener for keyboard input
document.addEventListener('keydown', (e) => {
    if ((e.key >= '0' && e.key <= '9') || e.key === '.' || e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        // Allow numbers and basic math operators
        handleInput(e.key);
    } else if (e.key === 'Enter') {
        // Enter key is equivalent to "="
        handleInput('=');
    } else if (e.key === 'Backspace') {
        // Backspace key is equivalent to "DEL"
        handleInput('DEL');
    } else if (e.key === 'Escape') {
        // Escape key is equivalent to "Ac"
        handleInput('Ac');
    }
});
