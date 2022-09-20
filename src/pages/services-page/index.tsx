import React, { FC } from 'react';
import Gallery from 'src/client/components/Gallery/Gallery';
import ServiceCard from 'src/client/components/ServiceCard/ServiceCard';
import Subtitle from 'src/client/components/Subtitle/Subtitle';
import { ServiceCards } from 'src/client/__mocks__/Main/ServiceCards';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <section className="wrapper">
        <div className="services-page__container wrapper__container">
          <Subtitle subtitle="Услуги" />

          <div className="main__services">
            {ServiceCards.map((el) => {
              return (
                <ServiceCard
                  key={el.id}
                  id={el.id}
                  img={el.img}
                  name={el.name}
                  subname={el.subname}
                />
              );
            })}
          </div>
        </div>
        <Gallery />
      </section>
    </div>
  );
};

export default ServicesPage;
