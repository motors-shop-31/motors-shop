import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { ProductPage } from "../pages/ProductPage";

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/product" element={<ProductPage />} />
      {/* <Route path="*" element={<Navigate to="/Login" replace />} /> */}
    </Routes>
  );
};
