# proyecto-final
Proyecto pedido de comida, Cafeteria de la universidad 
<div align="center">
Sistema de Pedidos de Comida en Línea
Proyecto Formativo – Ingeniería de Software

Autores:
Johan Andrés Carabalí Carabalí
Juan José Balanta Agrono[# 🧩 Proyecto Formativo – Ingenierí.txt](https://github.com/user-attachments/files/23858270/Proyecto.Formativo.Ingenieri.txt)# 🧩 Proyecto Formativo – Ingeniería de Software I

## 📌 Información General
**Nombre del Proyecto:**  
sistema pedidos de comidas 

**Equipo de Desarrollo:**  
juan jose balanta agrono
johan andres carabali carabali

**Programa:** Ingeniería de Software I  
**Institución:** UNAD – Instituto Técnico Profesional  
**Grupo:** S441B-2  
**Versión del Documento:** v2 (Sesión 11)  
**Fecha de actualización:** 28/10/2025

---

## 🎯 1. Descripción General del Proyecto
El programa busca veneficiar tantoa a estudiantes como a profesores, al permitir que se puedar hacer los pedidos desde el telefo para evitar largar fila y poder regresar rapido al aula de clases permi tiendo hacer tus pedidos de la comida que quieres y solo tienes que llegar a rreclamarla 

---

## 🧠 2. Contexto y Justificación

el sistema corresponde a mejora la eficiencia para facilitar y agilizar el proceso de compra de alimentos atravez de plataformas digitales  

---

## 🧩 3. Requisitos del Sistema

### 3.1 Requisitos Funcionales
| Código | Descripción | Estado |
|--------|--------------|--------|
| RF-01 | El sistema debe permitir registrar usuarios. | ✅ Implementado |
| RF-02 | El sistema debe permitir iniciar sesión con autenticación segura. | 🔄 En desarrollo |
| RF-03 | El sistema debe generar reportes de uso. | ⏳ Pendiente |

### 3.2 Requisitos No Funcionales
| Código | Descripción | Tipo |
|--------|--------------|------|
| RNF-01 | La interfaz debe ser responsiva en escritorio y móvil. | Usabilidad |
| RNF-02 | La base de datos debe soportar al menos 1000 registros. | Rendimiento |
| RNF-03 | Los datos deben almacenarse de forma segura. | Seguridad |

---

## 🧭 4. Modelos del Sistema

### 4.1 Diagrama de Casos de Uso
<!-- Inserta aquí una imagen o enlace al diagrama actualizado -->
![Casos de Uso](./docs/diagramas/casos_de_uso.png)

### 4.2 Diagrama de Clases
<!-- Inserta aquí una imagen o enlace -->
![Diagrama de Clases](./docs/diagramas/diagrama_clases.png)

### 4.3 Arquitectura del Software
<!-- Explica brevemente la estructura arquitectónica y su lógica -->
**Tipo de arquitectura:** Por capas (Presentación, Lógica de Negocio, Datos)

**Descripción:**
- **Capa de presentación:** interfaz gráfica o visual del sistema.  
- **Capa lógica:** procesos y reglas de negocio.  
- **Capa de datos:** almacenamiento y consultas a la base de datos.  

**Diagrama de Arquitectura:**
![Arquitectura del Sistema](./docs/diagramas/arquitectura.png)

---

## ⚙️ 5. Componentes Principales
| Componente | Función | Interacción | Estado |
|-------------|----------|-------------|--------|
| GestorUsuarios | Registrar, autenticar y administrar usuarios | Base de datos, interfaz | ✅ |
| GestorCursos | Crear y listar cursos | GestorUsuarios | 🔄 |
| GestorReportes | Generar informes del sistema | Base de datos | ⏳ |

---

## 🧰 6. Tecnologías y Herramientas
| Herramienta | Uso dentro del proyecto |
|--------------|------------------------|
| **Git** | Control de versiones local |
| **GitHub** | Repositorio remoto y trabajo colaborativo |
| **Draw.io / StarUML** | Diagramas UML |
| **Lucidchart / Canva** | Esquematización visual |
| **Unity / Python / HTML-CSS-JS (según caso)** | Desarrollo técnico |
| **Trello / Notion / Excel** | Planificación y seguimiento |

---

## 📅 7. Planificación y Control
### 7.1 Cronograma de avance
| Semana | Actividad | Estado |
|---------|------------|--------|
| 6 | Modelado de casos de uso | ✅ |
| 7 | Diagramas de clases | ✅ |
| 8 | Arquitectura del software | ✅ |
| 9 | Gestión de versiones (Git/GitHub) | ✅ |
| 10 | Documentación técnica inicial | ✅ |
| 11 | Avance del proyecto final | 🔄 En revisión |

### 7.2 Control de versiones
- Rama principal: `main`
- Ramas secundarias: `feat/`, `fix/`, `docs/`
- Último commit:  
  ```bash
  git log -1



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
