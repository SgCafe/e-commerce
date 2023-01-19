import React from 'react'


// Style
import './header.style.css'
import { RiShoppingCartLine } from 'react-icons/ri'

const Header = () => {
    return (
        <div className="header-container">
            <h1>CLUB CLOTHING</h1>
            <div className="header-items">
                <div className="header-item">Explorar</div>
                <div className="header-item">Login</div>
                <div className="header-item">Criar Conta</div>
                <div className="header-item"><RiShoppingCartLine size={25} />
                    <p style={{ marginLeft: 10 }}>5</p>
                </div>
            </div>
        </div>
    )
}

export default Header