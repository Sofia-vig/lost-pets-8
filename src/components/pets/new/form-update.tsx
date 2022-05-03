import React, { useState } from "react";
import css from "./form-new.css";
import { Title } from "ui/typography";
import { InputText } from "ui/text-field";
import UploadImage from "./upload-image";
import { PrimaryButton } from "ui/button";
import MapboxSearch from "components/map-search";
import { usePhoto, updatePetState } from "hooks";
import { updatePet } from "lib/api";
import { useNavigate } from "react-router-dom";
import Founded from "../founded";

export default function FormUpdatePet() {
  const [dataPet, setDataPet] = updatePetState();
  const [formData, setFormData] = useState({});
  const [founded, setFounded] = useState(false);
  const [photo, setPhoto] = usePhoto();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const allData = {
      name: e.target.name.value,
      pictureDataURL: photo?.preview,
      image: (dataPet as any).image,
      lastGeo_lat: (formData as any)?.mapbox?.coords[1],
      lastGeo_lon: (formData as any)?.mapbox?.coords[0],
      place: e.target.location.value,
      id: (dataPet as any).id,
    };
    await updatePet(allData);
    navigate("/me/pets");
  };

  const handleFoundedClick = async (e) => {
    e.preventDefault();
    await updatePet({
      founded: true,
      id: dataPet.id,
    });
    setFounded(true);
  };

  function handleMapboxChange(data) {
    setFormData({
      ...formData,
      mapbox: data,
    });
  }

  return (
    <div className={css.root}>
      {!founded ? (
        <>
          <Title>Editar mascota perdida</Title>
          <form className={css.form} onSubmit={submitHandler}>
            <InputText
              label="NOMBRE"
              name="name"
              defaultValue={(dataPet as any).name}
            />
            <UploadImage petImage={(dataPet as any).image} />
            <MapboxSearch
              onChange={handleMapboxChange}
              placeholder={(dataPet as any).place}
            />
            <div className={css.containerButton}>
              <PrimaryButton type="submit">Guardar</PrimaryButton>
              <PrimaryButton onClick={handleFoundedClick}>
                Reportar como encontrado
              </PrimaryButton>
            </div>
          </form>
        </>
      ) : (
        <Founded data={dataPet} />
      )}
    </div>
  );
}
