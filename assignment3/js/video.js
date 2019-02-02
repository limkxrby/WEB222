// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.ogg", type: "video/ogg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.webm", type: "video/webm"}
    ]
};

window.onload = function() {
    

    var myContainer = document.querySelector("#video");
	if (video.controls == true) {
			var vid = "<figure> <video width='"
					+ video.width
					+ "' height='"
					+ video.height
					+ "' controls>";
		}
	else{
			var vid = "<figure> <video width='"
					+ video.width
					+ "' height='"
					+ video.height
					+ ">";
		}
		
    for (var i = 0; i < (video.source).length; i++) {
        	 vid +=  "<source src='" 
					+ video.source[1].src
					+ "' type='"
					+ video.source[1].type
					+ "'>";
	}						
    
	vid += "</video> </figure>";
	myContainer.innerHTML += vid;

};