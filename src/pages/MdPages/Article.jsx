import React from "react";
import "./ArticleStyles.scss";

const Article = ({ articleName, children }) => {
  return (
    <div className="article">
      <div className="article__wrapper">
        <h1>{articleName}</h1>
        {children}
      </div>
    </div>
  );
};
export default Article;
