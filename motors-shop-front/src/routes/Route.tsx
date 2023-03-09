import { Navigate, Route, Routes } from "react-router-dom";

import { ProductPage } from "../pages/ProductPage";
import { Dashboard } from "../pages/dashboard/dashboard";
import { SellerAd } from "../pages/sellerAd/SellerAd";
import { SellerUserAd } from "../pages/sellerUserAd/SellerUserAd";
import ForgotCode from "../pages/forgotCode/forgotCode";
import ResetPassword from "../pages/resetPassword/resetPassword";
import { ForgotPassword } from "../pages/forgotPassword/forgotPassword";
import { Login } from "../pages/login/login";
import { Cadastro } from "../pages/register/register";

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/seller/:id" element={<SellerUserAd />} />
      <Route path="/MyAds" element={<SellerAd />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/forgotPassword/code" element={<ForgotCode />} />
      <Route path="/forgotPassword/resetPassword" element={<ResetPassword />} />
      <Route path="*" element={<Navigate to="/Dashboard" replace />} />
    </Routes>
  );
};
