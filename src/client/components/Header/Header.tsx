import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

  return (
    <header className={`header ${isShadow ? 'header_shadow' : ''}`}>
      <div className="header__bg">
        <div className="header__container">
          <div className="header__container_item">
            <div className="header__item">
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
            </div>
            <Link href="/about">
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
            <img src="../../assets/images/icons/vk.svg" alt="vk" />
            <img src="../../assets/images/icons/instagram.svg" alt="inst" />
            <img src="../../assets/images/icons/telegram.svg" alt="tg" />
            <img src="../../assets/images/icons/whatsapp.svg" alt="wa" />
          </div>
          <div className="header__container_item">
            <img
              src="../../assets/images/icons/message-plus.svg"
              alt="message"
            />

            <a href="mailto:perm@ms666.ru" className="header__email">
              perm@ms666.ru
            </a>
          </div>
        </div>
      </div>
      <div className="header__nav">
        <svg
          width="52"
          height="64"
          viewBox="0 0 52 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => routerNavigate('/')}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.912659 23.5747V25.4949C1.21187 26.0089 1.27035 26.9442 2.16549 27.7984L6.70679 32.1449C6.96893 32.3951 7.35581 32.8128 7.62354 32.9969C7.82632 32.8199 8.26938 32.0483 8.45975 31.7688C8.73269 31.3679 9.00619 30.9546 9.25604 30.5533L15.6687 20.7494C16.6134 19.3781 17.9586 17.1196 18.8692 15.9022C19.4489 15.1273 20.1451 14.5462 21.014 13.9979C24.7933 11.6132 30.1091 12.6367 32.2421 16.5712C33.3108 18.5426 33.4467 20.9362 32.5816 23.1251C32.1514 24.2134 30.2463 26.8979 29.4916 28.0759C29.0738 28.728 28.3476 30.026 27.7244 30.4026C26.3744 31.2184 23.9627 30.1139 24.9846 28.0249C25.4832 27.0058 28.1575 23.3025 28.948 21.871C30.0693 19.8403 29.0253 17.5368 27.1145 16.6748C26.1141 16.2236 24.725 16.1895 23.6942 16.6146C22.757 17.0012 22.1389 17.8256 21.6251 18.6529C20.1735 20.9906 10.5904 35.4002 10.4551 35.7C10.652 35.9591 11.0839 36.323 11.348 36.5751C13.2075 38.3501 22.1621 47.0154 22.9597 47.582C23.2463 47.7855 23.6807 48.0226 24.0955 48.1742C24.5228 48.3303 25.1842 48.3934 25.4865 48.5117H26.4506C27.0063 48.2943 27.4761 48.4697 28.7182 47.7527C29.4758 47.3153 32.6628 44.1409 33.4079 43.4297L48.7741 28.7624C49.6086 27.9659 50.3396 27.3887 50.7671 26.2339C50.8917 25.8972 50.9601 25.3182 51.0874 25.043V23.9803C50.9149 23.6248 50.8638 23.0233 50.6792 22.6194C50.1152 21.3854 49.1519 20.6678 48.1156 19.6785L44.3766 16.1257C44.0682 16.4387 43.8012 16.9292 43.5575 17.3166C43.3028 17.7217 43.0399 18.1221 42.7617 18.5327L37.9626 25.8654C36.9035 27.5201 35.8178 29.094 34.7821 30.7327C33.6981 32.4478 32.8378 33.9956 31.0106 35.0955C26.9234 37.5557 22.0948 36.4853 19.7903 32.5875C18.734 30.8009 18.5778 28.1083 19.3983 26.0451C19.8399 24.9347 21.7415 22.208 22.4993 21.0434C22.7858 20.6032 23.0102 20.2737 23.2985 19.8316C23.5986 19.3715 23.7979 19.0214 24.2188 18.7345C25.2417 18.0372 26.5477 18.5775 27.0321 19.3304C27.7007 20.3692 26.8076 21.4791 26.3287 22.184C25.7751 22.999 25.2673 23.8205 24.7116 24.651C24.451 25.0403 24.1948 25.4716 23.9245 25.8776C23.003 27.2621 22.1071 28.4339 22.8377 30.2164C23.2631 31.2544 23.8297 31.9133 24.7347 32.3595C25.7248 32.8478 27.1754 32.9656 28.2424 32.5147C29.2941 32.0704 29.7431 31.4107 30.3222 30.5457C33.5428 25.735 36.7032 20.6598 39.921 15.8814C40.1908 15.4807 40.4623 15.072 40.7183 14.6677C40.9867 14.2436 41.3099 13.8104 41.5379 13.4293C41.3011 13.0829 40.2258 12.1478 39.8365 11.7762C39.2358 11.2029 38.6811 10.6733 38.0804 10.0999C35.2197 7.36939 32.2058 4.42497 29.3263 1.75346C28.5002 0.987026 27.3846 0.836548 26.9748 0.617676H24.9625C24.6479 0.785697 24.1872 0.84206 23.8354 1.00451C22.6333 1.55966 22.2863 2.05371 21.3518 2.94579L6.33047 17.2838C5.62806 17.9543 2.32381 21.0252 1.85107 21.6288C1.12028 22.562 1.15934 23.1522 0.912659 23.5747Z"
            fill="#057FC7"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.76149 63.3827C3.54485 63.3827 2.59918 63.0663 1.92458 62.4335C1.24999 61.8007 0.912659 60.9037 0.912659 59.7424V55.4097H3.22895V59.6754C3.22895 60.926 3.74758 61.5513 4.78489 61.5513C5.81433 61.5513 6.32904 60.926 6.32904 59.6754V55.4097H8.61031V59.7424C8.61031 60.9037 8.27292 61.8007 7.59839 62.4335C6.92373 63.0663 5.97812 63.3827 4.76149 63.3827ZM17.9691 55.4097V63.2263H16.0622L12.4473 59.0612V63.2263H10.1779V55.4097H12.0847L15.6996 59.5748V55.4097H17.9691ZM19.6068 55.4097H21.9232V63.2263H19.6068V55.4097ZM26.7312 60.39L25.8655 61.2722V63.2263H23.5726V55.4097H25.8655V58.6592L29.0358 55.4097H31.5861L28.2403 58.8714L31.7615 63.2263H29.071L26.7312 60.39ZM36.1485 63.3827C34.9318 63.3827 33.9862 63.0663 33.3116 62.4335C32.637 61.8007 32.2997 60.9037 32.2997 59.7424V55.4097H34.6159V59.6754C34.6159 60.926 35.1346 61.5513 36.1719 61.5513C37.2013 61.5513 37.716 60.926 37.716 59.6754V55.4097H39.9973V59.7424C39.9973 60.9037 39.6599 61.8007 38.9854 62.4335C38.3107 63.0663 37.3651 63.3827 36.1485 63.3827ZM48.9583 63.2263L48.9349 59.0835L46.8292 62.4558H45.7997L43.7057 59.1952V63.2263H41.5649V55.4097H43.4717L46.3495 59.921L49.1572 55.4097H51.064L51.0874 63.2263H48.9583Z"
            fill="#057FC7"
          />
        </svg>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list_item">
              <Link href="/posts">
                <a>Каталог</a>
              </Link>
            </li>
            <li className="nav__list_item">
              <Link href="/price">
                <a>Цены</a>
              </Link>
            </li>
            <li className="nav__list_item">
              <Link href="/service">
                <a>Услуги</a>
              </Link>
            </li>
            <li className="nav__list_item">
              <Link href="/gallery">
                <a>Галерея</a>
              </Link>
            </li>
            <li className="nav__list_item">
              <Link href="/contacts">
                <a>Контакты</a>
              </Link>
            </li>
            <li className="nav__list_item">
              <Link href="/design">
                <a>Свой дизайн</a>
              </Link>
            </li>
          </ul>
        </nav>
        <a href="tel:+7 (922) 640-16-66" className="header__nav_phone">
          +7 (922) 640-16-66
        </a>

        <div className="header__nav_item">
          <div className="header__icons">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_696_144)">
                <path
                  d="M16.2259 9.92492L16.2259 9.92494C15.1491 11.0019 13.8436 11.5426 12.3219 11.5426C10.8005 11.5426 9.49524 11.0018 8.41818 9.92508C7.34118 8.84826 6.80035 7.54301 6.80035 6.02109C6.80035 4.49957 7.34117 3.1943 8.41801 2.11746C9.49483 1.04065 10.7999 0.5 12.3219 0.5C13.8434 0.5 15.1486 1.04062 16.2257 2.11724C17.3027 3.19447 17.8434 4.49975 17.8434 6.02109C17.8434 7.54304 17.3027 8.8481 16.2259 9.92492Z"
                  stroke="black"
                />
                <path
                  d="M22.3591 19.2589L22.3591 19.2585C22.3267 18.7922 22.261 18.2789 22.1632 17.7326L22.3591 19.2589ZM22.3591 19.2589C22.3916 19.7227 22.4082 20.2079 22.4084 20.7006L22.3591 19.2589ZM21.7906 16.2085L21.7906 16.2084C21.6399 15.7376 21.4343 15.2707 21.1792 14.8219C20.9186 14.3634 20.6165 13.9713 20.2837 13.6531L20.2836 13.653C19.9463 13.3302 19.5271 13.0646 19.0311 12.868L21.7906 16.2085ZM21.7906 16.2085C21.9395 16.6735 22.0651 17.1863 22.1631 17.7324L21.7906 16.2085ZM9.27834 13.5704L9.278 13.5702C8.89771 13.3272 8.55312 13.1051 8.25387 12.9101L8.25377 12.9101C7.78123 12.6021 7.64356 12.5762 7.54852 12.5762C6.95507 12.5762 6.41098 12.6766 5.92735 12.8681L5.92727 12.8682C5.43169 13.0644 5.01228 13.3299 4.6745 13.6531L9.27834 13.5704ZM9.27834 13.5704C9.65415 13.8101 10.1412 14.0214 10.7116 14.2056C11.294 14.3938 11.8884 14.4906 12.479 14.4906C13.0695 14.4906 13.6641 14.3939 14.2459 14.2056L9.27834 13.5704ZM3.77931 14.8217L3.77929 14.8218C3.52429 15.2706 3.31872 15.7374 3.16789 16.2085L3.77931 14.8217ZM3.77931 14.8217C4.03936 14.3638 4.34163 13.9718 4.6744 13.6532L3.77931 14.8217ZM2.59956 19.259L2.59955 19.2591C2.5672 19.7254 2.55078 20.2103 2.55078 20.7008C2.55078 21.892 2.92507 22.8093 3.62837 23.4792C4.32811 24.1451 5.26629 24.5003 6.46076 24.5003H18.4984C19.6929 24.5003 20.6307 24.1453 21.3306 23.4792L21.3306 23.4792C22.034 22.81 22.4084 21.8927 22.4084 20.7008L2.59956 19.259ZM2.59956 19.259C2.63188 18.7915 2.6976 18.2781 2.79545 17.7326L2.59956 19.259ZM17.4095 12.5764C18.0028 12.5764 18.547 12.6766 19.0308 12.8679L16.4309 12.4914L16.7037 12.9104C16.7038 12.9103 16.7039 12.9103 16.704 12.9102C17.1771 12.6022 17.3145 12.5764 17.4095 12.5764ZM2.79546 17.7326C2.89349 17.1864 3.01909 16.6738 3.16785 16.2087L2.79546 17.7326Z"
                  stroke="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_696_144">
                  <rect width="25" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="header__icons_text">Профиль</p>
          </div>
          <div className="header__icons">
            <svg
              onClick={() => routerNavigate('/basket')}
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_696_134)">
                <path
                  d="M23.324 16.7458L23.3245 16.744L26.4886 5.67004L23.324 16.7458ZM23.324 16.7458C23.2893 16.8689 23.1764 16.9553 23.0451 16.9553H8.75391C8.04243 16.9553 7.46289 17.5333 7.46289 18.2463C7.46289 18.9593 8.04243 19.5373 8.75391 19.5373H23.0451C23.2062 19.5373 23.3361 19.6673 23.3361 19.8283C23.3361 19.9895 23.2063 20.1193 23.0451 20.1193H8.75391C7.72158 20.1193 6.88086 19.2786 6.88086 18.2463C6.88086 17.4802 7.34514 16.8188 8.01086 16.5293L8.38904 16.3649L8.29958 15.9623L5.44306 3.10833L5.35606 2.7168H4.95497H0.791016C0.629955 2.7168 0.5 2.58688 0.5 2.42578C0.5 2.26481 0.63004 2.13477 0.791016 2.13477H5.58984C5.72665 2.13477 5.84468 2.22961 5.87417 2.36262L5.87423 2.36286L6.43968 4.9073L6.52669 5.29883M23.324 16.7458L6.52669 5.29883M6.52669 5.29883H6.92777M6.52669 5.29883H6.92777M6.92777 5.29883H26.2092C26.3003 5.29883 26.3863 5.34134 26.4425 5.41509M6.92777 5.29883L26.4425 5.41509M26.4425 5.41509C26.4962 5.4866 26.5141 5.58012 26.4888 5.66959L26.4425 5.41509Z"
                  stroke="black"
                />
                <path
                  d="M10.3361 25.8652C9.30355 25.8652 8.46289 25.0247 8.46289 23.9922C8.46289 22.9599 9.30358 22.1191 10.3361 22.1191C11.3685 22.1191 12.2092 22.9599 12.2092 23.9922C12.2092 25.0247 11.3685 25.8652 10.3361 25.8652Z"
                  stroke="black"
                />
                <path
                  d="M21.4629 25.8652C20.4305 25.8652 19.5898 25.0247 19.5898 23.9922C19.5898 22.9599 20.4306 22.1191 21.4629 22.1191C22.4954 22.1191 23.3359 22.9598 23.3359 23.9922C23.3359 25.0247 22.4954 25.8652 21.4629 25.8652Z"
                  stroke="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_696_134">
                  <rect width="27" height="27" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="header__icons_text">Корзина</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
