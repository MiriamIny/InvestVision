
function getCompoundInterest()
{ 
    // Get form values
    const initialAmount = parseFloat(document.getElementById('initialInvt').value); 
    const rate = parseFloat(document.getElementById('interestRate').value); 
    const retirementYr = parseInt(document.getElementById('retirementYr').value);

    console.log(initialAmount)
    console.log(rate)
    console.log(retirementYr)
    // Calculate the number of years until retirement
    const currentYear = parseInt(new Date().getFullYear());
    const time = retirementYr-currentYear;

    // Compound interest formula: A = P(1 + r/100)^t
    const futureValue = initialAmount * Math.pow(1+(rate/100), time);
    
    // Display result
    const result = document.getElementById('result-message');
    result.textContent = `Your investment will grow to $${futureValue.toFixed(2)} by the year ${retirementYr}.`;
    result.hidden = false;

    // Stops the form from submitting and refreshing 
    return false; 
}
