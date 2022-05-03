import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "components/layout";
import App from "pages/app";
import Report from "pages/report";
import Login from "pages/login";
import Password from "components/auth/password";
import ProfileEdit from "pages/profile-edit";
import NewPetPage from "pages/new-pet";
import MyPetsPage from "pages/my-pets";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/report" element={<Report />} />
        <Route path="/login">
          <Route index element={<Login />} />
          <Route path="password" element={<Password />} />
        </Route>
        <Route path="profile/info" element={<ProfileEdit />} />
        <Route path="pets/new" element={<NewPetPage />} />
        <Route path="me/pets" element={<MyPetsPage />} />
      </Route>
    </Routes>
  );
}

export { AppRoutes };
