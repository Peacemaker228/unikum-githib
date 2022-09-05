import { FC } from 'react';
import Card from 'src/client/components/Card/Card';
import Subtitle from 'src/client/components/Subtitle/Subtitle';
import { MainCards } from 'src/client/__moks__/Main/MainCards';

const Home: FC = () => {
  return (
    <div>
      <Subtitle subtitle="Наша продукция" />

      <div className="cards">
        {MainCards.map((el) => {
          return (
            <Card
              key={el.ID}
              ID={el.ID}
              type={el.type}
              img={el.img}
              categoryName={el.categoryName}
              subcategory={el.subcategory}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
