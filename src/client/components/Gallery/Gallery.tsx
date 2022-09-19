import React from 'react';
import Subtitle from '../Subtitle/Subtitle';

const Gallery = () => {
  return (
    <div className="gallery__container">
      <Subtitle
        subtitle="Галерея наших работ"
        className="main__gallery_title"
      />
      <div className="gallery">
        <img
          src="../../assets/images/gallery/first.png"
          alt=""
          className="gallery__image first"
        />
        <img
          src="../../assets/images/gallery/second.png"
          alt=""
          className="gallery__image second"
        />
        <img
          src="../../assets/images/gallery/third.png"
          alt=""
          className="gallery__image third"
        />
        <img
          src="../../assets/images/gallery/fourth.png"
          alt=""
          className="gallery__image fourth"
        />
        <img
          src="../../assets/images/gallery/fifth.png"
          alt=""
          className="gallery__image fifth"
        />
        <img
          src="../../assets/images/gallery/six.png"
          alt=""
          className="gallery__image six"
        />
        <img
          src="../../assets/images/gallery/seven.png"
          alt=""
          className="gallery__image seven"
        />
        <img
          src="../../assets/images/gallery/eight.png"
          alt=""
          className="gallery__image eight"
        />
        <img
          src="../../assets/images/gallery/nine.png"
          alt=""
          className="gallery__image nine"
        />
        <img
          src="../../assets/images/gallery/ten.png"
          alt=""
          className="gallery__image ten"
        />
      </div>
    </div>
  );
};

export default Gallery;
