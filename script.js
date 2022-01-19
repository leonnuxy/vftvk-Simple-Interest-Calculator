function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * rate * years) / 100;
    var year = new Date().getFullYear() + parseInt(years);

    let component = principal * ((1 + ((rate/100)/12)) ** (12*years))

    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("prinipal").focus();
        return false;
    }

    document.getElementById("result").innerText = 'If you deposit $' + principal + 
    ' at an interest rate of ' + rate + '% for ' + year + ' years, you will have $' + interest + 
    ' in interest.\n\n' + 'The total amount you will have in ' + year + ' years is $' + component + '.';
}

function updateRate(sliderValue)   {
    var retrieval = document.getElementById("sliderValue");
    retrieval.innerHTML = sliderValue;
}
        
