// import { AiOutlineGithub } from 'react-icons/ai'
interface Props {
  handleOpenModal: () => void
}

export const ModalProjects: React.FC<Props> = ({ handleOpenModal }) => {
  console.log(handleOpenModal)
  return (
    <div onClick={handleOpenModal} className="fixed inset-0 z-20 bg-black bg-opacity-30 grid place-items-center">
      <div className="w-[280px] h-[600px] bg-[#16181A] p-10 flex flex-col items-center rounded-3xl">
        <h1>TO-DO App</h1>
        <div>
          <h2>Descrpción del proyecto:</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim est dicta magni autem aperiam possimus vero earum sint maxime in, vel id veritatis quidem, dignissimos adipisci veniam atque laudantium.</p>
        </div>
        <div className='flex'>
          <div className='flex flex-col text-slate-200'>
            <span className='border-b-2 border-b-slate-200'>ReactJS</span>
            <span className='border-b-2 border-b-slate-200'>TailwindCSS</span>
          </div>
          <img
            className='w-[60%]'
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-aabd1.appspot.com/o/Portfolio-Images%2FToDoImage.png?alt=media&token=298c04f1-882e-4b70-9734-018a97951876" alt=""
            />
        </div>
      </div>
    </div>
  )
}
