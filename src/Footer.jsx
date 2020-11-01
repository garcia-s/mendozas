import React from 'react'
import { ReactComponent as Facebook } from './images/facebook.svg'
import { ReactComponent as Instagram } from './images/instagram.svg'
import { ReactComponent as Whatsapp } from './images/whatsapp.svg'
export default () => {
    return <div className='footer-wrapper'>
        <div className='footer-social'>
            <a className='footer-social-button'
                href='https://www.facebook.com/Mendoza-Barbershop-102943978274926'>
                <Facebook className='footer-social-icon' />
            </a>
            <a className='footer-social-button'
                href='https://www.instagram.com/mendozasbarbershop'>
                <Instagram className='footer-social-icon' />
            </a>
            <a className='footer-social-button'
                href='https://wa.link/bbbw5e'>
                <Whatsapp className='footer-social-icon' />
            </a>
        </div>
        <div className='footer-copyright'>{new Date().getFullYear()} © MENDOZA BARBERSHOP</div>
        <div className='footer-mentions'>Designed by Symmetry</div>
    </div>
}