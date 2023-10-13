// Currency conversion functions
function fromDollarToYen(dollarAmount) {
    // Conversion logic from Dollar to Yen
    return dollarAmount * 127.9; 
  }
  
  function fromEuroToDollar(euroAmount) {
    // Conversion logic from Euro to Dollar
    return euroAmount * 1.2; 
  }
  
  function fromYenToPound(yenAmount) {
    // Conversion logic from Yen to Pound
    return yenAmount * 0.8; 
  }
  
  // Export the functions for testing
  module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound,
  };
  