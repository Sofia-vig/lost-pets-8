import React, { useEffect, useState } from "react";
import css from "./index.css";
import { Title, Text } from "ui/typography";
import Location from "./location";
import CardPet from "components/cards/card";
import { lastGeoValue, useLastGeo, usePets } from "hooks";

export default function Home() {
  const geo = lastGeoValue();
  const [position, setPosition] = useState(null);
  const { pets, pullPets } = usePets();

  useEffect(() => {
    setPosition(useLastGeo());
  }, [geo]);

  return (
    <div className={css.root}>
      <Title>Mascotas perdidas cerca tuyo</Title>
      {!position ? (
        <Location />
      ) : pets?.length > 0 ? (
        pets.map((pet, index) => {
          return <CardPet pet={pet} key={index} />;
        })
      ) : (
        <Text>No hay mascotas cerca tuyo</Text>
      )}
    </div>
  );
}
