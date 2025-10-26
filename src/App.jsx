import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
        <NavBar />
        <Hero />
        <ProductViewer />
    </main>
  )
}

export default App