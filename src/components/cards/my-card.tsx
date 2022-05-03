import React from "react";
import css from "./my-card.css";
import { capitalize } from "lodash";
import { useNavigate } from "react-router-dom";
import { updatePetState, useUpdate } from "hooks";

export default function MyCardPet({ pet }) {
  const navigate = useNavigate();
  const [dataPet, setDataPet] = updatePetState();
  const [updateValue, setUpdate] = useUpdate();

  const handleLink = () => {
    setDataPet(pet);
    setUpdate(true);
    navigate("/pets/new");
  };

  return (
    <div className={css.root}>
      <img className={css.image} src={pet.image} />
      <div className={css.info}>
        <h2 className={css.name}>{capitalize(pet.name)}</h2>
        <h3 className={css.place}>{capitalize(pet.place)}</h3>
        <a className={css.link} onClick={handleLink}>
          EDITAR
        </a>
      </div>
    </div>
  );
}
