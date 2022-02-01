import './style.css'
import logo from '../../assets/logo.svg'
import Menu from '../Menu'

function Hearder() {
    return (
        <header>
            <img
                src={logo}
                alt='logo'
                className='logo'
            />
            <Menu />
        </header>


    )
}

export default Hearder