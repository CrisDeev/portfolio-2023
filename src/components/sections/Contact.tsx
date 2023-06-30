import Lottie from 'lottie-react'
import AnimationContact from '../../static/images/AnimationContact.json'

export const Contact = (): JSX.Element => {
  return (
    <section className="h-screen px-6 py-32" id="Contacto">
      <div className="h-full flex flex-col items-center gap-8">
        <h1 className="h-32 text-4xl font-bold text-transparent bg-clip-text mobile:text-4xl bg-gradient-to-tr from-purple-300 via-purple-800 to-cyan-400 md:text-6xl">Contactame</h1>
        <Lottie animationData={AnimationContact} />
        <form className="h-full flex flex-col gap-10">
          <div>
            <label className="text-slate-100 font-semibold pl-1 block">Correo electronico</label>
            <input
              className='mt-2 rounded-xl p-3 bg-zinc-800 focus:outline-none text-slate-300'
              type="email"
              placeholder="mail@example.com"
              required
            />
          </div>
          <div>
            <label className="text-slate-100 font-semibold pl-1 block">Nombre completo</label>
            <input
              className='mt-2 rounded-xl p-3 bg-zinc-800 focus:outline-none text-slate-300'
              type="text"
              required
              placeholder="John Artur"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-slate-100 font-semibold pl-1">Mendaje</label>
            <textarea className='bg-zinc-800 p-2 rounded-xl resize-none h-full mt-2 focus:outline-none text-slate-300' placeholder="Escribe tu mensaje..."></textarea>
          </div>
          <button className='bg-gradient-to-r from-fuchsia-500 to-sky-500 w-[60%] p-2 rounded-lg text-white mx-auto shadow-[0_4px_14px_rgba(14,165,233,0.5)]' type="submit">Contactame ahora</button>
        </form>
      </div>
    </section>
  )
}
