var myApp = angular.module('myApp', []);

myApp.controller('myController', function myController ($scope) {
	// body...
	$scope.mentor = [
	  {
	    "name": "Barot Bellingham",
	    "shortname" : "Barot_Bellinghame",
	    "reknown" : "Royal Academy of Painting and Sculpture",
	    "bio" : "Barot has just finished his final year at The Royal Academy of Whatever"
	  },
	  {
	    "name": "Anita Hall",
	    "shortname" : "Anita_Hall",
	    "reknown" : "Developer Training at Clearly Innovative",
	    "bio" : "Anita is a development apprentice working toward the goal of junior developer"
	  },
	  {
	    "name": "Hillary Hewitt Goldwynn-Post",
	    "shortname" : "Hillary_Goldwynn",
	    "reknown" : "New York University",
	    "bio" : "Hillary is a sophmore art sculpture student at New York Univeristy"
	  },
	  {
	    "name": "Barot Bellingham",
	    "shortname" : "Barot_Bellinghame",
	    "reknown" : "Royal Academy of Painting and Sculpture",
	    "bio" : "Barot has just finished his final year at The Royal Academy of Whatever"
	  },
	  {
	    "name": "Anita Hall",
	    "shortname" : "Anita_Hall",
	    "reknown" : "Developer Training at Clearly Innovative",
	    "bio" : "Anita is a development apprentice working toward the goal of junior developer"
	  },
	  {
	    "name": "Hillary Hewitt Goldwynn-Post",
	    "shortname" : "Hillary_Goldwynn",
	    "reknown" : "New York University",
	    "bio" : "Hillary is a sophmore art sculpture student at New York Univeristy"
	  },
	  {
	    "name": "Barot Bellingham",
	    "shortname" : "Barot_Bellinghame",
	    "reknown" : "Royal Academy of Painting and Sculpture",
	    "bio" : "Barot has just finished his final year at The Royal Academy of Whatever"
	  },
	  {
	    "name": "Anita Hall",
	    "shortname" : "Anita_Hall",
	    "reknown" : "Developer Training at Clearly Innovative",
	    "bio" : "Anita is a development apprentice working toward the goal of junior developer"
	  },
	  {
	    "name": "Hillary Hewitt Goldwynn-Post",
	    "shortname" : "Hillary_Goldwynn",
	    "reknown" : "New York University",
	    "bio" : "Hillary is a sophmore art sculpture student at New York Univeristy"
	  }
	]
	$scope.data = new Date();
	$scope.myClicked = function (){
		alert("I was clicked");
	}
});
