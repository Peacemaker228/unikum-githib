import React, { FC, SetStateAction, Dispatch, useRef } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useOnClickOutside } from 'src/client/hooks/DropDown/useOnClickOutside';
import { FooterInfo, FooterMenu } from 'src/client/__mocks__/Footer/Footer';
import FooterMobile from './FooterMobile';

interface IBurger {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const BurgerMenu: FC<IBurger> = ({ menuOpen, setMenuOpen }) => {
  const router = useRouter();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const node = useRef();
  useOnClickOutside(node, () => setMenuOpen(false));

  return (
    <div
      ref={node}
      className={classNames('burger-menu', menuOpen && 'burger-menu_active')}
    >
      <div className="burger-menu__wrapper">
        <div className="burger-menu__container">
          <Link href="/">
            <div
              onClick={() => closeMenu()}
              className="burger-menu__container_headline"
            >
              <h2 className="headline__title">Unikum</h2>
              <span className="headline__text">Пошив уникальной одежды</span>
            </div>
          </Link>
          <div
            className={classNames(
              'menuBtn',
              menuOpen && 'menuActive',
              // 'menuActive',
            )}
            onClick={() => setMenuOpen(false)}
          >
            <span className="menuSpan"></span>
            <span className="menuSpan"></span>
            <span className="menuSpan"></span>
          </div>
        </div>
      </div>
      <nav className="burger-menu__content">
        <ul className="burger-menu__content_list">
          {FooterMenu.map((el) => {
            return (
              <li
                onClick={() => closeMenu()}
                key={el.id}
                className={classNames(
                  'burger-menu__list_item',
                  router.pathname.includes(el.path)
                    ? 'burger-menu__link_active'
                    : '',
                )}
              >
                <Link href={el.path}>
                  <a className="burger-menu__item_link">{el.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="burger-menu__content_list">
          {FooterInfo.map((el) => {
            return (
              <li
                onClick={() => closeMenu()}
                key={el.id}
                className="burger-menu__list_item"
              >
                <Link href={el.path}>
                  <a className="burger-menu__item_link">{el.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <FooterMobile isFooter={false} />
      </nav>
    </div>
  );
};

export default BurgerMenu;
