import { useState } from 'react';
import { useForm } from 'react-hook-form'
import './App.css'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

function App() {

  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    console.log(e)
  }

  const [info, setInfo] = useState()
  // const [input, setInput] = useState('')

  async function handleSetInput(e) {
    e.preventDefault()
    const input = e.target.value.replace(/\D/g, '')
    console.log(input);
    const url = `https://viacep.com.br/ws/${input}/json/`
    const response = await fetch(url)
    const json = await response.json()
    console.log(json);
    setInfo(json)
  }



  return (
    <div className="App">
      <Header />
      <Form {...register("cep")} onchange={handleSetInput} />
      <div className='response'>
        <p className='info'>{info ? info.logradouro : ''}</p>
        <p className='info'>{info ? info.bairro : ''}</p>
        <p className='info'>{info ? info.localidade : ''}</p>
        <p className='info'>{info ? info.uf : ''}</p>
      </div>
    </div>
  )
}
export default App
