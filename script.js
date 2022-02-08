// 1. press button, display to the screen: left to right
// 2. press = show total result 
//3. press ac, clear the screen
//4. press c , delete the last character

const buttons = document.querySelectorAll("button");

const displayElement = document.querySelector("#result");



let textToDisplay = "";
const symbols = ["/", "*", "-", "+"];



buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        displayElement.style.background = "";
        displayElement.style.color = "";

        const val = btn.innerText;

        if (textToDisplay.length < 1 && symbols.includes(val)) return;

        if (symbols.includes(val) &&
            symbols.includes(textToDisplay[textToDisplay.length - 1])
        ) {

            textToDisplay = textToDisplay.slice(0, -1) + val;
            return display(textToDisplay);
        }


        //when = is clicked 

        if (val === "=") {
            if (!textToDisplay.length) return;

            if (symbols.includes(textToDisplay[textToDisplay.length - 1])) {
                textToDisplay = textToDisplay.slice(0, -1);
            }
            return onTotal();


        }

        //AC

        if (val === "AC") {
            return resetDisplay();

        }

        if (val === "C") {
            textToDisplay = textToDisplay.slice(0, -1);
            return display(textToDisplay);

        }

        if (val === "." && textToDisplay.includes(".")) return;


        textToDisplay = textToDisplay + val;
        display(textToDisplay);
    });
});

//show clicked btn to the screen 

const display = (toDisplay) => {

    displayElement.innerText = toDisplay;
    displayElement.innerText = toDisplay || "0.00";

};

//calculate the value 

const onTotal = () => {
    const randVal = randomNumber();

    if (randVal > 0) {
        displayElement.style.background = "maroon";
        displayElement.style.color = "white";
        displayElement.classList.add("prank");
        displayElement.addEventListener("animationend", () => {
            // displayElement.classList.remove("");
        });

    }
    const total = eval(textToDisplay) + randVal;
    display(total);
    textToDisplay = "";
}

//reset the dislay screen
const resetDisplay = () => {
    display("0.00");
    textToDisplay = "";
}

const randomNumber = () => {
    const val = Math.floor(Math.random() * 10);

    return val < 4 ? val : 0
};