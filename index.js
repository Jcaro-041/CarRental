window.onload = function(){
    const estimateTotalCostButton = document.getElementById("estimateTotalCostButton");
    estimateTotalCostButton.onclick = estimateTotalCostButtonClicked;
}

function estimateTotalCostButtonClicked(){
    const estimate = {};

    // order details 
    estimate.numberOfDays = document.getElementById("numberOfDays").value;
    //// This is for the checkboxes 
    estimate.optionETT = document.getElementById("optionETT").value;
    estimate.optionGPS = document.getElementById("optionGPS").value;
    estimate.optionRA = document.getElementById("optionRA").value;

    //// This is for options logic
    estimate.optionETT = optionETT.checked;
    estimate.optionGPS = optionGPS.checked;
    estimate.optionRA = optionRA.checked;

    // Radio buttons logic or something like that idk
    const ageYes = document.getElementById("underYes").value;
    const ageNo = document.getElementById("underNo").value;

    // Logic for radios
    if (ageYes.checked){
        estimate.agePrice += ((29.99 * .3) + estimate.total) * numberOfDays; 
    }
    //// This should take if the options checked, add value to the total = to the cost 


    if(estimate.optionETT) {
        estimate.total += (3.95 * numberOfDays.value);
    }
    if(estimate.optionGPS) {
        estimate.total += (2.95 * numberOfDays.value);
    }
    if(estimate.optionRA) {
        estimate.total += (2.95 * numberOfDays.value);
    }
    estimate.total = estimate.agePrice;
    estimate.total = 29.99 * numberOfDays.value;
    estimate.total = +estimate.total.toFixed(2);
    displayOrderTotal(estimate)
}

function displayOrderTotal(estimate){
    document.getElementById("numberOfDays").value = estimate.numberOfDays;

    document.getElementById("totalDuePriceDisplay").innerText = "$"+ estimate.total


}