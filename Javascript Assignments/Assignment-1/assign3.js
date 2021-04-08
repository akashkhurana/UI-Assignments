function tableCreate(){
    var body = document.body,
    tbl  = document.createElement('table');
    tbl.style.border = '1px solid black';
    m = parseInt(prompt("Enter number of rows", "0"))
    n = parseInt(prompt("Enter number of columns", "0"))

    for(var i = 0; i < m; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < n; j++){
                var td = tr.insertCell();
                td.width = '100';
                td.height="50";
                td.style.border = '1px solid black';
            }
        }
    body.appendChild(tbl);
}
tableCreate();