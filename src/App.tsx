import { NavBar } from './components/NavBar'
import { Home } from './components/Home'

const App = (): JSX.Element => {
  return (
    <div className='h-screen bg-gradient-to-tr from-blue-950 via-black to-black'>
      <NavBar />
      <Home />
    </div>
  )
}

export default App
