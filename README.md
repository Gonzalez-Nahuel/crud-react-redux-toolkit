# CRUD App con React, Redux Toolkit y JSON Server

Esta aplicación es una **CRUD App completa** desarrollada con **React y Redux Toolkit**. Permite realizar operaciones básicas de **Crear, Leer, Actualizar y Eliminar** datos de usuarios a través de una **API REST falsa** creada con `json-server`. Lanza un error si falla la conexion a la **API**, muestra un loader cuando se estan cargando los datos.

---

## Tecnologías utilizadas

- React
- Redux Toolkit
- JavaScript (ES6+)
- JSON Server (`fake-api`)
- Fetch API

---

## Instalación y configuración

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Gonzalez-Nahuel/crud-react-redux-toolkit
   cd crud-react-redux-toolkit
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Iniciar servidor de la API falsa (JSON Server):

   ```bash
   npm run fake-api
   ```

   Esto ejecuta `json-server` en la URL:

   http://localhost:5173/

4. Iniciar la aplicaión React:
   ```bash
   npm run dev
   ```

## Funcionalidades

- **Crear** un nuevo usuario
- **Leer** todos los usuarios desde la API
- **Actualizar** datos de un usuario
- **Eliminar** usuarios
- UI sincronizada con el estado global de Redux

## API falsa (json-server)

La api local utiliza un archivo `db.json` como base de datos simulada. Ejemplo de contenido:

```json
{
  "users": [
    {
      "id": "3412",
      "name": "Nahuel",
      "lastName": "Gonzalez"
    }
  ]
}
```
