/*** Get Form value */
function getCalculationValue(){
    console.log('getSimulationValue');
    let C = document.getElementById("borrowedCapital").value;
    let annualRate = (document.getElementById("annualRate").value)/100;
    let n = document.getElementById("MonthDuration").value;
    let t = annualRate/12;
    var MonthlyRepayment =  C*(t/(1-((1+t)**(-n))));

    document.getElementById("output").innerHTML = MonthlyRepayment.toFixed(2);
}