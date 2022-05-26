import '../assets/css/navbar/navbar.css'
import '../assets/css/button/button.css'
import { Popover } from '@headlessui/react'

export default function Navbar() {
    return (
        <nav className="navbar">
            <a href="#home" className="logo--img">TempLogo</a>

            <Popover className="btn">
                <Popover.Button>≡</Popover.Button>
                <Popover.Panel>
                    <ul className="nav--panel">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#proposta">Proposta</a></li>
                        <li><a href="#diferencial">Diferencial</a></li>
                        <li><a href="#metodologia">Metodologia</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </Popover.Panel>
            </Popover>


            <ul className="nav--list">
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#proposta">Proposta</a></li>
                <li><a href="#diferencial">Diferencial</a></li>
                <li><a href="#metodologia">Metodologia</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>

    )
} 