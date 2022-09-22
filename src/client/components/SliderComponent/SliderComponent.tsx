import React, { Component, FC } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  DotGroup,
  Image,
  ImageWithZoom,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { productCard } from 'src/client/__mocks__/Catalog/CatalogCard';
import CatalogCard from '../CatalogCard/CatalogCard';
import { SldierImages } from './../../__mocks__/SliderComponent/SliderImages';

const SliderComponent: FC = () => {
  const visibleSlides = 3;
  return (
    <div>
      <div className="">
        <CarouselProvider
          // isIntrinsicHeight={true}
          //
          naturalSlideWidth={20}
          naturalSlideHeight={25}
          totalSlides={SldierImages.length}
          visibleSlides={visibleSlides}
          // orientation="vertical"
          step={3}
          dragStep={3}
          isPlaying={true}
          interval={7000}
          lockOnWindowScroll={true}
          // infinite={true}

          // currentSlide={1}
          // children={''}
        >
          <Slider className="slider ">
            {SldierImages.map((el) => {
              // if (index < 5) {
              return (
                <Slide
                  innerClassName="inner-----------"
                  className="slide__item"
                  index={el.id}
                >
                  <ImageWithZoom src={el.url} alt="gallery" className="image" />
                  {/* <img src={el.url} alt="gallery" /> */}
                </Slide>
                // }
              );
            })}
          </Slider>
          <div className="slider__dot-group">
            {/* {[
              ...Array(Math.ceil(SldierImages.length / visibleSlides)).keys(),
            ].map((el, index) => { */}
            {[...Array(SldierImages.length).keys()].map((el, index) => {
              // console.log(Math.ceil(SldierImages.length / visibleSlides));

              if (el === 0 || el % visibleSlides === 0) {
                // if (Math.ceil(SldierImages.length / visibleSlides) <= index) {
                // console.log(el + 3);

                return (
                  <Dot
                    key={index}
                    // slide={el + 4}
                    slide={el}
                    className="slider__dot-group__dot"
                  ></Dot>
                );
              }
            })}
          </div>
          <ButtonBack ref={(e) => console.log(e)}>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default SliderComponent;
