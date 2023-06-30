interface Props {
  open: boolean
}

export const Drawer: React.FC<Props> = ({ open }) => {
  return (
    <div
    className={`fixed w-[300px] h-screen bg-[#272828] ${open ? 'right-0' : '-right-full'} top-14 flex flex-col items-start text-2xl p-8 gap-10 transition-all duration-500 text-white md:hidden`}>
        <a href="#About">Sobre mi</a>
        <a href="#Projects">Proyectos</a>
        <a href="#Conocimientos">Habilidades</a>
        <a href="#Contacto">Contactame</a>
    </div>
  )
}
