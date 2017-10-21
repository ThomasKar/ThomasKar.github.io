var api = 'https://api.teleport.org/api/';
var cities = 'cities/';
var continents = 'continents/';
var countries = 'countries/';
var locations = 'locations/';
var timezones = 'timezones/';
var urbanAreas = 'urban_areas';

function getContinent(){
	var selectedContinent = document.getElementById("continents").value;
	
	var ContinentID = 'geonames:' + selectedContinent +"/";
	console.log(ContinentID);
	var url = api + continents + ContinentID + countries;
    console.log(url);

    

    fetch(url)
		.then(function(response){
			return response.json();
		})
		.then(function(response){
			console.log(response);

			

			var container = document.getElementById('container');
			console.log(container);
			console.log(container._links)

			
			container.innerHTML = '<h2>'+selectedContinent +' countries'+'</h2>' ;
				

			for ( var i=1; i < response._links['country:items'].length; i++){


				container.innerHTML = container.innerHTML  + '<div id="cell'+i+'">'+ ' ' + i + '. '+response._links['country:items'][i].name;+'</div>';














/*
					if (i < 13){
						var container = document.getElementById('cities1')
						container.innerHTML = container.innerHTML  +  ' ' + i + '. '+response._links['country:items'][i].name;
						}
						container.innerHTML= container.innerHTML +'<br';


					if (i >= 13 && i < 25){
						var container = document.getElementById('cities1')
						container.innerHTML = container.innerHTML  + '<div id="cities2">'+ ' ' + i + '. '+response._links['country:items'][i].name;+'</div>';
						}
						container.innerHTML= container.innerHTML +'<br';
					if (i >= 25 && i < 37){
						container.innerHTML = container.innerHTML  + '<div id="cities3">'+ ' ' + i + '. '+response._links['country:items'][i].name;+'</div>';
						}
						container.innerHTML= container.innerHTML +'<br';
					if (i >= 37 && i < 49){
						container.innerHTML = container.innerHTML  + '<div id="cities4">'+ ' ' + i + '. '+response._links['country:items'][i].name;+'</div>';
						}
						container.innerHTML= container.innerHTML +'<br';
					if (i >= 49 && i < 61){
						container.innerHTML = container.innerHTML + '<div id="cities5">'+ ' ' + i + '. ' +response._links['country:items'][i].name;+'</div>';
						}
						*/
				}
		})
}
				/*console.log(response._links);
				console.log(response._links.continents);
				console.log(response._links.length);


	var container = document.getElementById('container');
	console.log(container);

	
}

	

    


/*
console.log(getContinent());

var container = document.getElementById('container');
	console.log(container);


var url = api + continents + getContinent();




fetch(url)
			.then(function(response){
				return response.json();
			})
			.then(function(response){
				console.log(response);
				/*console.log(response._links);
				console.log(response._links.continents);
				console.log(response._links.length);

				
			
			
for (var i =0; i < response._links.length; i++){
					
					container.innerHTML = container.innerHTML + '<div class="temp">City: ' + response + '</div>' ;
				}
			})
		*/




/*'https://api.teleport.org/api/cities/?search=san%20francisco'

fetch(url)
			.then(function(response){
				return response.json();
			})
			.then(function(response){
				console.log(response);
			})
*/
