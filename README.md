# 🔗 Acortador de URL - URL Shortener

Una aplicación web moderna y rápida para acortar URLs largas en códigos cortos y fáciles de compartir. Construida con React, TypeScript y Vite para máxima performance.

## ✨ Características Principales

### 🚀 Generador de URLs Cortas
- **Interfaz intuitiva**: Diseño limpio y moderno con tema oscuro profesional
- **Validación inteligente**: Normaliza URLs automáticamente (agrega `https://` si falta)
- **Códigos únicos**: Genera códigos alfanuméricos de 6 caracteres
- **Copia rápida**: Botón para copiar la URL acortada al portapapeles con feedback visual
- **Detalles expandibles**: Visualiza fecha, hora, código y URLs originales

### 🔄 Redireccionamiento Automático
- Redirige automáticamente desde URLs cortas a las originales
- Manejo de errores para códigos inválidos o inexistentes con UI profesional
- Normalización de URLs de destino
- Loading states visuales

### 🏠 Página Principal Intuitiva
- **Dos cards principales**: Redirigir (con búsqueda) y Acortar URL
- **Búsqueda rápida**: Ingresa un código y ve a la URL al instante
- **Layout responsive**: Se adapta perfectamente a mobile y desktop

### 📖 Página About
- Información clara sobre qué es el acortador
- Características destacadas
- Cómo usar (2 opciones)
- Casos de uso prácticos
- Stack tecnológico

### 💾 Persistencia de Datos
- Base de datos JSON con `json-server`
- Almacenamiento en la nube (Render)
- Historial de URLs generadas

### 🎨 Diseño Responsivo
- Tema oscuro profesional con paleta de colores cuidadosamente seleccionada
- CSS refactorizado con variables globales
- Interfaz centrada y adaptable
- Accesibilidad mejorada con etiquetas ARIA
- Transiciones y hover effects suaves

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|----------|
| **React** | ^19.1.0 | Framework UI |
| **TypeScript** | ~5.8.3 | Type safety |
| **Vite** | ^6.3.5 | Build tool & dev server |
| **React Router** | ^7.6.3 | Enrutamiento con Layout |
| **JSON Server** | ^1.0.0-beta.3 | Mock API backend |
| **CSS Variables** | Nativo | Diseño sistémico |

---

## 📋 Requisitos Previos

- **Node.js** ≥ 16.x
- **pnpm** (recomendado) o npm

---

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone <repository-url>
cd Proyecto_Acortador_URL
```

### 2. Instalar dependencias
```bash
pnpm install
# o
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
pnpm dev
# o
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne)

### 4. (Opcional) Ejecutar JSON Server localmente
```bash
pnpm json-server
# o
npm run json-server
```

Escuchará en `http://localhost:3001`

---

## 📦 Estructura del Proyecto

```
src/
├── Components/
│   ├── About.tsx             # Página de información del proyecto
│   ├── GenerateUrl.tsx       # Formulario para generar URLs cortas
│   ├── Home.tsx              # Página principal (2 cards)
│   ├── Layout.tsx            # Layout con header, main y footer
│   ├── Redirect.tsx          # Componente de redireccionamiento
│   └── InputCode.tsx         # Input reutilizable para búsqueda
├── Router/
│   └── routes.tsx            # Configuración de rutas con Layout
├── App.tsx                   # Componente raíz
├── styles.css                # Estilos CSS con variables globales
├── index.css                 # Reset de estilos
├── main.tsx                  # Punto de entrada
├── types.ts                  # Definiciones TypeScript
└── vite-env.d.ts            # Variables de Vite
```

---

## 🎯 Rutas Disponibles

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | Home | Página principal con dos opciones |
| `/generate-url` | GenerateUrl | Generador de URLs cortas |
| `/about` | About | Información del proyecto |
| `/:codePath` | Redirect | Redireccionamiento automático |
| `*` | 404 | Página no encontrada |

---

## 🎨 Características de UI/UX (Nuevas)

### Header
- Logo clickeable (vuelve a home)
- Navegación con links funcionales (Inicio, About)
- Diseño consistente y profesional
- Responsive en mobile

### Home - Dos Cards
**Card 1: Redirigir**
- Input para código
- Búsqueda y validación
- Loading states
- Error handling

**Card 2: Acortar**
- Descripción del servicio
- CTA prominente
- Beneficios listados
- Link directo a generador

### Generador de URLs
- Input validado
- Estados visuales: loading, success, error
- Botón de copia con feedback (cambio de color)
- Detalles desplegables
- Estilos profesionales

### Redirect
- Loading visual con emoji e indicador
- Error box con mensaje claro
- Botón de acción (volver al inicio)
- Estilos consistentes

### About
- Secciones bien organizadas
- Información clara y concisa
- Tarjetas de tecnología
- CTA para volver
- Enlaces externos

---

## 🔌 API Backend

### Endpoint: `https://json-server-shortcut-url.onrender.com/links`

#### POST - Crear URL acortada
```bash
curl -X POST https://json-server-shortcut-url.onrender.com/links \
  -H "Content-Type: application/json" \
  -d '{
    "code": "AbC123",
    "url": "https://example.com/long-url",
    "createat": "2025-02-03T10:30:00.000Z",
    "usercreate": "anonymous"
  }'
```

#### GET - Obtener URL por código
```bash
curl https://json-server-shortcut-url.onrender.com/links?code=AbC123
```

---

## 🧪 Scripts Disponibles

```bash
# Desarrollo
pnpm dev              # Inicia servidor de desarrollo

# Producción
pnpm build            # Compila y minifica
pnpm preview          # Previsualiza build de producción

# Calidad de código
pnpm lint             # Ejecuta ESLint

# Base de datos
pnpm json-server      # Inicia JSON Server
```

---

## 🔒 Validación de URLs

La aplicación implementa validación inteligente:

1. **Detección automática**: Si falta `https://`, lo añade automáticamente
2. **Validación del Constructor URL**: Usa `new URL()` de JavaScript para validar
3. **Mensajes claros**: Feedback en español para el usuario
4. **Normalización**: Convierte URLs relativas a absolutas

### Ejemplo
```
usuario ingresa: example.com
↓
app normaliza: https://example.com
↓
se envía al servidor: https://example.com
```

---

## 🎨 Sistema de Estilos CSS

**Variables CSS organizadas:**
- Colores (brand, text, states)
- Espaciado (xs, sm, md, lg, xl)
- Sombras (sm, md, lg)
- Border radius (sm, md, lg, xl)

**Clases reutilizables:**
- `.card` - Contenedor principal
- `.btn-primary`, `.btn-secondary`, `.btn-sky` - Botones
- `.error-message`, `.success-message` - Estados
- `.loading-container`, `.error-container` - Contenedores
- Utilidades: `.flex-between`, `.gap-md`, `.text-muted`, etc.

---

## 💾 Estructura de Datos

### Modelo de Link
```typescript
interface Link {
  id?: string | number;
  code: string;              // Código único (ej: "AbC123")
  url: string;               // URL original
  createat: string;          // ISO timestamp de creación
  usercreate: string;        // Usuario que creó (ej: "anonymous")
}
```

### Modelo de Resultado
```typescript
interface Result {
  time: string;              // Hora (ej: "14:30")
  date: string;              // Fecha (ej: "2025-02-03")
  code: string;              // Código generado
  originalUrl: string;       // URL original
  shortUrl?: string;         // URL corta generada
}
```

---

## 🌐 Despliegue

### Vercel (Configuración lista)
```bash
vercel deploy
```
La configuración ya está en `vercel.json`

---

## 🐛 Manejo de Errores

- **URL inválida**: Mensaje claro en español
- **Error de servidor**: Captura y muestra mensaje
- **Código inexistente**: Página 404 con opción de volver
- **Errores de portapapeles**: Fallback con mensaje

---

## 📝 Historial de Cambios Recientes

### v1.0.0 - UI/UX Refactor Completo
- ✨ Rediseño completo con tema oscuro profesional
- ✨ Refactorización CSS con variables globales
- ✨ Nueva página About con información del proyecto
- ✨ Home con dos cards principales (Redirigir + Acortar)
- ✨ Mejora en validación y normalización de URLs
- ✨ Copia al portapapeles con feedback visual
- ✨ Loading states y error handling mejorados
- ✨ Navegación funcional con Links
- ✨ Layout centralizado
- ✨ Responsive design mejorado

---

## 🎓 Aprendizajes Clave

Este proyecto demuestra:
- ✅ Validación y normalización de datos
- ✅ Integración con APIs externas
- ✅ Manejo de estados en React
- ✅ Enrutamiento dinámico con React Router
- ✅ TypeScript en componentes React
- ✅ Feedback visual y UX mejorada
- ✅ Diseño responsivo y accesible
- ✅ Sistema de diseño con CSS variables
- ✅ Componentes reutilizables

---

## 🚀 Planes Futuros

- [ ] Autenticación y login
- [ ] Base de datos real (MongoDB/PostgreSQL)
- [ ] Sistema de usuarios registrados
- [ ] Rate limiting para usuarios anónimos
- [ ] Cron jobs para limpiar URLs antiguas
- [ ] Dashboard de usuario
- [ ] Estadísticas de clics
- [ ] Exportar historial

---

## 📝 Licencia

Este proyecto es de código abierto. Úsalo libremente en tus proyectos.

---

## 👨‍💻 Creado por GitHub Copilot

*Potenciado por inteligencia artificial para ayudarte a crear código mejor.*

---

**Última actualización**: Febrero 3, 2026  
**Versión**: 1.0.0  
**Estado**: ✅ En producción

