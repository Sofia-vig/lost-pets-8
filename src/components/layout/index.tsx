import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/header";
import { menuValue } from "hooks";
import Menu from "components/menu";

export default function Layout() {
  const menuOpen = menuValue();
  return !menuOpen ? (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  ) : (
    <Menu />
  );
}
