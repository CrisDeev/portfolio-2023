interface Props {
  open: boolean
}

export const Drawer: React.FC<Props> = ({ open }) => {
  return (
    <div
    className={`fixed w-[30%] h-4/6 bg-[#272828] ${open ? 'right-0' : '-right-full'} top-14 flex flex-col items-start text-2xl p-8 gap-10 transition-all duration-500 text-white lg:hidden`}>
        <a>Sobre mi</a>
        <a>Proyectos</a>
        <a>Habilidades</a>
        <a>Contactame</a>
    </div>
  )
}
