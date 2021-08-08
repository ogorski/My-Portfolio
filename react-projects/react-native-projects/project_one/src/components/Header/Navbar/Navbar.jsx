import React from 'react'
import s from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.navbar_search}/>
            <div className={s.navbar_profile}/>
            <div className={s.navbar_dropdown}/>
        </nav>
    )
}