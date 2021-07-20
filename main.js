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
let factorial = document.querySelector(".factorial")

let canAddNumber = true
let type = ""
let showAnwser = true;

let expressionString = "0"




function clearScreen(){
    expressionString = "0";
    screenText.textContent = expressionString;
}

function includesOperator(){
    if(expressionString.includes("+") && !expressionString.includes("*") && !expressionString.includes("/") && 
    !expressionString.includes("^")   &&/\d+[*/+^]\d+/.test(expressionString) || /\d+[+]-\d+/.test(expressionString) ){
        return true;
    } else if(expressionString.includes("*") && !expressionString.includes("+") && !expressionString.includes("/") &&
     !expressionString.includes("^") &&  !expressionString.includes("!") && /\d+[*/+^]\d+/.test(expressionString) || /\d+[*]-\d+/.test(expressionString) ){
        return true;
    } else if(expressionString.includes("/") && !expressionString.includes("*") && !expressionString.includes("+") && 
    !expressionString.includes("^") &&  !expressionString.includes("!") && /\d+[*/+^]\d+/.test(expressionString) || /\d+[/]-\d+/.test(expressionString)){
        return true;
    } else if(expressionString.includes("^") && !expressionString.includes("*") && !expressionString.includes("+")  && 
    !expressionString.includes("/")&&  !expressionString.includes("!") && /\d+[*/+^]\d+/.test(expressionString) || /\d+[\^]-\d+/.test(expressionString)) {
        return true;
        
    } else if (expressionString.includes("!") && !expressionString.includes("*") && !expressionString.includes("+")  && 
    !expressionString.includes("/")&&  !expressionString.includes("^") && /\d+[*/+^]/.test(expressionString)) {
        return true;
    } else {
        return false;
    }

}

function subtractionOperator(){
    if (testFactorial(expressionString)) return;
    if (expressionString == "0") expressionString = "-";
    if (expressionString == "-") return;


    if( /^-\d+$/g.test(expressionString) || /^\d+$/g.test(expressionString) || /-\d+[+/*^!]/.test(expressionString) || /\d+[+/*^!]/.test(expressionString) ||
    /^-\d+\.\d+$/g.test(expressionString) || /^\d+\.\d+$/g.test(expressionString) ||/-\d+\.\d+[+/*^!]/.test(expressionString) ||/\d+\.\d+[+/*^!]/.test(expressionString)){
        expressionString += "-"
    } 

}




function testString(string){
    if (/-\d+[+/*^!-]\d+/.test(string) || /-\d+\.\d+[+/*^-]\d+\.\d+/.test(string) ||  /-\d+\.\d+[+/*^-]-\d+\.\d+/.test(string)  || /-\d+[+/*^!-]-\d+/.test(string) ||
    /-\d+-\d+/.test(string) || /-\d+\.\d+-\d+\.\d+/.test(string) || /\d+-\d+/.test(string)  || /\d+\.\d+-\d+\.\d+/.test(string)) {
        return true;
    } else {
        return false;
    }
}


function swapOperators (operator){
    let swapOperator;
    let fixedOperator = false;
    for (let value of expressionString){
        if(value == "+"|| value =="*"|| value =="/" || value == "^" || value == "!" )  fixedOperator = true;
        if(operator == "-") fixedOperator = false;
      

        if (value == "+") swapOperator = expressionString.replace(/\+/g, operator);
        if (value == "*") swapOperator = expressionString.replace(/\*/g, operator);
        if (value == "/") swapOperator = expressionString.replace(/\//g, operator);
        if (value == "^") swapOperator = expressionString.replace(/\^/g, operator);
        if (value == "!") swapOperator = expressionString.replace(/\!/g, operator);
     } 
     if(fixedOperator){
         expressionString = swapOperator;
     } else {
         if (operator != "-") expressionString += operator;
         else subtractionOperator();
     }

}

function addOperator(operator){
    if(!checkLength()) return;
    console.log(operator)
    console.log(testString(expressionString))
    if(testString(expressionString)) {
        evaluateExpression(expressionString);
    } else if(includesOperator()){
         evaluateExpression(expressionString);
    } else if (testFactorial(expressionString)){
        evaluateExpression(expressionString);
    } else {
        swapOperators(operator)

    }
    screenText.textContent = expressionString;
}

function addition(numbers,operator){
    console.log(numbers)
    let addOperator = false;
    let anwser = 0;
    numbers.map(value => {
        if (value == "" || value == "Error"){
            addOperator = true;
            value = 0;
        }
        anwser += Number(value);
    })

    console.log(anwser)
    if (addOperator) expressionString = String(anwser) + operator;
    else expressionString = String(anwser) + operator;
    screenText.textContent = expressionString
    
}

function checkNegativeNumber(array){
    for (let string of array){
        if (string.includes("-")){
            return true;
        } 
    }
    return false;
}

function subtraction(numbers,operator){
    
    console.log(numbers)
    let addOperator = false;
    let anwser = 0;
    numbers.map(value => {
        if (value == "" || value == "Error"){
            addOperator = true;
            value = 0;
        }
    })
    anwser = Number(numbers[0]) + Number(numbers[1])

    console.log(anwser)
    if (addOperator) expressionString = String(anwser) + operator;
    else expressionString = String(anwser) + operator;
    screenText.textContent = expressionString
    
}

function multiplication(numbers,operator){
    console.log(numbers)

    let addOperator = false;
    let anwser = 1;
    numbers.map(value => {
        if (value == "" || value == "Error"){
            addOperator = true;
            value = 1;
        }
        anwser *= Number(value);
    })

    if (addOperator) expressionString = String(anwser) + operator;
    else expressionString = String(anwser) + operator;
    
}

function division(numbers,operator){
    let addOperator = false;
    let anwser = 1;
    numbers.map(value => {
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
    else expressionString = String(anwser) + operator;
    
}

function power(numbers,operator){
    let addOperator = false;
    let anwser = 1;
    numbers.map(value => {
        if (value == "" || value == "Error"){
            addOperator = true;
            
        }
    })
    if (!addOperator){
        function toPower(number, power){
            if (power == 0){
                return 1;
            } else if (power == 1){
                return number;
            } else {
                let powerNumber = number * number;
                let powerExponent = power-1
               return toPower(powerNumber, powerExponent)
            }
        }
        anwser = toPower(numbers[0],numbers[1])

    } else {
        anwser = numbers[0];
    }
    if (addOperator) expressionString = String(anwser) + operator;
    else expressionString = String(anwser) + operator;
    screenText.textContent = expressionString;
}

function findFactorial(numbers){
    let addOperator = false;

    let anwser = factorNumber(Number(numbers[0]), Number(numbers[0]))

    function factorNumber(number){
        if( number == 0 || number == 1){
            return 1;
        } else {
            return number * factorNumber(number -1);
        }
    }
    expressionString = String(anwser);

}

function changeNumbers(string){
    let numbers = []
    let index = 0;
    let  first = false;
    for (let char of string){
        if (char == "-"){
            if (!first){
                index = 0;
                first = true
                numbers.push("")
            } else {
                numbers.push("")
                index += 1;
            }

     
        }
        numbers[index] += char;
    }
    console.log(numbers)
    return numbers;

}

function operateNumbers(string,operator){
    let numbers = string.split(operator);


    if(/-\d+-\d+/.test(string) || /-\d+\.\d+-\d+/.test(string) || /-\d+\.\d+-\d+\.\d+/.test(string)){
        numbers = changeNumbers(string);
    }

    if (operator =="+") addition(numbers,"+")
    if (operator =="*") multiplication(numbers,"*")
    if (operator =="/") division(numbers,"/")
    if (operator == "^") power(numbers, "^");

    if (operator == "!") findFactorial(numbers, "!")
    if (operator == "-")subtraction(numbers,"-")

}



function equalExpression () {
    evaluateExpression(expressionString);
    screenText.textContent = expressionString;
}

function addDecimal(){
    checkLength();

    if (/^[\-]?\d+\.\d+[\/+\-*!^]\d+$/.test(expressionString)){
        expressionString += "."
    } else if (/^[\-]?\d+$/.test(expressionString)){
        expressionString += "."
    } else if (/^[\-]?\d+[\/+\-*!^]\d+$/.test(expressionString)){
        expressionString += "."
    } else if (/^[\-]?\d+[\/+\-*!^]-\d+$/.test(expressionString)) {
        expressionString += "."
    } else if (/^[\-]?\d+\.\d+[\/+\-*!^]\d+$/.test(expressionString)) {
        expressionString += "."
    } else if (/^[\-]?\d+\.\d+[\/+\-*!^]-\d+$/.test(expressionString)) {
        expressionString += "."
    }
    screenText.textContent = expressionString;
 
}

function checkSubtraction(string){
    if (/\d+-\d+/.test(string) || /-\d+-\d+/.test(string) || /\d+\.\d+-\d+\.\d+/.test(string) ||  /-\d+\.\d+-\d+\.\d+/.test(string)){
        return true;
    } else {
        return false
    }
}



function deleteChar () {
    stringLength = expressionString.length;
    expressionString = expressionString.slice(0,stringLength-1)
    if (expressionString == "") expressionString = "0"
    screenText.textContent = expressionString
}

function checkLength(){
    if(expressionString.length  == 12) return false
    else return true;
}

function evaluateExpression (string){

    for (let value of string){
        if(value == "+") operateNumbers(string,"+");
        if(value == "*") operateNumbers(string, "*");
        if(value == "/") operateNumbers(string, "/");
        if(value == "^") operateNumbers(string, "^");
        if(value == "!") operateNumbers(string,"!")
    }
    if (checkSubtraction(string)) operateNumbers(string, "-")

}


function testFactorial(string){
    if (/\d+!/.test(string) || /\d+\.\d+!/.test(string)) return true;
    else return false;
    
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
                       {button:exponent, execute: addOperator, operator:"^"}, {button: factorial, execute: addOperator, operator: "!"}, 
                       {button: minus, execute: addOperator,operator:"-" }
]


numbersArray.map(numberButton => {
    numberButton.button.addEventListener("click", () => {
        if(!checkLength()) return "";
        if (expressionString == "0" || expressionString == "Error") expressionString = ""
        if (!testFactorial(expressionString)) expressionString += numberButton.number;
        screenText.textContent = expressionString;

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