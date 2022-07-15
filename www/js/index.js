var server = {
	using: 'Heroku',
	URL: {
		Codeanywhere: 'http://port-3001-drifty-abakasam720639.codeanyapp.com/',
		Heroku: 'http://drifty-database.herokuapp.com/',
		parameters: new URL(window.location.href).searchParams
	}
}

var task = server.URL.parameters.get('task')
var phone = server.URL.parameters.get('phone')
var data = server.URL.parameters.get('data')
var appointment = server.URL.parameters.get('appointment')
var orders = server.URL.parameters.get('orders')
var order = server.URL.parameters.get('order')

if (task == null) {
	var phone = {
		user: document.getElementById('phone-user'),
		submit: document.getElementById('phone-submit')
	}

	phone.submit.onclick = function() {
		server.URL.parameters = '?task=LOGIN&phone=' + phone.user.value
		parent.location = server.URL[server.using] + server.URL.parameters
	}
}
if (task == 'LOGIN') {
	var appointment = {
		phone: document.getElementById('appointment-phone'),
		plans: document.getElementById('appointment-plans'),
		date: document.getElementById('appointment-date'),
		schedule: document.getElementById('appointment-schedule')
	}

	var registered = (data == '{"fieldCount":0,"affectedRows":1,"insertId":0,"serverStatus":2,"warningCount":0,"message":"","protocol41":true,"changedRows":0}')

	if (registered) {
		server.URL.parameters = '?task=LOGIN&phone=' + phone
		parent.location = server.URL[server.using] + server.URL.parameters
	}

	var empty = (data == '[]')
	if (empty) {
		server.URL.parameters = '?task=REGISTER&phone=' + phone
		parent.location = server.URL[server.using] + server.URL.parameters
	} else {
		data = data.substr(1, data.length - 2)
		data = JSON.parse(data)

		var logs = '1. ' + data['ONE'] + '<br/>2. ' + data['TWO'] + '<br/>3. ' + data['THREE'] + '<br/>4. ' + data['FOUR'] + '<br/>5. ' + data['FIVE']
		
		appointment.phone.innerHTML = phone
		appointment.plans.innerHTML = logs
		appointment.date.innerHTML = data['APPOINTMENT']
	}
		
	appointment.schedule.onclick = function() {
		server.URL.parameters = '?task=SCHEDULE&phone=' + phone
		parent.location = server.URL[server.using] + server.URL.parameters
	}
}
if (task == 'REGISTER') {
	server.URL.parameters = '?task=LOGIN&phone=' + phone
	parent.location = server.URL[server.using] + server.URL.parameters
}
if (task == 'SCHEDULE') {
	server.URL.parameters = '?task=LOGIN&phone=' + phone
	parent.location = server.URL[server.using] + server.URL.parameters
}
if (task == 'ORDERS') {
}
if (task == 'OFFER') {}
if (task == 'MENU') {
	var menus = document.getElementsByName('menu')
	
	for(var index = 0; index < menus.length; index++) {
		menus[index].onchange = function() {
			server.URL.parameters = '?task=PICKUP&phone=' + phone + '&type=' + this.options[0].value + '&choice=' + this.value
			
			parent.location = server.URL[server.using] + server.URL.parameters
		}
	}
}
if (task == 'PICKUP') {
	var pickups = document.getElementsByName('delivery')
	
	for(var index = 0; index < pickups.length; index++) {
		pickups[index].onchange = function() {
			var day = this.id
			var type = server.URL.parameters.get('type')
			var choice = server.URL.parameters.get('choice')
			var item = day + ' ' + type + ' ' + choice
			var location = this.value
			
			server.URL.parameters = '?task=ORDER&phone=' + phone + '&item=' + item + '&location=' + location + '&time=' + 'ASAP'
			parent.location = server.URL[server.using] + server.URL.parameters
		}
	}
}
if (task == 'ORDER') {
fetch('https://textbelt.com/text', {
  method: 'post',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    phone: '3469322511',
    message: 'Hello world',
    key: '8a138723f3ee178decb666d5e8236891754cef16OqC8oosgvMHIyL1tn3lrYLrKb',
  }),
}).then(response => {
  return response.json();
}).then(data => {
  alert(data);
})
	
	server.URL.parameters = '?task=ORDERS&phone=' + phone; 
	parent.location = server.URL[server.using] + server.URL.parameters
}

var navigation = document.getElementById('navigation')
navigation.onchange = function() {
	var webpage = this.value
		
	if(webpage == 'offer.html')    { server.URL.parameters = '?task=OFFER&phone=' + phone; parent.location = server.URL[server.using] + server.URL.parameters }
	if(webpage == 'council.html')  { server.URL.parameters = '?task=LOGIN&phone=' + phone; parent.location = server.URL[server.using] + server.URL.parameters }
	if(webpage == 'schedule.html') { server.URL.parameters = '?task=ORDERS&phone=' + phone; parent.location = server.URL[server.using] + server.URL.parameters }	
}
var schedule = document.getElementById('schedule')
schedule.onchange = function() {
	var option = this.value
	if(option == 'order') { server.URL.parameters = '?task=MENU&phone=' + phone; parent.location = server.URL[server.using] + server.URL.parameters }
	
	data = data.substr(1, data.length - 2)
	data = data.split('},{')
	
	var days = {
		M: document.getElementById('schedule-day-M'),
		T: document.getElementById('schedule-day-T'),
		W: document.getElementById('schedule-day-W'),
		R: document.getElementById('schedule-day-R')
	}
		
	for(var index = 0; index < data.length; index++) {
		var entry 
	
		var left = data[index].substr(0,1) == '{'
		var right = data[index].substr(data[index].length - 1, data[index].length) == '}'
		
		if(!left && !right) JSON.parse('{' + data[index] + '}')
		else if(!left) entry = JSON.parse('{' + data[index])
		else if(!right) entry = JSON.parse(data[index] + '}')
				
		var number = entry['PHONE']
		var item = entry['ITEM'].split(' ')
		var day = item[0]
		var type = item[1]
		var choice = item[2]
		var pickup = entry['LOCATION']
		var time = entry['TIME']
		
		if(option == type) days[day].innerHTML = type + ' ' + choice + ' ' + pickup + ' ' + time
	}
}

