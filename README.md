# 🧩 Proyecto Formativo – Ingeniería de Software I

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

## 1. Descripción General del Proyecto
El programa busca veneficiar tantoa a estudiantes como a profesores, al permitir que se puedar hacer los pedidos desde el telefo para evitar largar fila y poder regresar rapido al aula de clases permi tiendo hacer tus pedidos de la comida que quieres y solo tienes que llegar a rreclamarla 

---

## 2. Contexto y Justificación

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
