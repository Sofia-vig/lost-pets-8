import React from "react";
import css from "./index.css";

export const InputText = ({
  label,
  name,
  required = false,
  defaultValue = "",
  placeholder = "",
}) => {
  return (
    <div className={css.item}>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        className={css.text}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </div>
  );
};

export const Textarea = ({ label, name, required = false }) => {
  return (
    <div className={css.item}>
      <label>{label}</label>
      <textarea
        name={name}
        className={css.textarea}
        required={required}
      ></textarea>
    </div>
  );
};

export const InputPassword = ({ required = false }) => {
  return (
    <div className={css.itemPassword}>
      <label>CONTRASEÑA</label>
      <input
        type="password"
        name="password"
        className={css.password}
        required={required}
      />

      <label>REPETIR CONTRASEÑA</label>
      <input
        type="password"
        name="password-verify"
        className={css.verify}
        required={required}
      />
    </div>
  );
};

export const InputMap = ({
  onChange,
  onKeyDown,
  value = "",
  placeholder = "",
}) => {
  return (
    <div className={css.item} style={{ marginTop: "80px" }}>
      <label>UBICACIÓN</label>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        className={css.text}
        placeholder={placeholder}
        name="location"
      />
    </div>
  );
};
