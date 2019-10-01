

var table=document.createElement('table');
table.setAttribute("id", "table");
var header = table.createTHead();
var row = header.insertRow(0);
var cell = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell.innerHTML = "<b>firstName</b>";
cell2.innerHTML = "<b>lastName</b>";
cell3.innerHTML = "<b>age</b>";
document.body.appendChild(table);


var firstName=document.createElement('input');
firstName.setAttribute("id", "fName");
firstName.setAttribute("type", "text");
firstName.setAttribute("placeholder", "firstName");
document.body.appendChild(firstName);

var lastName=document.createElement('input');
lastName.setAttribute("id", "lName");
lastName.setAttribute("type", "text");
lastName.setAttribute("placeholder", "lastName");
document.body.appendChild(lastName);

var age=document.createElement('input');
age.setAttribute("id", "age");
age.setAttribute("type", "text");
age.setAttribute("placeholder", "age");
document.body.appendChild(age);
//butons
var btn = document.createElement('button');
btn.innerHTML = "Add";
btn.setAttribute("type", "button");
btn.addEventListener("click", add);
document.body.appendChild(btn);

var btn2 = document.createElement('button');
btn2.innerHTML = "edit";
btn2.setAttribute("type", "button");
btn2.addEventListener("click", edit);
document.body.appendChild(btn2);

var btn3 = document.createElement('button');
btn3.innerHTML = "remove";
btn3.setAttribute("type", "button");
btn3.addEventListener("click", remove);
document.body.appendChild(btn3);


var table=document.getElementById("table");
console.log(table);
function add(){
    var newRow=table.insertRow(table.length),
        cell1=newRow.insertCell(0),
        cell2=newRow.insertCell(1),
        cell3=newRow.insertCell(2),
        fName=document.getElementById("fName").value,
        lName=document.getElementById("lName").value,
        age=document.getElementById("age").value;
    cell1.innerHTML= fName;
    cell2.innerHTML= lName;
    cell3.innerHTML= age;
    selectedRow()
}
function selectedRow(){
    console.log(table);
    for(let i=1; i<table.rows.length; i++){
        table.rows[i].onclick=function(){
            rIndex=this.rowIndex;
            console.log(rIndex);
            document.getElementById('fName').value=this.cells[0].innerHTML;
            document.getElementById('lName').value=this.cells[1].innerHTML;
            document.getElementById('age').value=this.cells[2].innerHTML;
        }
    }
}
selectedRow();
function edit(){
    var fName=document.getElementById("fName").value,
        lName=document.getElementById("lName").value,
        age=document.getElementById("age").value;
    table.rows[rIndex].cells[0].innerHTML=fName;
    table.rows[rIndex].cells[1].innerHTML=lName;
    table.rows[rIndex].cells[2].innerHTML=age;
}
function remove(){
    table.deleteRow(rIndex);
}