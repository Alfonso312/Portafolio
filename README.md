# 🚀 Portafolio Personal

Un portafolio moderno y versátil con diseño negro elegante, construido con React y Vite.

## ✨ Características

- **Diseño Moderno**: Estilo negro elegante con gradientes y efectos visuales
- **Totalmente Responsivo**: Optimizado para todos los dispositivos
- **Animaciones Fluidas**: Transiciones suaves con Framer Motion
- **Secciones Completas**:
  - 🏠 Hero con efecto de escritura
  - 👨‍💻 Sobre mí con estadísticas
  - 🛠️ Habilidades técnicas con barras de progreso
  - 📱 Proyectos con filtros y galería
  - 🏆 Certificados con categorías
  - 📄 CV interactivo con pestañas
  - 📧 Formulario de contacto funcional

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción rápida
- **Framer Motion** - Animaciones y transiciones
- **React Icons** - Iconografía moderna
- **CSS3** - Estilos personalizados con variables CSS
- **React Intersection Observer** - Animaciones al hacer scroll

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos para ejecutar

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador**:
   - El proyecto se abrirá automáticamente en `http://localhost:3000`

### Comandos disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Vista previa de la construcción
npm run preview

# Linting
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.jsx      # Navegación principal
│   ├── Hero.jsx        # Sección de presentación
│   ├── About.jsx       # Información personal
│   ├── Skills.jsx      # Habilidades técnicas
│   ├── Projects.jsx    # Galería de proyectos
│   ├── Certificates.jsx # Certificaciones
│   ├── CV.jsx          # Currículum interactivo
│   └── Contact.jsx      # Formulario de contacto
├── App.jsx             # Componente principal
├── App.css             # Estilos globales
├── index.css           # Variables CSS y utilidades
└── main.jsx           # Punto de entrada
```

## 🎨 Personalización

### Colores
Los colores se definen en `src/index.css` usando variables CSS:

```css
:root {
  --primary-color: #00ff88;    /* Verde neón */
  --secondary-color: #ff6b6b;  /* Rojo coral */
  --accent-color: #4ecdc4;     /* Turquesa */
  --text-primary: #ffffff;     /* Blanco */
  --bg-primary: #0a0a0a;      /* Negro principal */
}
```

### Contenido
Para personalizar el contenido, edita los datos en cada componente:

- **Hero.jsx**: Información personal y redes sociales
- **About.jsx**: Descripción personal y estadísticas
- **Skills.jsx**: Habilidades técnicas y niveles
- **Projects.jsx**: Proyectos y enlaces
- **Certificates.jsx**: Certificaciones y credenciales
- **CV.jsx**: Experiencia laboral y educación
- **Contact.jsx**: Información de contacto

## 📱 Responsive Design

El portafolio está optimizado para:
- 📱 Móviles (320px - 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (1024px+)

## 🚀 Despliegue

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `dist`

### Vercel
1. Conecta tu repositorio a Vercel
2. El framework se detectará automáticamente
3. Despliega con un clic

### GitHub Pages
1. Ejecuta `npm run build`
2. Sube la carpeta `dist` a tu repositorio
3. Configura GitHub Pages

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para tu portafolio personal.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si tienes sugerencias o encuentras bugs, por favor abre un issue.

## 📞 Contacto

Si tienes preguntas sobre este portafolio, no dudes en contactarme.

---

**¡Disfruta creando tu portafolio! 🎉**
