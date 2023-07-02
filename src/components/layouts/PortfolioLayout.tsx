import { NavBar } from '../NavBar'
import { Footer } from '../Footer'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const PortfolioLayout: React.FC<Props> = ({ children }) => {
  return (
  <>
    <NavBar />
    <main>
      {children}
    </main>
    <Footer />
  </>
  )
}
