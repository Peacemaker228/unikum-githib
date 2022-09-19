import { FC } from 'react';
import Card from 'src/client/components/Card/Card';
import Gallery from 'src/client/components/Gallery/Gallery';
import Hero from 'src/client/components/Hero/Hero';
import ServiceCard from 'src/client/components/ServiceCard/ServiceCard';
import Subtitle from 'src/client/components/Subtitle/Subtitle';
import { MainCards } from 'src/client/__mocks__/Main/MainCards';
import { ServiceCards } from 'src/client/__mocks__/Main/ServiceCards';

const Home: FC = () => {
  return (
    <div className="main">
      <section className="wrapper">
        <div className="wrapper__container">
          <Hero />
        </div>
      </section>

      <section className="wrapper">
        <div className="wrapper__container">
          <Subtitle subtitle="Наша продукция" />

          <div className="main__cards">
            {MainCards.map((el) => {
              return (
                <Card
                  key={el.id}
                  id={el.id}
                  type={el.type}
                  img={el.img}
                  categoryName={el.categoryName}
                  subcategory={el.subcategory}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="wrapper">
        <div className="wrapper__container">
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
      </section>

      <Gallery />
    </div>
  );
};

export default Home;
