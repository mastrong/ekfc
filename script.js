function getQ(age, gender) {
    console.log(age, gender);
    if (age > 25) {
        if (gender === "m") {
            qValue = 0.9;
        } else if (gender === "f") {
            qValue = 0.7;
        }
    } else {
        if (gender === "m") {
            qValue = 3.200 + 0.259 * age - 0.543 * Math.log(age) - 0.00763 * Math.pow(age, 2) + 0.0000790 * Math.pow(age, 3);
        } else if (gender === "f") {
            qValue = 3.080 + 0.177 * age - 0.223 * Math.log(age) - 0.00596 * Math.pow(age, 2) + 0.0000686 * Math.pow(age, 3);
        }
        qValue = Math.exp(qValue) / 88.4;
    }
    return qValue;
}


function solve(scr, qValue, age) {
    let first;
    if (scr / qValue < 1) {
        first = -0.322;
    } else {
        first = -1.132;
    }

    let equation = 107.3 * Math.pow((scr / qValue), first);

    if (age > 40) {
        equation = equation * Math.pow(0.990, (age - 40));
    }

    return equation;
}


function getResults() {
    let form = document.getElementById("inputs_form");
  
    let age = parseInt(form.elements["age"].value);
    let gender = form.elements["gender"].value;
    let scr = parseFloat(form.elements["scr"].value);

    let qValue = getQ(age, gender);
    let result = solve(scr, qValue, age).toFixed(1);
    let result_btn = document.getElementById('result_btn');
    result_btn.innerText = result;
}