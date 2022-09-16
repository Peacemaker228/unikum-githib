import React from 'react';
import Gallery from 'src/client/components/Gallery/Gallery';
import Order from 'src/client/components/Order/Order';
import PriceTabs from 'src/client/components/PriceTabs/PriceTabs';

const PriceListPage = () => {
  return (
    <div>
      <section className="wrapper__container">
        <PriceTabs />
      </section>
      <Order />
      <Gallery />
    </div>
  );
};

export default PriceListPage;
