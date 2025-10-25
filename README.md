# Pizzería Mamma Mía

Un proyecto de React con Vite para una pizzería.

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
├── public/              # Archivos estáticos
├── src/                 # Código fuente
│   ├── components/      # Componentes de React
│   │   ├── Navbar.jsx   # Barra de navegación con menú y carrito
│   │   ├── Home.jsx     # Página principal con pizzas
│   │   ├── Footer.jsx   # Pie de página
│   │   └── index.js     # Exportaciones de componentes
│   ├── utils/           # Funciones utilitarias
│   │   └── formatters.js # Funciones de formateo (precios, números)
│   ├── assets/          # Recursos (imágenes, íconos, etc.)
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── index.html           # Template HTML
├── vite.config.js       # Configuración de Vite
└── package.json         # Dependencias y scripts
```

## 🧩 Componentes

### Navbar
- **Navegación principal** con logo de la pizzería
- **Menú condicional** basado en estado de autenticación (token)
  - Usuario no logueado: 🔐 Login, 🔐 Register
  - Usuario logueado: 🔓 Profile, 🔒 Logout
- **Carrito de compras** con total formateado: 🛒 Total: $25.000
- **Responsive** con Bootstrap navbar

### Home
- **Banner hero** con imagen de fondo
- **Grid de pizzas** usando componente CardPizza
- **Tres pizzas fijas** con props específicos

### CardPizza
- **Componente reutilizable** para mostrar información de pizzas
- **Props requeridos:**
  - `name` (string): Nombre de la pizza
  - `price` (number): Precio de la pizza
  - `ingredients` (array): Lista de ingredientes
  - `img` (string): URL de la imagen
- **Diseño responsive** con Bootstrap cards
- **Precios formateados** con separador de miles
- **Botones de acción** (Ver Más, Añadir) sin funcionalidad por ahora

### Footer
- **Información de copyright**
- **Créditos de tecnologías utilizadas**

## 🎨 Desarrollo

Este proyecto utiliza Vite para un desarrollo rápido con Hot Module Replacement (HMR) y una construcción optimizada para producción.