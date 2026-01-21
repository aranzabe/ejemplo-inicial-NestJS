
# ✅ Recomendación actual para `@nestjs/cli`

## 🟢 **RECOMENDADO (mejor práctica)**

👉 **Usar `npx` / `npm exec` (sin instalación global)**

Esta es la opción **más segura**, moderna y sin conflictos con Yarn/Corepack.

### Crear un proyecto NestJS

```bash
npx @nestjs/cli new my-project
```

O (equivalente moderno):

```bash
npm exec @nestjs/cli new my-project
```
📌 **Esta es la opción que NestJS recomienda implícitamente hoy**.


- No instala nada global
- No rompe Yarn 4
- Siempre usa la última versión del CLI
- Funciona igual en Windows y macOS







---

## 🟡 Opción válida: instalación global

Si prefieres tener el comando `nest` disponible siempre:

### Con npm (NO con yarn)

```bash
npm install -g @nestjs/cli
```

Verifica:

```bash
nest --version
```

Si está instalado de forma global, la creación del proyecto es:

```jsx
nest new project-name
```

✔ Funciona bien
⚠️ Puede requerir permisos de admin
⚠️ No aporta ventajas reales sobre `npx`

---

## 🔴 Lo que NO se recomienda

❌ Instalar el CLI global con Yarn:

```bash
yarn global add @nestjs/cli
```

**Por qué NO:**

* Yarn 4 no recomienda instalaciones globales
* `yarn global` está prácticamente obsoleto
* Da problemas con Corepack



---

# 🪟 Windows 11 (ejemplo completo)

```powershell
npx @nestjs/cli new crud-users
cd crud-users
yarn install
yarn start:dev
```

---

# 🍎 macOS (ejemplo completo)

```bash
npx @nestjs/cli new crud-users
cd crud-users
yarn install
yarn start:dev
```

---

# 💡 Tip importante con Yarn 4

Cuando NestJS te pregunte:

```
Which package manager would you like to use?
```

👉 Elige **Yarn**
Nest creará automáticamente:

```json
"packageManager": "yarn@4.x.x"
```

Compatible con Corepack 👍

---

# ✅ Conclusión clara

> **La instalación recomendada de `@nestjs/cli` es NO instalarlo.**
> Usa `npx @nestjs/cli`.

Es:

* más segura
* más moderna
* sin conflictos
* multiplataforma





---
# VS Code
Para ver los iconos tipo Nest en VSCode:

Poner este bloque en ‘Open User Settings Json’.

```
material-icon-theme.files.associations": {
        "*.module.ts": "nest",
        "*.controller.ts": "nest",
        "*.service.ts": "nest"
        },
```

