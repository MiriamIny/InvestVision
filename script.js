
function getCompoundInterest(initialAmount, rate, retirementYr)
{ 
    // Calculate the number of years until retirement
    const currentYear = parseInt(new Date().getFullYear());
    const time = retirementYr-currentYear;

    // Compound interest formula: A = P(1 + r/100)^t
    const futureValue = initialAmount * Math.pow(1+(rate/100), time);
    
    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your investment will grow to $${futureValue.toFixed(2)} by the year ${retirementYr}.`;
    resultDiv.hidden = false;

    // Stops the form from submitting and refreshing 
    return false; 
}
document.getElementById('calculateBtn').addEventListener('click', function() {

    // Get form values
    const initialAmount = parseFloat(document.getElementById('initialInvt').value); 
    const rate = parseFloat(document.getElementById('interestRate').value); 
    const retirementYr = parseInt(document.getElementById('retirementYr').value); 

    getCompoundInterest(initialAmount, rate, retirementYr);
  });