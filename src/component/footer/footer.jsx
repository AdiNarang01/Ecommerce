import React from 'react'
import Logo from '../../assets/logo.png'
import {InboxIcon,PhoneIcon,LocationMarkerIcon,LoginIcon,UsersIcon,LinkIcon} from '@heroicons/react/outline'
import css from './footer.module.css'

const footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr/>
        <div className={css.cFooter}>
              <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>Buy At Best</span>
              </div>

              <div className={css.block}>
                    <div className={css.details}>
                        <span className={css.Head}>Contact Us</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.icon} />
                            <span>Gurgaon</span>
                        </span>

                        <span className={css.pngLine}>
                            <PhoneIcon className={css.icon} />
                            <span>565-545-8592</span>
                        </span>

                          <span className={css.pngLine}>
                            <InboxIcon className={css.icon} />
                            <span>support@buyatbest.com</span>
                        </span>
                    </div>
              </div>

              <div className={css.block}>
                    <div className={css.details}>
                        <span className={css.Head}>Account</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon} />
                            <span>Sign In</span>
                        </span>
                    </div>
              </div>

              <div className={css.block}>
                    <div className={css.details}>
                        <span className={css.Head}>Company</span>
                        <span className={css.pngLine}>
                            <UsersIcon className={css.icon} />
                            <span>About Us</span>
                        </span>
                    </div>
              </div>

              <div className={css.block}>
                    <div className={css.details}>
                        <span className={css.Head}>Resources</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.icon} />
                            <span>Safety Privacy & Terms</span>
                        </span>
                    </div>
              </div>
        </div>

        <div className={css.copyRight}>
                <span>Copywrite @2023 by BuyAtBest</span>
                <span>All rights reserved</span>
              </div>
              
    </div>
  )
}

export default footer