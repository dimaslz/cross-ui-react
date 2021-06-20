import React from 'react';

export const CuiButton = ({ children, ...props }) => {

  const {
    outline,
    color,
    pill,
    square,
    circle,
    onClick,
    onBlur,
    onFocus,
    className,
  } = props

  return (
    <cross-button
      class={className}
      color={color}
      outline={outline}
      pill={pill}
      square={square}
      circle={circle}
      onClick={onClick}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {children}
    </cross-button>
  )
}
