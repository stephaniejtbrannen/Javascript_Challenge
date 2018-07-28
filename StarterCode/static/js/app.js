// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");
var tbody = d3.select("tbody");

submit.on("click", function () {

    // Prevent the page from refreshing
tbody.html("");
d3.event.preventDefault();

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");



console.log(inputValue);
//   console.log(tableData);

var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

console.log(filteredData);


//   tbody.selectAll("*").remove();
//   // BONUS: Calculate summary statistics for the age field of the filtered data

//   // First, create an array with just the age values
//   var ages = filteredData.map(person => person.age);





filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});
 }); 