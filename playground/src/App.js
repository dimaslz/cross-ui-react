import React from 'react'

import { CuiButton } from '@cross-ui/react'

import './App.scss';

const colors = ['primary', 'secondary', 'accent', 'danger', 'warning', 'success', 'info'];

const App = () => {
  function onClick() {
    console.log("onClick")
  }

  function onBlur() {
    console.log("onBlur")
  }

  function onFocus() {
    console.log("onFocus")
  }

  const commonProps = {
    onClick,
    onBlur,
    onFocus
  };

  return (<div className="flex flex-col">
    <div
      className="ForkMeOnGithub fixed top-0 right-0 mt-10 -mr-12 transform rotate-45 bg-gray-900 z-10"
    >
      <a
        href="https://github.com/dimaslz/cross-ui-react"
        target="_blank"
        className="flex text-gray-300 hover:text-gray-100 px-10 py-1 border border-white my-1 border-dashed"
        rel="noopener noreferrer"
      >
        Fork me on GitHub
      </a>
    </div>

    <div className="p-10">
      <h1
        className="my-4 text-2xl"
      >
        Demo button using @cross-ui/react library based on @cross-ui/core
      </h1>

      <div className="Demos">
        <div className="flex flex-col">
          {colors.map((color, key) => (
            <div className="mx-1" key={key}>
              {[false, true].map((out, outKey) => (
                ['default', 'pill', 'square', 'circle'].map(ui => {
                  const props = {
                    [ui]: true,
                  };

                  return <CuiButton
                    className="m-1 w-32"
                    key={`${key}.${outKey}.${color}.${out}.${ui}`}
                    color={color}
                    {...commonProps}
                    outline={out}
                    {...props}
                  >{['circle', 'square'].includes(ui) ? '?' : color}</CuiButton>
                })
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>)
}

export default App
