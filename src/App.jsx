import "./App.css"
import Navbar from "./components/navbar"
import Banner from "./components/banner"
import Clients from "./components/clients"
import Solutions from "./components/solutions"
import Growth from "./components/growth"
import MindPower from "./components/mindpower"
import BetterPart from "./components/betterpart"
import Operators from "./components/operators"
import QA from "./components/qa"
import UpFooter from "./components/upfooter"
import Footer from "./components/footer"

export default function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Banner />
      <Clients />
      <Growth />
      <Solutions />
      <MindPower />\
      <QA />
      <BetterPart />
      
      <Operators />
      <UpFooter />
      <Footer />
    </div>
  )
}
