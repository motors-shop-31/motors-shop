import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/dashboard";
import { SellerAd } from "../pages/sellerAd/SellerAd";
import { SellerUserAd } from "../pages/sellerUserAd/SellerUserAd";

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/seller/:id" element={<SellerUserAd />} />
      <Route path="/MyAds" element={<SellerAd />} />
      {/* <Route path="*" element={<Navigate to="/Login" replace />} /> */}
    </Routes>
  );
};
