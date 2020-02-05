
## Deployment
Las siguientes instrucciones son para generar un archivo listo para deployment utilizando Vue CLI y Node.js.

## Deployment API

### Prerequisitos
Tener instalado NPM contenido por Node.js (https://www.npmjs.com/get-npm)
Tener una cuenta de Heroku (https://id.heroku.com/login)
Tener instalado Heroku CLI (https://devcenter.heroku.com/articles/heroku-cli)

### 1. Hacer un fork del repositorio
Esto con el fin de tener los permisos para poder desplegar la aplicacion


### 2. Clonar repositorio y acceder a la carpeta del proyecto Showroom_API
```shell
$ git clone url-de-tu-repositorio-fork
$ cd blue-lab/showroom_api
```

### 3. Instalar el proyecto
```shell
$ npm install
```

### 4. Darse login en Heroku Cli
```shell
$ heroku login
```
y seguir los pasos para logearse


### 5. Crear la conexion con heroku
```shell
$ heroku create
```


### 6. Setup dentro de heroku
Irse al dashboard de heroku y ahi se encontrara el proyecto con el nombre que se le ha asignado, en este caso con intense-oasis-72007

Dentro del proyecto en heroku ir Settings, dentro de config vars, vamos a crear las siguientes variables

*(POR EL MOMENTO SE TIENE QUE CONTACTAR A alberto-bermi@hotmail.com, para tener las credenciales de acceso)

### 7. Terminar la conexion del deploy
```shell
$ git init
$ heroku git:remote -a intense-oasis-72007
$ git add .
$ git commit -m "Make it better"
$ git push heroku master
```

### 8. Prueba de proyecto
Ir a la liga que proporciona heroku para probar que el sistema sirva.

En nuestro caso la liga es https://intense-oasis-72007.herokuapp.com/

Si aparece esto en el navegador, to app esta corriendo correctamente.

{"error":"This route does not exist, try /other"}


