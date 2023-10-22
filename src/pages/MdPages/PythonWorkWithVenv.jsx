import React from "react";
import Article from "./Article";

export const PythonWorkWithVenv = () => {
  return (
    <Article>
      <p>
        <strong>Создание виртуального окружения</strong>
      </p>
      <pre>
        <code>
          <span class="hljs-attribute">python -m venv venv</span>
        </code>
      </pre>
      <p>
        <strong>Активация окружения</strong>
      </p>
      <pre>
        <code>
          venv<span class="hljs-symbol">\S</span>cripts<span class="hljs-symbol">\a</span>ctivate
        </code>
      </pre>
      <p>
        <strong>Узнать все установленные зависимости проекта</strong>
      </p>
      <pre>
        <code>
          <span class="hljs-attribute">pip freeze</span>
        </code>
      </pre>
      <p>
        <strong>Записать все зависимости в файл requirements.txt</strong>
      </p>
      <pre>
        <code>
          <span class="hljs-selector-tag">pip</span> <span class="hljs-selector-tag">freeze</span> &gt;{" "}
          <span class="hljs-selector-tag">requirements</span>
          <span class="hljs-selector-class">.txt</span>
        </code>
      </pre>
      <p>
        <em>Установить все зависимости из requirements.txt</em>
      </p>
      <pre>
        <code>
          pip <span class="hljs-keyword">install</span> -r requirements.txt
        </code>
      </pre>
    </Article>
  );
};
