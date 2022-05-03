import React from "react";
import css from "./index.css";
import { menuState } from "hooks";

export default function NavBurger() {
  const setMenuOpen = menuState();

  const handleNavOpen = () => {
    setMenuOpen(true);
  };

  return (
    <div className={css.nav__burger} onClick={handleNavOpen}>
      <div className={css.first}></div>
      <div></div>
      <div></div>
    </div>
  );
}
