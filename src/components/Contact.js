import '../assets/css/contact/contact.css'

export default function Address() {
    return (
        <section className="contact--container" id="contato">

            <div className="address--container">
                <div className="address--content">
                    <a href='https://www.facebook.com/engenheirosdosaber/'><i class="fa-brands fa-facebook fa-2xl"></i></a>
                    <p>Rua Doutor Roberto Barrozo - 1720</p>
                    <p>Telefone: (41) 3203-7140</p>
                    <p>CEP: 80810-090</p>
                    <p>Mercês, Curitiba - PR</p>
                </div>

                <div className="address--map">
                    <iframe className="address--iframe" title="Endereço via Google Maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14414.80289216822!2d-49.2942160302246!3d-25.414826599999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0bacee2e284bb02!2sEduca%C3%A7%C3%A3o%20Infantil%20Engenheiros%20do%20Saber!5e0!3m2!1sen!2sbr!4v1651153334743!5m2!1sen!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <a href="#home" className="logo--img">TempLogo</a>
            <h6 className="address--copyright">Copyright © 2022 - Engenheiros do Saber</h6>

            <div className="extra--container">
                <p>Designed by <a href="https://github.com/Bmullerc">Bernardo Müller</a></p>
            </div>

        </section>


    )
}