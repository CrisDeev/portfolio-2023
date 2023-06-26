import { NavBar } from '../NavBar'

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
  </>
  )
}
