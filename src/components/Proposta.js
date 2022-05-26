import { Popover, Transition } from "@headlessui/react"
import '../assets/css/Popover/popover.css'

export function Proposta(props) {
  return (
    <Popover className="popover--container">
      <Popover.Button className={props.retanguloClasses}>
        <div className={props.insideCircle}></div>
        <div className="circulo-fora"></div>
        <h4>{props.title}</h4>
        <p>{props.texto}</p>
      </Popover.Button>
      <Transition
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel>
          <div className={props.panelOptions}>
            <h4 className="popover--title">{props.panelTitle}</h4>
            <p className="popover--text">{props.panelTexto}</p>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}