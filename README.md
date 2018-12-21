# graphicalData
Aplicacion de prueba como fullstack. Graficación de datos en pantalla

# Instrucciones de instalacion y configuración

Clonamos el proyecto de forma local, ejecutando el comando

*git clone https://github.com/DamianEmer/graphicalData.git*

Acceder al directorio del proyecto

*cd graphicalData*

**FRONTEND**

Una vez dentro accedemos al proyecto perteneciente a frontend e instalamos las dependencias

*cd frontend/graphicalData*

*npm install*

**BACKEND**

Estando en la raiz del proyecto accedemos al proyecto perteneciente a backend e instalamos de igual forma las dependencias

*cd backend/GraphicalData*

*mvn install*

**BASE DE DATOS**

Accedemos a Mysql Workbench e importamos la BD alojada en el directorio **DB** con el nombre *testing_sicks.sql*

## Configuración de acceso a los datos

En nuestro IDE de desarrollo abrimos el proyecto alojado en el dir. backend y cambiamos los valores de *spring.datasource.username* y *spring.datasource.password* localizados en el archivo *application.properties* por un usuario mySQL que generes en tu computadora local.

## EJECUCIÓN

Desde la consola nos situamos en el directorio del proyecto backend y ejecutamos el comando 

*mvn spring-boot:run*

Para el proyecto frontend de igual forma nos situamos en el directorio del proyecto y desde ahi ejecutamos el comando

*ng serve*

Listo ahora puedes probarlo en el navegador **http://localhost:4200/**

