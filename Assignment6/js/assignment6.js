// Kirby Lim

// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1


window.onload = function() {


	makeRequest(1);
}


function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	// 		"https://reqres.in/api/users?page=1" // for page 1
	// 		"https://reqres.in/api/users?page=2" // for page 2
	// 		etc...
	var url = "https://reqres.in/api/users?page=" + pageNum;



	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		    // Just for debugging. 
			console.log(httpRequest.responseText);
			
			// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			populateRequest(jsData);

		} else {
			console.log('There was a problem with the request.');
		}
	}
}	




function populateRequest(js) {

	var tbodyElem = document.getElementById('data');
	while (tbodyElem.firstChild) {
		tbodyElem.removeChild(tbodyElem.firstChild);
	}
	var data = js.data;


	for (var i = 0; i < data.length; i++) {
		
		// create element nodes
		var row = document.createElement('tr');
		var id = document.createElement('td');
		var fname = document.createElement('td');
		var lname = document.createElement('td');
		var avtr = document.createElement('td');
		var img = document.createElement('img');
		img.src = data[i].avatar;

		// appending nodes
		id.appendChild(document.createTextNode(data[i].id));
		fname.appendChild(document.createTextNode(data[i].first_name));
		lname.appendChild(document.createTextNode(data[i].last_name));
		avtr.appendChild(img);

		// appending nodes to the table rows
		row.appendChild(id);
		row.appendChild(fname);
		row.appendChild(lname);
		row.appendChild(avtr);

		// appending rows to the body table element 
		tbodyElem.appendChild(row);
	}

	
}
