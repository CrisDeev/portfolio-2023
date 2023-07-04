interface Props {
  handleMenuButton: () => void
  menuButton: boolean
}

export const Drawer: React.FC<Props> = ({ menuButton, handleMenuButton }) => {
  return (
    <div className={`fixed z-[100] w-[300px] h-screen bg-[#272828] ${menuButton ? 'right-0' : '-right-full'} top-14 flex flex-col items-start text-2xl p-8 gap-10 transition-all duration-500 text-white md:hidden`}>
        <a
        onClick={handleMenuButton}
        href="#About">Sobre mi</a>
        <a
        onClick={handleMenuButton}
        href="#Projects">Proyectos</a>
        <a
        onClick={handleMenuButton}
        href="#Conocimientos">Habilidades</a>
        <a
        onClick={handleMenuButton}
        href="#Contacto">Contactame</a>
    </div>
  )
}
