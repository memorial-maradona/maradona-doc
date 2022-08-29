---
sidebar_position: 2
---

# Instalación y ejecución

## Requisitos

### Node.js

Usar [nvm](https://github.com/nvm-sh/nvm) para instalar [lts/fermium (v14.x)](https://nodejs.org/en/download/) o superior.

```bash
nvm install lts/fermium
nvm use lts/fermium
```

### MongoDB

Descargar [MongoDB v4.0](https://docs.mongodb.com/manual/installation/) o superior.

### Linter

Utilizamos tanto [eslint](https://eslint.org/) como también [prettier](https://prettier.io/).

Por favor revisar los plugins de [VS Code](https://code.visualstudio.com/) instalados en las dev dependencies del package.json.

## Instalación

Crear los siguientes archivos en la `raíz` del proyecto:

- `.env`
- `.env.test`

Por favor revisar las variables de entorno en el archivo `.env.example`.

Instalar paquetes npm:

```bash
npm install
```

## Corriendo el proyecto

Para levantar el proyecto en modo desarrollo ejecutar el comando:

```bash
npm run dev
```

En el caso de que se desee levantar el build, primero se deberá ejecutar el comando

```bash
npm run build
```

y una vez ya buildeado (hacia carpeta dist) se podrá ejecutar con

```bash
npm run start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
