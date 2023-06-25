import { AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { useState } from 'react'

export const NavBar = (): JSX.Element => {
  const [menuButton, setMenuButton] = useState(false)

  const handleMenuButton = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    setMenuButton(!menuButton)
  }

  return (
    <nav className=" px-5 py-3 flex justify-between items-center">
      <div className='flex gap-5'>
        <AiOutlineGithub className="text-slate-50 text-4xl"/>
        <AiFillLinkedin className="text-slate-50 text-4xl" />
        <AiOutlineTwitter className="text-slate-50 text-4xl" />
      </div>
      <div>
        <button className='w-8 h-6 flex flex-col justify-between' onClick={handleMenuButton}>
          <div className={`bg-white w-[94%] h-[3px] rounded transition-all origin-left duration-300 ${menuButton ? 'rotate-45' : ''}`}></div>
          <div className={`bg-white w-[94%] h-[3px] rounded transition-all duration-300 ${menuButton ? 'opacity-0' : ''}`}></div>
          <div className={`bg-white w-[94%] h-[3px] rounded transition-all origin-left duration-300 ${menuButton ? '-rotate-45' : ''}`}></div>
        </button>
      </div>
    </nav>
  )
}
