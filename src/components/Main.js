import '../assets/css/maincontent/main.css'
import { Diferencial } from './Diferencial'
import { Proposta } from './Proposta'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faBookOpen } from '@fortawesome/free-solid-svg-icons'

export default function Main() {
    return (
        <main className="main--container" id="main">

            <article id="proposta">

                <h3 className="proposta--title">Proposta Pedagógica</h3>
                <div className="proposta--content">

                    <Proposta
                        retanguloClasses="retangulo retangulo--bercario"
                        insideCircle="circulo-dentro darkgreen-circle"
                        title="Berçário"
                        texto="Texto aqui testando escrevendo coisas aleatorias pra ver se o texto esta ficando certo, parece que nao mas vou continuar escrevendo pra testar mais."
                        panelOptions="popover--panel greenpanel"
                        panelTitle="Teste Bercario"
                        panelTexto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />

                    <Proposta
                        retanguloClasses="retangulo retangulo--maternal"
                        insideCircle="circulo-dentro darkblue-circle"
                        title="Maternal"
                        texto="Texto aqui testando escrevendo coisas aleatorias pra ver se o texto esta ficando certo, parece que nao mas vou continuar escrevendo pra testar mais."
                        panelOptions="popover--panel bluepanel panel--center"
                        panelTitle="Teste Maternal"
                        panelTexto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />

                    <Proposta
                        retanguloClasses="retangulo retangulo--pre"
                        insideCircle="circulo-dentro darkred-circle"
                        title="Pré-Escola"
                        texto="Texto aqui testando escrevendo coisas aleatorias pra ver se o texto esta ficando certo, parece que nao mas vou continuar escrevendo pra testar mais."
                        panelOptions="popover--panel redpanel panel--left"
                        panelTitle="Teste Pré-Escola"
                        panelTexto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />

                </div>
            </article>

            <article id="diferencial">

                <div className="diferencial--container">

                    <h3 className="diferencial--title">Nosso Diferencial</h3>

                    <div className="diferencial--content">
                        <Diferencial
                            icone={<FontAwesomeIcon icon={faStar} />}
                            titulo='Único'
                            quadrado='quadrado'
                            panelTexto='Aqui seu filho nao é apenas mais um número de matrícula e sim uma pequenina pessoa única e especial.'
                        />
                        <Diferencial
                            icone={<FontAwesomeIcon icon={faHeart} />}
                            titulo='Amor de mãe'
                            panelTexto='Cuidamos do seu filho como se fosse nosso. Com todo o carinho e amor que ele merece.'
                            quadrado='quadrado quadrado--azul'
                        />
                        <Diferencial
                            icone={<FontAwesomeIcon icon={faBookOpen} />}
                            titulo='Experiência'
                            panelTexto='São quase 30 anos de experiência e dedicação as crianças e seu aprendizado.'
                            quadrado='quadrado quadrado--verde'
                        />
                        <Diferencial
                            icone={<FontAwesomeIcon icon={faHeart} />}
                            titulo='Teste4'
                            panelTexto='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            quadrado='quadrado quadrado--verde'
                        />
                        <Diferencial
                            icone={<FontAwesomeIcon icon={faHeart} />}
                            titulo='Teste5'
                            panelTexto='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                            quadrado='quadrado'
                        />
                        <Diferencial
                            icone={<FontAwesomeIcon icon={faHeart} />}
                            titulo='Teste6'
                            panelTexto='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                            quadrado='quadrado quadrado--azul'
                        />
                    </div>

                </div>
            </article>

            <article id="metodologia" className="metodologia--container">
                <div className="metodologia--content">
                    <h3 className="metodologia--title">Metodologia</h3>
                    <p>Para atender as exigências da sociedade atual, fundamentamos nossa proposta educacional nos Referenciais Curriculares Nacionais para a Educação Infantil e os Parâmetros Curriculares Nacionais para o Ensino Fundamental, apoiando-nos na LDB 9394/96, expoentes teóricos, no documento da UNESCO que descreve os quatro pilares da educação que tomamos como ponto de integração aos nossos propósitos que são:</p>
                    <ul>
                        <li><span>1</span> Aprender a aprender</li>
                        <li><span>2</span> Aprender a ser</li>
                        <li><span>3</span> Aprender a conhecer</li>
                        <li><span>4</span> Aprender a viver junto</li>
                    </ul>
                </div>
            </article>

        </main >
    )
}