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
let type = ""
let showAnwser = true;

let numbersArray = [];

function checkLength(){
    if(screenText.textContent.length == 12) canAddNumber = false;
    else canAddNumber = true;
}

function clearScreen () {
    screenText.textContent = 0;
    showAnwser = true;
    numbersArray = [];
}


function pushNumbers(type){
    if (showAnwser) return;
    let expression;
    if (numbersArray.length < 1){
        expression = {number: screenText.textContent, operation:type}
    } else {
        numbersArray.map(value => {
            if (value.operation != "none"){
                expression = {number: screenText.textContent, operation:"none"}
            } else {
                console.log(type)
                expression = {number: screenText.textContent, operation:type}
            }
        })
    }

    numbersArray.push(expression);
    showAnwser = true;
    screenText.textContent = "";
    operator();    

}







function evaluateExpression(array){

    let anwser = 0;

    array.map (value => {
        console.log(value)
        if (value.operation == "addition"){

            anwser = Number(numbersArray[0].number) + Number(numbersArray[1].number);
            
            
        }
        if (value.operation == "multiply"){
             anwser = Number(numbersArray[0].number) * Number(numbersArray[1].number);
        }


    })
    let finalAnwser = {number: anwser, operation: "none"};
    console.log(finalAnwser);
    numbersArray = [finalAnwser]


    screenText.textContent = finalAnwser.number;
    if (screenText.textContent.length > 12){
        let number = Number(screenText.textContent);
        let roundedNumber = number.toExponential(8);
        screenText.textContent = roundedNumber;
    }
}



function operator () {
    console.log(numbersArray)
    if(numbersArray.length  < 1) return;
    if (numbersArray.length != 2){
        let expression = {number: Number(screenText.textContent), operation: "none"}
        numbersArray.push(expression)
    }
    if (numbersArray.length == 2){
        evaluateExpression(numbersArray)
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

let operateButtons = [{button:plus, execute: pushNumbers, type: "addition"}, {button:equals, execute: operator},
                      {button:multiply, execute: pushNumbers, type: "multiply"}


]

                    
numberButtons.map(numberButton => {
    numberButton.button.addEventListener("click", () => {
        checkLength();
        if(canAddNumber){
            if (showAnwser){
                screenText.textContent = "";

                showAnwser = false;
            }
            screenText.textContent += numberButton.number;

            
        }
    })
})

function executeButtons(buttn){
    buttn.map(calcButton => {
        calcButton.button.addEventListener("click", () => {
            if (calcButton.type){
                calcButton.execute(calcButton.type)
            }
            calcButton.execute();
        })
    })
    
}

executeButtons(systemButtons);
executeButtons(operateButtons)

