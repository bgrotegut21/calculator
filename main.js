let clear = document.querySelector(".clear");
let backspace = document.querySelector(".backspace");
let exponent = document.querySelector(".exponent");
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
let canEdit = true

let expressionString = "0"




function clearScreen(){
    expressionString = "0";
    screenText.textContent = expressionString;
}

function includesOperator(){
if(expressionString.includes("+") && !expressionString.includes("*") && !expressionString.includes("/") && !expressionString.includes("^") &&/\d+[*/+]\d+/.test(expressionString)){
        return true;
    } else if(expressionString.includes("*") && !expressionString.includes("+") && !expressionString.includes("/") && !expressionString.includes("^") && /\d+[*/+]\d+/.test(expressionString)){
        return true;
    } else if(expressionString.includes("/") && !expressionString.includes("*") && !expressionString.includes("+") && !expressionString.includes("^") && /\d+[*/+]\d+/.test(expressionString)){
        return true;
    } else if(expressionString.includes("^") && !expressionString.includes("*") && !expressionString.includes("+")  && !expressionString.includes("/")&& /\d+[*/+]\d+/.test(expressionString)) {
        return false;
    }

}



function addOperator(operator){
    let fixedOperator = false;
    let swapOperator;
    if(expressionString.includes(operator)){
        evaluateExpression(expressionString);
    } else if (includesOperator()){
        evaluateExpression(expressionString)
        expressionString += operator;
    }   else {
        for (let value of expressionString){
           if(value == "+"|| value =="*"|| value =="/" || value == "^") fixedOperator = true;
           if (value == "+") swapOperator = expressionString.replace(/\+/g, operator);
           if (value == "*") swapOperator = expressionString.replace(/\*/g, operator);
           if (value == "/") swapOperator = expressionString.replace(/\//g, operator);
           if (value == "^") swapOperator = expressionString.replace(/\^/g, operator);

        }

        if(fixedOperator){
            expressionString = swapOperator;
            screenText.textContent = expressionString;
        } else {
            expressionString += operator;
        }



    }
    screenText.textContent = expressionString;
}

function addition(numbers,operator){
    let addOperator = false;
    let anwser = 0;
    numbers.map(value => {
        if (value == "" || value == "Error"){
            addOperator = true;
            value = 0;
        }
        anwser += Number(value);
    })

    if (addOperator) expressionString = String(anwser) + operator;
    else expressionString = String(anwser);
    
}

function multiplication(numbers,operator){

    let addOperator = false;
    let anwser = 1;
    numbers.map(value => {
        if (value == "" || value == "Error"){
            console.log(value);
            addOperator = true;
            value = 1;
        }
        anwser *= Number(value);
    })

    if (addOperator) expressionString = String(anwser) + operator;
    else expressionString = String(anwser);
    
}

function division(numbers,operator){
    let addOperator = false;
    let anwser = 1;
    numbers.map(value => {
        console.log(value)
        if (value == "" || value == "Error"){
            addOperator = true;

            value = number[0] * number[0];
        }
    })

    anwser = Number(numbers[0])/Number(numbers[1]);
    if (numbers[1] == 0 && numbers[0] == 0){

        anwser = "Error"
    } else {

        anwser = numbers[0]/numbers[1];
    }
    if (addOperator) expressionString = String(anwser) + operator;
    else expressionString = String(anwser);
    
}

function power(numbers,operator){
    let addOperator = false;
    let anwser = 1;
    numbers.map(value => {
        if (value == "" || value == "Error"){
            addOperator = true;
            value = 1;
        }
    })

    function toPower(number, power){
        if (power == 0){
            return 1;
        } else if (power == 1){
            return number
        } else {
            let powerNumber = number * number;
            let powerExponent = power-1
            toPower(powerNumber, powerExponent)
        }
    }
    anwser = toPower(numbers[0],numbers[1])
    console.log(anwser)

    if (addOperator) expressionString = String(anwser) + operator;
    else expressionString = String(anwser);
}



function operateNumbers(string,operator){

    let numbers = string.split(operator);
    if(operator == "+"){
        addition(numbers,"+")
    }
    if(operator == "*"){
        multiplication(numbers,"*")
    }
    if(operator == "/"){
        division(numbers,"/")
    }
    if (operator == "^"){
        power(numbers, "^")
    }




}


function equalExpression () {
    evaluateExpression(expressionString);
    screenText.textContent = expressionString;
}

function addDecimal(){
    checkLength();
    if (!canEdit) return;
    if (screenText.textContent == "0") screenText.textContent = ""
    let addDecimal = true;
    let stringIsBeforeOoperator = true;
    let testString = ["",""]
    let index = 0;
    
    for(let value of expressionString){
        if (value == "+"  || value ==  "/" || value == "*" || value == "^") {
            index += 1;
        }
        testString[index] += value;
    }
    let stringBeforeOperator = /\./g.test(testString[0]);
    let stringAfterOperator = "";
    if(testString[1] != ""){
         stringAfterOperator = /\./g.test(testString[1]);
    }

    if (testString[1] != ""){
        stringIsBeforeOoperator = true;
        if (stringBeforeOperator && stringAfterOperator){
            addDecimal = false;
        } else if (!stringBeforeOperator && stringAfterOperator){
            addDecimal = false;
        } else {
            addDecimal = true;
        }
        
    } else {
        stringIsBeforeOoperator = false;
        if (stringBeforeOperator) addDecimal = false;
        else addDecimal = true

    }
    if (!addDecimal) return ;
    if (stringIsBeforeOoperator){
        if (testString[1] == "+" || testString[1] == "*" || testString[1] ==  "/" || testString[1] == "^" ){
            expressionString += "0."
            screenText.textContent = expressionString;
        } else {
            expressionString += ".";
            screenText.textContent = expressionString;
        }
    } else {
        expressionString += ".";
        screenText.textContent = expressionString;
    }
}




function deleteChar () {
    stringLength = expressionString.length;
    expressionString = expressionString.slice(0,stringLength-1)
    if (expressionString == "") expressionString = "0"
    screenText.textContent = expressionString
}

function checkLength(){
    if(expressionString.length  == 12) canEdit = false;
    else canEdit = true;
}

function evaluateExpression (string){


    for (let value of string){
        if(value == "+") operateNumbers(string,"+");
        if(value == "*") operateNumbers(string, "*");
        if(value == "/") operateNumbers(string, "/");
        if(value == "^") operateNumbers(string, "^");
    }

}




let numbersArray = [{button:one, number:1}, {button:two, number:2},
    {button:three, number:3}, {button:four, number:4},
    {button:five, number: 5}, {button:six, number:6},
    {button:seven, number:7}, {button: eight, number:8},
    {button:nine, number:9}, {button: zero, number: 0},

]
let systemButtons = [{button: clear, execute: clearScreen}, {button: backspace, execute: deleteChar}, {button:decimal, execute: addDecimal}]
let operatorButtons = [{button: plus, execute: addOperator, operator:"+"}, {button: equals, execute: equalExpression},
                       {button:multiply, execute: addOperator, operator: "*"}, {button: divide, execute: addOperator, operator: "/"},
                       {button:exponent, execute: addOperator, operator:"^"}
]


numbersArray.map(numberButton => {
    numberButton.button.addEventListener("click", () => {
        checkLength()
        if(canEdit){
            if (expressionString == "0" || expressionString == "Error"){
                expressionString = ""
            }
            expressionString += numberButton.number;
            screenText.textContent = expressionString;

        }

    })
})




function operateButtons(operatorButton){
    operatorButton.map(calcButton => {
        calcButton.button.addEventListener("click", () => {
            
            if(typeof calcButton.operator != "undefined"){
                calcButton.execute(calcButton.operator)
            } else {
                calcButton.execute();
            }
        })
    })
}



operateButtons(systemButtons);
operateButtons(operatorButtons)