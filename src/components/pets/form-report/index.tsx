import React from "react";
import DoneReport from "./done";
import FormReportPet from "./form";
import { reportValue } from "hooks";

export default function ReportPet() {
  const reportData = reportValue();
  const done = reportData.reporter_name;
  return !done ? <FormReportPet /> : <DoneReport />;
}
