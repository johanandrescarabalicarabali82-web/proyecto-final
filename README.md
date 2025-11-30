# proyecto-final
Proyecto pedido de comida, Cafeteria de la universidad 
<div align="center">
Sistema de Pedidos de Comida en Línea
Proyecto Formativo – Ingeniería de Software

Autores:
Johan Andrés Carabalí Carabalí
Juan José Balanta Agrono

</div>
<div align="center">
Descripción del Proyecto
</div>

Este proyecto consiste en el desarrollo de un Sistema de Pedidos de Comida en Línea para un restaurante local.
El sistema permite consultar el menú, realizar pedidos, elegir método de pago, hacer seguimiento al estado del pedido, ver historial, y registrarse/iniciar sesión.

<div align="center">
Objetivo General
</div>

Desarrollar un sistema funcional y escalable que optimice la experiencia del usuario al realizar pedidos y mejore la gestión interna del restaurante.

<div align="center">
Requerimientos Funcionales (RF)
</div> <table> <tr><th>Código</th><th>Requerimiento</th></tr> <tr><td>RF1</td><td>Registrar usuarios e iniciar sesión</td></tr> <tr><td>RF2</td><td>Consultar menú del restaurante</td></tr> <tr><td>RF3</td><td>Realizar pedidos</td></tr> <tr><td>RF4</td><td>Seleccionar método de pago</td></tr> <tr><td>RF5</td><td>Consultar estado del pedido</td></tr> <tr><td>RF6</td><td>Ver historial de pedidos</td></tr> </table>
<div align="center">
Requerimientos No Funcionales (RNF)
</div>
Rendimiento

Tiempo máximo de respuesta: 2 segundos con 100 usuarios concurrentes.

Seguridad

Cifrado AES-256 para todas las contraseñas y datos sensibles.

Usabilidad

Interfaz responsive para celular, tablet y escritorio.

Disponibilidad

Disponibilidad mínima del 99.5% mensual.

Escalabilidad

Soporte hasta 500 usuarios concurrentes con una degradación máxima del 10%.

<div align="center">
Arquitectura del Sistema
</div>

El sistema está diseñado con Arquitectura por Capas, compuesta por:

Capa de Presentación   → InterfazUsuario
Capa de Lógica         → GestorUsuario, GestorMenu, GestorPedidos
Capa de Datos          → BaseDeDatos

<div align="center">
Diagramas del Sistema
</div>

Los diagramas UML se encuentran en:

/docs/diagramas/


Incluye:

Diagrama de Casos de Uso

Diagrama de Arquitectura

Diagrama de Clases

Diagrama de Secuencia

<div align="center">
Casos de Prueba
</div>

Los casos de prueba se encuentran en:

/docs/pruebas/


Ejemplo:

<table> <tr><th>ID</th><th>RF</th><th>Entrada</th><th>Resultado Esperado</th></tr> <tr><td>CP01</td><td>RF1</td><td>Datos válidos</td><td>Usuario registrado</td></tr> <tr><td>CP02</td><td>RF2</td><td>Menú solicitado</td><td>Mostrar lista de platos</td></tr> <tr><td>CP03</td><td>RF3</td><td>Pedido válido</td><td>Pedido registrado</td></tr> <tr><td>CP04</td><td>RF4</td><td>Método seleccionado</td><td>Pago aplicado</td></tr> <tr><td>CP05</td><td>RF5</td><td>Pedido en proceso</td><td>Estado visible</td></tr> </table>
