import React from "react";
import "./CardArticle.scss";


const CardArticle = ({ Image, children }) => {
  return (
    <>
      <div className="card">
        <div className="card__wrapper">
          <div className="content__card">
            <div className="preview__image">
              <img src={Image} alt="" />
            </div>
            <div className="content__text">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardArticle;
