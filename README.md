# Application Design

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

## URL

	Local
		https://localhost:3000
		https://localhost:3001
	Codeanywhere
		https://drifty-abakasam720639.codeanyapp.com/
		https://port-3001-drifty-abakasam720639.codeanyapp.com/
	Heroku (drifty-coachshake, drifty-database)
		https://drifty-coachshake.herokuapp.com/
		https://drifty-database.herokuapp.com:5000/

### Ports

	Web Application, 3000
	Database, 3001

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
	 Cordova	4.2.0
	IO.js/node	3.3.1
	MySQL		2.18.1

#### Architecture
		x86_64	Windows
		arm7	ChromeOS
		power	CentOS / Fedora (Yellowdog)
		various ?

# Running

Heroku Dashboard
Heroku Dockerfile
Heroku Procfile
Heroku ?/package.json
	npm start
		package.json
			iojs-3.3.1/node ionic-1.3.4/bin/ionic serve --port=3000 --address=localhost
			iojs-3.3.1/node www/js/server.js

CentOS Terminal A:coachshake/
	iojs-3.3.1/node ionic-1.3.4/bin/ionic serve --port=3000 --address=localhost
CentOS Terminal B:coachshake/www/js/
	iojs-3.3.1/node www/js/server.js
