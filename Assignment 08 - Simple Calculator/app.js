var input = document.getElementById("inputField");

function getValue(a) {
    input.value = input.value + a;
}

function clrAll() {
    input.value = "";
}

function deletechar() {
    input.value = input.value.slice(0, -1);
}

function square() {
    input.value = input.value * input.value;
}

function cube() {
    input.value = input.value * input.value * input.value;
}

function half() {
    input.value = 1 / input.value;
}

function leftBrac(b) {
    input.value = '(';
}

function rightBrac(c) {
    input.value = ')';
}

function equal() {
    if (!input.value) {
        alert("field is empty...!");
    } else {
        input.value = eval(input.value);
    }
}