import React from 'react'
import Navbar from './Navbar/Navbar'
import s from './Header.module.scss'

export const Header = () => {
    return (
        <>
            <div className={s.header}>
                <div className={s.header_logo}></div>
                <Navbar/>
            </div>
        </>
    )
}