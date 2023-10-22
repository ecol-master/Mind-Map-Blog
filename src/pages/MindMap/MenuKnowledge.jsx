import React from "react";
import { RenderKnowledgeMenu } from "./renderMenu";
import "./MenuKnowledge.scss";

export const MenuKnowledge = () => {
  return (
    <>
      <div className="page__content__knowledge  ">
        <div className="content__knowledge">
          <div className="knowledge__content__wrapper">
            <RenderKnowledgeMenu />
          </div>
        </div>
      </div>
    </>
  );
};
