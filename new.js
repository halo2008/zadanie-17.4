var OSinfo = require('./OSinfo');
var time = require('./time');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {    
    var input = process.stdin.read(); 

    if (input !== null) {
    	var instruction = input.toString().trim();
    	switch (instruction) {
			case '/exit':
		    	process.stdout.write('Quitting app!\n');
		    	process.exit();
		    break;
		  	case 'version':
		  		console.log(process.versions.node);
		  	break;
		  	case '/checkTimeH':
		    	OSinfo.checkTimeHour();
		    break;
		    case '/checkTimeM':
		    	OSinfo.checkTimeMinuts();
		    break;
		    case '/getOSinfo':
		    	OSinfo.print();
		    break;		    
		  	default:
		    	process.stderr.write('Wrong instruction!\n');
		}
    }
});