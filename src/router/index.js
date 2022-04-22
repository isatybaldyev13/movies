import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, MoviePage } from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/page/:page" element={<HomePage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="*" element={<p>Page Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};
