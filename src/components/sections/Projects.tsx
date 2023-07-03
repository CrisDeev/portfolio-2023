export const Projects = (): JSX.Element => {
  return (
   <section className="h-auto py-20 px-8" id='Projects'>
    <div className="flex items-center flex-col gap-20 md:gap-28">
      <h1 className="h-20 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-300 via-purple-800 to-cyan-400 md:text-6xl">Projects</h1>
      <div className="w-full grid justify-center gap-12 grid-cols-1 px-5 md:w-[70%] lg:grid-cols-2 lg:w-full xl:w-[80%] 2xl:w-[70%]">

        <a
        href=""
        rel="noreferrer noopener"
        className={'h-[400px] bg-center bg-cover bg-no-repeat flex flex-col justify-between rounded-xl overflow-hidden cursor-pointer transition-transform duration-200 hover:-translate-y-1.5 bg-[url("https://firebasestorage.googleapis.com/v0/b/portfolio-aabd1.appspot.com/o/Portfolio-Images%2FToDoImage.png?alt=media&token=926641a3-6e3f-4f1c-b7d1-1d82114c5d9a")] border-2 border-black'}>
          <h1 className="m-4 border-2 border-white/50 bg-black/30 w-[80%] p-2 text-md text-purple-900 font-bold rounded-tr-xl rounded-bl-xl mobile:w-[60%] md:w-[50%] lg:w-[]" >PROYECTO<br /> <span className="text-white text-xl font-semibold">To-Do App</span></h1>
          <p className=" h-[15%] p-5 truncate bg-black/50 font-bold text-white">App web donde prodrás organizar todas tu tareas</p>
        </a>

        <a
        href=""
        rel="noreferrer noopener"
        className={'h-[400px] bg-center bg-cover bg-no-repeat flex flex-col justify-between rounded-xl overflow-hidden cursor-pointer transition-transform duration-200 hover:-translate-y-1.5 bg-[url("https://firebasestorage.googleapis.com/v0/b/portfolio-aabd1.appspot.com/o/Portfolio-Images%2FExpressBuyImg.png?alt=media&token=3768c076-4fb5-44a7-a47e-061dd1e75b7d")] border-2 border-black'}>
          <h1 className="m-4 border-2 border-white/50 bg-black/30 w-[80%] p-2 text-sm text-purple-900 font-bold rounded-tr-xl rounded-bl-xl mobile:w-[60%] md:w-[50%] lg:w-[]" >PROYECTO<br /> <span className="text-white text-xl font-semibold">E-commerce</span></h1>
          <p className="h-[15%] p-5 truncate bg-black/50 font-bold text-white">Esta app es un E-commerce que cuenta con su proceso de compra y administración de productos</p>
        </a>

        <a
        href="https://minga-blanco-front-ruby.vercel.app/"
        rel="noreferrer noopener"
        target="_blank"
        className={'h-[400px] bg-center bg-cover bg-no-repeat flex flex-col justify-between rounded-xl overflow-hidden cursor-pointer transition-transform duration-200 hover:-translate-y-1.5 bg-[url("https://firebasestorage.googleapis.com/v0/b/portfolio-aabd1.appspot.com/o/Portfolio-Images%2FMangaReader.png?alt=media&token=bee9b00c-e6eb-4cf3-b08a-68d5d5f7a031")] border-2 border-black'}>
          <h1 className="m-4 border-2 border-white/50 bg-black/30 w-[80%] p-2 text-sm text-purple-900 font-bold rounded-tr-xl rounded-bl-xl mobile:w-[60%] md:w-[50%] lg:w-[]" >PROYECTO<br /> <span className="text-white text-xl font-semibold">Manga reader</span></h1>
          <p className="h-[15%] p-5 truncate bg-black/50 font-bold text-white">En este sitio web puedes leer tus mangas favoritos, y si eres un autor comodamente podrás publicar tus mangas</p>
        </a>

      </div>
    </div>
   </section>
  )
}
