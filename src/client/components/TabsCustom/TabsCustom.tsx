import React, { FC } from 'react';
import { useState } from 'react';
import classNames from 'classnames';

type ITubsContent = {
  content: string[];
};

const TabsCustom: FC<ITubsContent> = ({ content }) => {
  const [active, setActive] = useState(1);

  type ITabsArr = {
    title: string;
    ID: number;
  };

  const tabsArr: ITabsArr[] = [
    {
      title: 'Характеристики товара',
      ID: 1,
    },
    {
      title: 'Таблица размеров',
      ID: 2,
    },
    {
      title: 'Стоимость печати',
      ID: 3,
    },
    {
      title: 'Способы нанесения принта',
      ID: 4,
    },
    {
      title: 'Оплата и доставка',
      ID: 5,
    },
  ];

  console.log(active);

  return (
    <div className="tabs">
      <div className="tabs__container">
        <ul className="tabs__container_list">
          {tabsArr.map((el) => {
            return (
              <li
                key={el.ID}
                onClick={() => setActive(el.ID)}
                className={classNames(
                  'tabs__item',
                  active === el.ID ? 'tabs__active' : '',
                )}
              >
                {el.title}
              </li>
            );
          })}
        </ul>
        {/* <h2>Основные характеристики товара</h2> */}
        <div className="tabs__container_content">
          {content.map((el, index) => {
            if (index + 1 === active) {
              return (
                <p className="tabs__content_text" key={index}>
                  {el}
                </p>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default TabsCustom;
