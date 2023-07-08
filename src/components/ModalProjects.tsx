interface Props {
  handleOpenModal: () => void
}

export const ModalProjects: React.FC<Props> = ({ handleOpenModal }) => {
  console.log(handleOpenModal)
  return (
    <div onClick={handleOpenModal} className="fixed inset-0 z-20 bg-black bg-opacity-30 grid place-items-center">
      <div className="w-[40%] z-50 h-[50%] bg-slate-200 p-5 flex flex-col items-center justify-around">
        <p className="text-center text-5xl">Working in...</p>
        <button onClick={handleOpenModal} className="bg-red-700 p-2 rounded-lg w-1/3">Close modal</button>
      </div>
    </div>
  )
}
