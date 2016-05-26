getQuote();
$("#get-quote").on("click", function() {
	//remove previous quote
	$(".quote").empty();
	getQuote();
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
		console.log("this didn't work");
	});

	$.ajax(settings).done(function (response) {
		$(".quote").append('"'+response+'"');
		var quote = '"'+response+'"';
		var tweetURL = "https://twitter.com/intent/tweet?hashtags=programming&related=freecodecamp&text=" +quote;
		$("a").attr("href", tweetURL);
	});
}




