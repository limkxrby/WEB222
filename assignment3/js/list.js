// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];


window.onload = function(){
	
	var myContainer = document.querySelector("#myFruits");
	
	for (var i =0; i <fruits.length; i++){
		myContainer.innerHTML += "<li>" + fruits[i] + "</li>";
	}
	
	
	var myContainer3 = document.querySelector("#myDirectory");

	for (var i =0; i <directory.length; i++){
		
		if(directory[i].type == "file"){
			myContainer3.innerHTML += "<li>" + directory[i].name + "</li>";
		}
		else{
			var y = directory[i].files.length
			var nest = "<ul>";
			for (var x = 0; x < y; x++){
				nest += "<li>" + directory[i].files[x].name + "</li> ";
			}
							myContainer3.innerHTML += "<li>" + directory[i].name + "</li>" + nest + "</ul>"  ;


		}
	}
	

	
};




