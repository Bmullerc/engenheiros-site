import Navbar from "./components/Navbar.js"
import Header from "./components/Header"
import Main from "./components/Main"
import Contact from "./components/Contact"
import About from "./components/About"
import Gallery from "./components/Gallery.js"

import './assets/css/global.css'
import { Widget } from "./components/Widget.js"

export default function App() {
    return (
        <div className="super--container">
            <Navbar />
            <Header />
            <About />
            <Main />
            <Gallery />
            <Widget />
            <Contact />
        </div>
    )
}