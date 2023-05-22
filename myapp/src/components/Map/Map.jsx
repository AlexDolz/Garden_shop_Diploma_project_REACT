import React from 'react';
import s from './Map.module.css';

const Map = () => {
  return (
    <div className={s.map__wrapper}>
      <div style={{ width: '100%' }}>
        <iframe
          title='googleMaps'
          width='100%'
          height='600'
          frameBorder='0'
          scrolling='no'
          marginHeight='0'
          marginWidth='0'
          src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Tel-Ran.de%20GmbH+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
