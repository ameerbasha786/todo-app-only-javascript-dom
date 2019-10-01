let count = 0;

//main div
var div0 = document.createElement("div");
div0.setAttribute("style", "background:#bca59f");

//sub div
var div1 = document.createElement("div");
div1.setAttribute("style", "margin-top:150px; align-content: center; text-align: center");
div0.appendChild(div1);

//heading
var title = document.createElement("h1");
title.innerText = "TODO_APP";

//appending child to a sub div
div1.appendChild(title);

//creating input text
var inputtext = document.createElement("input");
inputtext.setAttribute("id", "inputtext");
inputtext.setAttribute("type", "text");
inputtext.setAttribute("placeholder", "addusers");
inputtext.setAttribute("style", "text-align:center;border-radius:13px;padding:10px ");
document.getElementById("inputtext");

//appending input text to sub div
div1.appendChild(inputtext);
document.body.append(div0);

var enterId = document.createElement("input");
enterId.setAttribute("type", "text");
var enterName = document.createElement("input");
enterName.setAttribute("type", "text");

//creating save button
var savebutton = document.createElement("button");
savebutton.setAttribute("onclick", "pushuser()");
savebutton.innerText = "save";

var editbutton = document.createElement("button");
editbutton.setAttribute("onclick", "editer(this.value)");
editbutton.innerText = "edit";
editbutton.style.display = "none";
editbutton.value = -1;

//appending save button to sub div
div1.append(savebutton,editbutton);

//creating table
var datatable = document.createElement("table");
datatable.setAttribute("id", "tabledata");
datatable.setAttribute("style", "border:1px solid black");

//appending datatable to body of html
document.body.appendChild(datatable);

//creating row data
var rowdata = document.createElement("tr");
rowdata.setAttribute("id", "rows");

//appending row data to table by id as child
document.getElementById("tabledata").appendChild(rowdata);

//cearting head th of table
var datahead = document.createElement("th");
datahead.innerText = "sno";

//appending the head data to row data
rowdata.append(datahead);

//creating another head data
var datahed2 = document.createElement("th");
datahed2.innerText = "name";

//appending head data2 to row data
document.getElementById("rows").append(datahed2);


//function to push data
function pushuser() {
    if (!inputtext.value || inputtext.value.length == 0) {
        var error = document.createElement("p");
        error.setAttribute("id", "err");
        error.setAttribute("style", "text-align:center;color:red");
        error.innerText = "give valid data";
        alert(error.innerText);
    } else {
        //another function passing input text value and count as parameters
        showdata(inputtext.value, ++count);
        inputtext.value = "";
    }

}

function showdata(userdata, count) {
    //console.log(userdata,count);
    var rowes = document.createElement("tr");
    var datalist = document.createElement("td");
    datalist.id = count;
    datalist.innerText = count;
    var datalist1 = document.createElement("td");
    datalist1.innerText = userdata;
    var datalist2 = document.createElement("td");

    //cearting button button edit
    // for (var i = 0; i < datatable.rows.length; i++) {
    var edit = document.createElement("button");
    // var edited = datatable.rows[i].cells.item(i);
    edit.setAttribute("onclick", "editing(this)");
    edit.setAttribute("id", count);
    edit.innerText = "Edit";
    // console.log(datatable.rows[i].cells.namedItem("name"))
    // }
    datalist2.append(edit);
    rowes.append(datalist, datalist1, datalist2);
    datatable.appendChild(rowes);
    // rowes.append(edit);

    //console.log(datatable.rows[].cells)
}

function editing(hello) {
    console.log(document.getElementById(hello.id).parentElement);
    let firstData = document.getElementById(hello.id).parentElement.querySelectorAll("td")[0].innerHTML;
    let secndData = document.getElementById(hello.id).parentElement.querySelectorAll("td")[1].innerHTML;
    console.log(firstData,secndData);
    if(secndData.length==0){
        alert(error.innerText);
    }else{
        inputtext.value = secndData.toString();
        savebutton.style.display = "none";
        editbutton.value = firstData;
        editbutton.style.display = "block";
    }

}
function editer(valu) {
    if(inputtext.value.toString().length==0){
        alert(error.innerText);
    }else{
    document.getElementById(valu).parentElement.querySelectorAll("td")[1].innerHTML = inputtext.value.toString();
    inputtext.value = "";
    savebutton.style.display = "block";
    editbutton.value = -1;
    editbutton.style.display = "none";

    }


//.parentElement.querySelectorAll("td")[0].innerHTML
}

