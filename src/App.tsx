import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { PortfolioLayout } from './components/layouts/PortfolioLayout'

const App = (): JSX.Element => {
  return (
    <div className='h-auto bg-gradient-to-tr from-blue-950 via-black to-black'>
      <PortfolioLayout>
        <Home />
        <About />
      </PortfolioLayout>
    </div>
  )
}

export default App
