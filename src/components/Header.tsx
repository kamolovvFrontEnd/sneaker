import logo from "../assets/logo.svg";
import menuLines from "../assets/menu-lines.svg";
import search from "../assets/search.svg";
import bell from "../assets/bell.svg";
import heart from "../assets/heart.svg";
import cart from "../assets/cart.svg";
import photo from "../assets/photo.svg";
import down from "../assets/down.svg";
import message from "../assets/message.svg";
import action from "../assets/action.svg";
import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className={`menu-sm ${show ? "hide" : ""}`}>
        <div className="flex justify-between">
          <img src={logo} alt="logo" className="my-6" />
          <button
            className="px-3 p-1 border border-red-600 text-red-600 w-12 h-8 bg-white mt-6 me-4"
            onClick={() => setShow(false)}
          >
            X
          </button>
        </div>
        <a href="#" className="link">
          Мои заказы
        </a>
        <a href="#" className="link">
          Сотрудники
        </a>
        <a href="#" className="link">
          Шаблоны заказов
        </a>
        <a href="#" className="link">
          Обращение
        </a>
        <button className="cart-button mt-auto">Предложить идею</button>
        <div className="flex">
          <button className="cart-button px-2 h-10">
            <img src={message} alt="message" className="my-auto" />
            <span className="font-bold my-auto">Ваш менеджер</span>
          </button>
          <button className="cart-button px-2 h-10">
            <img src={action} alt="action" className="my-auto" />
            <span className="font-bold my-auto">Акции</span>
          </button>
          <button className="cart-button px-2 h-10">
            <span className="font-bold my-auto">Блог</span>
          </button>
        </div>
        <div className="flex max-md:mt-6 mb-4">
          <a href="#" className="links">
            Вакансии
          </a>
          <a href="#" className="links">
            Блог
          </a>
          <a href="#" className="links">
            Акции
          </a>
        </div>
        <div className="flex mt-auto">
          <div className="grid me-4">
            <a href="#" className="link text-xs">
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
      </div>
      <div className="flex justify-around">
        <img
          src={logo}
          alt="logo"
          className="max-lg:w-1/6 max-[500px]:hidden"
        />
        <button className="menu-button max-xl:w-1/1 max-xl:p-3 max-[500px]:hidden">
          <img src={menuLines} alt="menu" />
          <span className="mt-1 me-1 font-bold max-lg:hidden">Меню</span>
        </button>
        <button
          className="menu-button p-3 min-[500px]:hidden"
          onClick={() => setShow(true)}
        >
          <img src={menuLines} alt="menu" />
        </button>
        <div className="search-div w-2/5 flex justify-between max-lg:w-1/4">
          <input
            type="search"
            className="search"
            placeholder="Название запроса"
          />
          <img src={search} alt="search" />
        </div>
        <div className="flex">
          <img src={bell} alt="bell" />
          <hr className="opacity-30 mx-2.5" />
          <img src={heart} alt="heart" />
        </div>
        <Link to={`/cart`} className="cart-button max-md:px-0">
          <img src={cart} alt="cart" className="me-1 w-6" />
          <span className="mb-auto mt-auto text-xs font-bold max-md:hidden">
            144 235₽
          </span>
        </Link>
        <div className="flex">
          <img src={photo} alt="photo" className="my-auto" />
          <span className="my-auto ms-3 max-md:hidden">Ермаков Е.</span>
          <img src={down} alt="down" className="my-auto max-md:hidden" />
        </div>
      </div>
      <hr className="my-4 opacity-30" />
      <div className="flex justify-between max-[500px]:hidden">
        <div>
          <a href="#" className="link">
            Мои заказы
          </a>
          <a href="#" className="link">
            Сотрудники
          </a>
          <a href="#" className="link">
            Шаблоны заказов
          </a>
          <a href="#" className="link">
            Обращение
          </a>
        </div>
        <div className="flex">
          <button className="cart-button">
            <img src={message} alt="message" className="me-1" />
            <span className="font-bold">Ваш менеджер</span>
          </button>
          <button className="cart-button">
            <img src={action} alt="action" className="me-1" />
            <span className="font-bold">Акции</span>
          </button>
          <button className="cart-button">
            <span className="font-bold">Блог</span>
          </button>
        </div>
      </div>
      <hr className="my-6 max-[500px]:hidden" />
    </div>
  );
}

export default Header;
