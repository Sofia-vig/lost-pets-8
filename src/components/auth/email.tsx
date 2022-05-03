import React from "react";
import css from "./index.css";
import { Title } from "ui/typography";
import { PrimaryButton } from "ui/button";
import { useNavigate } from "react-router";
import { useUserEmail } from "hooks";
import { checkEmail } from "lib/api";

export default function Email() {
  const navigate = useNavigate();
  const [email, setUserEmail] = useUserEmail();

  async function submitHandler(e) {
    e.preventDefault();
    const email = e.target.email.value;
    setUserEmail(email);
    const response = await checkEmail(email);
    if (response) {
      navigate("/login/password");
    } else {
      navigate("/profile/info");
    }
  }
  return (
    <div className={css.root}>
      <Title>Ingresar</Title>
      <form className={css.form} onSubmit={submitHandler}>
        <div className={css.item}>
          <label>EMAIL</label>
          <input type="text" name="email" className={css.input} />
        </div>
        <PrimaryButton type="submit">Siguiente</PrimaryButton>
      </form>
    </div>
  );
}
