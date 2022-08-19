import React from 'react'
import style from './Input.module.css'

const Input = ({onchange}) => {
  return (
    <input className={style.input} type="text" id='input' onChange={onchange}></input>
  )
}

export default Input