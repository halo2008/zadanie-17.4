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

function time(){
	var seconds = readlineSync.question('Podaj czas w sekundach ');
	convertTimeHour(seconds);
	convertTimeMin(seconds);
}

function convertTimeMin(seconds) {
	seconds = Number(seconds);
	m = Math.floor(seconds/60);
	s = Math.floor(seconds%60%60);
	var time = {min: m, sec: s};

	console.log('czas w minutach: ', time.min, 'min ', time.sec, 'sec')
}

function convertTimeHour(seconds) {
	seconds = Number(seconds);
	var h = Math.floor(seconds/3600);
	var m = Math.floor(seconds%3600/60);
	var s = Math.floor(seconds%3600%60);
	var time = {hour: h, min: m, sec: s};

	console.log('czas w godzinach ', time.hour , ' godzin ', time.min, ' minut ', time.sec, 'sekund');
}

module.exports = {
	print: getOSinfo,
	convertTime: time
};
