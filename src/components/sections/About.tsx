
export const About = (): JSX.Element => {
  return (
    <section className="h-screen py-20 px-6 border-b-[1px] border-b-white/30" id="About">
      <div className="h-full flex flex-col gap-10 items-center justify-around md:w-[90%] mx-auto md:gap-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-300 via-purple-800 to-cyan-400 md:text-5xl 2xl:text-8xl">Sobre mi</h1>
        <div className="flex flex-col items-center justify-center gap-14 md:flex-row 2xl:gap-36">
          <p className="text-white text-center text-sm md:text-lg mobile:w-[70%] md:w-[50%] xl:text-2xl 2xl:text-6xl">
            👨‍💻 21 años. Soy de <span className="bg-clip-text text-transparent bg-gradient-to-tr from-yellow-300 via-blue-900 to-rose-700 font-bold">Colombia.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint recusandae voluptatibus expedita exercitationem labore officia similique minus, vero dolorum sequi eius voluptates accusamus velit nostrum neque laborum tempora asperiores! Lorem ipsum dolor sit amet
          </p>
          <img className="rounded-[40px] w-4/5 mobile:w-[60%] md:w-[50%] lg:w-[40%] 2xl:w-[40%]" src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="Imagen personal"/>
        </div>
      </div>
    </section>
  )
}
