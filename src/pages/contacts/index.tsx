import React from 'react';
import Link from 'next/link';
import Footer from 'src/client/components/Footer/Footer';

const ContactsPage = () => {
  return (
    <div className="contacts">
      <section className="wrapper">
        <div className="wrapper__container contacts__container_main">
          <h2 className="main__title">Наши контакты</h2>
          <div className="contacts__container">
            <div className="contacts__container_item">
              <div className="contacts__address contacts__mt">
                <h3 className="contacts__main_title">Адрес</h3>
                <a
                  href="https://yandex.ru/maps/?um=constructor%3Abb6af8b9371d1773ca08fe8f5cbdfe18760593d4291de4c00a143b0c55b97303&source=constructorLink"
                  className="contacts__address_link"
                >
                  <span className="contacts__main_text">
                    Рязанская ул., 19А.
                  </span>
                  <span className="contacts__main_text">Пермь, Россия</span>
                </a>
              </div>
              <div className="contacts__email contacts__mt">
                <h3 className="contacts__main_title">Телефон и почта</h3>
                <a
                  className="contacts__main_text tel"
                  href="tel:+7(922)640-16-66"
                >
                  +7 (922) 640-16-66
                </a>
                <a
                  className="contacts__main_text"
                  href="mailto:perm@ms666.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  perm@ms666.ru
                </a>
              </div>
              <div className="contacts__requisites contacts__mt">
                <h3 className="contacts__main_title">Реквизиты</h3>
                <ul>
                  <li className="contacts__main_text">ИНН 7814228141</li>
                  <li className="contacts__main_text">ОГРН 1157847167950</li>
                  <li className="contacts__main_text">ОКПО 01272893</li>
                  <li className="contacts__main_text">
                    Банк: ФИЛИАЛ «САНКТ-ПЕТЕРБУРГСКИЙ»
                  </li>
                  <li className="contacts__main_text">
                    АО «АЛЬФА-БАНК» г. Санкт-Петербург
                  </li>
                  <li className="contacts__main_text">
                    Р/счет: 40702810432280001131
                  </li>
                  <li className="contacts__main_text">БИК: 044030786</li>
                  <li className="contacts__main_text">
                    К/счет: 30101810600000000786
                  </li>
                </ul>
              </div>
              <h3 className="contacts__main_title">Мы в социальных сетях</h3>
              <ul className="contacts__main_list">
                <li className="contacts__item">
                  <Link href="/">
                    <div className="contacts__item_social">
                      <img
                        src="../assets/images/contacts/inst.svg"
                        alt="instagram"
                      />
                      <span className="contacts__main_text">
                        Мы в инстаграм
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="contacts__item">
                  <Link href="/">
                    <div className="contacts__item_social">
                      <img
                        src="../assets/images/contacts/youtube.svg"
                        alt="instagram"
                      />
                      <span className="contacts__main_text">
                        Канал на YouTube
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="contacts__item">
                  <Link href="/">
                    <div className="contacts__item_social">
                      <img
                        src="../assets/images/contacts/vk.svg"
                        alt="instagram"
                      />
                      <span className="contacts__main_text">Группа в ВК</span>
                    </div>
                  </Link>
                </li>
                <li className="contacts__item">
                  <Link href="/">
                    <div className="contacts__item_social">
                      <img
                        src="../assets/images/contacts/vk.svg"
                        alt="instagram"
                      />
                      <span className="contacts__main_text">Группа в ВК</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="contacts__container_item">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Aad167fb0861e3342e3dc4c5497e353c0b515be732d4b1d3efbc959372e267087&amp;source=constructor"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;
