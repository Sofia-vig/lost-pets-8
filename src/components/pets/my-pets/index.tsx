import React from "react";
import css from "./index.css";
import { Title, Text } from "ui/typography";
import MyCardPet from "components/cards/my-card";
import { useMyPets } from "hooks";

export default function MyPetsReported() {
  const { myPets } = useMyPets();

  return (
    <div className={css.root}>
      <Title>Mis mascotas reportadas</Title>
      {myPets.length > 0 ? (
        myPets.map((pet, index) => <MyCardPet pet={pet} key={index} />)
      ) : (
        <Text>Aun no reportaste mascotas perdidas</Text>
      )}
    </div>
  );
}
