# **Task Manager API**

## **Descripción**

Este es el backend de la aplicación **Task Manager**, una API RESTful desarrollada con **NestJS** para la gestión de tareas. Proporciona funcionalidades para crear, leer, actualizar y eliminar tareas, con una base de datos MongoDB gestionada con **Mongoose**.

El proyecto incluye validaciones, manejo estructurado de errores y documentación completa con **Swagger**.

---

## **Enlace a la Documentación**

La documentación interactiva de la API está disponible en:

[Swagger - Task Manager API](https://task-manager-be-ihw3.onrender.com/api)

---

## **Requerimientos Implementados**

### **Endpoints Principales**

| Método   | Ruta            | Descripción                                                  |
|----------|-----------------|-------------------------------------------------------------|
| `POST`   | `/tasks`        | Crea una nueva tarea. Valida que el campo `title` esté presente. |
| `GET`    | `/tasks`        | Devuelve todas las tareas. Permite filtrar por estado (`completed`). |
| `GET`    | `/tasks/:id`    | Devuelve los detalles de una tarea específica.              |
| `PUT`    | `/tasks/:id`    | Actualiza los campos de una tarea existente.                |
| `DELETE` | `/tasks/:id`    | Elimina una tarea por su ID.                                 |

---

### **Modelo de Datos**

El esquema de la tarea en MongoDB incluye:

```typescript
export interface Task {
  _id: string;
  title: string;          // Obligatorio
  description?: string;   // Opcional
  completed: boolean;     // Booleano, por defecto false
  createdAt: Date;        // Fecha de creación generada automáticamente
}
```

## **Tecnologías Usadas**

- **NestJS**: Framework para la construcción de APIs robustas.
- **MongoDB**: Base de datos NoSQL para la persistencia de datos.
- **Mongoose**: Librería para la modelización de datos en MongoDB.
- **Swagger**: Generación automática de documentación.
- **Jest**: Framework de pruebas unitarias.

## **Estructura del Proyecto**

src/
├── app.module.ts         # Módulo principal
├── main.ts               # Punto de entrada
├── tasks/                # Módulo de tareas
│   ├── tasks.controller.ts # Controlador de la API
│   ├── tasks.service.ts    # Lógica de negocio
│   ├── dto/                # Validaciones y DTOs
│   ├── schemas/            # Esquemas de Mongoose
│   └── tasks.module.ts     # Configuración del módulo
└── common/               # Funcionalidades compartidas

### **Pruebas Unitarias con Jest**

Este proyecto utiliza **Jest** como framework de pruebas unitarias. **Jest** es una herramienta robusta que permite realizar pruebas rápidas, confiables y fáciles de configurar. Implementamos pruebas para validar la funcionalidad de los servicios principales, específicamente para **crear tareas** y **eliminar tareas**.

#### **¿Por qué Jest?**
- **Integración Nativa con NestJS**: Jest está configurado por defecto en los proyectos de **NestJS**, lo que facilita la escritura de pruebas unitarias.
- **Rápido y confiable**: Ejecuta pruebas de forma eficiente y detecta cambios automáticamente en el código.
- **Mocks y Spies**: Proporciona herramientas para simular dependencias y verificar interacciones.

---

### **Cómo Ejecutar las Pruebas**

1. **Ejecutar todas las pruebas**
   ```bash
   yarn test
   ```


## **¿Por qué ClassValidator en lugar de ExpressValidator?**

En este proyecto, decidí utilizar **ClassValidator** en lugar de **ExpressValidator**, basándome en la compatibilidad con **NestJS** y en las mejores prácticas del framework. A continuación, explico las razones detrás de esta decisión técnica:

---

### **1. Integración Nativa con NestJS**
- **ClassValidator** está diseñado para integrarse perfectamente con **NestJS**, aprovechando al máximo sus funcionalidades basadas en TypeScript y DTOs (Data Transfer Objects).
- **ExpressValidator**, por otro lado, está pensado para aplicaciones construidas con **Express** y carece de integración directa con NestJS.

---

### **2. Uso Declarativo y Limpio**
- Con **ClassValidator**, las reglas de validación se definen directamente en las clases a través de decoradores como `@IsString()`, `@IsNotEmpty()`, etc. Esto permite mantener el código limpio y organizado.
- En **ExpressValidator**, las validaciones se configuran como middlewares, lo que introduce redundancia y hace que el código sea más difícil de mantener.

#### **Ejemplo con ClassValidator**:
```typescript
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'El título es obligatorio.' })
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;
}
```



## **Instalación y Configuración**

### **Requisitos Previos**
- **Node.js** >= 16.x
- **MongoDB** (local o en la nube)
- **Yarn** (gestor de paquetes)

### **Pasos para Instalar**

1. **Clona el repositorio**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd task-manager-backend
   ```

2.	**Instala las dependencias**

  `` yarn install``

3.	**Configura las variables de entorno**
      PORT=3001
        MONGO_URI=<TU_URL_DE_MONGO_DB>

4.  **Inicia el servidor en modo desarrollo**
     
     ``yarn start:dev``

5.	**Accede a la API**

   `` El backend estará disponible en http://localhost:3001.``



