import React from 'react'

export const CuiButton = ({ children, ...props }) => {
  const { outline, color, pill, square, circle, onClick } = props

  return (
    <cross-button
      color={color}
      outline={outline}
      pill={pill}
      square={square}
      circle={circle}
      onClick={onClick}
    >
      {children}
    </cross-button>
  )
}
