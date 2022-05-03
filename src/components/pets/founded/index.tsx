import React, { useEffect } from "react";
import css from "./index.css";
import { Text, Title } from "ui/typography";
import { useNavigate } from "react-router-dom";

export default function Founded({ data }) {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <div className={css.root}>
      <Title>Nos alegramos que hayas encontrado a {data.name}</Title>
      <Text>Comparti nuestra app para encontrar mas mascotas perdidas👽</Text>
      <img className={css.img} src={data.image} />
    </div>
  );
}
