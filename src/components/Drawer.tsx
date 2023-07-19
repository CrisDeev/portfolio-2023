interface Props {
  handleMenuButton: () => void
  menuButton: boolean
}

export const Drawer: React.FC<Props> = ({ menuButton, handleMenuButton }) => {
  return (
    <div className={`fixed z-[100] w-[300px] h-screen bg-[#272828] ${menuButton ? 'right-0' : '-right-full'} top-14 flex flex-col items-start text-2xl p-8 gap-10 transition-all duration-500 md:hidden`}>
        <a
        onClick={handleMenuButton}
        className="text-white"
        href="#About">Sobre mi
        </a>
        <a
        onClick={handleMenuButton}
        className="text-white"
        href="#Projects">Proyectos</a>
        <a
        onClick={handleMenuButton}
        className="text-white"
        href="#Conocimientos">Habilidades</a>
        <a
        onClick={handleMenuButton}
        className="text-white"
        href="#Contacto">Contactame</a>
    </div>
  )
}
