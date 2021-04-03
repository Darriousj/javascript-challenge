
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);


// Function that reports ufo report values (Date, City, State, Country, Shape, Duration, Comments)

function updateTable(data){
  tbody.text("");
  data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});
}
updateTable(data)


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // input date equal to value of input box
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
    
  // Filter date
  function filterSelect(date) {
    return date.datetime==inputValue;
  }

  // filter() uses the custom function as its argument
  var ufoData = data.filter(filterSelect);

  // Test
  console.log(ufoData);

  updateTable(ufoData)

  
}
