import React from "react";
import "./ArticleStyles.scss";

const Article = ({ children }) => {
  return (
    <div className="article">
      <div className="article__wrapper">{children}</div>
    </div>
  );
};
export default Article;
