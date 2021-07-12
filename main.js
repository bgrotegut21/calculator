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
let additionNumbers = [];

function checkLength(){
    if(screenText.textContent.length == 12) canAddNumber = false;
    else canAddNumber = true;
}

function clearScreen () {
    screenText.textContent = "";
}

function addDecimal(){  
    isDecimal = /\./.test(screenText.textContent)
    if(!isDecimal) screenText.textContent += "."; 
}

function deleteText(){
    screenLength = screenText.textContent.length;
    screenText.textContent = screenText.textContent.slice(0, screenLength-1);
}
function operatorNumbers(number){
    
}
function addition(number){
    additionNumbers.push(number);
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

numberButtons.map(numberButton => {
    numberButton.button.addEventListener("click", () => {
        if(canAddNumber){
            screenText.textContent += numberButton.number;
        }
        checkLength();
    })
})

systemButtons.map(systemButton => {
    systemButton.button.addEventListener("click", () => {
        systemButton.execute();
    })
})

