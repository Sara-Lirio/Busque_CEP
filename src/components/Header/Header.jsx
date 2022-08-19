import React from 'react'
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <h1 className={style.title}>Busca CEP</h1>
                <div className={style.triangulediv}>
                    <div className={style.triangule}></div>
                </div>

            </div>
        </header>
    )
}

export default Header