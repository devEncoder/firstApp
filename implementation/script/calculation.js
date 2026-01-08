/*** Get Form value */
function getCalculationValue() {
  console.log("getSimulationValue");
  let C = document.getElementById("borrowedCapital").value.replaceAll(",", ".");
  let annualRate =
    document.getElementById("annualRate").value.replaceAll(",", ".") / 100;
  let n = document.getElementById("MonthDuration").value.replaceAll(",", ".");
  let t = annualRate / 12;
  var MonthlyRepayment = C * (t / (1 - (1 + t) ** -n));

  var annualDuration = Math.floor(n / 12);
  var moduloMonthly = n % 12;
  console.log(n);
  console.log(annualDuration);
  console.log(moduloMonthly);
  if (isNaN(MonthlyRepayment)) {
    document.getElementById("output").innerHTML = "Bad Entry";
     document.getElementById("output2").innerHTML = "";
  } else {
    document.getElementById("output").innerHTML =
      //MonthlyRepayment.toFixed(1) + "€ for " + n + " months";
      MonthlyRepayment.toFixed(1) + " € ";
    document.getElementById("output2").innerHTML =
       annualDuration + " years " + moduloMonthly + " months ";
  }
}
