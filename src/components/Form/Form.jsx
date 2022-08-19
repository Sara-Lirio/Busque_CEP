import React from 'react'
import Input from '../Input/Input'
import style from './Form.module.css'

const Form = ({onchange,onclick}) => {
  return (
    <div className={style.form}>
        <h2>Digite seu CEP:</h2>
        <Input onchange={onchange}/>
       
    </div>
  )
}

export default Form