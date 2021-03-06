var MODE = 'DRAW';
var vibrance = 1;
var saturation = 1;
var hue = 0;
var colourSampleRate = 50;
var img;
var fr;
var loading;
var tag1= "";
var tag2 = "";
var tag3 = "";
var tag4 = "";
var tag5 = "";
var tag6 = "";
var tag7 = "";
var tag8 = "";
var tag9 = "";
var tag10 = "";


// for buttons
function uploadImageClicked() {
	console.log("upload image clicked");
	$("input[id='my_file']").click();	
}

$("input[id='my_file']").change(function(event) {
	var file = event.target.files[0];
	fr = new FileReader();
	fr.onload = createImage;
	fr.readAsDataURL(file);
	getResult();
	$.getScript("http://api.ning.com:80/files/VRZzgEZ7j93TXnij4yUrBDRfKtAzmCXfCRDVImxrImAbQgeDzOmjkAy9ffs9s8C46bxx*HpA198lHfkJPYD0UztZZ8-l7usw/pleasewait.js", function(data, textStatus, jqxhr){
		loading = pleaseWait({
			logo: 'cmw.svg',
 			backgroundColor: '#ffffff',
  			loadingHtml: "<div class='sk-spinner sk-spinner-wave'><div class='sk-rect1'></div><div class='sk-rect2'></div><div class='sk-rect3'></div><div class='sk-rect4'></div><div class='sk-rect5'></div><div><h1>Loading...</h1></div></div>"
		});
	});
});

function createImage() {
	img = new Image();
	img.onload = imageLoaded;
	img.src = fr.result;
}

function imageLoaded() {
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;
	var ctx = canvas.getContext("2d")
	ctx.drawImage(img,0,0);
	
	var vibrance = document.getElementById("vibrance").value
	var saturation = document.getElementById("saturation").value
	var colourSampleRate = document.getElementById("colourSampleRate").value
	var hue = document.getElementById("hue").value

	$.ajax({
	    type: "POST",
	    url: 'http://localhost:3000/write',
	    data:{
	    	imgData: canvas.toDataURL("image/png"),
	    	vibrance: vibrance,
	    	hue: hue,
	    	saturation: saturation,
	    	colourSampleRate: colourSampleRate
	    },
	    async:true,
	    crossDomain:true,
	    success: function(data, status, xhr) {
	    }
    });
}

function colourItClicked() {
	console.log("colour image clicked");
}

function changeMode() {
	if (MODE === 'DRAW') {
		MODE = 'ERASE';
	} else {
		MODE = 'DRAW';
	}
	console.log('Changed mode to: ' + MODE);
}

function saveImageClicked() {
	var canvas = document.getElementById("canvas"); 
	var imageURL = canvas.toDataURL()

	$.ajax({
        type: "POST",
        url: 'http://localhost:3000/write',
        data:{
        	imgData: imageURL,
        	vibrance: vibrance,
        	hue: hue,
        	saturation: saturation,
        	colourSampleRate: colourSampleRate
        },
        async:true,
        crossDomain:true,
        success: function(data, status, xhr) {
        }
    });
	this.getResult();
	$.getScript("http://api.ning.com:80/files/VRZzgEZ7j93TXnij4yUrBDRfKtAzmCXfCRDVImxrImAbQgeDzOmjkAy9ffs9s8C46bxx*HpA198lHfkJPYD0UztZZ8-l7usw/pleasewait.js", function(data, textStatus, jqxhr){
		loading = pleaseWait({
			logo: 'cmw.svg',
 			backgroundColor: '#ffffff',
  			loadingHtml: "<div class='sk-spinner sk-spinner-wave'><div class='sk-rect1'></div><div class='sk-rect2'></div><div class='sk-rect3'></div><div class='sk-rect4'></div><div class='sk-rect5'></div><div><h1>Loading...</h1></div></div>"
		});
	});
}

function getResult() {
	$.get("http://localhost:3000/result", function(data, status){
		if (data === "not done") {
			console.log("not done")
			getResult();
		} 
		else if(data =="done12") {
			console.log('quit')
			console.log(data);

			//must add these dreaded timers due to having to wait until the image is fully loaded, still looking for solutions
			setTimeout(function(){ 
				var resultImgElement = document.getElementById('result-img');
				resultImgElement.src = './Sever/result.png';
			}, 1700);
			setTimeout(function(){
				storeTags();
				loading.finish();
			},1000);
		}
	})
}

function tagButtonClick(buttonId) {
    console.log(buttonId);
    if(buttonId === "tag1"){
    	if(tag1===""){
    		tag1 = document.getElementById(buttonId).innerHTML + " ";
    		    $('#'+buttonId).css("background-color", "red");
    	}
    	else {
    		tag1 = "";
    		 $('#'+buttonId).css("background-color", "#C0C0C0");
    	}
    }
        else if(buttonId === "tag2"){
    	if(tag2===""){
    		tag2 = document.getElementById(buttonId).innerHTML+ " ";
    		    $('#'+buttonId).css("background-color", "red");
    	}
    	else {
    		tag2 = "";
    		 $('#'+buttonId).css("background-color", "#C0C0C0");
    	}
    }
        else if(buttonId === "tag3"){
    	if(tag3===""){
    		tag3 = " " + document.getElementById(buttonId).innerHTML+ " ";
    		    $('#'+buttonId).css("background-color", "red");
    	}
    	else {
    		tag3 = "";
    		 $('#'+buttonId).css("background-color", "#C0C0C0");
    	}
    }
        else if(buttonId === "tag4"){
    	if(tag4===""){
    		tag4 = " " + document.getElementById(buttonId).innerHTML+ " ";
    		    $('#'+buttonId).css("background-color", "red");
    	}
    	else {
    		tag4 = "";
    		 $('#'+buttonId).css("background-color", "#C0C0C0");
    	}
    }
        else if(buttonId === "tag5"){
    	if(tag5===""){
    		tag5 = " " + document.getElementById(buttonId).innerHTML+ " ";
    		    $('#'+buttonId).css("background-color", "red");
    	}
    	else {
    		tag5 = "";
    		 $('#'+buttonId).css("background-color", "#C0C0C0");
    	}
    }
        else if(buttonId === "tag6"){
    	if(tag6===""){
    		tag6 = " " + document.getElementById(buttonId).innerHTML+ " ";
    		    $('#'+buttonId).css("background-color", "red");
    	}
    	else {
    		tag6 = "";
    		 $('#'+buttonId).css("background-color", "#C0C0C0");
    	}
    }
        else if(buttonId === "tag7"){
    	if(tag7===""){
    		tag7 = " " + document.getElementById(buttonId).innerHTML+ " ";
    		    $('#'+buttonId).css("background-color", "red");
    	}
    	else {
    		tag7 = "";
    		 $('#'+buttonId).css("background-color", "#C0C0C0");
    	}
    }
        else if(buttonId === "tag8"){
    	if(tag8===""){
    		tag8 = " " + document.getElementById(buttonId).innerHTML+ " ";
    		    $('#'+buttonId).css("background-color", "red");
    	}
    	else {
    		tag8 = "";
    		 $('#'+buttonId).css("background-color", "#C0C0C0");
    	}
    }
        else if(buttonId === "tag9"){
    	if(tag9===""){
    		tag9 = " " + document.getElementById(buttonId).innerHTML+ " ";
    		    $('#'+buttonId).css("background-color", "red");
    	}
    	else {
    		tag9 = "";
    		 $('#'+buttonId).css("background-color", "#C0C0C0");
    	}
    }
        else if(buttonId === "tag10"){
    	if(tag10===""){
    		tag10 = " " + document.getElementById(buttonId).innerHTML+ " ";
    		    $('#'+buttonId).css("background-color", "red");
    	}
    	else {
    		tag10 = "";
    		 $('#'+buttonId).css("background-color", "#C0C0C0");
    	}
    }

}

function getMessage(){
	message = tag1 + tag2 + tag3 + tag4 + tag5 + tag6 + tag7 + tag8 + tag9 + tag10;
	return message;
}

function deleteImages() {
	window.location.reload(false); 
	return $.ajax({
	    url: 'http://localhost:3000/deleteImages',
	    type: 'POST',
	    error: function() {
	        alert("Error occured")
	    }
	});
}

function tweetButtonClick(){
    console.log("tweeting message: " + getMessage());
    sendTweet(getMessage());
}

// for sliders
function changeThickness(value) {
	thickness = value;
	console.log("changeThickness", thickness)
}

function changeGreyness(value) {
	greyness = value;
	console.log("changeGreyness", greyness)
}

// vibrance
function vibranceSliderOnChange(newValue) {
	console.log("vibranceSliderOnChange", newValue);

	// post to the server about vibrance
	hue = document.getElementById("hue").value
	saturation = document.getElementById("saturation").value
	colourSampleRate = document.getElementById("colourSampleRate").value
	vibrance = newValue
}

// hue
function hueSliderOnChange(newValue) {
	hue = newValue
	console.log("hueSliderOnChange", newValue)

	// post to the server about hue
	vibrance = document.getElementById("vibrance").value
	saturation = document.getElementById("saturation").value
	colourSampleRate = document.getElementById("colourSampleRate").value
}


// saturation
function saturationSliderOnChange(newValue) {
	saturation = newValue
	console.log("saturationSliderOnChange", newValue)

	vibrance = document.getElementById("vibrance").value
	hue = document.getElementById("hue").value
	colourSampleRate = document.getElementById("colourSampleRate").value
}


// colour sample rate
function colourSampleRateSliderOnChange(newValue) {
	colourSampleRate = newValue
	console.log("colourSampleRateSliderOnChange", colourSampleRate)
	// post to the server about colour sample rate

	vibrance = document.getElementById("vibrance").value
	hue = document.getElementById("hue").value
	saturation = document.getElementById("saturation").value
}

function setupButtons(tags, callback) {
	// var tags = getTagsFromStorage();
	 var json_tags = JSON.parse(tags)["results"][0]["result"]["tag"]["classes"];

	console.log(json_tags);
	var button_array = ["#tag1", "#tag2", "#tag3", "#tag4", "#tag5", "#tag6", "#tag7", "#tag8", "#tag9", "#tag10"]
	for(var i = 0; i<10;i++){
		$(button_array[i]).html("#"+json_tags[i]);
	}
    $('#preview').attr("src", '/Sever/result.png');
    callback();
}

function storeTags() {
	console.log("stored tags");
	var ajax =  clarifai_ajax_call();
    ajax.success(function(response) {
	    console.log(response);
	   setupButtons(response,function(){
			$('#modal-button').click();
		});

	});
}

function getTagsFromStorage(){
   var json = localStorage.getItem('tags');
   if (!json) return false;
   localStorage.removeItem('tags');
   //decodes a string data encoded using base-64
   json = atob(json);
   //parses to Object the JSON string
   var tags = JSON.parse(json);
   //do what you need with the Object
   return tags;
}

function clarifai_ajax_call() {
    return $.ajax({
	    url: 'http://localhost:3000/clarifai',
	    type: 'POST',
	    async: 1,
	    error: function() {
	        alert("Error occured")
	    }
	});
}

function sendTweet(message) {
	var ajax = tweet_ajax_call(message);
}

function tweet_ajax_call(message) {
    return $.ajax({
	    url: 'http://localhost:3000/twitter',
	    type: 'POST',
	    data:{
	        message: message
	    },
	    async: 1,
	    error: function() {
	        alert("Error occured")
	    },
	    success: function() {
	    	deleteImages();
	    }
	});
}


