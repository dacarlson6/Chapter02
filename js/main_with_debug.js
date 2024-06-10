//Devin Carlson
//Activity 3
//Geog 575
//June 8, 2024

//array containing the city name and its population
var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

//function that adds columns to table based on the cityPop array
function addColumns(cityPop){
	const table = document.getElementById("cityTable");

	//loop through each city in the cityPop array
	for (var i = 0; i < cityPop.length; i++) {
		var row = table.insertRow(-1); //append a row at the end of the table
		var cityCell = row.insertCell(0); //insert the first cell in the row
		var popCell = row.insertCell(1); //insert the second cell in the row
		var sizeCell = row.insertCell(2); //insert the third cell in the row

		cityCell.innerHTML = cityPop[i].city; //set the city name
		popCell.innerHTML = cityPop[i].population; //set the population


	//calculate city size based on population
	var citySize;
	if (cityPop[i].population < 100000){
		citySize = 'Small';
	} else if (cityPop[i].population < 500000){
		citySize = 'Medium';
	} else {
		citySize = 'Large';
	}
	sizeCell.innerHTML = citySize; // Add the city size to the new row
	};
}

//function to add events to the table
function addEvents(){
	var table = document.querySelector("table");

	//mouseover event that changes the background color of the table
	table.addEventListener("mouseover", function() {
		var color = "rgb(";
		//generate random color for table background when hovering your mouse over table
		for (var i=0; i<3; i++){
			var random = Math.round(Math.random() * 255);
			color += random;
			if (i<2){
				color += ",";
			} else {
				color += ")";
			}
		}
		//apply random color to the background of the table
		document.querySelector("table").style.backgroundColor = color; 
	});

	//function to alert when the table is clicked
	function clickme(){
		alert('Hey, you clicked me!');
	};

	//when the table is clicked, the clickme function will activate
	document.querySelector("table").addEventListener("click", clickme)
};

//when the table is fully loaded, activate the functions
document.addEventListener('DOMContentLoaded', function() {
	addColumns(cityPop);
	addEvents();
});

