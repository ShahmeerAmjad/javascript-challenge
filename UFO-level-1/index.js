//Create references to the table body, input fields and buttons
var $tbody=document.querySelector("tbody");
var $dateInput= document.querySelector("#datetime");
var $searchBtn=document.querySelector("#search");
var $resetBtn=document.querySelector("#reset");

//Add an event listener to the search button
$searchBtn.addEventListener("click",handleSearchButtonClick);

//Add an event listener to the resetButton
$resetBtn.addEventListener("click",handleResetButtonClick);

//copy the data from data.js
var tblData=data;

//build table with non-filtered data
function renderTable(){
    $tbody.innerHTML="";
    for (var i=0; i<tblData.length;i++){
//get  address object and fields
        var address=tblData[i];
        console.log(address)
        var fields=Object.keys(address);

        //add new row in table body
        var $row =$tbody.insertRow(i);
        for (var j=0;j<fields.length;j++){
            //for each field in address object, create new cell and set inner text as current value of cell

            var field=fields[j];
            var $cell=$row.insertCell(j);
            $cell.innerText=address[field];
        }
    }
}

//Build search table for filtered data
function handleSearchButtonClick(){
    var filterDate=$dateInput.nodeValue;

    //Filter on date
    if(filterDate != ""){
        tblData=data.filter(function (address){
            var addressDate=address.datetime;
            return addressDate === filterDate
        });
    }
    else {tblData};

    renderTable();
}

//Clear all the fields

function handleResetButtonClick(){
    renderTable();
}

//render the table, the first time the page loads
renderTable();
