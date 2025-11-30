# proyecto-final
Proyecto pedido de comida, Cafeteria de la universidad 
Sistema de Pedidos de Comida en Línea
Proyecto Formativo – Ingeniería de Software

Autores:

Johan Andrés Carabalí Carabalí

Juan José Balanta Agrono

 Descripción del proyecto

Este proyecto consiste en el diseño de un Sistema de Pedidos de Comida en Línea para un Restaurante Local, cuyo objetivo es permitir a los clientes realizar pedidos fácilmente desde su dispositivo, ver el menú, pagar digitalmente y hacer seguimiento del estado del pedido.

 Objetivo general

Desarrollar un sistema de pedidos en línea que permita agilizar el proceso de compra, mejorar la experiencia del usuario y optimizar el flujo de pedidos del restaurante.

 Requerimientos Funcionales (RF)

El sistema debe permitir registrar usuarios e iniciar sesión.

El usuario debe poder consultar el menú del restaurante.

El sistema debe permitir realizar pedidos.

El usuario podrá seleccionar diferentes métodos de pago (efectivo, tarjeta, transferencia o pago en la app).

El usuario podrá consultar el estado de su pedido (pendiente, en preparación, enviado).

El usuario podrá ver su historial de pedidos.

 Requerimientos No Funcionales (RNF)

Extraídos del documento entregado:

Rendimiento

Tiempo de respuesta máximo: 2 segundos con 100 usuarios concurrentes.

Seguridad

Contraseñas y datos sensibles cifrados con AES-256.

Usabilidad

Interfaz responsive para móvil, tablet y escritorio.

Disponibilidad

Disponibilidad mínima mensual: 99.5%.

Escalabilidad

Hasta 500 usuarios concurrentes con solo 10% de degradación.

 Arquitectura del sistema

Arquitectura por capas:

Capa de Presentación: InterfazUsuario

Capa de Lógica: GestorUsuario, GestorMenu, GestorPedidos

Capa de Datos: BaseDeDatos

 Diagramas

Los diagramas se encuentran en la carpeta:

/docs/diagramas/


Incluye:

Diagrama de casos de uso

Diagrama de clases

Diagrama de arquitectura

Diagrama de secuencia

 Casos de prueba

Ubicados en:

/docs/pruebas/


Ejemplo:

ID	RF	Entrada	Resultado esperado
CP01	RF1	Usuario válido	Registro exitoso
CP02	RF2	Abrir menú	Mostrar platos
CP03	RF3	Crear pedido	Pedido registrado
