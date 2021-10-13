function add() {
    const form = document.getElementById("form");
    
    let operandA = form['operandA'];
    let operandB = form['operandB'];
    
    let resultAdd = parseInt(operandA.value) + parseInt(operandB.value);
    if (isNaN(resultAdd)) {
        resultAdd = "The operation does not include numbers."
    } 
    document.getElementById("result").innerHTML = `Result: ${resultAdd}`;

}

function subs() {
    const form = document.getElementById("form");
    
    let operandA = form['operandA'];
    let operandB = form['operandB'];
    
    let resultAdd = parseInt(operandA.value) - parseInt(operandB.value);
    if (isNaN(resultAdd)) {
        resultAdd = "The operation does not include numbers."
    } 
    document.getElementById("result").innerHTML = `Result: ${resultAdd}`;
}

function mult() {
    const form = document.getElementById("form");
    
    let operandA = form['operandA'];
    let operandB = form['operandB'];
    
    let resultAdd = parseInt(operandA.value) * parseInt(operandB.value);
    if (isNaN(resultAdd)) {
        resultAdd = "The operation does not include numbers."
    } 
    document.getElementById("result").innerHTML = `Result: ${resultAdd}`;
}

function divd() {
    const form = document.getElementById("form");
    
    let operandA = form['operandA'];
    let operandB = form['operandB'];
    
    let resultAdd = parseInt(operandA.value) / parseInt(operandB.value);
    if (isNaN(resultAdd)) {
        resultAdd = "The operation does not include numbers."
    } 
    document.getElementById("result").innerHTML = `Result: ${resultAdd}`;
}

function exp() {
    const form = document.getElementById("form");
    
    let operandA = form['operandA'];
    let operandB = form['operandB'];
    
    let resultAdd = parseInt(operandA.value) ** parseInt(operandB.value);
    if (isNaN(resultAdd)) {
        resultAdd = "The operation does not include numbers."
    } 
    document.getElementById("result").innerHTML = `Result: ${resultAdd}`;
}

