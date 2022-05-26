import { faComments, } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Popover } from '@headlessui/react'
import '../assets/css/widget/widget.css'

export function Widget() {
  return (
    <Popover className="widget--container">
      <Popover.Panel className="widget--panel">
        <h4>Entre em Contato:</h4>
        <div className='widget--links'>
          <a href='https://wa.me/1XXXXXXXXXX' className='zapp-btn'><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a href='https://www.facebook.com/engenheirosdosaber/' className='face-btn'><FontAwesomeIcon icon={faFacebook} /></a>
        </div>
      </Popover.Panel>

      <Popover.Button className="widget--btn">
        <FontAwesomeIcon icon={faComments} />
      </Popover.Button>
    </Popover>
  )
}