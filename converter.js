


let convert = document.querySelector('#btn');
convert.addEventListener('click', convertMe);
function convertMe(){
    let userInput = document.querySelector('#userInput').value;
    let result = userInput * 9 / 5 +32;
    // console.log(result);
    let output = document.querySelector('#result');
    // output.textContent = `${userInput} C = ${result} F`;
    output.innerHTML = `${userInput} <sup>&deg;</sup>C = ${result} <sup>&deg</sup>F`;
}


