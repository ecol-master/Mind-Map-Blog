import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="line"></div>
        <div className="footer__wrapper">
          <div className="footer__logo">
            <svg width="35" height="35" viewBox="0 0 66 69" fill="" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M32.8214 0L0 71H66L32.8214 0ZM14.0075 62.0606L15.2344 59.4371L17.9365 53.4851L21.516 45.7133L32.8214 21.4501L46.6115 50.9147C47.1717 52.1145 47.4145 53.4325 47.3176 54.7477C47.2207 56.063 46.7873 57.3335 46.0571 58.4427C45.3269 59.5519 44.3232 60.4644 43.1381 61.0965C41.9529 61.7286 40.6243 62.0601 39.2739 62.0606H14.0075Z"
                fill="#5F4AF0"
              />
              <path
                d="M33 52C37.4183 52 41 48.4183 41 44C41 39.5817 37.4183 36 33 36C28.5817 36 25 39.5817 25 44C25 48.4183 28.5817 52 33 52Z"
                fill="#5F4AF0"
              />
            </svg>
            <a href="/">Blog Md</a>
          </div>
          <div className="footer__menu">
            <ul className="footer__list">
              <li>
                Go to <a href="/mindmap">Mind Map</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
