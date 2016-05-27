getQuote();
//new quote when click button
$("#get-quote").on("click", function() {
	//remove previous quote
	$(".quote").empty();
	getQuote();
});

//or new quote when click spacebar
$(window).on("keyup", function(event) {
	//if backspace on empty text input
	if(event.which === 32) {
		$(".quote").empty();
		getQuote();
	}	
		event.stopPropagation();
});

function getQuote() {
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "http://proverbs-app.antjan.us/random",
		"method": "GET",
		"dataType": "jsonp",
		"headers": {
			"authorization": "Basic Og==",
			"cache-control": "no-cache",
			"postman-token": "6d48b6a5-bee9-ea8f-8871-957d7bd648b8"
		}
	}
	$.ajax(settings).fail(function(response) {
		console.log("this doesn't work");
	})

	.done(function (response) {
		$(".quote").append('"'+response+'"');
		var quote = '"'+response+'"';
		var tweetURL = "https://twitter.com/intent/tweet?hashtags=programming&related=freecodecamp&text=" +quote;
		$("#tweet > a").attr("href", tweetURL);
	});
}




