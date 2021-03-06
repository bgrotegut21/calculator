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
    /^Error[+/*^!/]$/.test(expressionString) || /^Error$/.test(expressionString) || /^\d+\.\d+e[+\-]\d+$/.test(expressionString) || /^\d+\.\d+e[+\-]\d+[*+/^!/]$/.test(expressionString) ||
    /^-\d+\.\d+e[+\-]\d+[*+/^!/]$/.test(expressionString) ||/\d+e[+\-]\d+[/+/\-*!^]\d+\.\d+/.test(expressionString) ||  /^-\d+\.\d+e[+\-]\d+$/.test(expressionString) ||  /^-\d+\.\d+e[+\-]\d+$/.test(expressionString)){
        expressionString += "-"
    } 

}

function testString(string){
    if (/-\d+[+/*^!\-/]\d+/.test(string) || /-\d+\.\d+[+/*^\-/]\d+\.\d+/.test(string) ||  /-\d+\.\d+[+/*^\-/]-\d+\.\d+/.test(string)  || /-\d+[+/*^!\-/]-\d+/.test(string) ||
    /-\d+-\d+/.test(string) || /-\d+\.\d+-\d+\.\d+/.test(string) || /\d+-\d+/.test(string)  || /\d+\.\d+-\d+\.\d+/.test(string)  || /\d+[+/*^!\-/]\d+/.test(string)||
    /\d+\.\d+e[+\-]\d+[/+\-*!^]\d+/.test(string) ||  /Error[+/*^!\-]\d+/.test(string) ||  /Error[+/*^!-\-/]-\d+\./.test(string) || /Infinity[+/*^!\-/]\d+/.test(string) 
    || /Infinity[+/*^!\-/]-\d+/.test(string) || /\d+\.\d+e[+\-]\d+[/+/\-*!^]\d+/.test(string) || /\d+\.\d+e[+\-]\d+[/+/\-*!^]\d+\.\d+/.test(string) ||  /\d+[+/*^!\-/]-\d+/.test(string) ||
    /\d+e[+\-]\d+[/+/\-*!^]\d+\.\d+/.test(string)){
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
    return stringWithOperator;
}

function createOperator(fixedOperator,swapOperator , operator) {
    if(fixedOperator){
        expressionString = swapOperator;
    } else {
        if (operator != "-" && /\d+$/.test(expressionString) || /\d+\.\d+e[+\-]\d+$/.test(expressionString)) expressionString += operator;
        else if(operator == "-") subtractionOperator();
    }

}

function swapNormalFormat(string,fixedOperator, operator){
    let swapOperator;
    for (let value of string){
        if(value == "+"|| value =="*"|| value =="/" || value == "^" || value == "!" )  fixedOperator = true;
        if(operator == "-") fixedOperator = false;
        if (value == "+") swapOperator = string.replace(/\+/g, operator);
        if (value == "*") swapOperator = string.replace(/\*/g, operator);
        if (value == "/") swapOperator = string.replace(/\//g, operator);
        if (value == "^") swapOperator = string.replace(/\^/g, operator);
        if (value == "!") swapOperator = string.replace(/\!/g, operator);

    }
    createOperator(fixedOperator,swapOperator, operator);
}


function swapSubtactionFormat(string,fixedOperator, operator){
    let newString = ""
    let firstTime = true;
    let index = 0;
    for (let char of string){
        if (index == string.length -1) newString += operator
        else newString  += char;
        index += 1;
    }
    swapOperator = newString;
    createOperator(fixedOperator, swapOperator, operator);

}

function swapOperators (operator){
    let swapOperator;
    let fixedOperator = false;
    if(/\d+\.\d+e[+\-]\d+[\/+\-*!^]$/.test(expressionString) || /\d+\.\d+e[+\-]\d+\.\d+[\/+\-*!^]$/.test(expressionString) || 
    /\d+e[+\-]\d+\.\d+[\/+\-*!^]$/.test(expressionString) || /\d+e[+\-]\d+\.\d+[\/+\-*!^]$/.test(expressionString)) {
        if (operator == "-")fixedOperator = false;
        else fixedOperator = true;
        swapOperator = swapInEFomrat(expressionString,operator)
        createOperator(fixedOperator, swapOperator, operator)
    }else if (/^\d+-/.test(expressionString) || /^\d+\.\d+-/.test(expressionString)){
        swapSubtraction = true
        fixedOperator = true;
        swapOperator = expressionString.replace("-",operator)
        createOperator(fixedOperator,swapOperator,operator);
    }else if ( /^-\d+-$/.test(expressionString) || /^-\d+\.\d+-$/.test(expressionString)){
        fixedOperator = true;
        swapSubtactionFormat(expressionString,fixedOperator,operator);
    } else if (/^\d+[+\-/*!^]$/.test(expressionString) || /^\d+\.\d+[+\-/*!^]$/.test(expressionString)) {
        swapNormalFormat(expressionString,fixedOperator,operator)
        
    } else {
        createOperator(fixedOperator, swapOperator, operator)   
    }
}

function addOperator(operator){
    if(testString(expressionString)) {
        evaluateExpression(expressionString);
        return;
    } else if(includesOperator()){
         evaluateExpression(expressionString);
         return;
    } else if (testFactorial(expressionString)){
        evaluateExpression(expressionString);
        return;
    } else if (checkLength()) {
        swapOperators(operator)
        return;
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
    if(String(anwser).length >= 8 || /\d+e\-\d+/.test(String(anwser)))  anwser = anwser.toExponential(1)
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
    if(String(anwser).length >= 8 || /\d+e\-\d+/.test(String(anwser)))  anwser = anwser.toExponential(1)
    if (addOperator) expressionString = String(anwser) + operator;
    else expressionString = String(anwser) + operator;
    
}

function multiplication(numbers,operator){
    let addOperator = false;
    let anwser = 1;
    numbers.map(value => {
        if (value == "" || value == "Error"){
            addOperator = true;
            value = 1;
        }
        anwser *= Number(value);
    })
    if(String(anwser).length >= 8 || /\d+e\-\d+/.test(String(anwser)))  anwser = Number(anwser).toExponential(1)
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
    if (/\d+e\-\d+/.test(String(anwser)) || /-\d+e\-\d+/.test(String(anwser))) anwser
    if(String(anwser).length >= 8 || /\d+e\-\d+/.test(String(anwser)))   anwser = anwser.toExponential(1)
    if (addOperator) expressionString = String(anwser) + operator;
    else expressionString = String(anwser) + operator;
    
}

function changePowerAnwser(submission,operator){
    let anwser = submission;
    if(String(anwser).length >= 8  || /\d+e\-\d+/.test(String(anwser)))  anwser = Number(anwser).toExponential(1)
    if (addOperator) expressionString = String(anwser) + operator;
    else expressionString = String(anwser) + operator;
    if(String(anwser) == "NaN") {
        anwser = "Error"
        expressionString = anwser;
    }
    screenText.textContent = expressionString;

}



function power(numbers,operator){
    let addOperator = false;
    let anwser = 1;
    numbers.map(value => {
        let index = 0
        if (value == "" || value == "Error"){
            addOperator = true;
        }
        index +=1;
    })
    if (!addOperator){
        anwser = Math.pow(Number(numbers[0]),Number(numbers[1]))
    } else {
        anwser = Number(numbers[0]);
    }
    changePowerAnwser(anwser,operator);


}


function factorNumber(number){
    if( number === 0 ){
        return 1;
    } else {
        return number * factorNumber(number -1);
    }
}

function findFactorial(numbers){
    let anwser;
    let isNegative = false;
    let numberLength = 5

    if (numbers[0] == "Error") numbers[0] = "0";
    if(/\d+\.\d+/.test(String(numbers[0])) || /-\d+\.\d+/.test(String(numbers[0]))) {
        anwser = "Error";
        expressionString = anwser;
        displayErrorMessage()
        return;
    }

    if(numbers[0].includes("-")) isNegative = true;
    if(isNegative) numberLength = 6;

    if(expressionString.length >= numberLength && expressionString != "Error!") {
        anwser= "Infinity"
    } else if (anwser != "Error") {
        let number = numbers[0];
        if(isNegative) number = number.replace("-","");
        anwser = factorNumber(Number(number));
    }
    if (isNegative && anwser != "Error") anwser = -anwser;
    if(String(anwser).length >= 8  && String(anwser) != "Infinity" || /\d+e\-\d+/.test(String(anwser)))  anwser = Number(anwser).toExponential(1)
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

function turnEFormatIntoNumber(string,isDecimal,isNegative){
    let newString;
    if(!isNegative){
        if(isDecimal) newString = string.replace(/(\d+\.\d+e[+\-]\d+)[+\-*\/!^](\d+\.\d+)/,"$1 $2")
        else newString = string.replace(/(\d+\.\d+e[+\-]\d+)[+\-*\/!^](\d+)/,"$1 $2")
    } else {
        if(isDecimal) newString = string.replace(/(\d+\.\d+e[+\-]\d+)[+\-*\/!^](-\d+\.\d+)/,"$1 $2")
        else newString = string.replace(/(\d+\.\d+e[+\-]\d+)[+\-*\/!^](-\d+)/,"$1 $2")
        
    }
    let numbers = newString.split(" ");
    console.log(numbers, "numbers in e format")
    return numbers;

}

function turnEFormatIntoNegativeNumber(string,isDecimal,isNegative){
    let newString;
    if(!isNegative){
        if(isDecimal) newString = string.replace(/(-\d+\.\d+e[+\-]\d+)[+\-*\/!^](\d+\.\d+)/,"$1 $2")
        else newString = string.replace(/(-\d+\.\d+e[+\-]\d+)[+\-*\/!^](\d+)/,"$1 $2")
    } else {
        if(isDecimal) newString = string.replace(/(-\d+\.\d+e[+\-]\d+)[+\-*\/!^](-\d+\.\d+)/,"$1 $2")
        else newString = string.replace(/(-\d+\.\d+e[+\-]\d+)[+\-*\/!^](-\d+)/,"$1 $2")
        
    }
    let numbers = newString.split(" ");
    return numbers;
}

function chageNumbersInENegativeFormat(string,isNegative){
    let replacedString;
    let numbers
    console.log(isNegative, "is negative")
    if (!isNegative) replacedString = string.replace(/(\d+\.\d+e-\d+)-(\d+)/,"$1 $2");
    else replacedString = string.replace(/(-\d+\.\d+e-\d+)(-\d+)/,"$1 $2");
    numbers = replacedString.split(" ")
    console.log(numbers, "e negatice numbers")
    return numbers
}



function operateNumbers(string,operator){

    if(/\d+\.\d+[+\-*\/!^]-$/.test(expressionString) || /\d+[+\-*\/!^]-$/.test(expressionString) || /\d+\.\d+e[+\-]\d+[+\-*\/!^]-$/.test(expressionString)) return;

    let numbers = string.split(operator);
    let isForm = false;

    if(/^\d+\.\d+e[+\-]\d+[+\-*\/!^]\d+$/.test(string)) numbers =  turnEFormatIntoNumber(expressionString,false, false);
    else if(/^\d+\.\d+e[+\-]\d+[+\-*\/!^]\d+\.\d+$/.test(string)) numbers = turnEFormatIntoNumber(expressionString, true, false);
    else if (/^\d+\.\d+e[+\-]\d+[+\-*\/!^]-\d+\.\d+$/.test(string)) numbers = turnEFormatIntoNumber(expressionString,true, true);
    else if (/^\d+\.\d+e[+\-]\d+[+\-*\/!^]-\d+$/.test(string)) numbers = turnEFormatIntoNumber(expressionString,false, true);

    if(/^-\d+\.\d+e[+\-]\d+[+\-*\/!^]\d+$/.test(string)) numbers =  turnEFormatIntoNegativeNumber(expressionString,false, false);
    else if(/^-\d+\.\d+e[+\-]\d+[+\-*\/!^]\d+\.\d+$/.test(string)) numbers = turnEFormatIntoNegativeNumber(expressionString, true, false);
    else if (/^-\d+\.\d+e[+\-]\d+[+\-*\/!^]-\d+\.\d+$/.test(string)) numbers = turnEFormatIntoNegativeNumber(expressionString,true, true);
    else if (/^-\d+\.\d+e[+\-]\d+[+\-*\/!^]-\d+$/.test(string)) numbers = turnEFormatIntoNegativeNumber(expressionString,false, true);








    if(/-\d+-\d+/.test(string) || /-\d+\.\d+-\d+/.test(string) || /-\d+\.\d+-\d+\.\d+/.test(string)){
        isForm = true
        numbers = changeNumbers(string);
    }
    console.log(string)
    if(/^\d+\.\d+e-\d+-\d+/.test(string)) numbers = chageNumbersInENegativeFormat(string, false);
    else if (/^-\d+\.\d+e-\d+-\d+/.test(string)) {
        isForm = true;
        numbers = chageNumbersInENegativeFormat(string,true);
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
   // checkLength();

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
    } else if (/^\d+\.\d+e[+\-]\d+[\/+\-*!^]-\d+$/.test(expressionString)) {
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
    if ( /^\d+\.\d+e[+\-]\d+$/.test(expressionString) || /^-\d+\.\d+e[+\-]\d+$/.test(expressionString)) expressionString = "0"
    if (expressionString == "" || expressionString == "Error") expressionString = "0"
    else expressionString = expressionString.slice(0,stringLength-1)
    if (expressionString == "" || expressionString == "Error") expressionString = "0"
    screenText.textContent = expressionString
}

function checkLength(){
    if(expressionString.length  > 15) return false
    else return true;
}



function testEFormat(string){
    if(/\d+\.\d+e[+\-]\d+\+\d+/.test(string) || /\d+\.\d+e[+\-]\d+\+\d+\.\d+/.test(string)) operateNumbers(string,"+");
    if(/\d+\.\d+e[+\-]\d+\*\d+/.test(string) || /\d+\.\d+e[+\-]\d+\*\d+\.\d+/.test(string)) operateNumbers(string,"*");
    if(/\d+\.\d+e[+\-]\d+\/\d+/.test(string) || /\d+\.\d+e[+\-]\d+\/\d+\.\d+/.test(string)) operateNumbers(string,"/");
    if(/\d+\.\d+e[+\-]\d+\^\d+/.test(string) || /\d+\.\d+e[+\-]\d+\^\d+\.\d+/.test(string)) operateNumbers(string,"^");
    if(/\d+\.\d+e[+\-]\d+\!/.test(string)) operateNumbers(string,"!");

    if(/\d+\.\d+e[+\-]\d+\+-\d+/.test(string) || /\d+\.\d+e[+\-]\d+\+-\d+\.\d+/.test(string)) operateNumbers(string,"+");
    if(/\d+\.\d+e[+\-]\d+\*-\d+/.test(string) || /\d+\.\d+e[+\-]\d+\*-d+\.\d+/.test(string)) operateNumbers(string,"*");
    if(/\d+\.\d+e[+\-]\d+\/-\d+/.test(string) || /\d+\.\d+e[+\-]\d+\/-\d+\.\d+/.test(string)) operateNumbers(string,"/");
    if(/\d+\.\d+e[+\-]\d+\^-\d+/.test(string) || /\d+\.\d+e[+\-]\d+\^-\d+\.\d+/.test(string)) operateNumbers(string,"^")

    if(/\d+\.\d+e[+\-]\d+\-\d+/.test(string) || /\d+\.\d+e[+\-]\d+\-\d+\.\d+/.test(string)) operateNumbers(string,"-");



}

function evaluateExpression (string){
    if(/\d+\.\d+e[+\-]\d+[+\-*\/!^]\d+/.test(string) || /\d+\.\d+e[+\-]\d+[+\-*\/!^]\d+\.\d+/.test(string) || /\d+\.\d+e[+\-]\d+[+\-*\/!^]-\d+/.test(string) || 
    /\d+\.\d+e[+\-]\d+[+\-*\/!^]-\d+\.\d+/.test(string) ||/\d+\.\d+e[+\-]\d+\!/.test(string)   )  {
        testEFormat(expressionString)
    } else if(!/\d+\.\d+e[+\-]\d+/.test(expressionString)) {
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
    if (/\d+!/.test(string) || /\d+\.\d+!/.test(string) || /-\d+!/.test(string) || /-\d+\.\d+!/.test(string) ) return true;
    else if (/\d+\.\d+e[+\-]\d+!/.test(string)) return true;
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
            screenText.textContent = expressionString;
        })
    })
}



operateButtons(systemButtons);
operateButtons(operatorButtons)