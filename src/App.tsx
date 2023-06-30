import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Contact } from './components/sections/Contact'
import { PortfolioLayout } from './components/layouts/PortfolioLayout'

const App = (): JSX.Element => {
  return (
    <div className='h-auto bg-gradient-to-tr from-blue-950 via-black to-black'>
      <PortfolioLayout>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </PortfolioLayout>
    </div>
  )
}

export default App
