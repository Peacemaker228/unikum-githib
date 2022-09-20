import React from 'react';
import Gallery from 'src/client/components/Gallery/Gallery';
import Order from 'src/client/components/Order/Order';
import PriceTabs from 'src/client/components/PriceTabs/PriceTabs';
import Subtitle from 'src/client/components/Subtitle/Subtitle';

const PriceListPage = () => {
  return (
    <div className="price">
      <section className="wrapper">
        <div className="wrapper__container">
          <Subtitle subtitle="Цены" />

          <PriceTabs />
        </div>
      </section>
      <Order />
      <Gallery />
    </div>
  );
};

export default PriceListPage;
