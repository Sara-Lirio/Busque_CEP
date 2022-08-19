import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import style from './Form.module.css'

const Form = ({onchange,onclick}) => {
  return (
    <form className={style.form}>
        <h2>Digite seu CEP:</h2>
        <Input onchange={onchange}/>
        <Button onclick={onclick}/>
    </form>
  )
}

export default Form