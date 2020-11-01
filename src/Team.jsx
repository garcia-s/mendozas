import React from 'react'
import josue from './images/josue.png'
import nerio from './images/nerio.png'
import belmys from './images/belmys.png'
import { ReactComponent as Instagram } from './images/instagram.svg'
import { ReactComponent as Whatsapp } from './images/whatsapp.svg'
const Team = () => {
    return <div className='team-wrapper'>
        <h2 className='team-header-text'>
            NUESTROS ESPECIALISTAS EN IMAGEN PERSONAL
        </h2>
        <div className='team-cards-wrapper'>
            <div className='team-card'>
                <img className='team-card-image' src={josue} />
                <div className='team-card-name'>
                    JOSUE MENDOZA
                </div>
                <div className='team-card-desc'>
                    Especialista en cuidado e imagen personal con mas de 8 años de experiencia.
                </div>
                <div className='team-card-social'>
                    <a className='card-social-button' href='https://www.instagram.com/josue_barber2'>
                        <Instagram className='card-social-icon' />
                    </a>
                    <a className='card-social-button' href='https://wa.me/50760972806'>
                        <Whatsapp className='card-social-icon' />
                    </a>
                </div>
            </div>

            <div className='team-card'>
                <img className='team-card-image' src={nerio} />
                <div className='team-card-name'>
                    NERIO MENDOZA
                </div>
                <div className='team-card-desc'>
                    Especialista en cuidado e imagen personal con mas de 3 años de experiencia.
                </div>
                <div className='team-card-social'>
                    <a className='card-social-button' href='https://www.instagram.com/telodijoeli'>
                        <Instagram className='card-social-icon' />
                    </a>
                    <a className='card-social-button' href='https://wa.me/50761559128'>
                        <Whatsapp className='card-social-icon' />
                    </a>
                </div>
            </div>
            <div className='team-card'>
                <img className='team-card-image' src={belmys} />
                <div className='team-card-name'>
                    BELMYS MENDOZA
                </div>
                <div className='team-card-desc'>
                    Especialista en cuidado e imagen personal con mas de 2 años de experiencia.
                </div>
                <div className='team-card-social'>
                    <a className='card-social-button' href='https://www.instagram.com/bjm_barber'>
                        <Instagram className='card-social-icon' />
                    </a>
                    <a className='card-social-button' href='https://wa.me/50769775681'>
                        <Whatsapp className='card-social-icon' />
                    </a>
                </div>
            </div>
        </div>
    </div>
}
export default Team
