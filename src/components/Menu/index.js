import { useEffect, useState } from 'react'
import CloseIcon from '../../assets/iconClose.svg'
import MenuIcon from '../../assets/iconMenu.svg'
import './style.css'


function Menu() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        document.querySelector('body').style.overflow = open ? 'hidden' : 'initial'
    }, [open])

    return (
        <div className={`${open && 'fullscreen-menu'}`}>
            {open ?
                <img
                    className='icon-close'
                    style={{ displey: `${open} ? 'block' : 'none'` }}
                    src={CloseIcon}
                    alt='close icon'
                    onClick={() => setOpen(false)}
                />
                :
                <img
                    className='icon-menu'
                    src={MenuIcon}
                    alt='menu icon'
                    onClick={() => setOpen(true)}
                />
            }



            <ul className='menu'>
                <li>Ação</li>
                <li>Comédia</li>
                <li>Drama</li>
                <li>Documentários</li>
                <li>Infantis</li>
            </ul>
        </div>
    )
}

export default Menu