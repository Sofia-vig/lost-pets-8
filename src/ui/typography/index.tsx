import React from "react";
import css from "./index.css";

export const Title = ({ children }) => {
  return <h1 className={css.title}>{children}</h1>;
};

export const Text = ({ children, onClick = (any) => {} }) => {
  return (
    <p className={css.text} onClick={onClick}>
      {children}
    </p>
  );
};

export const TextMap = ({ children }) => {
  return <p className={css.textMap}>{children}</p>;
};
