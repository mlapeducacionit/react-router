# Pasos a seguir para arrancar a desarrollar con React con vite

<https://vite.dev/guide/>


```sh
npm create vite@latest ./ -- --template react

# ./ -> indica directorio actual
# --template -> react | vite | etc
```

## Instalar dependencias
Las dependencias van a estar mencionadas dentro del archivo **package.json**

```sh
npm i # npm install
```

## Arrancar el servidor de desarollo

```sh
npm run dev
```

## Todo junto

```sh
npm i && npm run dev

# && -> AND lógico. Si el primer comando falla el segundo no se ejecuta
```

## Para detener el servidor de desarrollo

Ctrl + C


## Configuración de Vite para poder ver las líneas de código CSS en las devTools

<https://vite.dev/config/shared-options.html#css-devsourcemap>

## JSX

<https://react.dev/learn/writing-markup-with-jsx>
<https://es.wikipedia.org/wiki/JSX_(JavaScript)>

## Babel
Permite traducir el jsx a un javascript vanilla usando REACT (Core + REACT-DOM)

<https://babeljs.io/repl>

## Extensiones VSC

* Auto Rename <formulahendry.auto-rename-tag>
* Better Comments <aaron-bond.better-comments>
* ES7+ React/Redux <dsznajder.es7-react-js-snippets>
* Image preview <kisstkondoros.vscode-gutter-preview>
* Template String Converter <meganrogge.template-string-converter>
* Todo Tree <Gruntfuggly.todo-tree>

## Extensiones de DevTools React

<https://react.dev/learn/react-developer-tools>

## Shortcuts

* Alt + Shift + F -> Formatea el código
* Ctrl + G -> Me posiciona en la línea que le diga.

# Instalando Bootstrap

<https://getbootstrap.com/docs/5.3/getting-started/download/#npm>

```sh
npm i bootstrap@latest
```

## Netlify (Hosting como servicio)

<https://netlify.com/>

## Preparar el proyecto de Vite para la subida a Netlify

1. Detener el servidor de desarrollo

Ctrl + C

2. Un proceso de build (Empaquetado y preparación de los archivos para subirse)

```sh
npm run build
```

3. Previsualizan el proyecto

```sh
npm run preview
```

4. Arrastrar la carpeta dist dentro de la zona de drag and drop de Netlify

# Subida del proyecto a la nube por medio de GIT

1. Creamos un repositorio de GIT

```sh
git init
```

2. Marco los archivos para ser guardados dentro del repositorio

```sh
git add .
```

3. Creo el commit (guardo los archivos marcados dentro del repo)

```sh
git commit -m "Proyecto listo para subir a netlify"
```










