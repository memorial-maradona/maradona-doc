---
sidebar_position: 2
---

# Deploy Backend

## Preparando el ambiente

Para poder ejecutar un deploy del backend, se deberá tener instalado y configurado [serverless](https://www.serverless.com/). Cuando estoy escribiendo esto, utilizo las siguientes versiones

```bash
❯ sls -v
Framework Core: 2.41.2
Plugin: 5.5.4
SDK: 4.3.2
Components: 3.18.2
```

## Ejecución

Dependiendo el ambiente que se quiera desplegar, existen comandos en el package.json. Es importante tener los `.env` pertinentes del ambiente que se desea deployar.

```bash
npm run deploy:development --> Desarrollo
npm run deploy --> Producción
```

En el caso de que se quiera retirar / bajar la app, se ejecuta el comando

```bash
npm run remove:development --> Desarrollo
npm run remove --> Producción
```
