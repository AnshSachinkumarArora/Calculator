function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a/b
}

var num1;
var num2;
var operation;
var result;
var screen = document.getElementById('screen')

document.addEventListener('click', function(e) {
    var target = e.target
    if(target.className == 'button' && operation == '') {
        num1 += target.innerText
        screen.innerText += target.innerText
        console.log(num1)
    } else if (target.className == 'button' && num1 != '' && operation != '') {
        screen.innerText = ''
        num2 += target.innerText
        screen.innerText += target.innerText
    } else if (target.className == 'sign' && num1 != '' && num2 == '') {
        screen.innerText = ''
        operation = target.innerText
        screen.innerText = target.innerText
    } else if (target.className == 'equals') {
        if (num1 == '' || num2 == '' || operation == '') {
            return
        } else {
            if(operation == '/') {
                result = divide(num1, num2)
            }  else if (operation == '-') {
                result = subtract(num1, num2)
            } else if (operation == '+') {
                result = add(num1, num2)
            } else if (operation == 'X') {
                result = multiply(num1, num2)
            }
            screen.innerText = result
        } 
    }
})
