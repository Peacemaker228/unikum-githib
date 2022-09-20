import Link from 'next/link';
import React, { FC } from 'react';
import {
  FooterInfo,
  FooterMenu,
  FooterSocial,
} from './../../__mocks__/Footer/Footer';

const Footer: FC = () => {
  return (
    <footer>
      <section className="wrapper">
        <div className="footer__container wrapper__container">
          <div className="footer__container_connect">
            <div className="footer__connect_unikum">
              <h2 className="footer__title">Unikum</h2>
              <span className="footer__item_text">
                Unikum - Одежда, придуманная вами
              </span>
            </div>
            <div className="footer__connect_item">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_708_113" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.974 18.5464C13.0897 17.1027 17.9166 13.31 17.9166 8.75504C17.9166 4.38279 14.3722 0.838379 9.99992 0.838379C5.62766 0.838379 2.08325 4.38279 2.08325 8.75504C2.08325 13.31 6.91017 17.1027 9.02587 18.5464C9.61751 18.9501 10.3823 18.9501 10.974 18.5464ZM9.99992 11.255C11.3806 11.255 12.4999 10.1358 12.4999 8.75505C12.4999 7.37433 11.3806 6.25505 9.99992 6.25505C8.61921 6.25505 7.49992 7.37433 7.49992 8.75505C7.49992 10.1358 8.61921 11.255 9.99992 11.255Z"
                  />
                </mask>
                <path
                  d="M10.974 18.5464L11.5376 19.3724H11.5376L10.974 18.5464ZM9.02587 18.5464L8.46224 19.3724H8.46224L9.02587 18.5464ZM16.9166 8.75504C16.9166 10.6818 15.8879 12.5409 14.4829 14.1626C13.091 15.7691 11.4333 17.0223 10.4103 17.7204L11.5376 19.3724C12.6303 18.6268 14.4439 17.2618 15.9944 15.4723C17.5318 13.6979 18.9166 11.3832 18.9166 8.75504H16.9166ZM9.99992 1.83838C13.8199 1.83838 16.9166 4.93508 16.9166 8.75504H18.9166C18.9166 3.83051 14.9245 -0.161621 9.99992 -0.161621V1.83838ZM3.08325 8.75504C3.08325 4.93508 6.17995 1.83838 9.99992 1.83838V-0.161621C5.07538 -0.161621 1.08325 3.83051 1.08325 8.75504H3.08325ZM9.58951 17.7204C8.5665 17.0223 6.90881 15.7691 5.51696 14.1626C4.11189 12.5409 3.08325 10.6818 3.08325 8.75504H1.08325C1.08325 11.3832 2.46808 13.6979 4.00539 15.4723C5.55592 17.2618 7.36954 18.6268 8.46224 19.3724L9.58951 17.7204ZM10.4103 17.7204C10.1587 17.8921 9.84119 17.8921 9.58951 17.7204L8.46224 19.3724C9.39383 20.0081 10.606 20.0081 11.5376 19.3724L10.4103 17.7204ZM11.4999 8.75505C11.4999 9.58347 10.8283 10.255 9.99992 10.255V12.255C11.9329 12.255 13.4999 10.688 13.4999 8.75505H11.4999ZM9.99992 7.25505C10.8283 7.25505 11.4999 7.92662 11.4999 8.75505H13.4999C13.4999 6.82205 11.9329 5.25505 9.99992 5.25505V7.25505ZM8.49992 8.75505C8.49992 7.92662 9.17149 7.25505 9.99992 7.25505V5.25505C8.06692 5.25505 6.49992 6.82205 6.49992 8.75505H8.49992ZM9.99992 10.255C9.17149 10.255 8.49992 9.58347 8.49992 8.75505H6.49992C6.49992 10.688 8.06692 12.255 9.99992 12.255V10.255Z"
                  fill="#616161"
                  mask="url(#path-1-inside-1_708_113)"
                />
              </svg>
              <a href="mailto:perm@ms666.ru" className="footer__item_text">
                Рязанская ул., 19А. Пермь, Россия
              </a>
            </div>
            <div className="footer__connect_item">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4306 13.072L12.9151 13.8452C12.8122 13.9996 12.6762 14.1313 12.4968 14.1786C11.9094 14.3339 10.3498 14.404 7.97542 12.0296C5.60102 9.65517 5.6711 8.09559 5.82633 7.50815C5.87371 7.32881 6.00541 7.19272 6.15975 7.08983L6.933 6.57433C7.5087 6.19053 7.66427 5.4127 7.28047 4.837L5.82006 2.64639C5.48506 2.14389 4.83925 1.95191 4.28415 2.18981L3.62536 2.47215C3.1249 2.68663 2.71666 3.07156 2.47316 3.55856C2.26972 3.96543 2.11204 4.3939 2.09068 4.84829C2.02335 6.28027 2.33735 9.80824 6.26705 13.7379C10.1967 17.6676 13.7247 17.9816 15.1567 17.9143C15.6111 17.8929 16.0395 17.7352 16.4464 17.5318C16.9334 17.2883 17.3183 16.8801 17.5328 16.3796L17.8152 15.7208C18.0531 15.1657 17.8611 14.5199 17.3586 14.1849L15.168 12.7245C14.5923 12.3407 13.8144 12.4963 13.4306 13.072Z"
                  stroke="#616161"
                />
              </svg>
              <a href="tel:+7 (922) 640-16-66" className="footer__item_text">
                +7 (922) 640-16-66
              </a>
            </div>
            <div className="footer__connect_item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 20H4C2.89543 20 2 19.1046 2 18V5.913C2.04661 4.84255 2.92853 3.99899 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20ZM4 7.868V18H20V7.868L12 13.2L4 7.868ZM4.8 6L12 10.8L19.2 6H4.8Z"
                  fill="#2E3A59"
                ></path>
              </svg>
              <a href="mailto:perm@ms666.ru" className="footer__item_text">
                perm@ms666.ru
              </a>
            </div>
            <a href="www.unikum.ru" className="footer__item_text">
              www.unikum.ru
            </a>
          </div>
          <div className="footer__container_menu">
            <h2 className="footer__title">Меню</h2>
            <ul className="footer__container_list">
              {FooterMenu.map((el) => {
                return (
                  <li className="footer__menu_item" key={el.id}>
                    <Link href={el.path}>
                      <a className="footer__menu_link">{el.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer__container_menu">
            <h2 className="footer__title">Информация</h2>
            <ul className="footer__container_list">
              {FooterInfo.map((el) => {
                return (
                  <li className="footer__menu_item" key={el.id}>
                    <Link href={el.path}>
                      <a className="footer__menu_link">{el.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer__container_menu">
            <h2 className="footer__title">Социальные сети</h2>
            <ul className="footer__container_list">
              {FooterSocial.map((el) => {
                return (
                  <li className="footer__menu_item" key={el.id}>
                    <Link href={el.path}>
                      <a className="footer__menu_link">{el.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="footer__info wrapper__container">
          <span className="footer__info_text">
            Вся информация на сайте носит информационный характер и не является
            публичной офертой.
          </span>
          <span className="footer__info_text">
            Пошив уникальной одежды - ИП Тураев А. А.
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
