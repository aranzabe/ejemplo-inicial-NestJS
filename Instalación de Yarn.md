
# 📘 Guía de instalación de Yarn (estable)

### Windows 11 y macOS — usando Corepack (recomendado)

---

## 🔹 Conceptos importantes (léelo una vez)

* **Yarn 1.x está obsoleto** ❌
* **Yarn 4.x (Berry)** es la versión actual ✅
* Yarn moderno **NO se instala con `npm install -g yarn`**
* **Corepack** viene incluido con Node.js y gestiona Yarn automáticamente
* Los proyectos modernos declaran la versión exacta en `package.json`:

```json
"packageManager": "yarn@4.x.x"
```

---

## ✅ Requisitos

* **Node.js ≥ 18 LTS** (recomendado)
* Terminal:

  * Windows → PowerShell
  * macOS → Terminal / iTerm

---

# 🪟 WINDOWS 11

## 1️⃣ Instalar / actualizar Node.js (LTS)

👉 [https://nodejs.org](https://nodejs.org)
Descarga la versión **LTS** e instálala.

✔ Marca **“Add to PATH”**
✔ Reinicia la terminal

Verifica:

```powershell
node -v
```

Debe mostrar algo como:

```
v24.x.x
```

---

## 2️⃣ Eliminar Yarn antiguo (MUY IMPORTANTE)

Si alguna vez instalaste Yarn con npm:

```powershell
npm uninstall -g yarn
```

Verifica que ya no existe:

```powershell
yarn -v
```

(Si da error → perfecto)

---

## 3️⃣ Habilitar Corepack (como administrador)

⚠️ **PowerShell debe abrirse como Administrador**

```powershell
corepack enable
```
¿Qué es Corepack?

Corepack es una herramienta incluida con Node (desde v16.10+ y v18 LTS en adelante) que sirve para gestionar automáticamente los gestores de paquetes modernos, como Yarn y PNPM, sin tener que instalarlos globalmente con npm.

En otras palabras:

- Corepack actúa como “puente” entre Node y Yarn/PNPM.

- Permite que cada versión de Node tenga su propia versión controlada de Yarn o PNPM, evitando conflictos entre proyectos.

- Básicamente, Corepack se encarga de que tu proyecto siempre use la versión correcta de Yarn/Pnpm según lo definido por Node o tu proyecto.

Si falla con `EPERM`, es porque no estás en modo admin.

---

## 4️⃣ Activar la última versión estable de Yarn

```powershell
corepack prepare yarn@stable --activate
```

Verifica:

```powershell
yarn -v
```

✔ Debe mostrar **4.x.x**

---

## 5️⃣ Usar Yarn en un proyecto

Dentro del proyecto:

```powershell
yarn install
```

📌 Si el proyecto tiene:

```json
"packageManager": "yarn@4.12.0"
```

Corepack usará **esa versión exacta automáticamente**.

---

## 🚨 Error común en Windows (workspaces)

**Error:**

> doesn't seem to be part of the project declared in C:\Users...

🔧 Solución rápida:

```powershell
cd tu-proyecto
type nul > yarn.lock
yarn install
```

O elimina `package.json / yarn.lock` de carpetas superiores.

---

# 🍎 macOS

## 1️⃣ Instalar Node.js LTS

### Opción recomendada: Homebrew

```bash
brew install node
```

Verifica:

```bash
node -v
```

---

## 2️⃣ Eliminar Yarn antiguo

```bash
npm uninstall -g yarn
```

---

## 3️⃣ Habilitar Corepack

```bash
corepack enable
```

---

## 4️⃣ Activar Yarn estable

```bash
corepack prepare yarn@stable --activate
```

Verifica:

```bash
yarn -v
```

✔ Debe ser **4.x.x**

---

## 5️⃣ Instalar dependencias

```bash
yarn install
```

---

# 🚫 Cosas que **NO debes hacer**

❌ `npm install -g yarn`
❌ `yarn set version stable` en proyectos con `packageManager`
❌ Mezclar Yarn 1 y Yarn 4
❌ Ejecutar Yarn fuera del proyecto

---

# ✅ Resumen rápido

| Acción              | Correcto |
| ------------------- | -------- |
| Node LTS            | ✅        |
| Corepack            | ✅        |
| Yarn vía Corepack   | ✅        |
| Yarn global con npm | ❌        |
| Yarn 1.x            | ❌        |

---

# 🧠 Recomendación final

Si trabajas en muchos proyectos:

* **Windows** → usa **nvm-windows**
* **macOS** → usa **nvm**

Evita el 90% de problemas de Node/Yarn.


