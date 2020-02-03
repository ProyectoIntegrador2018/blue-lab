
## Deployment
Las siguientes instrucciones son para generar un archivo listo para deployment utilizando Vue CLI y Node.js.

### 1. Clonar repositorio y acceder a la carpeta del proyecto Showroom
```shell
$ git clone https://github.com/ProyectoIntegrador2018/blue-lab.git
$ cd blue-lab/showroom
```

### 2. Asegurarse de tener instalado NPM contenido por Node.js (https://www.npmjs.com/get-npm)
Para asegurarse que está instalado, correr el siguiente comando.
```shell
$ npm -v
```

### 3. Instalar el proyecto
```shell
$ npm install
```

### 4. Generar archivo de Deployment
```shell
$ npm run build
```
Se generará un archivo *.zip* con el nombre del proyecto.

### 5. Proporcionar el archivo *.zip* a Blue People.
Por requerimientos del cliente, se nos pidió engregar el archivo generado al contacto del Arquitecto de Software del cliente, y ellos levantarán el proyecto.