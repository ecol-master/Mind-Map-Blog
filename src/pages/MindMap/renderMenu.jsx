import React from "react";
import { Link } from "react-router-dom";

export const RenderKnowledgeMenu = () => {
  var menu = (
    <>
      <div className="knowledge__menu__block">
        <h3>Гайды по технологиям</h3>
        <ul>
          <li>
            <Link to="/mindmap/dad-i-want-to-be-r&d-engineer">Dad, I want to be an R&D engineer.</Link>
          </li>
          <li>
            <Link to="/mindmap/mom-i-want-to-be-ml-engineer">Mom, I want to be a ML engineer.</Link>
          </li>
          <li>
            <Link to="/mindmap/how-to-start-in-c">Как заботать программирование на С?</Link>
          </li>
          <li>
            <Link to="/mindmap/how-to-learn-shad">Как заботать ШАД???</Link>
          </li>
        </ul>
      </div>
      <div className="knowledge__menu__block">
        <h3>Полезные Ресурсы</h3>
        <ul>
          <li>
            <Link to="/mindmap/it-events-nn">IT Events in Nizhny Novgorod</Link>
          </li>
        </ul>
      </div>
      <div className="knowledge__menu__block">
        <h3>Матан</h3>
        <ul>
          <li>
            <Link to="/mindmap/algorithms">Алгоритмы</Link>
          </li>
          <li>
            <Link to="/mindmap/discrete-mathematics">Дискретная Математика</Link>
          </li>
          <li>
            <Link to="/mindmap/linear-algebra">Линейная Алгебра</Link>
          </li>
          <li>
            <Link to="/mindmap/mathematical-analysis">Мат Анализ</Link>
          </li>
        </ul>
      </div>

      <div className="knowledge__menu__block">
        <h3>Information Sources</h3>
        <ul>
          <li>
            <a href="https://www.visualcapitalist.com/">Vizual Capitalist</a>
          </li>
          <li>
            <a href="https://ourworldindata.org/">Our World in Data</a>
          </li>
        </ul>
      </div>
    </>
  );

  return menu;
};
