import logo from './img/icons/logo.svg';
import logoFacebook from './img/icons/facebook.svg';
import logoInstagram from './img/icons/instagram.svg';
import logoTwitter from './img/icons/twitter.svg';
import logoYoutube from './img/icons/youtube.svg';
import card from './img/card.png';





import './App.scss';

function App() {
  return (
    <div className="App">
  <header className="main-nav">
    <nav className="container main-nav__container">
      <a href="#" className="main-nav__logo ">
        <img src={logo} alt="Логотип ЛигаБанк" className="main-nav__logo-img" height={25} width={149} />
      </a>
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <a href="#" className="main-nav__link">Услуги</a>
        </li>
        <li className="main-nav__item">
          <a href="#" className="main-nav__link">Рассчитать кредит</a>
        </li>
        <li className="main-nav__item">
          <a href="#" className="main-nav__link main-nav__link--active">Конвертер валют</a>
        </li>
        <li className="main-nav__item">
          <a href="#" className="main-nav__link">Контакты</a>
        </li>
        <li className="main-nav__item">
          <a href="#" className="main-nav__link">Задать вопрос</a>
        </li>
      </ul>
      <a href="#" className="main-nav__login">Войти в Интернет-банк</a>
    </nav>
  </header>
  <main>
    <section className="promo">
      <h2 className="visually-hidden">кредит от Лига Банк</h2>
      <div className="promo__cintainer container">
        <div className="promo__info">
          <p className="promo__title">Лига Банк</p>
          <p className="promo__subtitle">Кредиты на любой случай</p>
          <a href="#" className="promo__link">Рассчитать кредит</a>
         </div>
        <div className="promo__wrapper">
          <img src={card} alt="Кредитная карта" className="promo__img" height={286} width={444} />
        </div>
      </div>
    </section>
    <section className="converter">
      <div className="converter__container container">
      <h1 className="converter__title">Конвертер валют</h1>
        <form action="POST" className="converter__form converter-form">
        <div className="converter-form__wrapper">
          <div className="converter-form__collumn">
          <label htmlFor="sell" className="converter-form__label">У меня есть</label>
          <input type="text" className="converter-form__input" id="sell" />
          <select className="converter-form__select" name="currency-sell" id="currency">
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBR">GBR</option>
            <option value="CNY">CNY</option>
          </select>
          </div>

          <svg className="converter-form__img" width={56} height={36} viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 1L3 9L19 17" stroke="#1F1E25" strokeWidth={2} />
            <path d="M3 9C9.66667 9 33.3241 9 44.6667 9L53 9" stroke="#1F1E25" strokeWidth={2} />
            <path d="M37 35L53 27L37 19" stroke="#1F1E25" strokeWidth={2} />
            <path d="M53 27C46.3333 27 22.6759 27 11.3333 27H3" stroke="#1F1E25" strokeWidth={2} />
          </svg>
          <div className="converter-form__collumn">
          <label htmlFor="buy" className="converter-form__label">Хочу приобрести</label>
          <input type="text" className="converter-form__input" id="buy" />
          <select className="converter-form__select" name="currency-buy" id="currency">
          <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBR">GBR</option>
            <option value="CNY">CNY</option>
          </select>
          </div>
          </div>
          <div className="converter-form__row">
          <input type="date" className="converter-form__input converter-form__input--date" />
          <button type="submit" className="converter-form__submit">Сохранить результат</button>
        </div>
        </form>
      </div>
    </section>
    <section className="history">
      <div className="history__container container">
        <h2 className="history__title">История конвертаций</h2>
        <ul className="history__list">
          <li className="history__item">
            <p className="history__date">25.11.2020</p>
            <p className="history__sell">1000 RUB</p>
            <svg className="history__logo" width={41} height={18} viewBox="0 0 41 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.2 17L40 9L27.2 1" stroke="#1F1E25" />
              <path d="M40 9C34.6667 9 15.7407 9 6.66667 9H0" stroke="#1F1E25" />
            </svg>
            <p className="history__buy">13,1234 USD</p>
          </li>
          <li className="history__item">
            <p className="history__date">25.11.2020</p>
            <p className="history__sell">1000 RUB</p>
            <svg className="history__logo" width={41} height={18} viewBox="0 0 41 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.2 17L40 9L27.2 1" stroke="#1F1E25" />
              <path d="M40 9C34.6667 9 15.7407 9 6.66667 9H0" stroke="#1F1E25" />
            </svg>
            <p className="history__buy">13,1234 USD</p>
          </li>
          <li className="history__item">
            <p className="history__date">25.11.2020</p>
            <p className="history__sell">1000 RUB</p>
            <svg className="history__logo" width={41} height={18} viewBox="0 0 41 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.2 17L40 9L27.2 1" stroke="#1F1E25" />
              <path d="M40 9C34.6667 9 15.7407 9 6.66667 9H0" stroke="#1F1E25" />
            </svg>
            <p className="history__buy">13,1234 USD</p>
          </li>
          <li className="history__item">
            <p className="history__date">25.11.2020</p>
            <p className="history__sell">1000 RUB</p>
            <svg className="history__logo" width={41} height={18} viewBox="0 0 41 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.2 17L40 9L27.2 1" stroke="#1F1E25" />
              <path d="M40 9C34.6667 9 15.7407 9 6.66667 9H0" stroke="#1F1E25" />
            </svg>
            <p className="history__buy">13,1234 USD</p>
          </li>
          <li className="history__item">
            <p className="history__date">25.11.2020</p>
            <p className="history__sell">1000 RUB</p>
            <svg className="history__logo" width={41} height={18} viewBox="0 0 41 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.2 17L40 9L27.2 1" stroke="#1F1E25" />
              <path d="M40 9C34.6667 9 15.7407 9 6.66667 9H0" stroke="#1F1E25" />
            </svg>
            <p className="history__buy">13,1234 USD</p>
          </li>
          <li className="history__item">
            <p className="history__date">25.11.2020</p>
            <p className="history__sell">1000 RUB</p>
            <svg className="history__logo" width={41} height={18} viewBox="0 0 41 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.2 17L40 9L27.2 1" stroke="#1F1E25" />
              <path d="M40 9C34.6667 9 15.7407 9 6.66667 9H0" stroke="#1F1E25" />
            </svg>
            <p className="history__buy">13,1234 USD</p>
          </li>
          <li className="history__item">
            <p className="history__date">25.11.2020</p>
            <p className="history__sell">1000 RUB</p>
            <svg className="history__logo" width={41} height={18} viewBox="0 0 41 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.2 17L40 9L27.2 1" stroke="#1F1E25" />
              <path d="M40 9C34.6667 9 15.7407 9 6.66667 9H0" stroke="#1F1E25" />
            </svg>
            <p className="history__buy">13,1234 USD</p>
          </li>
          <li className="history__item">
            <p className="history__date">25.11.2020</p>
            <p className="history__sell">1000 RUB</p>
            <svg className="history__logo" width={41} height={18} viewBox="0 0 41 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.2 17L40 9L27.2 1" stroke="#1F1E25" />
              <path d="M40 9C34.6667 9 15.7407 9 6.66667 9H0" stroke="#1F1E25" />
            </svg>
            <p className="history__buy">13,1234 USD</p>
          </li>
          <li className="history__item">
            <p className="history__date">25.11.2020</p>
            <p className="history__sell">1000 RUB</p>
            <svg className="history__logo" width={41} height={18} viewBox="0 0 41 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.2 17L40 9L27.2 1" stroke="#1F1E25" />
              <path d="M40 9C34.6667 9 15.7407 9 6.66667 9H0" stroke="#1F1E25" />
            </svg>
            <p className="history__buy">13,1234 USD</p>
          </li>
          <li className="history__item">
            <p className="history__date">25.11.2020</p>
            <p className="history__sell">1000 RUB</p>
            <svg className="history__logo" width={41} height={18} viewBox="0 0 41 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.2 17L40 9L27.2 1" stroke="#1F1E25" />
              <path d="M40 9C34.6667 9 15.7407 9 6.66667 9H0" stroke="#1F1E25" />
            </svg>
            <p className="history__buy">13,1234 USD</p>
          </li>
        </ul>
        <button className="history__clear">Очитстить историю</button>
      </div>
    </section>
  </main>
  <footer className="footer">
    <div className="container footer__container">
      <div className="footer__wrapper">
        <a href="#" className="footer__logo logo">
          <img src={logo} alt="Логотип ЛигаБанк" className="logo__img" height={25} width={149} />
        </a>
        <p className="footer__text">150015, г. Москва, ул. Московская, д. 32</p>
        <p className="footer__text"> Генеральная лицензия Банка России №1050</p>
        <p className="footer__text"> Ⓒ Лига Банк, 2019</p>
      </div>
      <div className="footer__wrapper">
        <ul className="footer__nav footer-nav">
          <li className="footer-nav__item">
            <a href="#" className="footer-nav__link">Услуги</a>
          </li>  <li className="footer-nav__item">
            <a href="#" className="footer-nav__link">Рассчитать кредит</a>
          </li>
          <li className="footer-nav__item">
            <a href="#" className="footer-nav__link">Контакты</a>
          </li>
          <li className="footer-nav__item">
            <a href="#" className="footer-nav__link">Задать вопрос</a>
          </li>
        </ul>
      </div>
      <div className="footer-wrapper contact-info">
        <svg className="contact-info__logo" width={10} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.8373 0H1.1627C0.523313 0 0 0.485943 0 1.08069V14.9189C0 15.5136 0.523313 16 1.1627 16H8.8373C9.47669 16 10 15.5145 10 14.9193V1.08069C10 0.485943 9.47669 0 8.8373 0ZM3.77238 0.778971H6.22762C6.30533 0.778971 6.36829 0.837486 6.36829 0.910171C6.36829 0.9824 6.30533 1.04091 6.22762 1.04091H3.77238C3.69467 1.04091 3.63171 0.9824 3.63171 0.910171C3.63171 0.837486 3.69467 0.778971 3.77238 0.778971ZM5 15.4597C4.67883 15.4597 4.41865 15.2178 4.41865 14.9189C4.41865 14.6199 4.67883 14.3785 5 14.3785C5.32117 14.3785 5.58135 14.6199 5.58135 14.9189C5.58135 15.2178 5.32117 15.4597 5 15.4597ZM9.19093 14H0.809069V1.71383H9.19093V14Z" fill="#1F1E25" />
        </svg>
        <p className="contact-info__title">*0904</p>
        <p className="contact-info__text">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
      </div>
      <div className="footer-wrapper contact-info">
        <svg className="contact-info__logo" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.9991 11.9282V15.0712C15.9992 15.2962 15.914 15.5129 15.7605 15.6775C15.6071 15.8422 15.397 15.9425 15.1725 15.9582C14.7841 15.9849 14.4668 15.9991 14.2214 15.9991C6.36676 15.9991 0 9.63235 0 1.77768C0 1.53236 0.0133326 1.21504 0.0408866 0.826621C0.056639 0.602139 0.156952 0.391988 0.321585 0.238572C0.486218 0.0851569 0.702915 -0.000101713 0.927949 2.28058e-07H4.07089C4.18114 -0.000111402 4.28749 0.0407613 4.36929 0.114678C4.4511 0.188596 4.5025 0.29028 4.51353 0.399978C4.53397 0.604411 4.55264 0.767069 4.57041 0.890617C4.74706 2.12337 5.10905 3.32233 5.64413 4.44687C5.72857 4.62463 5.67346 4.83706 5.51347 4.95084L3.59536 6.32143C4.76814 9.05412 6.94588 11.2319 9.67857 12.4046L11.0474 10.4901C11.1033 10.4119 11.185 10.3558 11.278 10.3316C11.3711 10.3074 11.4697 10.3166 11.5567 10.3576C12.6811 10.8917 13.8797 11.2528 15.1121 11.4287C15.2356 11.4465 15.3983 11.466 15.6009 11.4856C15.7105 11.4968 15.8119 11.5483 15.8857 11.6301C15.9594 11.7119 16.0001 11.8181 16 11.9282H15.9991Z" fill="#1F1E25" />
        </svg>
        <p className="contact-info__title">8 800 111 22 33</p>
        <p className="contact-info__text">Бесплатный для всех городов России</p>
      </div>
      <div className="footer-wrapper socials">
        <ul className="socials__list">
          <li className="socials__item">
            <a href="#" className="socials__link">
              <img className="socials__img" src={logoFacebook} alt="Facebook" width={9} height={16} />
              <span className="visually-hidden">Facebook</span>
            </a>
          </li>
          <li className="socials__item">
            <a href="#" className="socials__link">
              <img className="socials__img" src={logoInstagram} alt="Instagram" width={16} height={16} />
              <span className="visually-hidden">Instagram</span>
            </a>
          </li>
          <li className="socials__item">
            <a href="#" className="socials__link">
              <img className="socials__img" src={logoTwitter} alt="Twitter" width={16} height={13} />
              <span className="visually-hidden">Twitter</span>
            </a>
          </li>
          <li className="socials__item">
            <a href="#" className="socials__link">
              <img className="socials__img" src={logoYoutube} alt="Youtube" width={16} height={13} />
              <span className="visually-hidden">Youtube</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
