import Link from 'next/link';
import React, { FC } from 'react';
import { FooterData } from './../../__mocks__/Footer/Footer';

const Footer: FC = () => {
  return (
    <footer>
      <section className="wrapper">
        <div className="footer__container wrapper__container">
          <ul className="footer__container_menu">
            {FooterData.map((el) => {
              return (
                <li className="footer__menu_list" key={el.id}>
                  <Link href={el.path}>
                    <a className="footer__menu_link">{el.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="footer__container_contacts">
            <li className="footer__contacts_list">
              <Link href="/">
                <div className="footer__contacts_container">
                  <img
                    src="../assets/images/contacts/inst.svg"
                    alt="instagram"
                  />
                  <span className="footer__contacts_link">Мы в инстаграм</span>
                </div>
              </Link>
            </li>
            <li className="footer__contacts_list">
              <Link href="/">
                <div className="footer__contacts_container">
                  <img
                    src="../assets/images/contacts/youtube.svg"
                    alt="instagram"
                  />
                  <span className="footer__contacts_link">
                    Канал на YouTube
                  </span>
                </div>
              </Link>
            </li>
            <li className="footer__contacts_list">
              <Link href="/">
                <div className="footer__contacts_container">
                  <img src="../assets/images/contacts/vk.svg" alt="instagram" />
                  <span className="footer__contacts_link">Группа в ВК</span>
                </div>
              </Link>
            </li>
            <li className="footer__contacts_list">
              <Link href="/">
                <div className="footer__contacts_container">
                  <img src="../assets/images/contacts/vk.svg" alt="instagram" />
                  <span className="footer__contacts_link">Группа в ВК</span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="footer__container_connect">
            <a
              className=""
              href="https://yandex.ru/maps/?um=constructor%3Aad167fb0861e3342e3dc4c5497e353c0b515be732d4b1d3efbc959372e267087&amp;source=constructorStatic"
              target="_blank"
            >
              <img
                src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Aad167fb0861e3342e3dc4c5497e353c0b515be732d4b1d3efbc959372e267087&amp;width=309&amp;height=164&amp;lang=ru_RU"
                alt=""
                style={{ border: 0 }}
              />
            </a>
            <div className="footer__connect_item">
              <img src="../../assets/images/footer/tel.svg" alt="tel" />
              <a href="tel:+7 (922) 640-16-66" className="footer__item_tel">
                +7 (922) 640-16-66
              </a>
            </div>
            <div className="footer__connect_item">
              <img src="../../assets/images/footer/email.svg" alt="email" />
              <a href="mailto:perm@ms666.ru" className="footer__item_email">
                perm@ms666.ru
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper">
        <div className="footer__info wrapper__container">
          <span className="footer__info_text">
            Вся информация на сайте носит информационный характер и не является
            публичной офертой.
          </span>
                    <span className="footer__info_text">
            Пошив уникальной одежды - ИП  Тураев А. А.
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
