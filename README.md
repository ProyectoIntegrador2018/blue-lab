# Project Showroom

[![Maintainability](https://api.codeclimate.com/v1/badges/70f84980dbc81bc670c6/maintainability)](https://codeclimate.com/github/ProyectoIntegrador2018/blue-lab/maintainability)

## Table of contents

* [Client Details](#client-details)
* [Environment URLS](#environment-urls)
* [Team](#team)
* [Management resources](#management-resources)
* [Technology Stack](#technology-stack)
* [Project Setup](#proyect-setup)
* [Running the stack for development](#running-the-stack-for-development)
* [Stop the project](#stop-the-project)
* [Checking code for potential issues](#checking-code-for-potential-issues)
<!-- * [Restoring the database](#restoring-the-database)
* [Debugging](#debugging)
* [Running specs](#running-specs) -->

### Client Details

| Name               | Email             | Role |
| ------------------ | ----------------- | ---- |
| Aldo Lares | alares@bluepeople.com | Product Owner  |


### Environment URLS

* **Production** - [BlueLab Showroom](http://straight-bubble.surge.sh/)
* **Production API** - [BlueLab Showroom API](https://quiet-cliffs-83666.herokuapp.com/)

### Team

| Name           | Email             | Role        |
| -------------- | ----------------- | ----------- |
| Esthephany Ayala Yáñez | A00818207@itesm.mx | Developer |
| Diego Jiménez Torres | A01139513@itesm.mx | Developer |
| Alberto Bermea Treviño | A01196516@itesm.mx| Developer |

### Management tools

You should ask for access to this tools if you don't have it already:

* [Github repo](https://github.com/ProyectoIntegrador2018/blue-lab)
* [Backlog](https://github.com/ProyectoIntegrador2018/blue-lab/projects/1)
* [Documentation](https://drive.com)
<!-- * [Heroku](https://crowdfront-staging.herokuapp.com/)  -->
<!-- ## Development -->

### Technology Stack

#### FrontEnd
* HTML
* CSS
* Javascript

#### BackEnd
* AWS Mongo API 
* AWS S3
* AWS Lamba
* Vuex

#### Libraries
* Node.js
* Vue
* Vuetify
* Bootstrap

### Project Setup

#### Instalar NPM que se encuentra dentro de Node.js (https://www.npmjs.com/get-npm)
Para asegurarse que está instalado, correr el siguiente comando.
```shell
$ npm -v
```

### Running the stack for development
Las siguientes instrucciones son para correr un ambiente local utilizando Vue CLI y Node.js.

#### 1. Clonar repositorio y acceder a la carpeta del proyecto Showroom
```shell
$ git clone https://github.com/ProyectoIntegrador2018/blue-lab.git
$ cd blue-lab/showroom
```

#### 2. Instalar el proyecto
```shell
$ npm install
```

#### 3. Ejecutar aplicación web compilada en tiempo real para development
```shell
$ npm run serve
```

#### 4. Acceder al sitio
Abrir al navegador de elección y abrir el enlace generado. Usualmente el mensaje es el siguiente.
```shell
 DONE  Compiled successfully in 555ms                                  9:31:01 PM


  App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.0.11:8080/
```

### Stop the project
#### Para detener la ejecución de la aplicación web
```shell
Ctrl + c
```

<!-- ### Restoring the database


### Debugging


### Running specs
 -->

### Checking code for potential issues
#### Para verificar cualquier tipo de error se utiliza Lints 
```
npm run lint
```
