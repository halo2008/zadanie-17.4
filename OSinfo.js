var os = require('os');
var readlineSync = require('readline-sync');

function getOSinfo() {

	var type = os.type();
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var upTime = os.uptime();
	var userInfo = os.userInfo();

	if(type === 'Darwin'){
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
	}
	console.log('Sytem', type);
	console.log('Release', release);
	console.log('cpu', cpu);
	console.log('Sytem uptime: ~', (upTime/60).toFixed(0), 'min');
	console.log('User name:', userInfo.username);
	console.log('Home dir:', userInfo.homedir);
}

function checkTimeHour(){
	var upTime = os.uptime();
	upTime = Number(upTime);
	var h = Math.floor(upTime/3600);
	var m = Math.floor(upTime%3600/60);
	var s = Math.floor(upTime%3600%60);
    console.log('czas to ', h , ' godzin ', m, ' minut ', s, 'sekund');

}

function checkTimeMinuts(){
	var upTime = os.uptime();
	upTime = Number(upTime);
	var m = Math.floor(upTime/60);
	var s = Math.floor(upTime%60%60);
    console.log('czas to ', m, ' minut ', s, 'sekund');
}

function time(){
	var sec = readlineSync.question('Enter the time in seconds ');
	sec = Number(sec);
	var m = Math.floor(sec/60);
	var s = Math.floor(sec%60%60);
    console.log('czas to ', m, ' minut ', s, 'sekund');
}

module.exports = {
	print: getOSinfo,
	checkTimeHour: checkTimeHour,
	time: time,
	checkTimeMinuts: checkTimeMinuts
};
