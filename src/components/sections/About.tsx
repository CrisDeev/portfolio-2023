
export const About = (): JSX.Element => {
  return (
    <div className="h-auto py-20 flex flex-col items-center gap-10 px-6" id="About">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-300 via-purple-800 to-cyan-400">Sobre mi</h1>
      <p className="text-white text-center text-sm">
        👨‍💻 21 años. Soy de <span className="bg-clip-text text-transparent bg-gradient-to-tr from-yellow-300 via-blue-900 to-rose-700 font-bold">Colombia.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint recusandae voluptatibus expedita exercitationem labore officia similique minus, vero dolorum sequi eius voluptates accusamus velit nostrum neque laborum tempora asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa perspiciatis, et vel odit delectus in nemo nam commodi saepe exercitationem deleniti officia distinctio architecto quod dolorum, laboriosam inventore mollitia iste.
      </p>
      <img className="rounded-[40px]" src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="Imagen personal"/>
    </div>
  )
}
