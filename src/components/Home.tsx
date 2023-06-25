import { BsFillFileEarmarkArrowDownFill } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'
import Lottie from 'lottie-react'
import Scroll from '../static/images/Scroll.json'

export const Home = (): JSX.Element => {
  return (
    <section className='h-[80vh] px-6 md:px-28'>
      <div className='text-white h-full flex gap-8 flex-col justify-center mobile:items-center border-b-[1px] border-white/25 md:items-start'>
        <p className='text-3xl font-semibold'><span className='text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-tr from-purple-300 via-purple-800 to-cyan-400'>Hola,</span> soy</p>
        <h1 className='text-6xl font-medium tracking-wide mobile:text-4xl mobile:text-center '>Cristian Álvarez Martínez</h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(800)
              .typeString('Desarrollador Web 💻.')
              .pauseFor(300)
              .deleteAll()
              .typeString('Un apasionado de la <strong>PROGRAMACIÓN</strong>')
              .pauseFor(2000)
              .start()
          }}
        options={{
          loop: true,
          delay: 50,
          autoStart: true
        }}
        />
        <button
        className='border-violet-900 border-2 w-32 py-3 rounded-md text-violet-900 flex justify-center items-center gap-1
        hover:text-white transition-colors duration-300 mb-10'>
          <BsFillFileEarmarkArrowDownFill />
          Curriculum
        </button>
          <Lottie animationData={Scroll} loop={true} className='h-20 w-full hidden md:inline-block'/>
      </div>
    </section>
  )
}
