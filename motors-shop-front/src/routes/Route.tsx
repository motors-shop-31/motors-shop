import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      {/* <Route path="*" element={<Navigate to="/Login" replace />} /> */}
    </Routes>
  );
};
