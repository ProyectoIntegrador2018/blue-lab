
## Deployment
Las siguientes instrucciones son para generar un archivo listo para deployment utilizando Vue CLI, Node.js y Surge.

### Prerequisitos
Tener instalado NPM contenido por Node.js (https://www.npmjs.com/get-npm)  
Tener instalado Surge mediante NPM (https://surge.sh/)

#### 1. Clonar repositorio y acceder a la carpeta del proyecto Showroom
```shell
$ git clone https://github.com/ProyectoIntegrador2018/blue-lab.git
$ cd blue-lab/showroom
```

#### 2. Instalar el proyecto
```shell
$ npm install
```

#### 3. Construir el proyecto
```shell
$ npm run build
```

Al terminar se generará una carpeta llamada **dist** donde se encuentra una version lista del proyecto utilizable por cualquier servidor HTTP.
```shell
 DONE  Build complete. The **dist** directory is ready to be deployed.
 INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html
```

#### 4. Acceder a la carpeta _dist_ y correr Surge
```shell
$ cd dist
$ surge
```

Seguir las instrucciones en la consola. Pedirá configurar un correo electrónico y contraseña si es la primera vez que se utiliza Surge. Confirmar la carpeta del proyecto es la correcta y enter para continuar.
```shell
 Running as email@email.mx (Student)

        project: /home/bluelab/showroom/dist/
         domain: straight-bubble.surge.sh
         upload: [====================] 100% eta: 0.0s (22 files, 3308399 bytes)
            CDN: [====================] 100%
             IP: 45.55.110.124
```
Cabe mencionar que la version gratuita de Surge solo te permite configurarse con nombres predeterminados para el dominio (URL), en caso de que el nombre generado no sea apropiado, simplemente abortar y volver a correr Surge.

#### 5. Prueba del proyecto
Ir a la liga proporcionada por Surge y verificar que el proyecto se encuentra levantado exitosamente.
En nustro caso - <straight-bubble.surge.sh>



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

*(POR EL MOMENTO SE TIENE QUE CONTACTAR A alberto-bermi@hotmail.com, para tener las credenciales de acceso)*

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

En nuestro caso la liga es https://quiet-cliffs-83666.herokuapp.com/

Si aparece esto en el navegador, to app esta corriendo correctamente.

{"error":"This route does not exist, try /other"}


