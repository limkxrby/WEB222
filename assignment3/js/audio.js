// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = function() {
    

    var myContainer = document.querySelector("#music");
	if (audio.controls == true) {
			var aud = "<figure> <audio controls>";
		}
	else{
			var aud = "<figure> <audio>";
		}
		
    for (var i = 0; i < (audio.source).length; i++) {
        	 aud +=  "<source src='" 
					+ audio.source[1].src
					+ "' type='"
					+ audio.source[1].type
					+ "'>";
	}						
    
	aud += "</audio> </figure>";
	myContainer.innerHTML += aud;

};


						