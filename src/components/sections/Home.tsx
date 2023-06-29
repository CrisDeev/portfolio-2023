import { BsFillFileEarmarkArrowDownFill } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'
import Lottie from 'lottie-react'
import Scroll from '../../static/images/Scroll.json'

export const Home = (): JSX.Element => {
  return (
    <section className='h-screen px-6 md:px-28 lg:px-40 2xl:px-96' id='Home'>
      <div className='text-white h-full flex gap-8 flex-col justify-center mobile:items-center border-b-[1px] border-white/25 md:items-start lg:pt-20'>
        <p className='text-3xl font-semibold lg:text-4xl'><span className='text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-tr from-purple-300 via-purple-800 to-cyan-400 lg:text-5xl'>Hola,</span> soy</p>
        <h1 className='text-6xl font-medium tracking-wide leading-tight mobile:text-4xl mobile:text-center lg:leading-none lg:text-[85px] lg:text-left'>Cristian Álvarez Martínez</h1>
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
          autoStart: true,
          wrapperClassName: 'lg:text-xl'
        }}
        />
        <a
          href='.https://firebasestorage.googleapis.com/v0/b/portfolio-aabd1.appspot.com/o/Cristian%20Alvarez.pdf?alt=media&token=971c8d14-b32b-4c5e-8046-d3bc71974a9f'
          rel='noopener noreferrer'
          target='_blank'
          className='border-[#3694ff] border-2 w-32 py-3 rounded-md text-[#3694ff] flex justify-center items-center gap-1 hover:text-purple-800 +-
          hover:border-purple-800 transition-colors duration-200 mb-10'>
            <BsFillFileEarmarkArrowDownFill />
            Curriculum
        </a>
          <Lottie animationData={Scroll} loop={true} className='h-20 w-full hidden md:inline-block'/>
      </div>
    </section>
  )
}
