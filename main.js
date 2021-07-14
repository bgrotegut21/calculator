let clear = document.querySelector(".clear");
let backspace = document.querySelector(".backspace");
let squared = document.querySelector(".squared");
let divide = document.querySelector(".divide");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let multiply = document.querySelector(".multiply");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let minus = document.querySelector(".minus");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let plus = document.querySelector(".plus");
let zero = document.querySelector(".zero");
let decimal = document.querySelector(".decimal");
let equals = document.querySelector(".equals");
let screenText = document.querySelector(".screen-text")

let canAddNumber = true
let showAnwser = false;
let type = ""

let numbersArray = [Number(screenText.textContent)]

function checkLength(){
    if(screenText.textContent.length == 12) canAddNumber = false;
    else canAddNumber = true;
}

function clearScreen () {
    screenText.textContent = "";
    numbersArray = [];
}

function addition(){
    if (numbersArray.length != 2) {
        numbersArray.push(Number(screenText.textContent));
        showAnwser = true;
    }

    if(numbersArray.length == 2) {
        let anwser = numbersArray[0] + numbersArray[1];
        screenText.textContent = anwser;
        numbersArray = [anwser];
    }
}

function operator(){

    if (numbersArray.length != 2) {
        numbersArray.push(Number(screenText.textContent));
        showAnwser = true;
    } 
    
}






function addDecimal(){  
    if (showAnwser){
        screenText.textContent = "";
        showAnwser = false;
    }
    isDecimal = /\./.test(screenText.textContent)
    if(!isDecimal) screenText.textContent += "."; 
}

function deleteText(){
    if (showAnwser) screenText.textContent = "";

    screenLength = screenText.textContent.length;
    screenText.textContent = screenText.textContent.slice(0, screenLength-1);
}

let systemButtons = [{button:clear,execute: clearScreen},
                     {button:backspace, execute: deleteText},
                     {button:decimal, execute: addDecimal}                   
]

let numberButtons = [{button:one,number:1},{button:two,number:2},
                     {button:three,number:3},{button:four,number:4},
                    {button:five,number:5},{button:six,number:6},
                    {button:seven,number:7},{button:eight,number:8},
                    {button:nine,number:9}, {button: zero, number: 0}];

let operateButtons = [{button:plus, execute: addition}, {button:equals, execute: operator}]

                    
numberButtons.map(numberButton => {
    numberButton.button.addEventListener("click", () => {
        if(canAddNumber){
            if (showAnwser){
                screenText.textContent = "";
                showAnwser = false;
            }
            screenText.textContent += numberButton.number;
            numbersArray[0] = Number(screenText.textContent);
            console.log(numbersArray)


        }
        checkLength();
    })
})

function executeButtons(buttn){
    buttn.map(calcButton => {
        calcButton.button.addEventListener("click", () => {
            calcButton.execute();
        })
    })
    
}

executeButtons(systemButtons);
executeButtons(operateButtons)

