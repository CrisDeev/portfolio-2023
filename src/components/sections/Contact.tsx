import Lottie from 'lottie-react'
import AnimationContact from '../../static/images/AnimationContact.json'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const defaultFromData = {
  email: '',
  name: '',
  message: ''
}

export const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState(defaultFromData)
  const { email, name, message } = formData

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value
    }))
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    emailjs.send('service_u8et3jj', 'template_jp8r0tn', formData, 'KuN9j0_4HRV1VzU6m')
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) })
    setFormData(defaultFromData)
  }
  return (
    <section className="h-auto px-6 py-28 lg:h-auto xl:h-screen" id="Contacto">
      <h1 className="h-20 text-center text-4xl font-bold text-transparent bg-clip-text mobile:text-4xl md:text-5xl xl:text-7xl bg-gradient-to-tr from-purple-300 via-purple-800 to-cyan-400">Contactame</h1>
      <div className="h-full flex flex-col items-center xl:flex-row 2xl:px-52">
        <Lottie animationData={AnimationContact} className='w-60 lg:w-72 xl:w-[40%]'/>
        <form
          onSubmit={onSubmit}
          className="h-auto flex flex-col gap-10 lg:w-[60%] xl:w-[50%] xl:justify-center">
          <div className='w-full'>
            <label className="text-slate-100 font-semibold pl-1 block">Correo electronico</label>
            <input
              autoComplete='off'
              onChange={onChange}
              className='w-full mt-2 rounded-xl p-3 bg-zinc-800 focus:outline-none text-slate-300'
              type="email"
              placeholder="mail@example.com"
              value={email}
              id='email'
              required
            />
          </div>
          <div className='w-full'>
            <label className="w-full text-slate-100 font-semibold pl-1 block">Nombre completo</label>
            <input
              onChange={onChange}
              className='w-full mt-2 rounded-xl p-3 bg-zinc-800 focus:outline-none text-slate-300'
              type="text"
              required
              value={name}
              id='name'
              placeholder="John Artur"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-slate-100 font-semibold pl-1">Mensaje</label>
            <input
              type='text'
              onChange={onChange}
              id='message'
              className='bg-zinc-800 p-2 rounded-xl resize-none h-20 mt-2 focus:outline-none text-slate-300 xl:h-32'
              value={message}
              >
              </input>
          </div>
          <button className='bg-gradient-to-r from-fuchsia-500 to-sky-500 w-[80%] lg:w-[35%] p-2 rounded-lg text-white mx-auto shadow-[0_4px_14px_rgba(14,165,233,0.5)]' type="submit">Contactame ahora</button>
        </form>
      </div>
    </section>
  )
}
