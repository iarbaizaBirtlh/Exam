# Segunda Parte del Examen: JavaScript Nativo

## Estructura General

La segunda parte consta de **2 ejercicios independientes** de JavaScript nativo, con **1 hora de tiempo** (más el tiempo sobrante de la primera parte).

---

## Temas que pueden aparecer en los ejercicios

El profesor indica que se trabajarán conceptos de los **temas 2, 3 y 4**. Aquí te explico cada uno en detalle:

---

### 1. 📦 Estructuras de Datos

Aquí el profesor puede pedirte que trabajes con:

- **Arrays**: crear, recorrer, filtrar, modificar elementos (`push`, `pop`, `map`, `filter`, `find`, `reduce`...)
- **Objetos**: crear objetos con propiedades y métodos, acceder a sus valores, modificarlos
- **Combinaciones**: arrays de objetos, objetos anidados, etc.

> *Ejemplo típico: "Dado este array de productos, filtra los que cuestan más de 50€ y muéstralos en pantalla"*

---

### 2. 🔁 Bucles

Puede pedirte recorrer estructuras de datos usando:

- `for`, `while`, `do...while`
- `for...of`, `for...in`
- Métodos de array como `forEach`

> *Ejemplo típico: "Recorre la lista de usuarios y muestra sus nombres en una lista HTML"*

---

### 3. 🖱️ Gestión de Eventos

Uno de los conceptos más probables. Puede incluir:

- **Escuchar eventos** con `addEventListener` (click, submit, input, change...)
- **Manipular el DOM** al ocurrir un evento (mostrar/ocultar elementos, cambiar texto, añadir clases)
- **Formularios**: recoger valores de inputs al hacer clic en un botón

> *Ejemplo típico: "Al hacer clic en el botón, recoge el texto del input y añádelo a una lista visible en pantalla"*

---

### 4. 💾 Almacenamiento en el Navegador

Aquí entran **localStorage** y/o **sessionStorage**:

- **Guardar** datos: `localStorage.setItem('clave', valor)`
- **Recuperar** datos: `localStorage.getItem('clave')`
- **Eliminar** datos: `localStorage.removeItem('clave')` o `localStorage.clear()`
- Trabajar con objetos guardados usando `JSON.stringify` y `JSON.parse`
- Que los datos **persistan al recargar la página**

> *Ejemplo típico: "Guarda la lista de tareas en localStorage para que no se pierda al recargar"*

---

### 5. 🌐 Consultas AJAX

Este es probablemente el concepto más técnico. Puede pedirte:

- Usar **`fetch()`** para hacer peticiones a una API
- Manejar la respuesta con **`.then()`** o **`async/await`**
- Mostrar los datos obtenidos en el DOM
- Gestionar **errores** con `.catch()` o `try/catch`
- Peticiones **GET** (obtener datos) y posiblemente **POST** (enviar datos)

> *Ejemplo típico: "Haz una petición a esta URL y muestra los resultados en una tabla HTML"*

---

## Formato del examen

| Aspecto | Detalle |
|---|---|
| Entorno de trabajo | **VSCode** con una plantilla `.html` proporcionada |
| Entrega | Subir el archivo `.html` completado en el cuestionario |
| Formato | Cuestionario con un cuadro de subida por ejercicio |

---

## ⚠️ Consejos clave

- Los ejercicios son **independientes**, así que si te atascas en uno, pasa al otro
- Trabaja directamente sobre la **plantilla** que te dará el profesor
- Es muy probable que un ejercicio combine **varios conceptos** a la vez, por ejemplo: un fetch que guarda en localStorage y actualiza el DOM al hacer clic en un botón
- Practica especialmente **fetch + manipulación del DOM** y **localStorage con JSON**, ya que suelen ser los más exigentes