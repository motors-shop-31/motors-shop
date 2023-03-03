import { Route, Routes } from "react-router-dom";

import { ProductPage } from "../pages/ProductPage";
import { Dashboard } from "../pages/dashboard/dashboard";
import { SellerAd } from "../pages/sellerAd/SellerAd";
import { SellerUserAd } from "../pages/sellerUserAd/SellerUserAd";
import { Login } from "../pages/login/login";
import { Cadastro } from "../pages/cadastro/cadastro";


export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/seller/:id" element={<SellerUserAd />} />
      <Route path="/MyAds" element={<SellerAd />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      {/* <Route path="*" element={<Navigate to="/Login" replace />} /> */}
    </Routes>
  );
};
