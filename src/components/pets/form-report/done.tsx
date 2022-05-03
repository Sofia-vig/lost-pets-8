import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./done.css";

export default function DoneReport() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 2000);

  return (
    <div className={css.root}>
      <h2 className={css.reponse}>
        Gracias por reportar, la mascotita te lo agradece ♥
      </h2>
      <h5>Redirigiendo...</h5>
    </div>
  );
}
