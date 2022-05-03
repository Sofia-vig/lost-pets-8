import React, { useState } from "react";
import css from "./index.css";
import { Title, Text } from "ui/typography";
import { PrimaryButton } from "ui/button";
import { InputText, InputPassword } from "ui/text-field";
import { useMe, useUserEmail, routeValue } from "hooks";
import { getToken, signUp, auth, update } from "lib/api";
import { useNavigate } from "react-router-dom";

export default function MyInfo() {
  const [done, setDone] = useState("");
  const token = getToken();
  const { me } = useMe();
  const [email, setEmail] = useUserEmail();
  const navigate = useNavigate();
  const route = routeValue();

  const handleInicio = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    const passwordVerify = e.target["password-verify"].value;
    if (password && password == passwordVerify) {
      !token && (await signUp(email, password, name));
      !token && (await auth(email, password));
      name ? await update(name, password) : await update(password);
      setDone("Tus datos fueron guardados correctamente!");
      setTimeout(() => {
        navigate(route);
      }, 1000);
    } else if (!password && !passwordVerify) {
      name && (await update(name));
      setDone("Tus datos fueron guardados correctamente!");
      setTimeout(() => {
        navigate(route);
      }, 1000);
    } else {
      setDone("Completa todos los campos");
    }
  };

  return (
    <div className={css.root}>
      <Title>Mis Datos</Title>
      <form className={css.form} onSubmit={handleSubmit}>
        <InputText
          label="NOMBRE"
          name="name"
          placeholder={me?.fullname || ""}
          required={!update}
        />
        <InputPassword required={!update} />
        <PrimaryButton type="submit">Guardar</PrimaryButton>
      </form>
      <div className={css.containerResponse}>
        <h3>{done}</h3>
      </div>
      <Text onClick={handleInicio}>Volver al Inicio</Text>
    </div>
  );
}
