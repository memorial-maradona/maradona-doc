---
sidebar_position: 1
---

# Deploy Frontend

## Preparando el proyecto

Para tener el proyecto listo para una subida a producción, se deberá hacer un build. Para lo cual, primero se deberá abrir una consola en el root del proyecto, y ejecutar el comando:

```bash
npm run build
```

Es importante previamente haber ejecutado el proyecto y que el mismo esté en funcionamiento (esto quiere decir, que las dependencias ya deberán estar previamente instaladas).

Una vez ejecutado el comando, en la raíz del proyecto se creó una carpeta `dist` la cual contendrá toda la aplicación compilada. Como paso opcional, se podrá probar que el build se haya generado correctamente, abriendo una terminal en esta misma carpeta y ejecuando el comando

```bash
npx serve
```

Lo cual abrirá una pestaña en el navegador de la aplicación ya buildeada.

## Cloud

Ya tenemos el proyecto buileado, asi que nos vamos a la consola de AWS. Una vez dentro, se buscará primeramente el servicio S3. Detro de S3, aparecerá una lista detallando cada una de los contenedores (buckets) de archivos. Todos deberán estar correctamente nombrados, así que seleccionamos el de nuestro interés.

Una vez dentro, se podrán ver todos los archivos que tiene ese bucket. Lo que se desea es reemplazar el contenido por el nuevo código buildeado, por ende, se deberán seleccionar todos y presionar sobre "eliminar". Luego, escribir "eliminar de forma permanente" y eliminar todos los objetos (como bien dice la pantalla de consentimiento, esta acción es irreversible).

![AWS Delete](/img/aws-delete.png)

Cuando los objetos se hayan eliminado correctamente, procedemos a cargar el nuevo build. Para esto, presionamos sobre `Cargar` y cargamos todos los archivos y carpetas que se encuentran dentro de `dist` (carpeta que nos generó el build).

Perfecto! Ya tenemos todos los archivos dentro del contenedor (bucket) s3

A continuación, entrar al servicio llamado `cloudfront` y entrar a la aplicación que se desea desplegar. Una vez dentro, en el menú superior seleccionar `Invalidations` y `Create invalidation`. En el campo escribir `/*` y crear la invalidación

![AWS Invalidation](/img/aws-invalidation.png)

Esperar a que la invalidation haya finalizado, y el sitio estará completamente desplegado.

¡¡Felicidades!!
