import { Header } from "./Screens/HeaderScreen/Header"
import { Home } from "./Screens/HomeScreen/Home"
import { Services } from "./Screens/ServiceScreen/Services"
import { Bonus } from "./Screens/BonusScreen/Bonus"
import { Depositions } from "./Screens/DepositionsScreen/Depositions"
import { About } from "./Screens/AboutScreen/About"
import { Footer } from "./Screens/FooterScreen/footer"

export const App = () => {
  return(
    <>
      <Header/>
      <Home/>
      <Services/>
      <Bonus/>
      <Depositions/>
      <About/>
      <Footer/>
    </>
  )
}