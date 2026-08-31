# Pizzería Mamma Mía

[![Estado del sitio](https://img.shields.io/website?url=https%3A%2F%2Fjulimab.github.io%2FHito-1---Pizzeria-Mamma-Mia%2F&label=Sitio&up_message=Disponible&up_color=success&down_message=No%20disponible%20por%20el%20momento&down_color=critical)](https://julimab.github.io/Hito-1---Pizzeria-Mamma-Mia/)

Un proyecto de React con Vite para una pizzería, desplegado en GitHub Pages.

## 🌐 Sitio en vivo

🔗 [julimab.github.io/Hito-1---Pizzeria-Mamma-Mia](https://julimab.github.io/Hito-1---Pizzeria-Mamma-Mia/)

## 🚀 Tecnologías

- **React 18** - Librería de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de construcción rápida para desarrollo web moderno
- **Bootstrap 5** - Framework CSS para diseño responsive y componentes
- **ESLint** - Linter para mantener la calidad del código

## 📋 Requisitos

- Node.js 16+
- npm o yarn

## ⚡ Inicio rápido

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir el navegador en `http://localhost:5173`

## 📦 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la construcción de producción
- `npm run lint` - Ejecuta ESLint para revisar el código

## 🏗️ Estructura del proyecto

```
├── .github/workflows/    # Deploy automático a GitHub Pages
├── src/                  # Código fuente
│   ├── assets/           # Imágenes de las pizzas
│   ├── components/       # Componentes de React
│   │   ├── Navbar.jsx    # Barra de navegación con carrito
│   │   ├── Home.jsx      # Página principal con pizzas
│   │   ├── CardPizza.jsx # Tarjeta de pizza reutilizable
│   │   ├── Footer.jsx    # Pie de página
│   │   └── index.js      # Exportaciones de componentes
│   ├── data/             # Datos de las pizzas
│   │   └── pizzas.js     # Array de pizzas (id, nombre, precio, ingredientes, imagen)
│   ├── utils/            # Funciones utilitarias
│   │   └── formatters.js # Formateo de precios (es-CL)
│   ├── App.jsx           # Componente principal (estado del carrito)
│   ├── main.jsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── index.html            # Template HTML
├── vite.config.js        # Configuración de Vite (base relativa para GitHub Pages)
└── package.json          # Dependencias y scripts
```

## 🧩 Componentes

### Navbar
- **Navegación principal** con logo de la pizzería
- **Menú condicional** según estado de autenticación (token) con `useState`
  - No logueado: 🔐 Login
  - Logueado: 🔓 Profile, 🔒 Logout
- **Carrito real**: muestra total y cantidad de pizzas agregadas, con botón "Vaciar"

### Home
- **Banner hero** con imagen de fondo
- **Grid de pizzas** renderizado con `.map()` desde `data/pizzas.js`

### CardPizza
- **Componente reutilizable** que recibe un objeto `pizza` y una función `onAdd`
- **Props:**
  - `pizza` (object): `{ id, name, price, ingredients, img }`
  - `onAdd` (function): agrega la pizza al carrito
- **Botón "Añadir" funcional** conectado al estado del carrito en `App.jsx`

### Footer
- Copyright, información de contacto y branding

## 🛒 Carrito

El estado del carrito vive en `App.jsx` con `useState`:
- `addToCart(pizza)` - agrega una pizza
- `clearCart()` - vacía el carrito
- `total` y `cartCount` - se pasan como props a `Navbar`
- Los precios se formatean con `formatPrice()` (es-CL)

## 🌐 Deploy

El proyecto se despliega automáticamente a GitHub Pages con GitHub Actions
(`.github/workflows/deploy.yml`). Cada push a `main` compila el proyecto y publica
la carpeta `dist/`. La configuración de `base: './'` en `vite.config.js` permite
que los assets funcionen bajo la ruta del repositorio.