import React from "react";
import css from "./card.css";
import { capitalize } from "lodash";
import { useNavigate } from "react-router-dom";
import { reportState } from "hooks";

export default function CardPet({ pet }) {
  const navigate = useNavigate();
  const setReportData = reportState();

  const handleLink = () => {
    setReportData({
      petId: pet.objectID,
      petName: capitalize(pet.name),
      userId: pet.userId,
      reporter_name: "",
      phone_number: "",
      message: "",
    });
    navigate("/report");
  };

  return (
    <div className={css.root}>
      <img className={css.image} src={pet.image} />
      <div className={css.info}>
        <h2 className={css.name}>{capitalize(pet.name)}</h2>
        <h3 className={css.place}>{capitalize(pet.place)}</h3>
        <a className={css.link} onClick={handleLink}>
          REPORTAR INFORMACION
        </a>
      </div>
    </div>
  );
}
