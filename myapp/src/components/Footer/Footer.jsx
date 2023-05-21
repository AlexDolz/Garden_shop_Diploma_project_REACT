import React from 'react';
import s from './Footer.module.css';
import { SlSocialInstagram } from 'react-icons/sl';
import { SiWhatsapp } from 'react-icons/si';
import Map from '../Map/Map';

const Footer = () => {
  return (
    <div className='container'>
      <footer className={s.footer}>
        <div className={s.footer__wrapper}>
          <div className={s.footer__contacts}>
            <h3 className={s.contacts__title}>Contact</h3>
            <h2 className={s.contacts__number}>+49 999 999 99 99</h2>
            <div className={s.contacts__icons}>
              <div className={s.contacts__icon__container}>
                <SlSocialInstagram className={s.contacts__icon__item} />
                <p className={s.icon__item__text}>instagram</p>
              </div>
              <div className={s.contacts__icon__container}>
                <SiWhatsapp
                  className={`${s.contacts__icon__item} ${s.whatsapp__icon}`}
                />
                <p className={s.icon__item__text}>WhatApp</p>
              </div>
            </div>
          </div>

          <div className={s.footer__address}>
            <h3 className={s.address__title}>Address</h3>
            <h2 className={s.address}>
              <a
                href='https://www.google.com/search?q=telranDE'
                target='_blank'
              >
                Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
              </a>
            </h2>
            <h4 className={s.address__subtitle}>Working Hours:</h4>
            <h3 className={s.address__subtitle__hours}>24 hours a day</h3>
          </div>
        </div>
        <Map />
      </footer>
    </div>
  );
};

export default Footer;
