# Coachshake

First use of the expert system (ES), Drifty, for a lounge called Nutrition Hub.

![Screenshot 2022-07-10 9 16 42 AM](https://user-images.githubusercontent.com/58202540/178148726-b7328556-6f6a-4ad8-a865-c2806bcbdb36.png)
![Screenshot 2022-07-10 9 18 10 AM](https://user-images.githubusercontent.com/58202540/178148775-50d09a76-2532-49cc-aa16-4848f1aa7481.png)


## Drifty

	1 Order (Workflow)
	2 Order (ES)
	3 Inform (ES)
	
	NI	Workflow/Process/Algorithm - Business/Science/Programming
	AI	Artificial Intelligence
	SI	Expert System

## Structure

	coachshake				Coachshake
		FRAMEWORK (IONIC V1)
		hooks 				Cordova
		iojs-3.3.1 			Node
		ionic-1.3.4 		Ionic
		node_modules		iojs-3.3.1 Local node_modules
		scss 				Sass
		www 				WEBSITE (HTML4)
			www/js				Client Javascript
			www/js/app.js		Ionic Entry Point
			mainfest.json 		Ionic Manifest
			service-worker.js 	Angular Service
		bower.json			Bower Mainfest
		config.xml			Ionic Cordova
		ionic.project		Ionic Project
		ionic.config.json	Ionic Configuration
		package.json		Node Package Manger Configuration
		Procfile			Heroku Docker Processes
		gulpfile.js			Gulp Task System 

## Technologies

### Used Languages

	HTML		4
	CSS			3
	Javascript	ES6
	XML			1.0
	XHTML		?
	SQL			SQL:2008

### Services

	Codeanywhere	https://codeanywhere.com
	Heroku			https://heroku.com
	ClearDB			https://cleardb.com

### Main Packages

	Ionic		1.3.4 (2/3/2015)
	 Sass		3.1.0
	 Bower		1.3.12
	 Gulp		3.5.6
	 Angular	2.0.0
	Cordova		4.2.0
	IO.js/node	3.3.1
	MySQL		2.18.1

## Running

	Heroku Dockerfile
	Heroku Procfile
	Heroku package.json
		npm start

	CentOS coachshake/
		iojs-3.3.1/node iojs-3.3.1/deps/npm/cli.js start

### URL

	Local
		https://localhost:3000
		https://localhost:3001
	Codeanywhere
		https://drifty-abakasam720639.codeanyapp.com/
		https://port-3001-drifty-abakasam720639.codeanyapp.com/
	Heroku (drifty-coachshake, drifty-database)
		https://drifty-coachshake.herokuapp.com/
		https://drifty-database.herokuapp.com:5000/

#### Ports

	Web Application, 3000
	Database, 3001
