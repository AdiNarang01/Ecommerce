import React, { useState } from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import { RiShoppingBag2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

    const[ShowMenu,SetShowMenu]=useState(false);

    const toggleMenu = () => {
        SetShowMenu( (ShowMenu) => !ShowMenu )  
    }
 
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo} alt='Logo'></img>
            <span>BuyAtBest</span>
        </div>

        <div className={css.right}>

        <div className={css.bars} onClick={toggleMenu}><GiHamburgerMenu /></div>

                <ul className={css.menu}>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>

                <ul className={css.menures} style={{display: ShowMenu? 'inherit' : 'none'}}>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>

            <input type='text' className={css.search} placeholder='Search'/>
            <RiShoppingBag2Line className={css.cart}/>

        </div>
    </div>
  )
}
 export default Header

