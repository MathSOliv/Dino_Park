import { useState } from 'react'
import Botoes from '../Botoes'
import './NavBar.css'

const NavBar = () => {
    const [ navbar, setNavbar ] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 70){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return(
        <div className={ navbar ? 'navbar active' : 'navbar' }>
            <Botoes/>            
        </div>
    )
}

export default NavBar