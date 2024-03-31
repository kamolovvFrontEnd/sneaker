import logo from "../assets/logo.svg";
import faq from "../assetsFooter/faq.svg";
import pdf from "../assetsFooter/pdf.svg";
import youtube from "../assetsFooter/youtube.svg";
import video from "../assetsFooter/video.svg";
import grayLogo from "../assetsFooter/logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="mt-20">
      <div className="flex justify-between max-md:justify-center max-md:flex-wrap max-[400px]:hidden">
        <div className="flex">
          <img src={logo} alt="logo" className="max-sm:w-1/4" />
          <div className="grid mx-4">
            <a href="#" className="links text-xs">
              8 800 841-95-95
            </a>
            <p className="text-gray-500 text-xs m-0 mt-2">Служба поддержки</p>
          </div>
          <div className="grid">
            <a href="#" className="font-bold text-black no-underline text-xs">
              support@sport.ru
            </a>
            <p className="text-gray-500 text-xs m-0 mt-2">Служба поддержки</p>
          </div>
        </div>
        <div className="flex max-md:mt-6">
          <a href="#" className="links">
            Вакансии
          </a>
          <a href="#" className="links">
            Блог
          </a>
          <a href="#" className="links">
            Акции
          </a>
          <button className="cart-button mt-auto">Предложить идею</button>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex justify-between max-[400px]:flex-col">
        <div className="grid p-0 m-0 min-[400px]:w-1/4 max-[400px]:text-center">
          <h5>Женщинам</h5>
          <a href="#" className="footer-links">
            Одежда
          </a>
          <a href="#" className="footer-links">
            Обувь
          </a>
          <a href="#" className="footer-links">
            Аксуссуары
          </a>
          <a href="#" className="footer-links">
            Белье
          </a>
          <a href="#" className="footer-links">
            Bra fitting
          </a>
        </div>
        <div className="grid p-0 m-0 min-[400px]:w-1/4 max-[400px]:text-center">
          <h5>Мужчинам</h5>
          <a href="#" className="footer-links">
            Одежда
          </a>
          <a href="#" className="footer-links">
            Обувь
          </a>
          <a href="#" className="footer-links">
            Аксуссуары
          </a>
          <a href="#" className="footer-links">
            Белье
          </a>
        </div>
        <div className="grid p-0 m-0 min-[400px]:w-1/4 max-[400px]:text-center">
          <h5>Детям</h5>
          <a href="#" className="footer-links">
            Одежда
          </a>
          <a href="#" className="footer-links">
            Обувь
          </a>
          <a href="#" className="footer-links">
            Аксуссуары
          </a>
          <a href="#" className="footer-links">
            Белье
          </a>
          <a href="#" className="footer-links">
            Игрушки
          </a>
          <a href="#" className="footer-links">
            Малыши
          </a>
        </div>
        <div className="grid p-0 m-0 min-[400px]:w-1/4 max-[400px]:text-center">
          <h5>Виды спорта</h5>
          <a href="#" className="footer-links">
            Велоспорт
          </a>
          <a href="#" className="footer-links">
            Туризм
          </a>
          <a href="#" className="footer-links">
            Тренажеры и фитнес
          </a>
          <a href="#" className="footer-links">
            Командные виды спорта
          </a>
          <a href="#" className="footer-links">
            Самокаты
          </a>
        </div>
      </div>
      <hr className="my-8" />
      <ul className="flex justify-center flex-wrap">
        <li className="m-0">
          <img src={pdf} alt="pdf" className="float-start mt-1" />
          <a href="#" className="about">
            PDF презентация
          </a>
        </li>
        <li className="m-0">
          <img src={video} alt="video" className="float-start mt-1.5 me-1" />
          <a href="#" className="about">
            Видео инструкция
          </a>
        </li>
        <li className="m-0">
          <img src={faq} alt="faq" className="float-start mt-1" />
          <a href="#" className="about">
            FAQ
          </a>
        </li>
        <li className="m-0">
          <img src={youtube} alt="youtube" className="float-start mt-1.5" />
          <a href="#" className="about">
            Мы на YouTube
          </a>
        </li>
        <li className="m-0">
          <a href="#" className="about">
            Политика конфиденциальности
          </a>
        </li>
        <li className="m-0">
          <a href="#" className="about">
            Лицензионное соглашение
          </a>
        </li>
      </ul>
      <p className="text-xs text-center text-gray-400 my-10">
        Настоящая Политика обработки персональных данных разработана в
        соответствии с Конституцией Российской Федерации, Трудовым кодексом
        Российской Федерации, Гражданским кодексом Российской Федерации,
        Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации,
        информационных технологиях и о защите информации",
      </p>
      <div className="flex justify-center">
        <img src={grayLogo} alt="logo" />
        <h4 className="text-gray-400 m-0 ms-6">Разработка платформы</h4>
      </div>
    </footer>
  );
}

export default Footer;
