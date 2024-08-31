import React from 'react'
import { IButtonProps } from 'src/types/Button'
 

const Button: React.FC<IButtonProps>= ({text, icon, children, ...defaultProps}) =>  {
  return (
    <button {...defaultProps}>
        <p>{text}</p>
    </button>
  )
}


export default Button
