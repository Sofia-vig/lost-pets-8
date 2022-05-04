import React, { useState } from "react";
import css from "./index.css";
import { Title } from "ui/typography";
import { PrimaryButton } from "ui/button";
import { auth } from "lib/api";
import { useNavigate } from "react-router";
import { useUserEmail, routeValue } from "hooks";

export default function Password() {
  const navigate = useNavigate();
  const [email, setUserEmail] = useUserEmail();
  const route = routeValue();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const token = await auth(email, password);
    token && navigate(route);
    !token && navigate("/");
  };

  return (
    <div className={css.root}>
      <Title>Ingresar</Title>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.item}>
          <label>CONTRASEÑA</label>
          <input type="password" name="password" className={css.input} />
          <a href="#" className={css.passwordForget}>
            OLVIDE MI CONTRASEÑA
          </a>
        </div>
        <PrimaryButton type="submit">Ingresar</PrimaryButton>
      </form>
    </div>
  );
}
