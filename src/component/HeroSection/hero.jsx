import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import { BsArrowRight } from "react-icons/bs";
import { RiShoppingBagFill } from "react-icons/ri";
import {motion} from 'framer-motion';

const hero = () => {

    const transition = {duration: 3,type: "spring"}
  return (
    <div className={css.container}>

    {/*leftside*/}
        <div className={css.h_sides}>
            <span className={css.text1}>skin protection cream</span>

            <div className={css.text2}>
                <span>Trendy Collection</span>
                <span>{" "}Seedily say has suitable disposal and boy.<br />
                Exercise joy man children rejoiced.</span>
            </div>
        </div>
    
    {/*herosec*/}
    <div className={css.wrapper}>

        <motion.div
        initial = {{bottom: "2rem"}}
        whileInView={{bottom: "0rem"}}
        className={css.Bluecircle}
        transition={transition}
    ></motion.div>
    
            <img src={HeroImg} alt="" width={600}/>

            <div className={css.cart2}>
                

                <RiShoppingBagFill/>

                <div className={css.signup}>
                    <span>Best SignUp Offers</span>
                    <div><BsArrowRight/></div>
                </div>

            </div>
    </div>

    {/*Rightside*/}

    <div className={css.h_sides}>
        <div className={css.traffic}>
            <span>1.5m</span>
            <span>Montly traffic</span>
        </div>

        
        <div className={css.customers}>
            <span>100k</span>
            <span>Happy Customers</span>
        </div>

    </div>
        

    </div>
  )
}

export default hero