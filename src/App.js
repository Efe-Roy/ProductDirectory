import React from "react";
import "./App.css";
import FooterComp from "./components/FooterComp";
import TopCompany from "./components/TopCompany";
import CategoryPage from "./pages/CategoryPage";
import JumbotronPage from "./pages/JumbotronPage";
import LikePromoPage from "./pages/LikePromoPage";
import NavbarPage from "./pages/NavbarPage";

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <NavbarPage />
        <JumbotronPage />
        <CategoryPage />
        <LikePromoPage />
        <TopCompany />
        <FooterComp />
      </div>
    </React.Fragment>
  );
}

export default App;
