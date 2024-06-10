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


	// Calculate city size based on population
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




/*    document.querySelectorAll("tr").forEach(function(row, i){
        if (i == 0){
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
        } else {
            var citySize;
            if (cityPop[i-1].population < 100000){
                citySize = 'Small';
            } else if (cityPop[i-1].population < 500000){
                citySize = 'Medium';
            } else {
                citySize = 'Large';
            }
            row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
        }
    }); */

function addEvents(){
	document.querySelector("table").addEventListener("mouseover", function(){
		var color = "rgb(";
		for (var i=0; i<3; i++){
			var random = Math.round(Math.random() * 255);
			color += random; // Corrected to use the variable random
			if (i<2){
				color += ",";
			} else {
				color += ")";
			}
		}
		document.querySelector("table").style.backgroundColor = color; 
	});

	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme)
};

document.addEventListener('DOMContentLoaded', function() {
	addColumns(cityPop);
});