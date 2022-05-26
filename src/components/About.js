import '../assets/css/about/about.css'

export default function About() {
    return (
        <section className="about--container" id="sobre">

            <article className="about--content-container">
                <h3 className="about--title">Sobre</h3>
                <p className="about--text">O Centro de Educação Infantil Engenheiros do Saber vem a 28 anos preparando nossas crianças para os desafios que os esperam no futuro. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="about--text">Adipiscing elit pellentesque habitant morbi tristique. Dictum sit amet justo donec enim diam vulputate ut. Quis imperdiet massa tincidunt nunc pulvinar. Euismod nisi porta lorem mollis aliquam ut porttitor. Rutrum tellus pellentesque eu tincidunt tortor. Fermentum dui faucibus in ornare quam..</p>
            </article>
            {/* This is just a temporary solution to images, I would just make a single image with all the others attached */}
            <div className="about--img-container">
                <img className="about--img about-1" src="https://source.unsplash.com/random/400x400/?kids" alt="kids playing"></img>
                <img className="about--img about-2" src="https://source.unsplash.com/random/301x301/?kids" alt="kids playing"></img>
                <img className="about--img about-3" src="https://source.unsplash.com/random/300x300/?kids" alt="kids playing"></img>
                <img className="about--img about-4" src="https://source.unsplash.com/random/302x302/?kids" alt="kids playing"></img>
                <img className="about--img about-5" src="https://source.unsplash.com/random/303x303/?kids" alt="kids playing"></img>
                <img className="about--img about-6" src="https://source.unsplash.com/random/304x304/?kids" alt="kids playing"></img>
                <img className="about--img about-7" src="https://source.unsplash.com/random/305x305/?kids" alt="kids playing"></img>
                <img className="about--img about-8" src="https://source.unsplash.com/random/306x306/?kids" alt="kids playing"></img>
                <img className="about--img about-9" src="https://source.unsplash.com/random/307x307/?kids" alt="kids playing"></img>
            </div>

        </section>
    )
}