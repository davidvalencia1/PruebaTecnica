
# Prueba Tecnica  
Este proyecto es te proyecto tiene como objetivo responder al requerimiento de una API RESTful utilizando Node.js y respetando los principios de Clean Architecture 

A brief description of what this project does and who it's for

Requisitos: 
 
Node Version v18.16.0 o superior    

Instrucciones de ejecucion:
  1. Clonar el repositorio desde git

    https://github.com/davidvalencia1/PruebaTecnica.git

  2. Dirigirse hasta la ruta de clonacion:

    CD //Ruta-de-clonacion//aqui

  3. Instala las depedencias requeridas:

    npm install
  5. Inicia el proyecto:
     
    npm start
   7. Listo!! el proyecto estara corriendo en el puerto 3000


Decisiones de diseño y estructura:
Para este proyecto se decidio usar Nodejs junto con Express para facilitar la implementacion de la api
  Bajo clean architecture se estructurizo el proyecto en 5 capas
  1. Entidades: Definicion de modelos del dominio
  2. Use Cases: Contiene logica del Negocio
  3. Interface Adapters: Adapta la logica del negocio a la interface de api
  4. Frameworks & Drivers: Gestiona y estructura la interaccion con Frameworks
  5. Middleware: Se encarga de la validacion de datos y tareas generales
     
Se utilizo un sistemas de capas bajo Clean architecture diferencia las responsabilidades
Se implemento Middleware para validacion de peticiones entrantes   
Se realizo un pequeño sistema de autentificacion y login simulando un entorno real

Link video explicativo: https://www.loom.com/share/198c29f7bfc74606a171f442ca21183f
  
