import React from 'react';
import css from './virtual.module.css';
import shade from '../../assets/shade.png';
import Before from '../../assets/before.png';
import After from '../../assets/after.png';
import ReactCompareImage from 'react-compare-image';

const virtual = () => {
  return (
    <div className={css.Virtual}>
        <div className={css.left}>
            <span>Virtual Try-On</span>
            <span>Never Buy the wrong Shade Again!</span>
            <span>Try Now!</span>
            <img src={shade} alt='Shadepng'/>
        </div>

        <div className={css.right}>
            <div className={css.wrapper}>
            <ReactCompareImage leftImage={Before} rightImage={After}/>
            </div>   
        </div>


    </div>

  )
}

export default virtual