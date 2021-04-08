var i=0;
while(i<3){
    var num = parseInt(prompt("Please enter a number between 1 and 30"));
    if(num>=1 && num<=30){
        i++;
        document.write("*".repeat(num));
        document.write("<br>");
    }
}