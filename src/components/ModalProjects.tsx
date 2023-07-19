// AiFillGithub, AiFillEye
import { AiFillCloseSquare, AiFillGithub, AiFillEye } from 'react-icons/ai'
import { Modal } from '@nextui-org/react'
interface Props {
  title: string | undefined
  description: string | undefined
  projGitHub: string | undefined
  projTecnologies: string[] | undefined
  projImages: string | undefined
  projLink: string | undefined
  setVisible: any
  bindings: any
}

export const ModalProjects: React.FC<Props> = ({ title, description, projGitHub, projTecnologies, projImages, projLink, setVisible, bindings }) => {
  const handleCloseModal = (): void => {
    setVisible(false)
  }
  return (
    <div>
      <Modal
        scroll
        width='600px'
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
        className='mx-6 h-[550px] lg:h-auto'
      >
        <Modal.Header className='bg-[#16181A] '>
          <div className='w-full bg-[#16181A] flex justify-between'>
            <h1 className='text-slate-100 text-4xl p-2 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-300 via-purple-800 to-cyan-400'>
              {title}
            </h1>
            <AiFillCloseSquare className='text-white text-2xl cursor-pointer hover:text-red-600 duration-100 hover:scale-110' onClick={handleCloseModal} />
          </div>
        </Modal.Header>
        <Modal.Body className='bg-[#16181A]'>
          <h2 className='text-white text-2xl text-center font-extrabold'>Descripción del proyecto:</h2>
          <p className='text-white text-center text-lg'>{description}.</p>
          <div className='flex flex-col items-center gap-8'>
            <div className='flex flex-col text-white'>
              <h2 className='text-xl font-bold mb-2'>Tecnologias usadas:</h2>
              {
                projTecnologies?.map((tec, index) => (
                  <span key={index} className='border-b-2 border-white text-center p-1'>{tec}</span>
                ))
              }
            </div>
            <img className='mb-4 rounded h-[250px] md:w-[80%]' src={projImages} alt={title} />
          </div>
        </Modal.Body>
        <Modal.Footer className='bg-[#16181A]'>
          <div className='w-full bg-[#16181A] flex justify-center gap-10'>
            <a href={projGitHub} target='_blank' rel='noreferrer noopener'>
              <AiFillGithub className='text-3xl text-red-600 cursor-pointer hover:text-red-800' />
            </a>
            <a href={projLink} target='_blank' rel='noreferrer noopener'>
              <AiFillEye className='text-3xl text-slate-100 cursor-pointer hover:scale-110' />
            </a>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
