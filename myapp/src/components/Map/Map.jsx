import React from 'react';
import s from './Map.module.css';
import footer_map from './media/footer_map.png';

const Map = () => {
  return (
    <div className={s.footer__map}>
      <img className={s.map__img} src={footer_map} alt='map__img' />
    </div>
  );
};

export default Map;
