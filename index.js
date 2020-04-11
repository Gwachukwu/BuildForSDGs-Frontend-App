document.querySelector("button").addEventListener("click", handleclick);

function handleclick(e) {
  let data = {
    region: {
      name: document.getElementById("region").value,
      avgAge: document.getElementById("avgAge").value,
      avgDailyIncomeInUSD: document.getElementById("avgIn").value,
      avgDailyIncomePopulation: document.getElementById("avgPop").value,
    },
    periodType: document.getElementById("period").value,
    timeToElapse: document.getElementById("time").value,
    reportedCases: document.getElementById("cases").value,
    population: document.getElementById("pop").value,
    totalHospitalBeds: document.getElementById("beds").value,
  };
  covid19ImpactEstimator(data);
  const imp = covid19ImpactEstimator(data).impact;
  const sev = covid19ImpactEstimator(data).severeImpact;
  document.querySelector(".impact").innerHTML = `
    <strong>IMPACT ON ${document
      .getElementById("region")
      .value.toUpperCase()}</strong><br>
    Currently Infected: ${imp.currentlyInfected}<br>
    Infections By Time: ${imp.infectionsByRequestedTime}<br>
    Severe Cases By Time: ${imp.severeCasesByRequestedTime}<br>
    Hospital Bed Availability: ${imp.hospitalBedsByRequestedTime}:<br>
    Cases For ICU: ${imp.casesForICUByRequestedTime}<br>
    Cases For Ventilators: ${imp.casesForVentilatorsByRequestedTime}<br>
    Dollars In Flight: ${imp.dollarsInFlight}`;

  document.querySelector(".severe").innerHTML = `
     <strong>SEVERE IMPACT ON ${document
       .getElementById("region")
       .value.toUpperCase()}</strong><br>
    Currently Infected: ${sev.currentlyInfected}<br>
    Infections By Time: ${sev.infectionsByRequestedTime}<br>
    Severe Cases By Time: ${sev.severeCasesByRequestedTime}<br>
    Hospital Bed Availability: ${sev.hospitalBedsByRequestedTime}:<br>
    Cases For ICU: ${sev.casesForICUByRequestedTime}<br>
    Cases For Ventilators: ${sev.casesForVentilatorsByRequestedTime}<br>
    Dollars In Flight: ${sev.dollarsInFlight}`;
  e.preventDefault();
}
