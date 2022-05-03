import React from "react";
import css from "./index.css";
import Icon from "ui/icon";
import NavBurger from "ui/nav-burger";

export default function Header() {
  return (
    <div className={css.root}>
      <Icon />
      <NavBurger />
    </div>
  );
}
