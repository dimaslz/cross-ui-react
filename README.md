# @cross-ui/react

> Wrapper of @cross-ui/core for react projects

[![NPM](https://img.shields.io/npm/v/@cross-ui/react.svg)](https://www.npmjs.com/package/@cross-ui/react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**RECOMMENDATION:** To use this library comfortably, is needed to install TailwindCSS and PostCSS, so, follow the next instructions.

**NOTE:** This is an ALPHA version, maybe the next improvements will have TailwindCSS as an option.

## Install

npm users: `npm install --save @cross-ui/react && npm install tailwindcss@latest postcss@latest autoprefixer@latest @craco/craco -D`

yarn users: `yarn add @cross-ui/react && yarn add tailwindcss@latest postcss@latest autoprefixer@latest @craco/craco -D`

## Usage

To overwrite the postcss.config.js of create-react-app, you need to use [`@craco/craco`](https://github.com/gsoft-inc/craco). You have the explanation here: https://blog.logrocket.com/tailwind-css-configure-create-react-app/

your `package.json`
```json
...
"scripts": {
	"start": "craco start",
	"build": "craco build",
	"test": "craco test",
	...
}
...
```

```scss
@import '~tailwindcss/base.css';
@import '~tailwindcss/utilities.css';

@import '~@cross-ui/core/dist/cross-ui/cross-ui.css';

//...
```

```jsx
import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// import library setup
import { InitCrossUIReact } from '@cross-ui/react'

ReactDOM.render(<App />, document.getElementById('root'))

// Execute the settings after render the application.
// This function will do the same like the official doc: https://stenciljs.com/docs/react
InitCrossUIReact();
```

now, in your `your-component.jsx`
```jsx
const YourComponent = () => {
  return <div>
    <CuiButton>my button</CuiButton>
  </div>
}
```

and, in your entry file or css: import the base CSS style: `@cross-ui/core/dist/cross-ui/cross-ui.css`

you can see an example here: [`/playground/src/App.js`](/playground/src/App.js)

Check the [/playground](/playground) project to see an example.

## Docker
You have a [Dockerfile](Dockerfile) ready to server the example in a simple environment.

- build the image `docker build --no-cache -t cross-ui-react .`

- run the container `docker run --name cross-react-components -p 8080:80 -d cross-ui-react`

- open http://localhost:8080 in your browser.


## Author
```js
{
	license: "MIT",
	name: "Dimas López",
	role: "FullStack Software development",
	alias: "dimaslz",
	twitter: "https://twitter.com/dimaslz",
	site: "https://dimaslz.dev",
	linkedin: "https://www.linkedin.com/in/dimaslopezzurita"
}
```