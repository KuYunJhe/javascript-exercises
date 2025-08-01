const convertToCelsius = function(temp) {
  let tempOut = (temp-32)/9*5;
  console.log(tempOut.toFixed(1));
  tempOut = tempOut%1 == 0 ? Math.round(tempOut) : Math.round(tempOut*10)/10;

return tempOut;


};

const convertToFahrenheit = function(temp) {
  let tempOut = temp*9/5+32;
  tempOut = tempOut%1 == 0 ? Math.round(tempOut): Math.round(tempOut*10)/10;
  return tempOut;


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
