import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./index.css";
import Link from "./link";
import { getToken } from "lib/api";
import { logOut, menuState, useMe } from "hooks";

export default function Menu() {
  const navigate = useNavigate();
  const setMenuOpen = menuState();
  const [token, setToken] = useState("");
  const { me } = useMe();

  useEffect(() => {
    setToken(getToken());
  }, []);

  const handleNavClose = () => {
    setMenuOpen(false);
  };

  const handleLogOut = () => {
    logOut();
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <div className={css.root}>
      <div className={css.close} onClick={handleNavClose}>
        X
      </div>
      <div className={css.text}>
        <Link route="/profile/info">Mis Datos</Link>
        <Link route="/me/pets">Mis mascotas reportadas</Link>
        <Link route="/pets/new">Reportar mascota</Link>
      </div>
      <div className={css.footer}>
        {me?.email ? (
          <>
            <p>{me?.email}</p>
            <a href="#" onClick={handleLogOut}>
              CERRAR SESIÓN
            </a>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
