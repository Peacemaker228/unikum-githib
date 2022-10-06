import React, { FC, SetStateAction, Dispatch } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface IBurger {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const BurgerMenu: FC<IBurger> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="burger-menu">
      <div className="burger-menu__container">
        <div className="burger-menu__container_headline">
          <h2 className='"burger-menu_title'>Unikum</h2>
          <span className="burger-menu_text">Пошив уникальной одежды</span>
        </div>
        <div
          className={classNames('menuBtn', menuOpen && 'menuActive')}
          onClick={() => setMenuOpen(false)}
        >
          <span className="menuSpan"></span>
          <span className="menuSpan"></span>
          <span className="menuSpan"></span>
        </div>
      </div>
      <nav className="burger-menu__content">
        <ul className="burger-menu__content_list">
          <li className="burger-menu__list_item">
            <Link href={''}>
              <a className="burger-menu__item_link"></a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
