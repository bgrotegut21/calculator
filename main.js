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
let errorMessage = document.querySelector(".error-message")

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
    !expressionString.includes("^")   &&/^\d+[*/+^/]\d+$/.test(expressionString) || /^\d+[+]-\d+$/.test(expressionString) ||  /^\d{9}[+\-*!^/]$/.test(expressionString)){
        return true;
    } else if(expressionString.includes("*") && !expressionString.includes("+") && !expressionString.includes("/") &&
     !expressionString.includes("^") &&  !expressionString.includes("!") && /^\d+[*/+^/]\d+$/.test(expressionString) || /^\d+[*]-\d+$/.test(expressionString) || 
     /^\d{9}[+\-*!/^]$/.test(expressionString) ){
        return true;
    } else if(expressionString.includes("/") && !expressionString.includes("*") && !expressionString.includes("+") && 
    !expressionString.includes("^") &&  !expressionString.includes("!") && /^\d+[*/+^/]$\d+/.test(expressionString) || /^\d+[/]-\d+$/.test(expressionString) || 
    /^\d{9}[+\-*!^/]$/.test(expressionString)){
        return true;
    } else if(expressionString.includes("^") && !expressionString.includes("*") && !expressionString.includes("+")  && 
    !expressionString.includes("/")&&  !expressionString.includes("!") && /^\d+[*/+^/]\d+$/.test(expressionString) || /^\d+[\^]-\d+$/.test(expressionString) || 
    /^\d{9}[+\-*!^/]$/.test(expressionString) ) {
        return true;
        
    } else if (expressionString.includes("!") && !expressionString.includes("*") && !expressionString.includes("+")  && 
    !expressionString.includes("/")&&  !expressionString.includes("^") && /^\d+[*/+^]$/.test(expressionString) || /^\d{9}[+\-*!^/]\d+$/.test(expressionString) ||
     /^Error!$/.test(expressionString)) {
        return true;
    } else {
        return false;
    }

}

function subtractionOperator(){
    if (testFactorial(expressionString)) return;
    if (expressionString == "0") expressionString = "-";
    if (expressionString == "-") return;


    if( /^-\d+$/g.test(expressionString) || /^\d+$/g.test(expressionString) || /^-\d+[+/*^!\/]$/.test(expressionString) || /^\d+[+/*^!/]$/.test(expressionString) ||
    /^-\d+\.\d+$/g.test(expressionString) || /^\d+\.\d+$/g.test(expressionString) ||/^-\d+\.\d+[+/*^!/]$/.test(expressionString) ||/^\d+\.\d+[+/*^!/]$/.test(expressionString) || 
    /^Error[+/*^!/]$/.test(expressionString) || /^Error$/.test(expressionString) || /^\d+\.\d+e[+\-]\d+$/.test(expressionString) || /^\d+\.\d+e[+\-]\d+[*+/^!/]$/.test(expressionString)){
        expressionString += "-"
    } 

}

function testString(string){
    if (/-\d+[+/*^!\-/]\d+/.test(string) || /-\d+\.\d+[+/*^\-/]\d+\.\d+/.test(string) ||  /-\d+\.\d+[+/*^\-/]-\d+\.\d+/.test(string)  || /-\d+[+/*^!\-/]-\d+/.test(string) ||
    /-\d+-\d+/.test(string) || /-\d+\.\d+-\d+\.\d+/.test(string) || /\d+-\d+/.test(string)  || /\d+\.\d+-\d+\.\d+/.test(string)  || /\d+[+/*^!\-/]\d+/.test(string)||
    /\d+\.\d+e[+\-]\d+[/+\-*!^]\d+/.test(string) ||  /Error[+/*^!\-]\d+/.test(string) ||  /Error[+/*^!-\-/]-\d+\./.test(string) || /Infinity[+/*^!\-/]\d+/.test(string) 
    || /Infinity[+/*^!\-/]-\d+/.test(string) || /\d+\.\d+e[+\-]\d+[/+/\-*!^]\d+/.test(string) || /\d+\.\d+e[+\-]\d+[/+/\-*!^]\d+\.\d+/.test(string)){
        return true;
    } else {
        return false;
    }
}


function swapInEFomrat(string, operator){
    let index = 0
    let stringWithOperator = ""
    for (let char of string){
        if (index == string.length-1){
            stringWithOperator += operator;
            break;
        }
        stringWithOperator += char;
        index += 1;
    }

    console.log(stringWithOperator, "string with operators")
    
    return stringWithOperator;

    
}

function swapExponentinalSubtraction(string,operator){

    let newString = ""
    for (let char of string){
        if (char == string[string.length - 1]){
            newString += operator; 
        } else {
            newString += char;
        }
    }
    console.log(newString)

}


function swapOperators (operator){
    let swapOperator;
    let fixedOperator = false;
    let isExponotinalFormat = false;
    let swapSubtraction = false
    let normalFormat = false;
    let exponontenialSubtractionFormat = false;
    console.log(operator, "operator")
    if(/^\d+\.\d+e[+\-]\d+[\/+\-*!^]$/.test(expressionString) || /6\d+\.\d+e[+\-]\d+\.\d+[\/+\-*!^]$/.test(expressionString)){
        isExponotinalFormat = true;
        fixedOperator = true;
        if(operator == "-") fixedOperator = false;
    } else if (/\d+\.\d+e[+\-]\d+/.test(expressionString)){
        isExponotinalFormat = true;

    } else if (/\d+-/.test(expressionString) || /\d+\.\d+-/.test(expressionString) || /-\d+-/.test(expressionString) || /-\d+\.\d+/.test(expressionString)){
        swapSubtraction = true
        fixedOperator = true;

    } else if (/\d+\.\d+e[+\-]\d+-/.test(expressionString)){
        exponontenialSubtractionFormat = true;
        fixedOperator = true;
    }else if (/\d+[+\-/*!^]/.test(expressionString) || /\d+\.\d+[+\-/*!^]/.test(expressionString) || /\d+\.\d+e[+\-]\d+[+\-/*!^]/) {
        normalFormat = true;
        
    }

    console.log(isExponotinalFormat, "exponontenial format")

    if(normalFormat) {
        for (let value of expressionString){
            if(value == "+"|| value =="*"|| value =="/" || value == "^" || value == "!" )  fixedOperator = true;
            if(operator == "-") fixedOperator = false;
            if (value == "+") swapOperator = expressionString.replace(/\+/g, operator);
            if (value == "*") swapOperator = expressionString.replace(/\*/g, operator);
            if (value == "/") swapOperator = expressionString.replace(/\//g, operator);
            if (value == "^") swapOperator = expressionString.replace(/\^/g, operator);
            if (value == "!") swapOperator = expressionString.replace(/\!/g, operator);
     } 
    } else if (isExponotinalFormat) {
        swapOperator = swapInEFomrat(expressionString,operator)

    } else if (swapSubtraction){
        swapOperator = expressionString.replace(/\-/g,operator);
    }
     if(fixedOperator){
         expressionString = swapOperator;
     }else {
         if (operator != "-") expressionString += operator;
         else subtractionOperator();
     }
     console.log(expressionString, "expression String")
     console.log(fixedOperator, "fixed operator")

}

function addOperator(operator){


    if(testString(expressionString)) {
        evaluateExpression(expressionString);
    } else if(includesOperator()){
         evaluateExpression(expressionString);
    } else if (testFactorial(expressionString)){
        evaluateExpression(expressionString);
    } else if (checkLength()) {
        swapOperators(operator)

    }
    screenText.textContent = expressionString;
}




function addition(numbers,operator){
    console.log(numbers, "addition")
    let addOperator = false;
    let anwser = 0;
    numbers.map(value => {
        if (value == "" || value == "Error"){
            addOperator = true;
            value = 0;
        }
        anwser += Number(value);
    })
    if(String(anwser).length >= 8)  anwser = anwser.toExponential(1)

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

function subtraction(numbers,operator,isForm){
    let addOperator = false;
    let anwser = 0;
    numbers.map(value => {
        if (value == "" || value == "Error"){
            addOperator = true;
            value = 0;
        }
    })
    if(!isForm) anwser = Number(numbers[0]) - Number(numbers[1]);
    else anwser = Number(numbers[0]) + Number(numbers[1])

    if(String(anwser).length >= 8)  anwser = anwser.toExponential(1)
    if (addOperator) expressionString = String(anwser) + operator;
    else expressionString = String(anwser) + operator;
    
}

function multiplication(numbers,operator){
    console.log(numbers, "Multiplication")
    console.log("multiply")

    let addOperator = false;
    let anwser = 1;
    numbers.map(value => {
        if (value == "" || value == "Error"){
            addOperator = true;
            value = 1;
        }
        anwser *= Number(value);
    })
    if(String(anwser).length >= 8)  anwser = Number(anwser).toExponential(1)
    if (addOperator) expressionString = String(anwser) + operator;
    else expressionString = String(anwser) + operator;
    screenText.textContent = expressionString;
}

function division(numbers,operator){

    let addOperator = false;
    let anwser = 1;
    numbers.map(value => {
        if (value == "" || value == "Error"){
            addOperator = true;

        }
    })

    anwser = Number(numbers[0])/Number(numbers[1]);
    if (addOperator){
        anwser = numbers[0]
    } else {
            if (numbers[1] == 0 && numbers[0] == 0){

        anwser = "Error"
    } else {

        anwser = numbers[0]/numbers[1];
    }

    }

    if(String(anwser).length >= 8)  anwser = anwser.toExponential(1)
    if (addOperator) expressionString = String(anwser) + operator;
    else expressionString = String(anwser) + operator;
    
}


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


function power(numbers,operator){
    let addOperator = false;
    let anwser = 1;
    if(String(numbers[1]).length > 3 && String(numbers[0]) != "Error") {
        numbers[0] = "Error"
        displayErrorMessage();
        addOperator = true;
 
    }
    numbers.map(value => {
        let index = 0
        if (value == "" || value == "Error"){
            addOperator = true;
        }
        index +=1;
    })

    if (!addOperator){
        anwser = toPower(numbers[0],numbers[1])
    } else {
        anwser = numbers[0];
    }
    if(String(anwser).length >= 8)  anwser = anwser.toExponential(1)
    if (addOperator) expressionString = String(anwser) + operator;
    else expressionString = String(anwser) + operator;
    screenText.textContent = expressionString;
}

function findFactorial(numbers){
    let anwser;
    if (numbers[0] == "Error") numbers[0] = "0";


    if(expressionString.length > 4 && expressionString != "Error!") {
        anwser= "Error"
        displayErrorMessage();
    }
    else anwser = factorNumber(Number(numbers[0]), Number(numbers[0]))
    

    function factorNumber(number){
        if( number == 0 || number == 1){
            return 1;
        } else {
            return number * factorNumber(number -1);
        }
    }
    if(String(anwser).length >= 8)  anwser = anwser.toExponential(1)
    expressionString = String(anwser);

}

function displayErrorMessage(){
    window.setTimeout(() => {
        errorMessage.style.display = "none"
    }, 3000)
    errorMessage.style.display = "block"


}

function changeNumbers(string){
    let numbers = []
    let index = 0;
    let  first = false;
    for (let char of string){
        if (char == "-" || char == "+"){
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
    return numbers;

}

function turnEFormatIntoNumber(string,isDecimal){
    let newString;
    if (isDecimal){
        newString = string.replace(/(\d+\.\d+e[+\-]\d+)[/+/\-*!^](\d+\.\d+)/,"$1 $2")
    } else {
        newString = string.replace(/(\d+\.\d+e[+\-]\d+)[/+/\-*!^](\d+)/,"$1 $2")
    }
    let numbers = newString.split(" ");
    return numbers


    

}


function operateNumbers(string,operator){
    let numbers = string.split(operator);
    let isForm = false;

    if(/\d+\.\d+e[+\-]\d+[/+/\-*!^]\d+/.test(string)) numbers =  turnEFormatIntoNumber(expressionString,false);
    else if(/\d+\.\d+e[+\-]\d+[/+/\-*!^]\d+\.\d+/.test(string)) numbers = turnEFormatIntoNumber(expressionString, true);


    console.log(numbers, "numbers")

    if(/-\d+-\d+/.test(string) || /-\d+\.\d+-\d+/.test(string) || /-\d+\.\d+-\d+\.\d+/.test(string)){
        isForm = true
        numbers = changeNumbers(string);
    }

    console.log(numbers, "numbers")

    if (operator =="+") addition(numbers,"+")
    if (operator =="*") multiplication(numbers,"*")
    if (operator =="/") division(numbers,"/")
    if (operator == "^") power(numbers, "^");

    if (operator == "!") findFactorial(numbers, "!")
    if (operator == "-")subtraction(numbers,"-",isForm)


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
    } else if (/^\d+\.\d+e[+\-]\d+[\/+\-*!^]\d+$/.test(expressionString)) {
        expressionString += "."
    } else if (/^-\d+\.\d+e[+\-]\d+[\/+\-*!^]\d+$/.test(expressionString)) {
        expressionString += "."
    } else if (/^-\d+\.\d+e[+\-]\d+[\/+\-*!^]-\d+$/.test(expressionString)) {
        expressionString += "."
    } else if (/^\d+\.\d+e[+\-]\d+[\/+\-*!^]-\d+$/.test(expressionString))
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
    if ( /^\d+\.\d+e[+\-]\d+$/.test(expressionString) || /^-\d+\.\d+e[+\-]\d+$/.test(expressionString)) expressionString = "0"
    if (expressionString == "" || expressionString == "Error") expressionString = "0"
    else expressionString = expressionString.slice(0,stringLength-1)
    if (expressionString == "" || expressionString == "Error") expressionString = "0"
    screenText.textContent = expressionString
}

function checkLength(){
    if(expressionString.length  > 11) return false
    else return true;
}

function testEFormat(string){
    if(/\d+\.\d+e[+\-]\d+\+\d+/.test(string) || /\d+\.\d+e[+\-]\d+\+\d+\.\d+/.test(string)) operateNumbers(string,"+");
    if(/\d+\.\d+e[+\-]\d+\*\d+/.test(string) || /\d+\.\d+e[+\-]\d+\*\d+\.\d+/.test(string)) operateNumbers(string,"*");
    if(/\d+\.\d+e[+\-]\d+\/\d+/.test(string) || /\d+\.\d+e[+\-]\d+\/\d+\.\d+/.test(string)) operateNumbers(string,"/");
    if(/\d+\.\d+e[+\-]\d+\^\d+/.test(string) || /\d+\.\d+e[+\-]\d+\^\d+\.\d+/.test(string)) operateNumbers(string,"^");
    if(/\d+\.\d+e[+\-]\d+\!\d+/.test(string) || /\d+\.\d+e[+\-]\d+\!\d+\.\d+/.test(string)) operateNumbers(string,"!");
    if(/\d+\.\d+e[+\-]\d+\-\d+/.test(string) || /\d+\.\d+e[+\-]\d+\-\d+\.\d+/.test(string)) operateNumbers(string,"-");
}

function evaluateExpression (string){
    if(/\d+\.\d+e[+\-]\d+[/+/\-*!^]\d+/.test(string) || /\d+\.\d+e[+\-]\d+[/+/\-*!^]\d+\.\d+/.test(string)) {
        testEFormat(expressionString)
    } else {
        for (let value of string){
            if(value == "+") operateNumbers(string,"+");
            if(value == "*") operateNumbers(string, "*");
            if(value == "/") operateNumbers(string, "/");
            if(value == "^") operateNumbers(string, "^");
            if(value == "!") operateNumbers(string,"!")
        }
        if (checkSubtraction(string)) operateNumbers(string, "-")


    }



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