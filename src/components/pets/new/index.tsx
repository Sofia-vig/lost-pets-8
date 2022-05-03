import React from "react";
import FormNewPet from "./form-new";
import FormUpdatePet from "./form-update";
import { useUpdate } from "hooks";

export default function FormPet() {
  const [updateValue, setUpdate] = useUpdate();
  return !updateValue ? <FormNewPet /> : <FormUpdatePet />;
}
