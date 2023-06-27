import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { PortfolioLayout } from './components/layouts/PortfolioLayout'

const App = (): JSX.Element => {
  return (
    <div className='h-auto bg-gradient-to-tr from-blue-950 via-black to-black'>
      <PortfolioLayout>
        <Home />
        <About />
        <Projects />
      </PortfolioLayout>
    </div>
  )
}

export default App
