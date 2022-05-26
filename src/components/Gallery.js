import '../assets/css/gallery/gallery.css'
import { Carrossel } from './Carrossel'

export default function Gallery() {
    return (
        <div className="gallery--container">
            <h3 className="gallery--title">Nossos Engenheiros</h3>
            <Carrossel />
        </div>
    )
}