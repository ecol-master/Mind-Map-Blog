import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <>
      <div className="main__layout">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default MainLayout;
