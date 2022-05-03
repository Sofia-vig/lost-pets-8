import React, { useState } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { InputMap } from "ui/text-field";
import { SecondaryButton } from "ui/button";
import { TextMap } from "ui/typography";
import { getCoord } from "lib/api";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiemFwYWlhZGV2IiwiYSI6ImNreTF1cnZ5YTBlcWMyd3NjbGhxcnV6ZmkifQ.ZmsUrIAbUSkznfj8e97tmQ",
});

type MapBoxSearchProps = {
  onChange?: (any) => any;
  placeholder?: any;
};

export default function MapboxSearch(props: MapBoxSearchProps) {
  const { onChange, placeholder } = props;
  const [query, setQuery] = useState("");
  const initialCoords: any = [-0.481747846041145, 51.3233379650232];
  const [coords, setCoords] = useState(initialCoords);

  async function search() {
    const data = await getCoord(query);
    const newCoords = [data.lon, data.lat];
    setCoords(newCoords);

    if (onChange) {
      onChange({
        query: query,
        coords: newCoords,
      });
    }
  }

  function inputChangeHandler(e) {
    setQuery(e.target.value);
  }

  function keydownInputHandler(e) {
    if (e.key == "Enter") {
      e.preventDefault();
      search();
    }
  }

  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v11"
        containerStyle={{
          height: "300px",
          width: "300px",
        }}
        zoom={[15]}
        center={coords}
        movingMethod="easeTo"
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={coords} />
        </Layer>
      </Map>
      <div>
        <InputMap
          onChange={inputChangeHandler}
          onKeyDown={keydownInputHandler}
          value={query}
          placeholder={placeholder}
        />
        <TextMap>
          Buscá un punto de referencia para reportar a tu mascota. Puede ser una
          dirección, un barrio o una ciudad.
        </TextMap>
        <SecondaryButton onClick={search}>Guardar Ubicación</SecondaryButton>
      </div>
    </div>
  );
}
