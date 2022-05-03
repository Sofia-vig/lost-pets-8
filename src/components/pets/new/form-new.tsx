import React, { useEffect, useState } from "react";
import css from "./form-new.css";
import { Title } from "ui/typography";
import { InputText } from "ui/text-field";
import UploadImage from "./upload-image";
import { PrimaryButton } from "ui/button";
import MapboxSearch from "components/map-search";
import { usePhoto } from "hooks";
import { createPet } from "lib/api";
import { useNavigate } from "react-router-dom";

export default function FormNewPet() {
  const [formData, setFormData] = useState({});
  const [photo, setPhoto] = usePhoto();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const allData = {
      name: e.target.name.value,
      pictureDataURL: photo?.preview,
      lastGeo_lat: (formData as any)?.mapbox?.coords[1],
      lastGeo_lon: (formData as any)?.mapbox?.coords[0],
      place: e.target.location.value,
    };
    if (
      allData.name &&
      allData.pictureDataURL &&
      allData.lastGeo_lat &&
      allData.lastGeo_lon &&
      allData.place
    ) {
      await createPet(allData);
      navigate("/me/pets");
    }
  };

  function handleMapboxChange(data) {
    setFormData({
      ...formData,
      mapbox: data,
    });
  }

  return (
    <div className={css.root}>
      <Title>Reportar Mascota perdida</Title>
      <form className={css.form} onSubmit={submitHandler}>
        <InputText label="NOMBRE" name="name" required />
        <UploadImage />
        <MapboxSearch onChange={handleMapboxChange} />
        <div className={css.containerButton}>
          <PrimaryButton type="submit">Reportar como perdido</PrimaryButton>
          <PrimaryButton>Cancelar</PrimaryButton>
        </div>
      </form>
    </div>
  );
}
