import React from 'react'

import { CuiButton } from '@cross-ui/react'

import 'tailwindcss/dist/base.css';
import 'tailwindcss/dist/utilities.css';

import '@cross-ui/core/dist/cross-ui/cross-ui.css';

const colors = ['primary', 'secondary', 'accent', 'danger', 'warning', 'success', 'info'];

const App = () => {
  function onClick() {
    console.log("onClick")
  }

  return (<div className="flex flex-col">
    <div
      class="ForkMeOnGithub fixed top-0 right-0 mt-10 -mr-12 transform rotate-45 bg-gray-900 z-10"
    >
      <a
        href="https://github.com/dimaslz/cross-ui-react"
        target="_blank"
        class="flex text-gray-300 hover:text-gray-100 px-10 py-1 border border-white my-1 border-dashed"
        rel="noreferrer"
      >
        Fork me on GitHub
      </a>
    </div>

    <div class="p-10">
      <h1
        class="my-4 text-2xl"
      >
        Demo button using @cross-ui/react library based on @cross-ui/core
      </h1>

      <div>
        <div>
          {colors.map((color, key) => <CuiButton color={color} key={key} onClick={onClick}>{color}</CuiButton>)}
        </div>
        <div>
          {colors.map((color, key) => <CuiButton color={color} key={key} outline onClick={onClick}>{color}</CuiButton>)}
        </div>
        <div>
          {colors.map((color, key) => <CuiButton color={color} square={true} key={key} onClick={onClick}>?</CuiButton>)}
        </div>
        <div>
          {colors.map((color, key) => <CuiButton color={color} square={true} key={key} outline onClick={onClick}>?</CuiButton>)}
        </div>
        <div>
          {colors.map((color, key) => <CuiButton color={color} pill={true} key={key} onClick={onClick}>{color}</CuiButton>)}
        </div>
        <div>
          {colors.map((color, key) => <CuiButton color={color} pill={true} key={key} outline onClick={onClick}>{color}</CuiButton>)}
        </div>
        <div>
          {colors.map((color, key) => <CuiButton color={color} circle={true} key={key} onClick={onClick}>?</CuiButton>)}
        </div>
        <div>
          {colors.map((color, key) => <CuiButton color={color} circle={true} key={key} outline onClick={onClick}>?</CuiButton>)}
        </div>
      </div>
    </div>
  </div>)
}

export default App
