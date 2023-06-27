import { type SeedProject as OneProject } from '../types'

interface Props extends OneProject {}

export const Project: React.FC<Props> = ({ title, description, image }) => {
  return (
    <div className={`w-full h-[400px] bg-center bg-cover bg-no-repeat flex flex-col justify-between rounded-xl overflow-hidden bg-[url('${image}')] border-2 border-black`}>
      <h1 className="backdrop-blur-[6px] m-4 border-2 border-white/50 bg-black/30 w-[55%] p-2 text-sm text-purple-900 font-bold rounded-tr-xl rounded-bl-xl" >PROYECTO<br /> <span className="text-white text-2xl font-semibold">{title}</span></h1>
      <p className="backdrop-blur-[6px] h-[15%] p-5 truncate bg-black/50 font-bold text-white">{description}</p>
    </div>
  )
}
