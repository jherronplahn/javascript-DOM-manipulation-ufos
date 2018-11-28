// from data.js
var tableData = data;

// variables
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
var filterDate = d3.select("#datetime");

// load table
var loadTable = (input) => {
    input.forEach(sightings => {
        var row =tbody.append("tr");
        columns.forEach(column => row.append("td").text(sightings[column])
        )
    });
}

loadTable(tableData);

// filter by date
button.on("click", () => {
    d3.event.preventDefault();
    var inputDate = filterDate.property("value").trim();
    var newDate = tableData.filter(tableData => tableData.datetime === inputDate);

    tbody.html("");

    loadTable(newDate, true);

});
