# TickQApp Cliente
## Pasos para iniciar el cliente.
1. Clonar el repositorio.
2. Correr `npm install`
3. Crear archivo .env como lo indica el archivo `env.example`.
4. Correr `npm start`

## Descripción del cliente
Realizado con _React Js y Material UI_.

El cliente cuenta con una Landing Page con una navegacion atravez de Click en el Navbar, que hace scroll a cada una de las secciones.

En la seccion de la  **DEMO** en vivo, es posible agregar personas a la cola para atencion del cliente.
servidor
Se ejecuta una consulta al **Backend** cada _20 segundos_ que permite mostrar en tiempo real el momento en que han sido agregados a la cola.

El momento en que han sido atendidos y pasan a la lista de usuarios atendidos, que se mantienen registrados en base de datos, por lo tanto, la informacion seguira siendo accesible luego de que hayan sido atendidos.


