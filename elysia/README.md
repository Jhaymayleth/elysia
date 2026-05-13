# 🧙‍♀️ Elysia Sweets - Postres Artesanales

Elysia Sweets es un emprendimiento especializado en postres artesanales inspirados en la mitología griega. Este proyecto incluye un frontend interactivo y un backend escalable.

## 📁 Estructura del Proyecto

```
elysia/
│
├── frontend/
│   ├── public/                 # Archivos estáticos (imágenes, fuentes)
│   │   ├── fonts/
│   │   └── img/
│   │       ├── icons/
│   │       └── products/
│   ├── src/                    # Código fuente
│   │   ├── js/                 # JavaScript
│   │   │   ├── main.js         # Lógica principal
│   │   │   └── app.js          # Configuración de la app
│   │   ├── scss/               # Estilos (SCSS/CSS)
│   │   ├── components/         # Componentes reutilizables
│   │   └── services/           # Servicios (APIs, utilities)
│   └── index.html              # Página principal
│
├── backend/
│   ├── src/                    # Código fuente
│   │   ├── routes/             # Rutas de API
│   │   ├── controllers/        # Lógica de controladores
│   │   ├── middlewares/        # Middleware personalizado
│   │   ├── models/             # Modelos de datos
│   │   └── app.js              # Configuración de Express
│   ├── database/               # Migraciones y scripts de BD
│   ├── server.js               # Punto de entrada del servidor
│   └── .env                    # Variables de entorno
│
├── docker/                     # Configuración de Docker
├── README.md                   # Este archivo
└── readme.md                   # Documentación original
```

## 🚀 Instrucciones de Uso

### Frontend

1. **Estructura de archivos:**
   - Los estilos se encuentran en `frontend/src/scss/`
   - El JavaScript principal está en `frontend/src/js/main.js`
   - Los componentes deben crearse en `frontend/src/components/`
   - Los servicios (conexiones a APIs) van en `frontend/src/services/`

2. **Rutas de assets:**
   - Imágenes: `public/img/`
   - Fuentes: `public/fonts/`
   - CSS/SCSS compilado: `src/scss/`

### Backend

1. **Estructura de archivos:**
   - Las rutas de API van en `backend/src/routes/`
   - La lógica de negocio va en `backend/src/controllers/`
   - Los modelos de datos van en `backend/src/models/`
   - El middleware personalizado va en `backend/src/middlewares/`

2. **Configuración:**
   - Copia el archivo `.env.example` a `.env` y configura tus variables
   - Ejecuta `npm install` para instalar las dependencias
   - Inicia el servidor con `npm start` o `npm run dev` (con nodemon)

### Docker

Los archivos de configuración de Docker deben crearse en la carpeta `docker/`:
- `Dockerfile` para la imagen principal
- `docker-compose.yml` para orquestación de contenedores

## 📝 Archivos Generados

- `backend/server.js` - Punto de entrada del servidor Express
- `backend/.env` - Variables de entorno (NO subir a Git)
- `backend/src/app.js` - Configuración de la aplicación Express
- `frontend/src/js/app.js` - Configuración de la aplicación frontend

## 🔧 Próximos Pasos

1. Crear rutas y controladores en `backend/src/routes/` y `backend/src/controllers/`
2. Implementar modelos de datos en `backend/src/models/`
3. Crear componentes reutilizables en `frontend/src/components/`
4. Implementar servicios de conexión a APIs en `frontend/src/services/`
5. Configurar Docker para despliegue

## 📧 Contacto

Para más información:
- **WhatsApp:** https://wa.me/573044752063
- **Instagram:** https://instagram.com/elysia.sweets
- **Ubicación:** Barranquilla, Colombia

---

**Última actualización:** 13 de mayo de 2026
