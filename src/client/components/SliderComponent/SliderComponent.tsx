import React, { Component, FC, useContext, useState, useEffect } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  DotGroup,
  Image,
  ImageProps,
  ImageWithZoom,
  ImageWithZoomProps,
  CarouselContext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { productCard } from 'src/client/__mocks__/Catalog/CatalogCard';
import CatalogCard from '../CatalogCard/CatalogCard';
import { SldierImages } from './../../__mocks__/SliderComponent/SliderImages';
import { ISliderImages } from 'dist/shared/types/client/Slider/SliderImages';

interface ISlider {
  data?: ISliderImages[];
  visibleSlides?: number;
}

const SliderComponent: FC<ISlider> = ({
  data = SldierImages,
  visibleSlides = 3,
}) => {
  // const visibleSlides = 3;
  // const carouselContext = useContext(CarouselContext);
  // const [currentSlide, setCurrentSlide] = useState(
  //   carouselContext.state.currentSlide,
  // );
  // console.log(currentSlide);
  // useEffect(() => {
  //   function onChange() {
  //     setCurrentSlide(carouselContext?.state?.currentSlide);
  //   }
  //   // carouselContext.subscribe(onChange);
  //   return () => carouselContext.unsubscribe(onChange);
  // }, [carouselContext]);
  const [selected, setSelected] = useState(data[0]?.url);
  return (
    <div>
      <div className="">
        <CarouselProvider
          // isIntrinsicHeight={true}
          naturalSlideWidth={20}
          naturalSlideHeight={25}
          totalSlides={data.length}
          visibleSlides={visibleSlides}
          // orientation="vertical"
          dragEnabled={false}
          touchEnabled={false}
          step={visibleSlides}
          dragStep={visibleSlides}
          isPlaying={true}
          interval={7000}
          lockOnWindowScroll={true}
          // infinite={true}

          // currentSlide={1}
          // children={''}
        >
          <Slider className="slider ">
            {data.map((el) => {
              return (
                <Slide
                  innerClassName="slide__inner"
                  className="slide__item"
                  index={el.id}
                >
                  <Image
                    onClick={() => setSelected(el.url)}
                    src={el.url}
                    alt="gallery"
                    className="image"
                    hasMasterSpinner={false}
                  />
                  {/* <ImageWithZoom
                    src={el.url}
                    alt="gallery"
                    className="image"
                    // hasMasterSpinner={false}
                  /> */}
                  {/* <img src={el.url} alt="gallery" /> */}
                </Slide>
                // }
              );
            })}
          </Slider>
          <img src={selected} alt="selected" />

          <div className="slider__dot-group">
            {[...Array(data.length).keys()].map((el, index) => {
              if (el === 0 || el % visibleSlides === 0) {
                return (
                  <Dot
                    key={index}
                    slide={el}
                    // slide={el + 4}
                    className="slider__dot-group__dot"
                  ></Dot>
                );
              }
            })}
          </div>
          <ButtonBack ref={(e: any) => console.log(e)}>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default SliderComponent;
