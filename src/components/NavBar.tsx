import { AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { useState } from 'react'
import { Drawer } from './Drawer'

export const NavBar = (): JSX.Element => {
  const [menuButton, setMenuButton] = useState(false)

  const handleMenuButton = (): void => {
    setMenuButton(!menuButton)
  }

  return (
    <>
      <nav className="fixed w-full px-10 py-3 flex justify-between items-center backdrop-blur-md">
        <Drawer
        menuButton = {menuButton}
        handleMenuButton = {handleMenuButton}
        />
        <div className='flex gap-5'>
          <a href="https://github.com/CrisDeev" target='_blank' rel='noreferrer noopener'>
            <AiOutlineGithub className="text-slate-50 text-4xl hover:text-red-500 transition-all duration-100" />
          </a>
          <a href="www.linkedin.com/in/cristiandeev" target='_blank' rel='noreferrer noopener'>
            <AiFillLinkedin className="text-slate-50 text-4xl hover:text-[#3694ff] transition-all duration-100" />
          </a>
          <a href="https://twitter.com/Cristian22gk" target='_blank' rel='noreferrer noopener'>
            <AiOutlineTwitter className="text-slate-50 text-4xl hover:text-[#3694ff] transition-all duration-100" />
          </a>
        </div>
        <div>
          <button className='w-8 h-6 flex flex-col justify-between md:hidden' onClick={handleMenuButton}>
            <div className={`bg-white w-[94%] h-[3px] rounded transition-all origin-left duration-300 ${menuButton ? 'rotate-45' : ''}`}></div>
            <div className={`bg-white w-[94%] h-[3px] rounded transition-all duration-300 ${menuButton ? 'opacity-0' : ''}`}></div>
            <div className={`bg-white w-[94%] h-[3px] rounded transition-all origin-left duration-300 ${menuButton ? '-rotate-45' : ''}`}></div>
          </button>
          <div className='text-white hidden md:flex gap-6 font-semibold tracking-wide text-lg'>
            <a className='focus:text-[#3694ff] p-1 focus:border-b-[1px] focus:border-b-white hover:text-[#3694ff] transition-all duration-100' href='#About' rel='noreferrer'>Sobre mi</a>
            <a className='focus:text-[#3694ff] p-1 focus:border-b-[1px] focus:border-b-white hover:text-[#3694ff] transition-all duration-100' href='#Projects' rel='noreferrer'>Proyectos</a>
            <a className='focus:text-[#3694ff] p-1 focus:border-b-[1px] focus:border-b-white hover:text-[#3694ff] transition-all duration-100' href='#Conocimientos' rel='noreferrer'>Habilidades</a>
            <a className='focus:text-[#3694ff] p-1 focus:border-b-[1px] focus:border-b-white hover:text-[#3694ff] transition-all duration-100' href='#Contacto' rel='noreferrer'>Contactame</a>
          </div>
        </div>
      </nav>
    </>
  )
}
