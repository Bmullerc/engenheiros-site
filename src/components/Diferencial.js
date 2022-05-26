import { Popover, Transition } from "@headlessui/react";

export function Diferencial(props) {
  return (

    <Popover className="diferencial--content-container">
      <Popover.Button className={props.quadrado}>
        <div className="diferencial--icon">{props.icone}</div>
        <h4>{props.titulo}</h4>
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
          <div className="diferencial--popover-panel">
            <p>{props.panelTexto}</p>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover >


  )
}