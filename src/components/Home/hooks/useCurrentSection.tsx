import { SECTIONS } from "index";
import React from "react";
import { useLocation } from "react-router-dom";

export default function useCurrentSection() {
  const location = useLocation();
  const section = location.pathname.split("/")[1];

  const index = SECTIONS.indexOf(section);

  return { section, index };
}
