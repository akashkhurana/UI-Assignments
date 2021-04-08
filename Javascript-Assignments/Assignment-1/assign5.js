var istableCreated = false;
function myfunction(){

    function validation() {
        var name=document.details.name.value;
        var mail=document.details.email.value;
        var topping=document.details.topping.value;
        var delivery=document.details.delType.value;
        var tip=document.details.tip.value;
        if(name == null|| name == "") {
            window.alert("Enter the Name");
            return false;
        }
        if(name == null|| name == "") {
            window.alert("Enter the Name");
            return false;
        }
        if(mail == null|| mail == "") {
            window.alert("Enter the Email");
            return false;
        }


        if( delivery == null|| delivery== "") {
            window.alert("choose Delivery type");
            return false;
        }
        if(tip == null|| tip == "") {
            window.alert("Enter the tip");
            return false;
        }
        return true;
    }

    function tableCreate(){
        var body = document.body;
        tbl  = document.createElement('table');
        var tr1 = tbl.insertRow();
            var td = tr1.insertCell();
            td.innerHTML= "Name";
            var td = tr1.insertCell();
            td.innerHTML = document.getElementsByTagName('input')[0].value;
        var tr2 = tbl.insertRow();
            var td = tr2.insertCell();
            td.innerHTML= "Email";
            var td = tr2.insertCell();
            td.innerHTML = document.getElementsByTagName('input')[1].value;
        var tr3 = tbl.insertRow();
            var td = tr3.insertCell();
            td.innerHTML= "Address";
            var td = tr3.insertCell();
            td.innerHTML = document.getElementById("Textarea").value;
        var tr4 = tbl.insertRow();
            var td = tr4.insertCell();
            td.innerHTML= "Toppings";
            var td = tr4.insertCell();
            var checkedBoxes = document.querySelectorAll('input[name=topping]:checked');
            ntoppings = checkedBoxes.length;
            for(i=0; i<checkedBoxes.length; i++){
                td.innerHTML += " "+checkedBoxes[i].value + ",";
            }
        var tr5 = tbl.insertRow();
            var td = tr5.insertCell();
            td.innerHTML= "Delivery?";
            var td = tr5.insertCell();
            if (document.getElementById('r1').checked) {
                delivery = "Yes";
                deliveryCharges = 5;
              }
            else{
                delivery = "No";
                deliveryCharges = 0;
            }
            td.innerHTML = delivery;
        var tr6 = tbl.insertRow();
            var td = tr6.insertCell();
            td.innerHTML= "Tip Amount";
            var td = tr6.insertCell();
            var tipOption = document.getElementById("tip");
            var tipValue = tipOption.value;
            td.innerHTML = tipValue + "%";
        var tr7 = tbl.insertRow();
                var td = tr7.insertCell();
                td.innerHTML= "Total";
                var td = tr7.insertCell();
                totalAmount = (10 + ntoppings* 1.5 + deliveryCharges)*(1+tipValue/100);
                td.innerHTML = "$" + totalAmount;
        body.appendChild(tbl);
        
    }
    
    if(validation()){
        if(istableCreated === false){
            tableCreate();
            istableCreated = true;
        }
    }
}
