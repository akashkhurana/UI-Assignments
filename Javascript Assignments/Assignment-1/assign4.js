function myFunction(){
    function callPrompt(){
        var p = parseInt(prompt("Enter a number to perform the corresponding operation\n 1. Add\n 2. Subtract\n 3. Multiply\n 4. Divide\n 5. Exponent\n 6. Mean\n 7. Quit"));
        return p;
    }
    n = callPrompt();
    function calc(n){
        if(n>=1 && n <= 7){
            if(n>0 && n<5){
                a=parseInt(prompt("Enter the first number"));
                b=parseInt(prompt("Enter the second number"));
                if(n==1){
                    document.getElementById("res").innerHTML = a+b;
                }
                else if(n==2){
                    document.getElementById("res").innerHTML = a-b;
                }
                else if(n==3){
                    document.getElementById("res").innerHTML = a*b;
                }
                else if(n==4){
                    document.getElementById("res").innerHTML = a/b;
                }
            }
            else if(n==5){
                c=parseInt(prompt("Enter the base"));
                d=parseInt(prompt("Enter the exponent"));
                document.getElementById("res").innerHTML = c**d;
            }
            else if(n==6){
                arr= [];
                s = prompt("Enter the numbers for mean and *** to calculate", "0");
                while(s!="***"){
                    arr.push(parseInt(s));
                    s = prompt("Enter the numbers for mean and *** to calculate", "0");
                }
                const sum = arr.reduce((a, b) => a + b, 0);
                const avg = (sum / arr.length) || 0;
                document.getElementById("res").innerHTML =avg;
            }
        }
        else{
            alert("Error!, Please select the correct option");
            calc(callPrompt());
        }
    }
    
    calc(n);

}
