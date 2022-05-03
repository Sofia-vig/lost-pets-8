import React from "react";
import { Text } from "ui/typography";
import { PrimaryButton } from "ui/button";
import { lastGeoState } from "hooks";
import { useSetRecoilState } from "recoil";

export default function Location() {
  const setGeo = useSetRecoilState(lastGeoState);

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      localStorage.setItem("position", JSON.stringify({ latitude, longitude }));
      setGeo({ latitude, longitude });
    });
  };

  return (
    <>
      <Text>
        Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
        conocer tu ubicación.
      </Text>
      <PrimaryButton onClick={handleClick} type="submit">
        Dar mi ubicación
      </PrimaryButton>
    </>
  );
}
