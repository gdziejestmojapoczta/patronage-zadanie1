document.querySelector("#moviesCounterAll").innerHTML = moviesData.length;
var moviesSeen=0;
moviesData.forEach(function(item, index){
	if( item.seen == 'T' ){
		moviesSeen=moviesSeen+1;
	}
});
document.querySelector("#moviesCounterSeen").innerHTML = moviesSeen;
moviesData.forEach(function(item,index){
	var newMovie = document.createElement("div");
	var newList = document.createElement("li");
	var addButton = document.createElement("button");
	var newLine = document.createElement("br");
	document.querySelector("#moviesList").appendChild(newList).className = "movie"+index;
	document.querySelector(".movie"+index).innerHTML = item.title + " " + "("+item.year+")" + " " + "Genre: "+ item.genre + " " + "Summary: " + item.summary + " "; 
	document.querySelector(".movie"+index).appendChild(newLine);
	document.querySelector(".movie"+index).appendChild(addButton).innerHTML="Seen: "+item.seen;
	var buttons = document.getElementsByTagName("button");
	buttons[index].addClass="button-"+index;
	buttons[index].onclick = function(){
		if(item.seen == 'T'){
			item.seen = 'F';
			document.querySelector(".movie"+index).appendChild(addButton).innerHTML="Seen: "+item.seen;
			moviesSeen--;
			document.querySelector("#moviesCounterSeen").innerHTML = moviesSeen;
		}
		else{
			item.seen = 'T';
			document.querySelector(".movie"+index).appendChild(addButton).innerHTML="Seen: "+item.seen;
			moviesSeen++;
			document.querySelector("#moviesCounterSeen").innerHTML = moviesSeen;
		}
	};
});



