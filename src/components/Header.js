import '../assets/css/header/header.css'
import videoBackground from '../assets/video/kids-studying.mp4'

export default function Header() {
    return (
        <header className="header--container" id="home">
            <div className="header--bgoverlay"></div>
            <video src={videoBackground} autoPlay loop muted className='header--video' />

            <div className="header--content">
                <h1 className="header--title">Engenheiros do Saber</h1>
                <h4 className="header--subtitle">Educação Infantil</h4>
            </div>
        </header >
    )
}