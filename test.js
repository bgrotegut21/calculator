function testString(expression, string = "-3.2-3..2"){
    let regEx = expression.test(string)
    console.log(regEx)
}

testString(/\d+\.\d+[\/+\-*!^]\d+/gm)