import { AiFillCloseSquare, AiFillGithub, AiFillEye } from 'react-icons/ai'
interface Props {
  handleOpenModal: () => void
  title: string | undefined
  description: string | undefined
  projGitHub: string | undefined
  projTecnologies: string[] | undefined
  projImages: string | undefined
  projLink: string | undefined
}

export const ModalProjects: React.FC<Props> = ({ handleOpenModal, title, description, projGitHub, projTecnologies, projImages, projLink }) => {
  console.log(title)
  console.log(description)
  console.log(projGitHub)
  console.log(projTecnologies)
  console.log(projImages)
  console.log(projLink)
  return (
    <div className="fixed inset-0 z-20 bg-black bg-opacity-30 grid place-items-center">
      <div className="w-[280px] h-[600px] bg-[#16181A] p-8 flex flex-col items-center justify-between rounded-3xl md:w-[70%] xl:h-[80%] 2xl:h-[70%] 2xl:w-[60%]">
        <div className='flex w-full justify-end'>
          <AiFillCloseSquare className='text-white text-2xl cursor-pointer' onClick={handleOpenModal}/>
        </div>
        <h1 className='text-slate-100 text-3xl my-5 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-300 via-purple-800 to-cyan-400'>{title}</h1>
        <div className='xl:mx-40 w-full'>
          <h2 className='text-slate-100 mb-3 font-semibold'>Descrpción del proyecto:</h2>
          <p className='text-slate-100 text-justify mb-5'>{description}</p>
        </div>
        <div className='w-full flex xl:justify-between'>
          <div className='hidden lg:flex-col text-slate-200 lg:flex'>
            <h2 className='mb-4 text-xl font-medium'>Tecnologias: </h2>
            {
              projTecnologies?.map((tec, index) => (
                <span key={index} className='border-b-2 border-b-slate-200 mb-3'>{tec}</span>
              ))
            }
          </div>
          <img
            className='w-full md:w-[70%] xl:w-[50%] rounded-lg xl:w[40%] xl:m-0'
            src={projImages} alt={title}
            />
        </div>
        <footer className='w-full h-8 flex justify-evenly items-end mt-4 lg:justify-center lg:gap-7'>
          <a
            href={projGitHub}
            target='_blank'
            rel='noreferrer noopener'
          >
            <AiFillGithub className='text-3xl text-red-600 cursor-pointer hover:text-red-800' />
          </a>
          <a
            href={projLink}
            target='_blank'
            rel='noreferrer noopener'
          >
            <AiFillEye className='text-3xl text-slate-100 cursor-pointer hover:scale-110' />
          </a>
        </footer>
      </div>
    </div>
  )
}
