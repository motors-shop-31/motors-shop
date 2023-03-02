import { Route, Routes } from "react-router-dom";

import { ProductPage } from "../pages/ProductPage";
import { Dashboard } from "../pages/dashboard/dashboard";
import { SellerAd } from "../pages/sellerAd/SellerAd";
import { SellerUserAd } from "../pages/sellerUserAd/SellerUserAd";
import ModalFormEdit from "../components/ModalEdit";


export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ModalFormEdit />} />

      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/seller/:id" element={<SellerUserAd />} />
      <Route path="/MyAds" element={<SellerAd />} />
      {/* <Route path="*" element={<Navigate to="/Login" replace />} /> */}
    </Routes>
  );
};
