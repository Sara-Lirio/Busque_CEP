import React from 'react'
import Input from '../Input/Input'
import style from './Form.module.css'

const Form = () => {
  return (
    <form className={style.form}>
        <h2>Digite seu CEP:</h2>
        <Input/>
    </form>
  )
}

export default Form