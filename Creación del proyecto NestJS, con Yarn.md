# Creación del proyecto NestJS, con Yarn.

## 1️⃣ Instalación.

---

Lo correcto y más útil es instalar el cli de nest:

```jsx
npm i -g @nestjs/cli
```

Los proyectos nuevos se crean con:

```jsx
nest new project-name
```

Si da problemas:

```jsx
rm -rf node_modules package-lock.json
npm install
```

Más problemas:

```jsx
npm cache clean --force
```

Si falla, elimina anualmente la cache:

```jsx
rm -rf ~/.npm
```

Y vuelve a instalar.

También se puede instalar yarn de forma global y usarlo en lugar de npm:

```jsx
npm install -g yarn
```

Para ver los iconos tipo Nest en VSCode:

Poner este bloque 

```jsx
"material-icon-theme.files.associations": {
        "*.module.ts": "nest",
        "*.controller.ts": "nest",
        "*.service.ts": "nest"
        },
```

en ‘Open User Settings Json’.

---

---

## 2️⃣ Uso de yarn.

---

Instalación:

```jsx
npm install --global yarn
```

Iniciar un proyecto e instalar lo básico para un servidor express:

```jsx
yarn init -y
yarn add express dotenv
yarn add nodemon -D
```

Configurar scripts en package.json:

```jsx
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Iniciamos con:

```jsx
yarn start //Modo producción.
yarn dev  //Modo desarrollo.
yarn start:dev  //Desarrollo vivo.
```

Comparativa:

![image.png](Creacio%CC%81n%20del%20proyecto%20NestJS,%20con%20Yarn/image.png)

El equivalente de ***npm install*** es ***yarn.***

---