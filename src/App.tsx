import { Home } from './components/Home'
import { PortfolioLayout } from './components/layouts/PortfolioLayout'

const App = (): JSX.Element => {
  return (
    <div className='h-screen bg-gradient-to-tr from-blue-950 via-black to-black'>
      <PortfolioLayout>
        <Home />
      </PortfolioLayout>
    </div>
  )
}

export default App
