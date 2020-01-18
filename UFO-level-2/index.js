//create references for tbody elements, input fields and buttons
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

//Add an event listener to searchButton and call handleSearchButton
$searchBtn.addEventListener("click",handleSearchButtonClick);

//Add an event lister to the resetButton, call handleResetButtonClick when clicked
$resetBtn.addEventListener("click",handleResetButtonClick);

//copy the data from data.js
var tblData=data;

//Build table with non-filtered data
function renderTable(){
    $tbody.innerHTML="";
    for(var i=0;i<tblData.length;i++){
        //Get current address object and fields
        var address=tblData[i];
        console.log(address)
        var fields=Object.keys(address);
        //create a new row in table body
        var $row=$tbody.insertRow(i);
        for (var j=0; j<fields.length;j++){
            //For each field in address object, set inner text to a new cell
            var field=fields[j];
            var $cell=$row.insertCell(j);
            $cell.innerText=address[field];
        }
    }
}

//Build a search table for filtered data
// Build search table for filtered data
function handleSearchButtonClick() {
    var filterDate = $dateInput.value;
    var filterState = $stateInput.value.trim().toLowerCase();
    var filterCity = $cityInput.value.trim().toLowerCase();
    var filterCountry = $countryInput.value.trim().toLowerCase();
    var filterShape = $shapeInput.value.trim().toLowerCase();
  
    // Add filter on date variable
    if (filterDate != "") {
      tableData = data.filter(function (address) {
        var addressDate = address.datetime;
        return addressDate === filterDate;
      });
    }
    else { tableData };
  
    // Add filter on state variable
    if (filterState != "") {
      tableData = tableData.filter(function (address) {
        var addressState = address.state;
        return addressState === filterState;
      });
    }
    else { tableData };
  
    // Add filter on city variable
    if (filterCity != "") {
      tableData = tableData.filter(function (address) {
        var addressCity = address.city;
        return addressCity === filterCity;
      });
    }
    else { tableData };
  
    // Add filter on country variable
    if (filterCountry != "") {
      tableData = tableData.filter(function (address) {
        var addressCountry = address.country;
        return addressCountry === filterCountry;
      });
    }
    else { tableData };
  
    // Add filter on shape variable
    if (filterShape != "") {
      tableData = tableData.filter(function (address) {
        var addressShape = address.shape;
        return addressShape === filterShape;
      });
    }
    else { tableData };
  
    renderTable();
  }
  
  // Clear all the fields
  function handleResetButtonClick(){
    renderTable();
  }
  // Generate table at first page load
  renderTable();