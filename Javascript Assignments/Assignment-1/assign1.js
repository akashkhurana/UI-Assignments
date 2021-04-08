function calculateTemp() {
    function fahToCel(fahrenheit) {
       var celsius = (fahrenheit - 32) * (5/9);
       return celsius;
    }
    var numberTemp = document.getElementById("temp").value;
 
    var result;
    
       result = fahToCel(numberTemp);
       document.getElementById("result").innerHTML = "= " + result +"\u00B0 "+" Celsius";
    
 }