import Link from 'next/link';
import React, { FC } from 'react';
import { FooterIcons } from 'src/client/__mocks__/Footer/Footer';

type IFooterMobile = {
  isFooter: boolean;
};

const FooterMobile: FC<IFooterMobile> = ({ isFooter }) => {
  return (
    <div className="footer-mobile">
      <div className="footer-mobile__container">
        <Link href="https://yandex.ru/maps/?um=constructor%3Aad167fb0861e3342e3dc4c5497e353c0b515be732d4b1d3efbc959372e267087&source=constructorLink">
          <div className="footer-mobile__container_address">
            <svg
              width="11"
              height="15"
              viewBox="0 0 11 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                width="11"
                height="15"
                transform="matrix(-1 0 0 1 11 0)"
                fill="url(#pattern0)"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_231_28"
                    transform="translate(-0.00239234) scale(0.0239234 0.0175439)"
                  />
                </pattern>
                <image
                  id="image0_231_28"
                  width="42"
                  height="57"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <a className="footer-mobile__address_text">
              Рязанская ул., 19А. Пермь, Россия
            </a>
          </div>
        </Link>
        <div className="footer-mobile__container_about">
          <Link href="tel:+7 (922) 640-16-66">
            <div className="footer-mobile__container_connect">
              <a className="footer-mobile__connect_text">+7 (922) 640-16-66</a>
            </div>
          </Link>
          <Link href="tel:+7 (922) 640-16-66">
            <div className="footer-mobile__container_connect">
              <a className="footer-mobile__connect_text">perm@ms666.ru</a>
            </div>
          </Link>
          {FooterIcons.map((el) => {
            return (
              <Link key={el.id} href={el.path}>
                <img src={el.source} alt={el.alt} />
              </Link>
            );
          })}
        </div>
      </div>
      <div
        style={{ display: isFooter ? 'block' : 'none' }}
        className="footer-mobile__info"
      >
        <h3 className="footer-mobile__info_text">
          Вся информация на сайте носит информационный характер и не является
          публичной офертой.
        </h3>
        <h3 className="footer-mobile__info_text">
          Пошив уникальной одежды - ИП ФИО
        </h3>
      </div>
    </div>
  );
};

export default FooterMobile;
