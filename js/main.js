// Example 2.1: Accessing and manipulating the <div> element
var myDiv = document.getElementById("mydiv");
myDiv.innerHTML = "Hello World";

function myFunc(){
    var myDiv =  document.getElementById("mydiv");
    myDiv.innerHTML = "Hello World.";
};

window.onload = function() {
    myFunc();
    initialize();
    jsAjax();
};

//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cities = [
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population = [
        233209,
        594833,
        104057,
        27244
    ];

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    //add the table to the div in index.html
    var myDiv =  document.getElementById("mydiv");
    myDiv.appendChild(table);
};

function jsAjax(){
    console.log('Starting AJAX request...');

    //define the data request
    var request = new Request('data/MegaCities.geojson');

    //define fetch parameters
    var init = {
        method: 'GET'
    }

    //use Fetch to retrieve the data
    fetch(request, init)
        .then(function(response) {
            console.log('Fetch successful, converting data...'); 
            //convert data to useable form
            return response.json();
        })
        .then(function(data) {
            console.log('Data conversion successful:', data);
            //callback to process the data
            debugCallback(data);
            document.querySelector("#mydiv".insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(data)));
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
        });

    console.log('AJAX request setup complete.');
}

//define callback function
function callback(response) {
    console.log(response);
    response.features.forEach(function(feature) {
        console.log('City: ', feature.properties.City);
    });

    document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(response));

}

function debugCallback(response) {
    console.log('Debug callback triggered:', response);
    document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
}

function debugAjax() {
    console.log('Starting debug AJAX request...');
	
	var myData;
	
	fetch("data/MegaCities.geojson")
		.then(function(response) {
			return response.json;
		})
        .then(function(data) {
            mydata = data;
            console.log('Debug data:', myData);
            debugCallback(myData);
        })
        .catch(function(error) {
            console.error('Error fetching debug data:', error);
        });

    console.log('Debug AJAX request setup complete.');

}

//document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))

document.addEventListener('DOMContentLoaded', function() {
    initialize();
});