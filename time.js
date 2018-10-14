function checkTime(){
	console.log('podaj czas w sekundach');
	process.stdin.on('readable', function() {	    
	    var timeInSeconds = process.stdin.read();
	    if (timeInSeconds !== null) {
	    	timeInSeconds = Number(timeInSeconds);
	    	var h = Math.floor(timeInSeconds/3600);
	    	var m = Math.floor(timeInSeconds%3600/60);
	    	var s = Math.floor(timeInSeconds%3600%60);

	        console.log('czas to ', h , ' godzin ', m, ' minut ', s, 'sekund');
	    }
	});
}


exports.checkTimeB = checkTime;