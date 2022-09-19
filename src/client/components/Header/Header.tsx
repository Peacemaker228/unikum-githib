import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeaderData } from 'src/client/__mocks__/Header/Header';
import classNames from 'classnames';

const Header = () => {
  const [isShadow, setIsShadow] = useState(false);
  const router = useRouter();

  const routerNavigate = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    setIsShadow(window.scrollY > 0);

    window.onscroll = () => {
      if (window.scrollY > 0) {
        return setIsShadow(true);
      }

      setIsShadow(false);
    };
  }, []);

  console.log(router.pathname);

  return (
    <header className={`header ${isShadow ? 'header_shadow' : ''}`}>
      <div className="header__bg">
        <div className="header__container">
          <div className="header__container_item">
            <div className="header__item">
              <a
                href="https://yandex.ru/maps/?um=constructor%3Abb6af8b9371d1773ca08fe8f5cbdfe18760593d4291de4c00a143b0c55b97303&source=constructorLink"
                className=""
              >
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

                <span className="header__address">
                  Рязанская ул., 19А. Пермь, Россия
                </span>
              </a>
            </div>
            <Link href="/contacts">
              <a href="/about" className="header__link">
                О компании
              </a>
            </Link>
            <Link href="/test">
              <a href="/test" className="header__link">
                Оплата и доставка
              </a>
            </Link>
          </div>
          <div className="header__container_item">
            <a href="mailto:perm@ms666.ru" className="header__email">
              perm@ms666.ru
            </a>
          </div>
        </div>
      </div>
      <div className="header__nav">
        <Link href="/">
          <svg
            width="52"
            height="64"
            viewBox="0 0 52 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.912659 23.5747V25.4949C1.21187 26.0089 1.27035 26.9442 2.16549 27.7984L6.70679 32.1449C6.96893 32.3951 7.35581 32.8128 7.62354 32.9969C7.82632 32.8199 8.26938 32.0483 8.45975 31.7688C8.73269 31.3679 9.00619 30.9546 9.25604 30.5533L15.6687 20.7494C16.6134 19.3781 17.9586 17.1196 18.8692 15.9022C19.4489 15.1273 20.1451 14.5462 21.014 13.9979C24.7933 11.6132 30.1091 12.6367 32.2421 16.5712C33.3108 18.5426 33.4467 20.9362 32.5816 23.1251C32.1514 24.2134 30.2463 26.8979 29.4916 28.0759C29.0738 28.728 28.3476 30.026 27.7244 30.4026C26.3744 31.2184 23.9627 30.1139 24.9846 28.0249C25.4832 27.0058 28.1575 23.3025 28.948 21.871C30.0693 19.8403 29.0253 17.5368 27.1145 16.6748C26.1141 16.2236 24.725 16.1895 23.6942 16.6146C22.757 17.0012 22.1389 17.8256 21.6251 18.6529C20.1735 20.9906 10.5904 35.4002 10.4551 35.7C10.652 35.9591 11.0839 36.323 11.348 36.5751C13.2075 38.3501 22.1621 47.0154 22.9597 47.582C23.2463 47.7855 23.6807 48.0226 24.0955 48.1742C24.5228 48.3303 25.1842 48.3934 25.4865 48.5117H26.4506C27.0063 48.2943 27.4761 48.4697 28.7182 47.7527C29.4758 47.3153 32.6628 44.1409 33.4079 43.4297L48.7741 28.7624C49.6086 27.9659 50.3396 27.3887 50.7671 26.2339C50.8917 25.8972 50.9601 25.3182 51.0874 25.043V23.9803C50.9149 23.6248 50.8638 23.0233 50.6792 22.6194C50.1152 21.3854 49.1519 20.6678 48.1156 19.6785L44.3766 16.1257C44.0682 16.4387 43.8012 16.9292 43.5575 17.3166C43.3028 17.7217 43.0399 18.1221 42.7617 18.5327L37.9626 25.8654C36.9035 27.5201 35.8178 29.094 34.7821 30.7327C33.6981 32.4478 32.8378 33.9956 31.0106 35.0955C26.9234 37.5557 22.0948 36.4853 19.7903 32.5875C18.734 30.8009 18.5778 28.1083 19.3983 26.0451C19.8399 24.9347 21.7415 22.208 22.4993 21.0434C22.7858 20.6032 23.0102 20.2737 23.2985 19.8316C23.5986 19.3715 23.7979 19.0214 24.2188 18.7345C25.2417 18.0372 26.5477 18.5775 27.0321 19.3304C27.7007 20.3692 26.8076 21.4791 26.3287 22.184C25.7751 22.999 25.2673 23.8205 24.7116 24.651C24.451 25.0403 24.1948 25.4716 23.9245 25.8776C23.003 27.2621 22.1071 28.4339 22.8377 30.2164C23.2631 31.2544 23.8297 31.9133 24.7347 32.3595C25.7248 32.8478 27.1754 32.9656 28.2424 32.5147C29.2941 32.0704 29.7431 31.4107 30.3222 30.5457C33.5428 25.735 36.7032 20.6598 39.921 15.8814C40.1908 15.4807 40.4623 15.072 40.7183 14.6677C40.9867 14.2436 41.3099 13.8104 41.5379 13.4293C41.3011 13.0829 40.2258 12.1478 39.8365 11.7762C39.2358 11.2029 38.6811 10.6733 38.0804 10.0999C35.2197 7.36939 32.2058 4.42497 29.3263 1.75346C28.5002 0.987026 27.3846 0.836548 26.9748 0.617676H24.9625C24.6479 0.785697 24.1872 0.84206 23.8354 1.00451C22.6333 1.55966 22.2863 2.05371 21.3518 2.94579L6.33047 17.2838C5.62806 17.9543 2.32381 21.0252 1.85107 21.6288C1.12028 22.562 1.15934 23.1522 0.912659 23.5747Z"
              fill="#057FC7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.76149 63.3827C3.54485 63.3827 2.59918 63.0663 1.92458 62.4335C1.24999 61.8007 0.912659 60.9037 0.912659 59.7424V55.4097H3.22895V59.6754C3.22895 60.926 3.74758 61.5513 4.78489 61.5513C5.81433 61.5513 6.32904 60.926 6.32904 59.6754V55.4097H8.61031V59.7424C8.61031 60.9037 8.27292 61.8007 7.59839 62.4335C6.92373 63.0663 5.97812 63.3827 4.76149 63.3827ZM17.9691 55.4097V63.2263H16.0622L12.4473 59.0612V63.2263H10.1779V55.4097H12.0847L15.6996 59.5748V55.4097H17.9691ZM19.6068 55.4097H21.9232V63.2263H19.6068V55.4097ZM26.7312 60.39L25.8655 61.2722V63.2263H23.5726V55.4097H25.8655V58.6592L29.0358 55.4097H31.5861L28.2403 58.8714L31.7615 63.2263H29.071L26.7312 60.39ZM36.1485 63.3827C34.9318 63.3827 33.9862 63.0663 33.3116 62.4335C32.637 61.8007 32.2997 60.9037 32.2997 59.7424V55.4097H34.6159V59.6754C34.6159 60.926 35.1346 61.5513 36.1719 61.5513C37.2013 61.5513 37.716 60.926 37.716 59.6754V55.4097H39.9973V59.7424C39.9973 60.9037 39.6599 61.8007 38.9854 62.4335C38.3107 63.0663 37.3651 63.3827 36.1485 63.3827ZM48.9583 63.2263L48.9349 59.0835L46.8292 62.4558H45.7997L43.7057 59.1952V63.2263H41.5649V55.4097H43.4717L46.3495 59.921L49.1572 55.4097H51.064L51.0874 63.2263H48.9583Z"
              fill="#057FC7"
            />
          </svg>
        </Link>
        <nav className="nav">
          <ul className="nav__list">
            {HeaderData.map((el) => {
              return (
                <li
                  className={classNames(
                    'nav__list_item',
                    router.pathname.includes(el.path) ? 'nav__list_active' : '',
                  )}
                  key={el.id}
                >
                  <Link href={el.path}>
                    <a>{el.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <a href="tel:+7 (922) 640-16-66" className="header__nav_phone">
          +7 (922) 640-16-66
        </a>

        <div className="header__nav_item">
          <Link href="/profile">
            <div className="header__icons">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0001 22C10.4882 22.0043 8.99532 21.6622 7.6361 21C7.13865 20.758 6.66203 20.4754 6.2111 20.155L6.0741 20.055C4.83392 19.1396 3.81997 17.9522 3.1101 16.584C2.37584 15.1679 1.99501 13.5952 2.00005 12C2.00005 6.47715 6.47725 2 12.0001 2C17.5229 2 22.0001 6.47715 22.0001 12C22.0051 13.5944 21.6247 15.1664 20.8911 16.582C20.1822 17.9494 19.1697 19.1364 17.9311 20.052C17.4639 20.394 16.968 20.6951 16.4491 20.952L16.3691 20.992C15.009 21.6577 13.5144 22.0026 12.0001 22ZM12.0001 17C10.5016 16.9971 9.12776 17.834 8.4431 19.167C10.6845 20.2772 13.3157 20.2772 15.5571 19.167V19.162C14.8716 17.8305 13.4977 16.9954 12.0001 17ZM12.0001 15C14.1662 15.0028 16.1635 16.1701 17.2291 18.056L17.2441 18.043L17.2581 18.031L17.2411 18.046L17.2311 18.054C19.7601 15.8691 20.6644 12.3423 19.4987 9.21011C18.3331 6.07788 15.3432 4.00032 12.0011 4.00032C8.65901 4.00032 5.66909 6.07788 4.50345 9.21011C3.33781 12.3423 4.2421 15.8691 6.7711 18.054C7.83736 16.169 9.83446 15.0026 12.0001 15ZM12.0001 14C9.79096 14 8.0001 12.2091 8.0001 10C8.0001 7.79086 9.79096 6 12.0001 6C14.2092 6 16.0001 7.79086 16.0001 10C16.0001 11.0609 15.5787 12.0783 14.8285 12.8284C14.0784 13.5786 13.061 14 12.0001 14ZM12.0001 8C10.8955 8 10.0001 8.89543 10.0001 10C10.0001 11.1046 10.8955 12 12.0001 12C13.1047 12 14.0001 11.1046 14.0001 10C14.0001 8.89543 13.1047 8 12.0001 8Z"
                  fill="#2E3A59"
                ></path>
              </svg>

              <p className="header__icons_text">Профиль</p>
            </div>
          </Link>
          <Link href="/basket">
            <div className="header__icons">
              <svg
                fill="none"
                height="27"
                viewBox="0 0 30 27"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.39999 1.70001H6.60001"
                  stroke="#4F4F4F"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
                <path
                  d="M6.60001 1.70001L11 18.9"
                  stroke="#4F4F4F"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
                <path
                  d="M11.8 18.9H28.3"
                  stroke="#4F4F4F"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
                <path
                  d="M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z"
                  stroke="#4F4F4F"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
                <path
                  d="M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z"
                  stroke="#4F4F4F"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
                <path
                  d="M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z"
                  stroke="#4F4F4F"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
              </svg>

              <p className="header__icons_text">Корзина</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
