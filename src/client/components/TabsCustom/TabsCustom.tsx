import React, { FC } from 'react';
import classNames from 'classnames';
import { tabsHeader } from 'src/client/__mocks__/Tabs/Tabs';
import { ITabsArr } from 'src/client/types/TabsCustom/ITabsCustom';

type ITubsContent = {
  content: string[];
  active: number;
  setActive: any;
  header?: ITabsArr[];
  price?: boolean;
};

const TabsCustom: FC<ITubsContent> = ({
  content,
  active,
  setActive,
  header = tabsHeader,
}) => {
  return (
    <div className="tabs">
      <div className="tabs__container">
        <ul className="tabs__container_list">
          {header.map((el) => {
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
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default TabsCustom;
