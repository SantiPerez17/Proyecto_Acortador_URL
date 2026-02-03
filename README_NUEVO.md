# 🔗 Acortador de URL - URL Shortener

Una aplicación web moderna, rápida y segura para acortar URLs largas en códigos cortos y fáciles de compartir. Construida con React, TypeScript y Vite para máxima performance.

## ✨ Características Principales

### 🚀 Generador de URLs Cortas
- **Interfaz intuitiva**: Diseño limpio y moderno con tema oscuro
- **Validación inteligente**: Normaliza URLs automáticamente (agrega `https://` si falta)
- **Códigos únicos**: Genera códigos alfanuméricos de 6 caracteres
- **Copia rápida**: Botón para copiar la URL acortada al portapapeles con feedback visual
- **Detalles expandibles**: Visualiza fecha, hora, código y URLs originales

### 🔄 Redireccionamiento Automático
- Redirige automáticamente desde URLs cortas a las originales
- Manejo de errores para códigos inválidos o inexistentes
- Normalización de URLs de destino

### 💾 Persistencia de Datos
- Base de datos JSON con `json-server`
- Almacenamiento en la nube (Render)
- Historial de URLs generadas

### 🎨 Diseño Responsivo
- Tema oscuro profesional con colores cuidadosamente seleccionados
- Interfaz centrada y adaptable
- Accesibilidad mejorada con etiquetas ARIA

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|----------|
| **React** | ^19.1.0 | Framework UI |
| **TypeScript** | ~5.8.3 | Type safety |
| **Vite** | ^6.3.5 | Build tool & dev server |
| **React Router** | ^7.6.3 | Enrutamiento |
| **JSON Server** | ^1.0.0-beta.3 | Mock API backend |

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

La aplicación estará disponible en `http://localhost:5173`

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
│   ├── GenerateUrl.tsx      # Formulario para generar URLs cortas
│   ├── Home.tsx             # Página principal
│   ├── Redirect.tsx         # Componente de redireccionamiento
│   └── InputCode.tsx        # Input para búsqueda de códigos
├── Router/
│   └── routes.tsx           # Configuración de rutas
├── App.tsx                  # Componente raíz
├── App.css                  # Estilos globales
├── main.tsx                 # Punto de entrada
├── types.ts                 # Definiciones TypeScript
└── vite-env.d.ts           # Variables de Vite
```

---

## 🎯 Rutas Disponibles

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | Home | Página principal con opciones |
| `/generate-url` | GenerateUrl | Generador de URLs cortas |
| `/:codePath` | Redirect | Redireccionamiento automático |
| `/about` | (Planificado) | Información del proyecto |
| `/contact` | (Planificado) | Contacto |
| `*` | 404 | Página no encontrada |

---

## 🎨 Características de UI/UX

### Header
- Logo con ícono distintivo
- Tagline: "Rápido • Seguro • Simple"
- Navegación minimalista

### Generador de URLs
- **Input validado**: Solo acepta URLs válidas
- **Estados visuales**: Loading, success, error
- **Botón de copia**: Feedback con cambio de color
- **Detalles desplegables**: Acceso a metadata (fecha, hora, código)

### Footer
- Copyright automático
- Enlace a repositorio
- Diseño consistente con el header

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

### Opción 1: Vercel (Recomendado)
```bash
vercel deploy
```
La configuración ya está en `vercel.json`

### Opción 2: Render / Netlify
1. Conecta tu repositorio
2. Configura build command: `pnpm build`
3. Output directory: `dist`

---

## 🐛 Manejo de Errores

- **URL inválida**: Mensaje claro en español
- **Error de servidor**: Captura y muestra mensaje
- **Código inexistente**: Redirección a página 404
- **Errores de portapapeles**: Fallback con mensaje

---

## 🎓 Aprendizajes Clave

Este proyecto demuestra:
- ✅ Validación y normalización de datos
- ✅ Integración con APIs externas
- ✅ Manejo de estados en React
- ✅ Enrutamiento dinámico
- ✅ TypeScript en componentes React
- ✅ Feedback visual y UX mejorada
- ✅ Diseño responsivo y accesible

---

## 📝 Licencia

Este proyecto es de código abierto. Úsalo libremente en tus proyectos.

---

## 👨‍💻 Creado por [GitHub Copilot](https://github.com/copilot)

*Potenciado por inteligencia artificial para ayudarte a crear código mejor.*

---

**Última actualización**: Febrero 3, 2026  
**Versión**: 1.0.0
