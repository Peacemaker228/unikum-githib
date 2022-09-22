import React, { FC } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  DotGroup,
  Image,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { productCard } from 'src/client/__mocks__/Catalog/CatalogCard';
import CatalogCard from '../CatalogCard/CatalogCard';
import { SldierImages } from './../../__mocks__/SliderComponent/SliderImages';

const SliderComponent: FC = () => {
  return (
    <div>
      <div className="">
        <CarouselProvider
          // isIntrinsicHeight={true}
          //
          naturalSlideWidth={20}
          naturalSlideHeight={25}
          totalSlides={10}
          visibleSlides={3}
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
          <Slider>
            {SldierImages.map((el) => {
              // if (index < 5) {
              return (
                <Slide index={el.id}>
                  <Image src={el.url} alt="gallery" hasMasterSpinner={false} />
                  {/* <img src={el.url} alt="gallery" /> */}
                </Slide>
                // }
              );
            })}
          </Slider>
          {/* <Dot slide={5} /> */}
          <DotGroup
            dotNumbers={true}
            showAsSelectedForCurrentSlideOnly={true}
          />
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default SliderComponent;
