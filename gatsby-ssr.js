
import React from "react";
import { PlasmicRootProvider } from "@plasmicapp/react-web";

export const wrapRootElement = ({ element }) => {
  return (
    <PlasmicRootProvider>
      {element}
    </PlasmicRootProvider>
  );
}
  