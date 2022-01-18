function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * rate * years) / 100;
    var year = new Date().getFullYear() + parseInt(years);

}

function updateRate()
{
    var reteval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = reteval;
    
}
        