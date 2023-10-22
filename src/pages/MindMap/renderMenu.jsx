import React from "react";
import { Link } from "react-router-dom";

export const RenderKnowledgeMenu = () => {
  var menu = (
    <>
      <div className="knowledge__menu__block">
        <h3>
          <Link to="">Полезные Ресурсы</Link>
        </h3>
      </div>
      <div className="knowledge__menu__block">
        <h3>
          <a href="">Programming</a>
        </h3>
        <ul>
          <li>
            <Link to="/mindmap/python-work-with-venv">Python</Link>
          </li>
          <li>
            <Link to="">Golang</Link>
          </li>
        </ul>
      </div>
      <div className="knowledge__menu__block">
        <h3>
          <a href="">Information Sources</a>
        </h3>
        <ul>
          <li>
            <a href="/">Vizual Capitalist</a>
          </li>
          <li>
            <a href="/">Our World in Data</a>
          </li>
        </ul>
      </div>
      <div className="knowledge__menu__block">
        <h3>
          <a href="">Machine Learning</a>
        </h3>
        <ul>
          <li>
            <a href="/"></a>
          </li>
          <li>
            <a href="/">Our World in Data</a>
          </li>
        </ul>
      </div>
    </>
  );

  return menu;
};
