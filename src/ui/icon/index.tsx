import React from "react";
import css from "./index.css";
import { useNavigate } from "react-router-dom";

export default function Icon() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <img
      className={css.icon}
      src="https://res.cloudinary.com/sofa/image/upload/v1651106901/src/icon_kh7rwn.png"
      onClick={handleClick}
    />
  );
}
