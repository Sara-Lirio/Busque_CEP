import React from 'react'
import style from './Button.module.css'

const Button = ({onclick}) => {
  return (
    <button className={style.button} onClick={onclick}>Buscar</button>
  )
}

export default Button