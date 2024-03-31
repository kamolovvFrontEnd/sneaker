import sneaker from "../assetsBody/sneaker.svg";
import sneaker2 from "../assetsBody/sneaker2.svg";
import sneaker3 from "../assetsBody/sneaker3.svg";
import sneaker4 from "../assetsBody/sneaker4.svg";
import sneaker5 from "../assetsBody/sneaker5.svg";
import arrow from "../assetsBody/arrow.svg";
import switchIcon from "../assetsBody/switch.svg";
import heart from "../assetsBody/heart.svg";
import "./Body.css";
import { useState } from "react";

function Cart() {
  const [count, setCount] = useState(1);

  return (
    <div className="w-full">
      <div className="text-xs">
        <a href="#" className="pages">
          Каталог
        </a>{" "}
        <span className="text-gray-500"> / </span>
        <a href="#" className="pages">
          Обувь
        </a>{" "}
        <span className="text-gray-500"> / </span>
        <a href="#" className="pages">
          Кроссовки
        </a>{" "}
        <span className="text-gray-500"> / </span>
        <a href="#" className="pages">
          Беговые
        </a>
      </div>
      <h2 className="uppercase">Кроссовки мужские Skechers Sunny Dale</h2>
      <div className="contents-center">
        <div className="min-[1100px]:float-start">
          <img src={sneaker} alt="sneaker" className="rounded-xl w-72" />
          <div className="mt-2 flex gap-4">
            <img src={arrow} alt="arrow" className="rounded w-6" />
            <img src={sneaker2} alt="sneaker2" className="w-10" />
            <img src={sneaker3} alt="sneaker3" className="w-10" />
            <img src={sneaker4} alt="sneaker3" className="w-10" />
            <img src={sneaker5} alt="sneaker5" className="w-10" />
            <img
              src={arrow}
              alt="arrow"
              className="rounded w-6"
              style={{ transform: "rotate(180deg)" }}
            />
          </div>
        </div>
        <div className="charakter">
          <div className="ms-8">
            <p className="text-red-600 mb-1">166 534.00 цена без скидки</p>
            <h2 className="relative mt-0">
              122 566 ₽{" "}
              <span className="ms-2 absolute top-2 text-xs bg-red-400 text-white px-2 pb-0.5 rounded">
                -15%
              </span>
              <div className="mt-3 relative h-8">
                <span className="twelve-things">12 штук ы уп.</span>
                <img
                  src={switchIcon}
                  alt="switch"
                  className="w-7 absolute top-3 mx-2"
                />
                <span className="text-xs ms-12">Заказ упаковкой</span>
              </div>
              <hr className="my-8" />
              <table className="text-xs w-full">
                <th className="w-full flex justify-between">
                  <td className="text-start">Завтра</td>
                  <td>7 шт.</td>
                  <td>7 шт.</td>
                </th>
                <tr className="w-full flex justify-between text-gray-400">
                  <td className="font-thin">Доставка</td>
                  <td className="font-thin">Тарасовка</td>
                  <td className="font-thin">Тарасовка</td>
                </tr>
              </table>
              <div className="mt-4 flex">
                <div className="counter me-4">
                  <button
                    className="border-none bg-inherit mx-1 text-3xl"
                    disabled={count === 1}
                    onClick={() => setCount(count - 1)}
                  >
                    -
                  </button>
                  <span className="my-4 mx-8">{count} штуки</span>
                  <button
                    className="border-none bg-inherit mx-1"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>
                <button className="button-heart-style mx-1 text-3xl">
                  <img src={heart} alt="heart" />
                </button>
              </div>
            </h2>
          </div>
          <hr className="m-16" />
          <div className="h-336">
            <h4 className="mt-0">Характеристики</h4>
            <div className="flex flex-col flex-wrap gap-5 h-336">
              <div className="grid">
                <span className="font-bold">ELC00696</span>
                <span className="text-gray-500 mt-2">Код поставщика</span>
              </div>
              <div className="grid">
                <span className="font-bold">ELC00696</span>
                <span className="text-gray-500 mt-2">Код РАЭК</span>
              </div>
              <div className="grid">
                <span className="font-bold">Electric used</span>
                <span className="text-gray-500 mt-2">Бренд</span>
              </div>
              <div className="grid">
                <span className="font-bold">ELC0200000696</span>
                <span className="text-gray-500 mt-2">Код производителя</span>
              </div>
              <div className="grid">
                <span className="font-bold">ELC0200000696</span>
                <span className="text-gray-500 mt-2">Артикул</span>
              </div>
              <div className="grid">
                <span className="font-bold">ELC00696</span>
                <span className="text-gray-500 mt-2">Код ETM</span>
              </div>
              <div className="grid">
                <span className="font-bold">ELC00696</span>
                <span className="text-gray-500 mt-2">Серия</span>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1>Описание товара</h1>
            <p>
              Создание приверженного покупателя специфицирует неопровержимый
              комплексный анализ ситуации. CTR существенно индуцирует из ряда
              вон выходящий SWOT-анализ. Воздействие на потребителя определяет
              возрастающий интеграл по поверхности, что известно даже
              школьникам. Отсюда естественно следует, что коммуникация
              уравновешивает косвенный фактор коммуникации. Поле направлений
              естественно допускает экспериментальный скачок функции, таким
              образом сбылась мечта идиота - утверждение полностью доказано.
              Арифметическая прогрессия притягивает линейно зависимый пул
              лояльных изданий.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
