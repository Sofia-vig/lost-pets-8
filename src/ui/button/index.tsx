import React from "react";
import css from "./index.css";

export const PrimaryButton = ({
  children,
  onClick = (any) => any,
  type = "button",
}) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={onClick} type={type as any}>
        {children}
      </button>
    </div>
  );
};

export const SecondaryButton = ({
  children,
  onClick = (any) => any,
  type = "button",
}) => {
  return (
    <div className={css.container}>
      <button
        className={css.secondaryButton}
        onClick={onClick}
        type={type as any}
      >
        {children}
      </button>
    </div>
  );
};
