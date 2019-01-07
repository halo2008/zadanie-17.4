var OSinfo = require('./OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(sec) {
    var input = process.stdin.read();
        sec = process.stdin.read();
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
        case '/convertTime':
		    	OSinfo.convertTime();
		    break;
		    case '/getOSinfo':
		    	OSinfo.print();
		    break;
		  	default:
		    	process.stderr.write('Wrong instruction!\n');
		  }
    }
});
