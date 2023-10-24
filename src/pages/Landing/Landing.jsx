import React from "react";
import { Link } from "react-router-dom";
import CardArticle from "./components/CardArticle/CardArticle";

import TinkoffBackendDay from "./img/tinkoff_senior_backend_day.jpg";
import RNDEnginerr from "./img/rnd_engineer_3.jpg";
import AreaCirlesImg from "./img/area_main_4.svg";
import AreaCirles2Img from "./img/are_main_3.svg";
import SHADImg from "./img/Shad_img.jpg";

import "./Landing.scss";

export const Landing = () => {
  return (
    <>
      <div className="page__content__landing">
        <div className="main__content__project">
          <div className="background_elems">
            <div className="top">
              <img src={AreaCirlesImg} alt="" />
            </div>
            <div className="bottom">
              <img src={AreaCirles2Img} alt="" />
            </div>
          </div>
          <div className="main__content__wrapper">
            <div className="texts">
              <h2>A Site For Your Personal Development</h2>
              <p>Here you can find an articles with helpfull information for styding and education.</p>
            </div>
          </div>
        </div>

        <div className="landing__cards__articles">
          <CardArticle Image={TinkoffBackendDay}>
            <h3>
              <Link to="/mindmap/it-events-nn">IT Events In NN</Link>
            </h3>

            <p className="card__main__text">
              Здесь собрана информация обо всех it-мероприятиях Нижнего Новгорода. Ни один евент не пройдет мимо вас
            </p>
            <p className="author">Tartakovsky Artem</p>
            <div className="card__footer">
              <div className="tags">
                <div>IT</div>
                <div>Tinkoff</div>
              </div>
              <button className="button__read__more">
                <Link to="/mindmap/it-events-nn">Read More</Link>
              </button>
            </div>
          </CardArticle>
          <hr></hr>
          <CardArticle Image={RNDEnginerr}>
            <h3>
              <Link to="/mindmap/dad-i-want-to-be-r&d-engineer">Dad, I Want To Be An R&D Engineer</Link>
            </h3>

            <p className="card__main__text">
              Лучший гайд на свете по становлению R&D инженером от лучшего пупсика на свете.
            </p>
            <p className="author">Bartia Timur</p>
            <div className="card__footer">
              <div className="tags">
                <div>R&D</div>
                <div>Machine Learning</div>
                <div>Yandex</div>
              </div>
              <button className="button__read__more">
                <Link to="/mindmap/dad-i-want-to-be-r&d-engineer">Read More</Link>
              </button>
            </div>
          </CardArticle>
          <hr></hr>
          <CardArticle Image={SHADImg}>
            <h3>
              <Link to="/mindmap/how-to-learn-shad">How to learn Shad???</Link>
            </h3>

            <p className="card__main__text">
              Тут как бы все то, что позволит вам не упустить драгоценный билет в счастливую жизнь с единорожками и пони
              ^-^
            </p>
            <p className="author">Lobanov Eduard</p>
            <div className="card__footer">
              <div className="tags">
                <div>Yandex</div>
                <div>Data Science</div>
                <div>SHAD</div>
              </div>
              <button className="button__read__more">
                <Link to="/mindmap/how-to-learn-shad">Read More</Link>
              </button>
            </div>
          </CardArticle>
        </div>
      </div>
    </>
  );
};
